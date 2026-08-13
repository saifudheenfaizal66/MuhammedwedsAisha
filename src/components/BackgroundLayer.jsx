import React, { useState, useEffect, useMemo } from 'react';

const getAssetUrl = (path) => {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return encodeURI(`${base}${path.replace(/^\//, '')}`);
};

export default function BackgroundLayer() {
  const images = useMemo(() => [getAssetUrl('cover-image.jpg'), getAssetUrl('main-image.jpg')], []);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [images.length]);

  // Generate deterministic particles for golden light dust effect (pure CSS hardware accelerated)
  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${(i * 17 + 7) % 100}%`,
      top: `${(i * 23 + 12) % 100}%`,
      size: `${(i % 3) * 2 + 2}px`,
      duration: `${6 + (i % 5) * 2}s`,
      delay: `${(i % 4) * 1.2}s`
    }));
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        height: '100dvh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        backgroundColor: '#120206',
        isolation: 'isolate',
        willChange: 'transform',
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      {/* Persistent Dual-Image Background Layer (Zero DOM unmount flash) */}
      {images.map((imgSrc, idx) => (
        <div
          key={imgSrc}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#120206',
            opacity: currentIdx === idx ? 0.85 : 0,
            transition: 'opacity 2s ease-in-out',
            willChange: 'opacity',
            transform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            pointerEvents: 'none'
          }}
        >
          <img
            src={imgSrc}
            alt="Wedding Ambient Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              filter: 'brightness(0.7) contrast(1.1)',
              pointerEvents: 'none'
            }}
          />
        </div>
      ))}

      {/* Subtle Islamic Geometric Star Pattern Overlay Watermark */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M40 0l10 30h30l-24 18 9 32-25-19-25 19 9-32-24-18h30zM40 40l5 15h15l-12 9 4 16-12-9-12 9 4-16-12-9h15z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '80px 80px',
          pointerEvents: 'none'
        }}
      />

      {/* Deep Burgundy & Charcoal Cinematic Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 50% 40%, rgba(212, 175, 55, 0.14) 0%, rgba(42, 7, 19, 0.45) 50%, rgba(18, 2, 6, 0.85) 100%),
            linear-gradient(to bottom, rgba(18, 2, 6, 0.45) 0%, rgba(61, 12, 28, 0.20) 50%, rgba(18, 2, 6, 0.90) 100%)
          `,
          pointerEvents: 'none'
        }}
      />

      {/* Floating Golden Light Dust Particles (Pure CSS 60fps GPU animation) */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="dust-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            '--dust-duration': p.duration,
            '--dust-delay': p.delay
          }}
        />
      ))}
    </div>
  );
}



