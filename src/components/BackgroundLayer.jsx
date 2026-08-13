import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const getAssetUrl = (path) => {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return encodeURI(`${base}${path.replace(/^\//, '')}`);
};

export default function BackgroundLayer() {
  const images = [getAssetUrl('cover-image.jpg'), getAssetUrl('main-image.jpg')];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [images.length]);

  // Generate deterministic particles for golden light dust effect
  const particles = useMemo(() => {
    return Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: `${(i * 17 + 7) % 100}%`,
      top: `${(i * 23 + 12) % 100}%`,
      size: `${(i % 3) * 2 + 2}px`,
      duration: 6 + (i % 5) * 2,
      delay: (i % 4) * 1.2
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
        backgroundColor: '#120206'
      }}
    >
      {/* Background Slideshow Layer */}
      <AnimatePresence mode="sync">
        <motion.div
          key={images[currentIdx]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.85, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#120206',
            isolation: 'isolate',
            transform: 'translateZ(0)'
          }}
        >
          <img
            src={images[currentIdx]}
            alt="Wedding Ambient Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              filter: 'brightness(0.7) contrast(1.1)'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle Islamic Geometric Star Pattern Overlay Watermark */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M40 0l10 30h30l-24 18 9 32-25-19-25 19 9-32-24-18h30zM40 40l5 15h15l-12 9 4 16-12-9-12 9 4-16-12-9h15z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '80px 80px'
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
          `
        }}
      />

      {/* Floating Golden Light Dust Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.7, 0.1],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut'
          }}
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: '#F7E7B4',
            boxShadow: '0 0 10px #D4AF37, 0 0 20px #D4AF37',
            pointerEvents: 'none',
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}
        />
      ))}
    </div>
  );
}


