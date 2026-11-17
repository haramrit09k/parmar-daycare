'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-dark">
      {/* Video background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        src="/videos/hero-forest.mp4"
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setVideoLoaded(true)}
      />

      {/* Fallback animated gradient (shows when no video) */}
      {!videoLoaded && (
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(45, 74, 54, 0.9) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, rgba(123, 158, 135, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 60% 80%, rgba(0, 180, 166, 0.15) 0%, transparent 40%),
              linear-gradient(160deg, #1B2E21 0%, #2D4A36 40%, #1B2E21 100%)
            `,
          }}
        >
          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-20 animate-float"
              style={{
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
                left: `${10 + i * 8}%`,
                top: `${20 + (i % 4) * 20}%`,
                background: i % 3 === 0 ? '#00B4A6' : i % 3 === 1 ? '#7B9E87' : '#F5A623',
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${6 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(27,46,33,0.55) 0%, rgba(27,46,33,0.3) 50%, rgba(27,46,33,0.75) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Pre-headline badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass border border-teal/30">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          <span className="text-xs font-sans font-medium text-cream/80 uppercase tracking-[0.2em]">
            Opening October 2026 · Enrollment Now Open
          </span>
        </div>

        <h1
          className="font-display text-cream leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
        >
          Rooted in Nature.
          <br />
          <em className="text-gradient not-italic">Growing for the Future.</em>
        </h1>

        <p className="font-sans text-cream/70 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
          Nine nature-immersive rooms. Invisible AI. A curriculum that honours the whole child —
          from the feel of black sand to the light of a thousand stars.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#rooms"
            className="px-8 py-4 rounded-full bg-teal text-forest-dark font-sans font-semibold text-base hover:bg-teal-light transition-all duration-200 hover:scale-105 active:scale-100"
          >
            Discover The 9 Wonders
          </a>
          <a
            href="#enroll"
            className="px-8 py-4 rounded-full glass border border-cream/20 text-cream font-sans font-medium text-base hover:bg-cream/10 transition-all duration-200"
          >
            Begin Enrollment
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-cream font-sans tracking-widest uppercase">Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-cream to-transparent" />
        </div>
      </div>
    </section>
  );
}
