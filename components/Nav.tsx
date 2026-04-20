'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const links = [
  { label: 'The 9 Wonders', href: '#rooms' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'The Menu', href: '#menu' },
  { label: 'Tech & Ethics', href: '#ethics' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-forest-dark/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="text-2xl select-none transition-transform duration-500 group-hover:scale-110 animate-leaf-sway">
            🌱
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold text-cream tracking-wide">
              Bloom
            </span>
            <span className="text-[10px] font-sans font-medium text-sage-light uppercase tracking-[0.18em]">
              Holistic Academy
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-sans font-medium text-cream/70 hover:text-cream transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <span className="text-xs font-sans text-sage-light/70 tracking-widest uppercase">
            Opening Oct 2026
          </span>
          <a
            href="#enroll"
            className="px-5 py-2.5 rounded-full bg-teal text-forest-dark text-sm font-sans font-semibold hover:bg-teal-light transition-colors duration-200"
          >
            Begin Enrollment
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`md:hidden transition-all duration-300 overflow-hidden bg-forest-dark/98 backdrop-blur-xl ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl text-cream/80 hover:text-cream transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#enroll"
            onClick={() => setMenuOpen(false)}
            className="mt-2 w-full text-center py-3.5 rounded-full bg-teal text-forest-dark font-sans font-semibold text-base"
          >
            Begin Enrollment
          </a>
        </div>
      </div>
    </header>
  );
}
