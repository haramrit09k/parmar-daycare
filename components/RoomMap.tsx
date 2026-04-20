'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { rooms } from '@/data/rooms';

export default function RoomMap() {
  const [activeBg, setActiveBg] = useState('#2D4A36');
  const [activeTextColor, setActiveTextColor] = useState('#F7F3EE');
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  const handleEnter = (slug: string, hoverBg: string, textColor: string, audioSrc: string) => {
    setActiveBg(hoverBg);
    setActiveTextColor(textColor);
    if (!audioRefs.current[slug]) {
      const audio = new Audio(audioSrc);
      audio.volume = 0.25;
      audio.loop = true;
      audioRefs.current[slug] = audio;
    }
    audioRefs.current[slug]?.play().catch(() => {});
  };

  const handleLeave = (slug: string) => {
    setActiveBg('#2D4A36');
    setActiveTextColor('#F7F3EE');
    const audio = audioRefs.current[slug];
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <section
      id="rooms"
      className="py-24 lg:py-32 transition-colors duration-700"
      style={{ backgroundColor: activeBg }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-sans font-medium uppercase tracking-[0.25em] mb-4 transition-colors duration-500"
            style={{ color: activeTextColor, opacity: 0.6 }}
          >
            The Nine Wonders
          </p>
          <h2
            className="font-display leading-tight transition-colors duration-500"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: activeTextColor }}
          >
            Nine Rooms. Nine Worlds.
          </h2>
          <p
            className="mt-4 font-sans max-w-2xl mx-auto leading-relaxed transition-colors duration-500"
            style={{ color: activeTextColor, opacity: 0.65, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}
          >
            Hover to feel each room. Click to explore it fully.
          </p>
        </div>

        {/* 3×3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room) => (
            <Link
              key={room.slug}
              href={`/rooms/${room.slug}`}
              onMouseEnter={() => handleEnter(room.slug, room.hoverBg, room.textColor, room.audioSrc)}
              onMouseLeave={() => handleLeave(room.slug)}
              className="group relative flex flex-col p-8 rounded-2xl overflow-hidden transition-all duration-400 hover:scale-[1.03] hover:shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${room.hoverBg}CC, ${room.hoverBgLight}AA)`,
                border: `1px solid ${room.accentColor}30`,
              }}
            >
              {/* Background shimmer on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 30% 40%, ${room.accentColor}20, transparent 60%)`,
                }}
              />

              {/* Icon */}
              <span className="text-4xl mb-4 block transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                {room.icon}
              </span>

              {/* Name */}
              <h3
                className="font-display text-2xl font-semibold mb-1 transition-colors duration-300"
                style={{ color: room.textColor }}
              >
                {room.name}
              </h3>

              {/* Tagline */}
              <p
                className="font-sans text-sm leading-snug mb-4 transition-colors duration-300"
                style={{ color: room.accentColor, opacity: 0.9 }}
              >
                {room.tagline}
              </p>

              {/* Description */}
              <p
                className="font-sans text-sm leading-relaxed flex-1 line-clamp-3"
                style={{ color: room.textColor, opacity: 0.7 }}
              >
                {room.description}
              </p>

              {/* Age + arrow */}
              <div className="mt-6 flex items-center justify-between">
                <span
                  className="text-xs font-sans font-medium px-3 py-1 rounded-full"
                  style={{ background: `${room.accentColor}25`, color: room.accentColor }}
                >
                  {room.ageGroup}
                </span>
                <span
                  className="text-sm font-sans opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0"
                  style={{ color: room.accentColor }}
                >
                  Explore →
                </span>
              </div>

              {/* Audio indicator */}
              <div
                className="absolute top-4 right-4 flex gap-0.5 items-end opacity-0 group-hover:opacity-70 transition-opacity duration-500"
                aria-hidden
              >
                {[3, 5, 4, 6, 3].map((h, i) => (
                  <span
                    key={i}
                    className="w-0.5 rounded-full"
                    style={{
                      height: `${h}px`,
                      background: room.accentColor,
                      animation: `float ${0.6 + i * 0.15}s ease-in-out infinite alternate`,
                    }}
                  />
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
