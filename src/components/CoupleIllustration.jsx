import React from 'react';
import { motion } from 'framer-motion';

const getAssetUrl = (path) => {
  const base = import.meta.env.BASE_URL ? (import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`) : '/';
  return encodeURI(`${base}${path.replace(/^\//, '')}`);
};

export default function CoupleIllustration() {
  const imageUrl = getAssetUrl('background removed image.png');

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '520px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justify: 'center'
      }}
    >
      {/* Radiant Warm Gold Sunburst Backlight Glow (Behind Upper Body) */}
      <motion.div
        animate={{
          scale: [0.95, 1.06, 0.95],
          opacity: [0.65, 0.9, 0.65]
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '12%',
          width: 'clamp(280px, 52vw, 440px)',
          height: 'clamp(280px, 52vw, 440px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 225, 140, 0.5) 0%, rgba(212, 175, 55, 0.3) 40%, rgba(128, 0, 32, 0.15) 65%, transparent 80%)',
          filter: 'blur(28px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />



      {/* Floating Gold Sparkle Dust */}
      <motion.div
        animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3 }}
      >
        <div style={{ position: 'absolute', top: '18%', left: '18%', color: '#FCF6BA', fontSize: '14px', filter: 'drop-shadow(0 0 6px #FCF6BA)' }}>✦</div>
        <div style={{ position: 'absolute', top: '32%', right: '16%', color: '#D4AF37', fontSize: '12px' }}>✧</div>
        <div style={{ position: 'absolute', bottom: '26%', left: '14%', color: '#F7E7B4', fontSize: '15px' }}>✦</div>
        <div style={{ position: 'absolute', bottom: '34%', right: '20%', color: '#FFF1BA', fontSize: '13px' }}>✧</div>
      </motion.div>

      {/* Transparent Floating Bride & Groom PNG Image (Zero background boxes or wrapper shapes) */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 5,
          width: '100%',
          maxWidth: 'clamp(300px, 50vw, 440px)',
          display: 'flex',
          justify: 'center',
          alignItems: 'center',
          background: 'transparent',
          backgroundColor: 'transparent'
        }}
      >
        <motion.img
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          src={imageUrl}
          alt="Mohammed & Aisha Bride and Groom"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: 'clamp(350px, 60vw, 500px)',
            objectFit: 'contain',
            background: 'transparent',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            filter: `
              drop-shadow(0 22px 38px rgba(0, 0, 0, 0.9))
              drop-shadow(0 0 28px rgba(212, 175, 55, 0.45))
            `,
            display: 'block'
          }}
        />
      </motion.div>

      {/* Bottom Pill Badge — M & A — with Extending Gold Lines */}
      <div
        style={{
          position: 'relative',
          zIndex: 6,
          marginTop: '-6px',
          width: '100%',
          maxWidth: '400px',
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          gap: '0px'
        }}
      >
        <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(212, 175, 55, 0.85))' }}></span>
        <div
          style={{
            background: 'rgba(18, 3, 7, 0.88)',
            border: '1.5px solid rgba(212, 175, 55, 0.8)',
            boxShadow: '0 0 16px rgba(212, 175, 55, 0.38), inset 0 0 10px rgba(212, 175, 55, 0.15)',
            borderRadius: '24px',
            padding: '5px 24px',
            color: '#F7E7B4',
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: '0.88rem',
            fontWeight: 'bold',
            letterSpacing: '3px',
            whiteSpace: 'nowrap'
          }}
        >
          — M &amp; A —
        </div>
        <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(212, 175, 55, 0.85))' }}></span>
      </div>
    </div>
  );
}


