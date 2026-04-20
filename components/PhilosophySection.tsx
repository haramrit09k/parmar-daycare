const pillars = [
  {
    icon: '🌱',
    title: 'Nature First',
    body: 'Every material, texture, and space is grounded in the natural world. Children learn through bark and sand, water and stone — not through glass and screens.',
  },
  {
    icon: '👁️',
    title: 'Invisible AI',
    body: 'Technology serves the child, never the other way around. Our AI listens and adapts in the background so educators can stay fully present with each child.',
  },
  {
    icon: '🌍',
    title: 'Whole Child',
    body: 'Intellectual, emotional, physical, and creative development are woven together — not siloed. A morning spent in The Shore is also a morning in mathematics.',
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-forest-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: text */}
          <div>
            <p className="text-xs font-sans font-medium uppercase tracking-[0.25em] text-sage-light mb-4">
              Our Philosophy
            </p>
            <h2
              className="font-display text-cream leading-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              Children Don't Need More Screens.
              <br />
              <em className="text-sage not-italic">They Need More World.</em>
            </h2>
            <p className="font-sans text-cream/65 leading-relaxed text-base mb-6">
              The first five years of life are spent in radical, embodied learning. A child running
              fingers through volcanic sand is doing physics. A child sorting leaves by colour is
              doing mathematics. A child tending a plant is doing biology, ethics, and empathy all at once.
            </p>
            <p className="font-sans text-cream/65 leading-relaxed text-base">
              Our role is not to accelerate this process with technology — it's to protect the depth
              of it, while quietly using AI to help our educators see each child more clearly.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-sage/30 text-sage font-sans text-sm">
              <span className="text-xl">🌿</span>
              Rooted in Nature. Growing for the Future.
            </div>
          </div>

          {/* Right: pillars */}
          <div className="space-y-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex gap-5 p-6 rounded-2xl border border-cream/8 hover:border-sage/30 transition-colors duration-300 group"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <span className="text-3xl flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  {p.icon}
                </span>
                <div>
                  <h3 className="font-display text-xl text-cream mb-2">{p.title}</h3>
                  <p className="font-sans text-sm text-cream/60 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
