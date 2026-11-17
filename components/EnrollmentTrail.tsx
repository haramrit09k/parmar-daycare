'use client';

import { useState } from 'react';

const steps = [
  { id: 1, label: 'Child Info', icon: '🌱' },
  { id: 2, label: 'Family Info', icon: '🌿' },
  { id: 3, label: 'Documents', icon: '🌳' },
  { id: 4, label: 'Schedule', icon: '🌲' },
];

const TOTAL = steps.length;

export default function EnrollmentTrail() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    childName: '', birthdate: '', parentName: '', email: '', phone: '',
    room: '', startDate: '', schedule: '',
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const progress = ((step - 1) / (TOTAL - 1)) * 100;

  if (submitted) {
    return (
      <section id="enroll" className="py-24 lg:py-32 bg-cream text-center">
        <div className="max-w-lg mx-auto px-6">
          <div className="text-6xl mb-6 animate-float">🌲</div>
          <h2 className="font-display text-4xl text-forest-dark mb-4">
            Your seedling is planted.
          </h2>
          <p className="font-sans text-slate-cool leading-relaxed">
            Thank you, {form.parentName || 'friend'}. We'll be in touch within 2 business days to
            confirm {form.childName ? `${form.childName}'s` : 'your'} spot and next steps.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="enroll" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-sans font-medium uppercase tracking-[0.25em] text-terracotta mb-4">
            Enrollment
          </p>
          <h2
            className="font-display text-forest-dark leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Begin the Journey
          </h2>
          <p className="font-sans text-slate-cool text-base leading-relaxed">
            As you complete each step, your seedling grows toward Bloom.
          </p>
        </div>

        {/* Forest path progress */}
        <div className="relative mb-10">
          {/* Track */}
          <div className="relative h-2 bg-sage-light/30 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-sage to-teal rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Step markers */}
          <div className="flex justify-between mt-3">
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center gap-1">
                <button
                  onClick={() => s.id <= step && setStep(s.id)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300 border-2 ${
                    s.id < step
                      ? 'bg-teal border-teal scale-110'
                      : s.id === step
                      ? 'bg-cream border-teal shadow-lg shadow-teal/20'
                      : 'bg-cream border-sage-light/40'
                  }`}
                >
                  {s.id < step ? '✓' : s.icon}
                </button>
                <span
                  className={`text-[11px] font-sans font-medium ${
                    s.id <= step ? 'text-forest' : 'text-slate-cool/40'
                  }`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl border border-cream-dark p-8 shadow-sm">
          {step === 1 && (
            <div className="space-y-5">
              <h3 className="font-display text-2xl text-forest-dark mb-6">About Your Child</h3>
              <div>
                <label className="block text-xs font-sans font-medium text-slate-cool uppercase tracking-wider mb-2">
                  Child's Full Name
                </label>
                <input
                  type="text"
                  value={form.childName}
                  onChange={set('childName')}
                  placeholder="e.g. Aria Bloom"
                  className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream text-forest-dark font-sans text-sm focus:outline-none focus:border-teal transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-sans font-medium text-slate-cool uppercase tracking-wider mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={form.birthdate}
                  onChange={set('birthdate')}
                  className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream text-forest-dark font-sans text-sm focus:outline-none focus:border-teal transition-colors"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h3 className="font-display text-2xl text-forest-dark mb-6">About Your Family</h3>
              {[
                { k: 'parentName', label: "Parent / Guardian's Name", type: 'text', placeholder: 'e.g. Priya Sharma' },
                { k: 'email', label: 'Email Address', type: 'email', placeholder: 'hello@example.com' },
                { k: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 000-0000' },
              ].map(({ k, label, type, placeholder }) => (
                <div key={k}>
                  <label className="block text-xs font-sans font-medium text-slate-cool uppercase tracking-wider mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    value={form[k as keyof typeof form]}
                    onChange={set(k)}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream text-forest-dark font-sans text-sm focus:outline-none focus:border-teal transition-colors"
                  />
                </div>
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <h3 className="font-display text-2xl text-forest-dark mb-2">Documents</h3>
              <p className="font-sans text-sm text-slate-cool mb-6">
                You can upload these now or bring them to your tour. We need these before Day 1.
              </p>
              {[
                { label: '💉 Immunization Record', note: 'Up-to-date provincial immunization card' },
                { label: '🏥 Health Form', note: 'Completed by your family physician' },
                { label: '🍽️ Allergy / Dietary Form', note: 'Any food restrictions or medical needs' },
              ].map(({ label, note }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl border-2 border-dashed border-cream-dark hover:border-teal/40 transition-colors group cursor-pointer"
                >
                  <span className="text-2xl">{label.split(' ')[0]}</span>
                  <div className="flex-1">
                    <p className="font-sans text-sm font-medium text-forest-dark">{label.substring(2)}</p>
                    <p className="font-sans text-xs text-slate-cool/60">{note}</p>
                  </div>
                  <span className="text-xs font-sans text-teal opacity-0 group-hover:opacity-100 transition-opacity">Upload</span>
                </div>
              ))}
            </div>
          )}

          {step === 4 && (
            <div className="space-y-5">
              <h3 className="font-display text-2xl text-forest-dark mb-6">Your Schedule</h3>
              <div>
                <label className="block text-xs font-sans font-medium text-slate-cool uppercase tracking-wider mb-2">
                  Preferred Primary Room
                </label>
                <select
                  value={form.room}
                  onChange={set('room')}
                  className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream text-forest-dark font-sans text-sm focus:outline-none focus:border-teal transition-colors"
                >
                  <option value="">Select a wonder…</option>
                  {['The Woods', 'The Shore', 'The Canyon', 'The Arctic', 'The Oasis', 'The Valley', 'The Meadow', 'The Jungle', 'The Galaxy'].map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-sans font-medium text-slate-cool uppercase tracking-wider mb-2">
                  Desired Start Date
                </label>
                <input
                  type="date"
                  value={form.startDate}
                  onChange={set('startDate')}
                  className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream text-forest-dark font-sans text-sm focus:outline-none focus:border-teal transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-sans font-medium text-slate-cool uppercase tracking-wider mb-2">
                  Schedule Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Full Time (5 days)', 'Part Time (3 days)'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setForm((f) => ({ ...f, schedule: s }))}
                      className={`py-3 rounded-xl border-2 text-sm font-sans font-medium transition-all ${
                        form.schedule === s
                          ? 'border-teal bg-teal/10 text-teal'
                          : 'border-cream-dark text-slate-cool hover:border-teal/30'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className={`flex mt-8 gap-3 ${step > 1 ? 'justify-between' : 'justify-end'}`}>
            {step > 1 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="px-6 py-3 rounded-full border border-cream-dark text-slate-cool font-sans text-sm hover:border-forest transition-colors"
              >
                ← Back
              </button>
            )}
            {step < TOTAL ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                className="px-8 py-3 rounded-full bg-teal text-white font-sans font-semibold text-sm hover:bg-teal-dark transition-colors"
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="px-8 py-3 rounded-full bg-forest text-cream font-sans font-semibold text-sm hover:bg-forest-dark transition-colors"
              >
                Plant My Seedling 🌱
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
