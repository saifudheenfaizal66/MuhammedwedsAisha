import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';

const getAssetUrl = (path) => {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return encodeURI(`${base}${path.replace(/^\//, '')}`);
};

export default function Envelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  const handleOpen = (e) => {
    if (e && e.preventDefault && e.type === 'touchend') {
      e.preventDefault();
    }
    if (isOpen) return;
    setIsOpen(true);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('play-wedding-music'));
    }

    try {
      confetti({
        particleCount: 95,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F9E79F', '#C5A059', '#6c5ce7', '#160e33', '#FDFBF7']
      });
    } catch (err) {
      console.warn("Confetti launch error:", err);
    }

    if (onOpen) onOpen();
  };

  const coverImg = getAssetUrl('cover-image.jpg');

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          onClick={handleOpen}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            height: '100dvh',
            zIndex: 900,
            backgroundColor: '#160308',
            background: `radial-gradient(circle at center, rgba(42, 7, 19, 0.90) 0%, rgba(18, 3, 7, 0.98) 100%), url("${coverImg}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            boxShadow: 'inset 0 0 120px rgba(0, 0, 0, 0.85)',
            touchAction: 'none',
            cursor: 'pointer',
            isolation: 'isolate',
            transform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          {/* Envelope Frame Container */}
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onClick={handleOpen}
            style={{
              width: '100%',
              maxWidth: '520px',
              height: 'min(370px, 75vh)',
              position: 'relative',
              backgroundColor: '#23060f',
              background: `linear-gradient(rgba(35, 6, 15, 0.94), rgba(18, 3, 7, 0.97)), url("${coverImg}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '24px',
              border: '2px solid #D4AF37',
              boxShadow: '0 30px 65px rgba(0, 0, 0, 0.85), 0 0 45px rgba(212, 175, 55, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              cursor: 'pointer',
              padding: '16px 12px',
              isolation: 'isolate',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            {/* Top Flap Graphic Lines */}
            <svg
              viewBox="0 0 520 200"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '160px',
                pointerEvents: 'none'
              }}
            >
              <polygon points="0,0 520,0 260,130" fill="rgba(61, 12, 28, 0.85)" stroke="#D4AF37" strokeWidth="1.5" />
            </svg>

            {/* Corner Accents */}
            <div style={{ position: 'absolute', top: '15px', left: '15px', color: '#D4AF37', opacity: 0.9, pointerEvents: 'none' }}>
              <Sparkles size={18} />
            </div>
            <div style={{ position: 'absolute', top: '15px', right: '15px', color: '#D4AF37', opacity: 0.9, pointerEvents: 'none' }}>
              <Sparkles size={18} />
            </div>

            {/* Header text on envelope */}
            <div style={{ zIndex: 10, textAlign: 'center', marginTop: 'clamp(25px, 6vw, 45px)', padding: '0 12px', pointerEvents: 'none' }}>
              <p className="font-calligraphy" style={{ fontSize: 'clamp(1.3rem, 4.5vw, 1.8rem)', color: '#FDFBF7', marginBottom: '2px' }}>
                Exclusive Nikkah Invitation
              </p>
              <h2 className="font-cinzel text-gold-gradient" style={{ fontSize: 'clamp(1.2rem, 4.5vw, 1.8rem)', letterSpacing: '1px' }}>
                Mohammed &amp; Aisha
              </h2>
            </div>

            {/* Interactive Golden Wax Seal */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              style={{
                position: 'relative',
                zIndex: 20,
                marginTop: '15px',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #C5A059 0%, #D4AF37 50%, #AA771C 100%)',
                border: '2px solid #FDFBF7',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(255,255,255,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                border: '1px dashed #160308',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#160308',
                pointerEvents: 'none'
              }}>
                <span className="font-cinzel" style={{ fontSize: '1rem', fontWeight: 'bold' }}>M &amp; A</span>
                <Heart size={12} fill="#160308" color="#160308" style={{ marginTop: '2px' }} />
              </div>
            </motion.div>

            {/* Instruction prompt */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="font-sans"
              style={{
                zIndex: 10,
                marginTop: '15px',
                fontSize: '0.75rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#F9E79F',
                pointerEvents: 'none'
              }}
            >
              Tap Seal to Open Nikkah Card
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

