'use client';

import { useState } from 'react';

export default function TechOverlay() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="py-24 lg:py-32 bg-cream-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <p className="text-xs font-sans font-medium uppercase tracking-[0.25em] text-teal mb-4">
              Invisible Technology
            </p>
            <h2 className="font-display text-forest-dark leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              The Magic Is What
              <br />
              <em className="text-teal not-italic">You Don't See.</em>
            </h2>
            <p className="font-sans text-slate-cool leading-relaxed mb-8 text-base">
              Every surface in our rooms is purposefully natural. West Mark wood, real stone, living
              plants. Flip the switch below to see what lives invisibly beneath — the AI layer that
              listens, learns, and quietly informs our educators.
            </p>

            {/* Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setRevealed(false)}
                className={`px-5 py-2.5 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
                  !revealed
                    ? 'bg-forest text-cream shadow-lg'
                    : 'bg-transparent text-slate-cool border border-slate-cool/30'
                }`}
              >
                Natural View
              </button>
              <div
                className="relative w-14 h-7 rounded-full transition-colors duration-300 cursor-pointer"
                style={{ background: revealed ? '#00B4A6' : '#A8C4B0' }}
                onClick={() => setRevealed((v) => !v)}
              >
                <div
                  className="absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300"
                  style={{ left: revealed ? 'calc(100% - 1.625rem)' : '0.125rem' }}
                />
              </div>
              <button
                onClick={() => setRevealed(true)}
                className={`px-5 py-2.5 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
                  revealed
                    ? 'bg-teal text-white shadow-lg'
                    : 'bg-transparent text-slate-cool border border-slate-cool/30'
                }`}
              >
                Reveal the Future
              </button>
            </div>

            {revealed && (
              <div className="mt-6 p-4 rounded-xl border border-teal/20 bg-teal/5 animate-fade-up">
                <p className="text-xs font-sans text-teal font-medium uppercase tracking-wider mb-2">
                  What you're seeing
                </p>
                <ul className="space-y-1.5">
                  {[
                    'Optical engagement sensors embedded in table edges',
                    'Projection zones in the floor (inactive during play)',
                    'Circadian lighting strips behind the wood panel trim',
                    'Educator wristband haptic relay points',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-sans text-forest">
                      <span className="text-teal mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Visual side */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            {/* Natural view */}
            <div
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: revealed ? 0 : 1 }}
            >
              <div
                className="w-full h-full flex items-end p-8"
                style={{
                  background: `
                    radial-gradient(ellipse at 30% 30%, #3D6349 0%, transparent 55%),
                    linear-gradient(160deg, #2D4A36 0%, #557A62 60%, #7B9E87 100%)
                  `,
                }}
              >
                {/* Simulated wood furniture */}
                <div className="w-full space-y-3">
                  <div className="h-12 rounded-lg bg-[#8B6914]/70 flex items-center px-4 gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#C17B5B]/60" />
                    <div className="flex-1 h-2 rounded bg-[#C17B5B]/40" />
                    <div className="w-16 h-2 rounded bg-[#C17B5B]/30" />
                  </div>
                  <div className="h-8 rounded-lg bg-[#6B5012]/50 flex items-center px-4 gap-2">
                    <div className="flex-1 h-1.5 rounded bg-[#C17B5B]/30" />
                    <div className="w-12 h-1.5 rounded bg-[#C17B5B]/20" />
                  </div>
                  <p className="text-cream/60 text-xs font-sans text-center pt-2">
                    The Canyon — West Mark Wood Environment
                  </p>
                </div>
              </div>
            </div>

            {/* AI revealed view */}
            <div
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: revealed ? 1 : 0 }}
            >
              <div
                className="w-full h-full relative"
                style={{ background: 'linear-gradient(160deg, #0A1628 0%, #1A2E3A 100%)' }}
              >
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0,180,166,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,166,0.5) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />

                {/* Sensor nodes */}
                {[
                  { top: '25%', left: '20%', label: 'Engagement Sensor', active: true },
                  { top: '60%', left: '50%', label: 'Projection Zone', active: true },
                  { top: '30%', left: '70%', label: 'Lighting Strip', active: false },
                  { top: '75%', left: '25%', label: 'Haptic Relay', active: true },
                ].map((node) => (
                  <div
                    key={node.label}
                    className="absolute"
                    style={{ top: node.top, left: node.left, transform: 'translate(-50%, -50%)' }}
                  >
                    <div
                      className="relative w-4 h-4 rounded-full"
                      style={{ background: node.active ? '#00B4A6' : '#F5A623' }}
                    >
                      <div
                        className="absolute inset-0 rounded-full opacity-60"
                        style={{
                          background: node.active ? '#00B4A6' : '#F5A623',
                          animation: 'pulse-ring 2s ease-out infinite',
                        }}
                      />
                    </div>
                    <span className="absolute left-6 top-0 text-[10px] font-sans text-teal-light whitespace-nowrap">
                      {node.label}
                    </span>
                  </div>
                ))}

                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-teal/60 text-xs font-sans">
                    The Canyon — AI Infrastructure Layer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
