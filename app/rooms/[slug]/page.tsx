import { notFound } from 'next/navigation';
import Link from 'next/link';
import { rooms, getRoomBySlug } from '@/data/rooms';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return { title: 'Room Not Found' };
  return {
    title: `${room.name} — Bloom Holistic Academy`,
    description: room.description,
  };
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  const otherRooms = rooms.filter((r) => r.slug !== room.slug).slice(0, 3);

  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end pb-16 pt-32 px-6 lg:px-8 overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${room.hoverBg} 0%, ${room.hoverBgLight} 100%)` }}
      >
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative max-w-4xl mx-auto w-full">
          <Link
            href="/#rooms"
            className="inline-flex items-center gap-2 text-sm font-sans mb-8 opacity-70 hover:opacity-100 transition-opacity"
            style={{ color: room.textColor }}
          >
            ← All Nine Wonders
          </Link>

          <div className="text-6xl mb-4 animate-float">{room.icon}</div>

          <h1
            className="font-display leading-tight mb-4"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: room.textColor }}
          >
            {room.name}
          </h1>

          <p
            className="font-sans text-lg max-w-2xl leading-relaxed"
            style={{ color: room.accentColor }}
          >
            {room.tagline}
          </p>

          <div
            className="mt-4 inline-block px-4 py-1.5 rounded-full text-xs font-sans font-medium uppercase tracking-wider"
            style={{ background: `${room.accentColor}25`, color: room.accentColor }}
          >
            {room.ageGroup}
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="bg-cream">
        {/* Description */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="font-sans text-slate-cool leading-relaxed text-base mb-6">{room.description}</p>

            <div className="border-l-2 border-teal pl-6 py-2 mb-8">
              {room.longDescription.split('\n\n').map((para, i) => (
                <p key={i} className={`font-sans leading-relaxed text-forest ${i > 0 ? 'mt-4' : ''}`}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Two-column: curriculum + AI tools */}
        <section
          className="py-16 px-6 lg:px-8"
          style={{ background: `linear-gradient(to bottom, ${room.hoverBg}12, transparent)` }}
        >
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            {/* Curriculum */}
            <div>
              <h2 className="font-display text-2xl text-forest-dark mb-6">Curriculum Focus</h2>
              <ul className="space-y-3">
                {room.curriculum.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-sm text-forest">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                      style={{ background: `${room.hoverBg}25`, color: room.hoverBgLight }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Tools */}
            <div>
              <h2 className="font-display text-2xl text-forest-dark mb-6">The Invisible Layer</h2>
              <ul className="space-y-3">
                {room.aiTools.map((tool) => (
                  <li key={tool} className="flex items-start gap-3 font-sans text-sm text-forest">
                    <span className="text-teal mt-0.5 flex-shrink-0">◆</span>
                    {tool}
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 rounded-xl bg-teal/8 border border-teal/15">
                <p className="text-xs font-sans font-semibold text-teal uppercase tracking-wider mb-2">
                  How it actually works
                </p>
                <p className="font-sans text-sm text-forest leading-relaxed">{room.aiDetail}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Other rooms */}
        <section className="py-16 px-6 lg:px-8 border-t border-cream-dark">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl text-forest-dark mb-8">Explore More Wonders</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {otherRooms.map((r) => (
                <Link
                  key={r.slug}
                  href={`/rooms/${r.slug}`}
                  className="group p-5 rounded-2xl border border-cream-dark hover:border-teal/30 hover:shadow-md transition-all duration-300"
                  style={{ background: `${r.hoverBg}0A` }}
                >
                  <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform duration-300">
                    {r.icon}
                  </span>
                  <h3 className="font-display text-lg text-forest-dark mb-1">{r.name}</h3>
                  <p className="font-sans text-xs text-slate-cool">{r.tagline}</p>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/#rooms"
                className="inline-flex items-center gap-2 font-sans text-sm text-teal hover:text-teal-dark transition-colors"
              >
                ← View all 9 wonders
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
