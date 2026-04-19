export default function Footer() {
  return (
    <footer className="bg-forest-dark border-t border-cream/8 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌱</span>
              <div>
                <p className="font-display text-xl text-cream">Bloom</p>
                <p className="text-[10px] font-sans text-sage-light uppercase tracking-[0.18em]">Holistic Academy</p>
              </div>
            </div>
            <p className="font-sans text-sm text-cream/50 leading-relaxed max-w-xs">
              Rooted in nature. Growing for the future. Opening October 2026.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-sans text-xs font-semibold text-sage-light uppercase tracking-widest mb-4">Explore</p>
            <ul className="space-y-2">
              {[
                ['The 9 Wonders', '#rooms'],
                ['Our Philosophy', '#philosophy'],
                ['The Harvest Board', '#menu'],
                ['Tech & Ethics', '#ethics'],
                ['Begin Enrollment', '#enroll'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="font-sans text-sm text-cream/55 hover:text-cream transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs font-semibold text-sage-light uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-2 font-sans text-sm text-cream/55">
              <li>📍 [Address, City, Province]</li>
              <li>📞 [Phone Number]</li>
              <li>✉️ hello@bloomholisticacademy.ca</li>
              <li className="pt-2">Mon – Fri · 7:00 AM – 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-sans text-xs text-cream/30">
            © 2026 Bloom Holistic Academy. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream/25 italic">
            No screens. No shortcuts. Just wonder.
          </p>
        </div>
      </div>
    </footer>
  );
}
