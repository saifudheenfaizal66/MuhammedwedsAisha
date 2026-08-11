import React, { useState, useEffect } from 'react';
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
    }, 6000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        backgroundColor: '#160308'
      }}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={images[currentIdx]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 0
          }}
        >
          <img
            src={images[currentIdx]}
            alt="Wedding Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Deep Burgundy & Charcoal Vignette Overlay - Reduced Opacity for Higher Image Visibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 50% 35%, rgba(42, 7, 19, 0.20) 0%, rgba(18, 3, 7, 0.55) 100%),
            linear-gradient(to bottom, rgba(22, 3, 8, 0.30) 0%, rgba(61, 12, 28, 0.15) 50%, rgba(18, 3, 7, 0.60) 100%)
          `
        }}
      />
    </div>
  );
}

