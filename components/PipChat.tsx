'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const STARTERS = [
  'What ages do you accept?',
  'How does the AI work?',
  'Tell me about The Galaxy room.',
  'When do you open?',
];

export default function PipChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm Pip 🐿️ — your guide to Bloom Holistic Academy. Ask me anything about enrollment, our nine rooms, the menu, or how our invisible AI works.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, open]);

  const send = async (text: string) => {
    const userMsg = text.trim();
    if (!userMsg || loading) return;

    setInput('');
    const next: Message[] = [...messages, { role: 'user', content: userMsg }];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: 'assistant', content: data.content }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: "Sorry, I'm having trouble connecting right now. Please try again shortly!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 animate-fade-up">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-cream-dark flex flex-col" style={{ height: '480px', background: '#F7F3EE' }}>
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 bg-forest-dark">
              <div className="w-9 h-9 rounded-full bg-teal/20 flex items-center justify-center text-lg flex-shrink-0">
                🐿️
              </div>
              <div>
                <p className="font-display text-lg text-cream leading-none">Pip</p>
                <p className="text-xs font-sans text-sage-light">Your Bloom Guide</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto text-cream/50 hover:text-cream transition-colors text-xl font-light"
                aria-label="Close chat"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl font-sans text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-teal text-white rounded-br-sm'
                        : 'bg-white text-forest-dark border border-cream-dark rounded-bl-sm'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-cream-dark rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-sage"
                        style={{ animation: `float 1s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Starter prompts */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {STARTERS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-xs font-sans px-3 py-1.5 rounded-full border border-teal/30 text-teal hover:bg-teal/10 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-cream-dark flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send(input)}
                placeholder="Ask Pip anything…"
                className="flex-1 px-4 py-2.5 rounded-full bg-white border border-cream-dark text-forest-dark font-sans text-sm focus:outline-none focus:border-teal transition-colors"
              />
              <button
                onClick={() => send(input)}
                disabled={loading || !input.trim()}
                className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center disabled:opacity-40 hover:bg-teal-dark transition-colors flex-shrink-0"
                aria-label="Send"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 8L2 2l3 6-3 6 12-6z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-forest-dark text-cream shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 group"
        aria-label={open ? 'Close Pip chat' : 'Chat with Pip'}
      >
        <span className="text-xl group-hover:animate-leaf-sway">🐿️</span>
        <span className="font-sans font-medium text-sm">Ask Pip</span>
        {!open && (
          <span className="w-2 h-2 rounded-full bg-teal absolute top-1.5 right-1.5 animate-pulse" />
        )}
      </button>
    </>
  );
}
