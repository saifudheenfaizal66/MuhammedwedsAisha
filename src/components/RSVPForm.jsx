import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, MessageCircle } from 'lucide-react';

export default function RSVPForm() {
  const whatsappNumber = "919562896069";
  const whatsappMessage = encodeURIComponent("Hello, I am happy to accept the invitation and confirm my presence for Mohammed & Aisha's Nikkah Ceremony!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleRSVPClick = (e) => {
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F9E79F', '#C5A059', '#6c5ce7', '#FDFBF7']
    });

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="gold-border-card"
        style={{
          padding: 'clamp(20px, 4vw, 36px) clamp(12px, 3.5vw, 24px)',
          textAlign: 'center',
          maxWidth: '640px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(35, 6, 15, 0.58), rgba(61, 12, 28, 0.48))'
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <div style={{ width: '20px', height: '1px', background: '#D4AF37' }}></div>
            <p className="font-cinzel" style={{ fontSize: '0.72rem', letterSpacing: '2px', color: '#D4AF37', fontWeight: 'bold' }}>
              R. S. V. P.
            </p>
            <div style={{ width: '20px', height: '1px', background: '#D4AF37' }}></div>
          </div>
          <h2 className="font-cinzel text-gold-gradient" style={{ fontSize: 'clamp(1.35rem, 4.5vw, 1.95rem)', marginBottom: '8px' }}>
            Confirm Your Attendance
          </h2>
          <p className="font-body" style={{ fontSize: 'clamp(0.95rem, 3vw, 1.15rem)', color: '#F7E7B4', opacity: 0.95, lineHeight: '1.55' }}>
            Click below to confirm your presence for Mohammed &amp; Aisha's Nikkah Ceremony directly via WhatsApp.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleRSVPClick}
          className="btn-gold"
          style={{
            width: '100%',
            maxWidth: '400px',
            justifyContent: 'center',
            padding: 'clamp(12px, 3vw, 15px) clamp(12px, 3.5vw, 18px)',
            fontSize: 'clamp(0.82rem, 2.8vw, 1.02rem)',
            letterSpacing: '0.3px',
            margin: '0 auto'
          }}
        >
          <Heart size={17} fill="#160308" style={{ flexShrink: 0 }} />
          <span>Joyfully Accept / Confirm RSVP</span>
          <MessageCircle size={17} style={{ flexShrink: 0, marginLeft: '2px' }} />
        </motion.button>
      </motion.div>
    </section>
  );
}


