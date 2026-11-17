'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  size: number;
  hue: number;
  sat: number;
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const particles = useRef<Particle[]>([]);
  const isTouch = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      isTouch.current = true;
      return;
    }

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      const prev = { ...mouse.current };
      mouse.current = { x: e.clientX, y: e.clientY };
      const dist = Math.hypot(mouse.current.x - prev.x, mouse.current.y - prev.y);
      const count = Math.min(Math.floor(dist / 4) + 1, 4);
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 1.2,
          vy: -Math.random() * 1.5 - 0.3,
          opacity: 0.75,
          size: Math.random() * 3.5 + 1.5,
          hue: Math.random() > 0.6 ? 170 : Math.random() > 0.5 ? 35 : 150,
          sat: 45 + Math.random() * 25,
        });
      }
      if (particles.current.length > 100) {
        particles.current = particles.current.slice(-100);
      }
    };
    window.addEventListener('mousemove', onMove);

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => p.opacity > 0.04);
      for (const p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.025;
        p.vx *= 0.99;
        p.opacity *= 0.95;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.opacity, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, ${p.sat}%, 58%, ${p.opacity})`;
        ctx.fill();
      }

      const { x, y } = mouse.current;

      // Outer ring
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 180, 166, 0.35)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Inner dot
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 180, 166, 0.9)';
      ctx.fill();

      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999 }}
      aria-hidden
    />
  );
}
