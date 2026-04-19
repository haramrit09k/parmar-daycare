const weUse = [
  'Room-level engagement sensors that measure activity patterns — never individuals',
  'Circadian lighting systems that sync with real sun position',
  "Voice models that answer children's questions in their home language",
  'Image recognition that connects home discoveries to classroom experiences',
  'AI-generated daily logs that describe, in natural language, what your child explored',
];

const weNever = [
  'Record identifiable video of children for AI training or storage',
  'Share any child data with third-party advertisers or platforms',
  'Use facial recognition or biometric identification of children',
  'Store behavioural data beyond the current academic year without explicit consent',
  'Allow our AI models to make any decisions about a child — educators do that',
];

export default function TechEthicsSection() {
  return (
    <section id="ethics" className="py-24 lg:py-32 bg-forest-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-sans font-medium uppercase tracking-[0.25em] text-teal mb-4">
            Tech & Ethics
          </p>
          <h2
            className="font-display text-cream leading-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Transparent by Design.
          </h2>
          <p className="font-sans text-cream/60 max-w-2xl mx-auto leading-relaxed text-base">
            We believe parents deserve to understand exactly how technology touches their child's day.
            No jargon. No hidden systems. Just honest answers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* What we use */}
          <div className="p-8 rounded-2xl border border-teal/20 bg-teal/5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center text-lg">✓</span>
              <h3 className="font-display text-2xl text-teal">We Use AI To…</h3>
            </div>
            <ul className="space-y-3">
              {weUse.map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-cream/75 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What we never do */}
          <div className="p-8 rounded-2xl border border-terracotta/20 bg-terracotta/5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-terracotta/20 flex items-center justify-center text-lg">✕</span>
              <h3 className="font-display text-2xl text-terracotta-light">We Never…</h3>
            </div>
            <ul className="space-y-3">
              {weNever.map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-cream/75 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="font-sans text-cream/50 text-sm mb-4">
            Questions about our technology? We publish a full Data Transparency Report each term.
          </p>
          <button className="px-6 py-3 rounded-full border border-teal/30 text-teal font-sans text-sm font-medium hover:bg-teal/10 transition-colors duration-200">
            Request the Transparency Report
          </button>
        </div>
      </div>
    </section>
  );
}
