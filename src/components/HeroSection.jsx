import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, Heart } from 'lucide-react';
import CoupleIllustration from './CoupleIllustration.jsx';

export default function HeroSection() {
  // Target Nikkah Date: September 10, 2026 at 11:00 AM IST
  const nikkahDate = new Date('2026-09-10T11:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = nikkahDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [nikkahDate]);

  return (
    <section className="section-container" style={{ textAlign: 'center', paddingTop: 'clamp(15px, 4vw, 35px)', paddingBottom: 'clamp(16px, 3.5vw, 35px)', background: 'transparent' }}>
      {/* Arabic Bismillah & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ marginBottom: '20px' }}
      >
        <p className="font-calligraphy" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.8rem)', color: '#D4AF37', marginBottom: '14px', filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.8))', lineHeight: 1.2 }}>
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
        <p className="font-cinzel" style={{ fontSize: 'clamp(0.68rem, 2.2vw, 0.85rem)', letterSpacing: 'clamp(1.5px, 0.8vw, 3.5px)', textTransform: 'uppercase', color: '#FFFFFF', fontWeight: 'bold' }}>
          CORDIALLY INVITES YOU TO THE NIKKAH CEREMONY
        </p>
      </motion.div>

      {/* TOP SECTION: "OF", "Mohammed", "with", "Aisha" Calligraphy with Shimmering Star Divider */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{ margin: '10px 0 16px 0' }}
      >
        {/* OF */}
        <p className="font-cinzel" style={{ fontSize: 'clamp(0.75rem, 2.4vw, 0.92rem)', color: '#C5A059', letterSpacing: '5px', fontWeight: 'bold', margin: '0 0 4px 0', textTransform: 'uppercase' }}>
          OF
        </p>

        {/* Mohammed */}
        <div style={{ filter: 'drop-shadow(0 4px 25px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 25px rgba(212, 175, 55, 0.4))' }}>
          <h1
            className="font-alex text-gold-gradient"
            style={{
              fontSize: 'clamp(3.4rem, 11.5vw, 6.8rem)',
              lineHeight: '0.98',
              margin: '0',
              wordBreak: 'break-word',
              letterSpacing: '1px'
            }}
          >
            Mohammed
          </h1>
        </div>

        {/* — with — */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', margin: '6px 0' }}>
          <span style={{ width: 'clamp(25px, 9vw, 65px)', height: '1px', background: 'linear-gradient(to right, transparent, rgba(212, 175, 55, 0.8))' }}></span>
          <span className="font-calligraphy" style={{ fontSize: 'clamp(1.6rem, 4.8vw, 2.6rem)', color: '#F7E7B4', fontStyle: 'italic' }}>with</span>
          <span style={{ width: 'clamp(25px, 9vw, 65px)', height: '1px', background: 'linear-gradient(to left, transparent, rgba(212, 175, 55, 0.8))' }}></span>
        </div>

        {/* Aisha */}
        <div style={{ filter: 'drop-shadow(0 4px 25px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 25px rgba(212, 175, 55, 0.4))' }}>
          <h1
            className="font-alex text-gold-gradient"
            style={{
              fontSize: 'clamp(3.4rem, 11.5vw, 6.8rem)',
              lineHeight: '0.98',
              margin: '0 0 12px 0',
              wordBreak: 'break-word',
              letterSpacing: '1px'
            }}
          >
            Aisha
          </h1>
        </div>

        {/* Star Motif Line Divider */}
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6], scale: [0.98, 1.03, 0.98] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', maxWidth: '300px', margin: '0 auto' }}
        >
          <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, #D4AF37)' }}></span>
          <span style={{ color: '#D4AF37', fontSize: '18px', filter: 'drop-shadow(0 0 8px #D4AF37)' }}>✦</span>
          <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, #D4AF37)' }}></span>
        </motion.div>
      </motion.div>

      {/* CENTERPIECE: Transparent Floating Bride & Groom PNG Image */}
      <CoupleIllustration />

      {/* BOTTOM SECTION: Premium Countdown Timer & Date Details */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        style={{
          width: '100%',
          maxWidth: '680px',
          margin: '25px auto 30px auto'
        }}
      >
        {/* Countdown Typography Heading */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <Calendar size={16} color="#D4AF37" />
            <span className="font-cinzel" style={{ fontSize: 'clamp(0.72rem, 2.3vw, 0.9rem)', letterSpacing: '2px', color: '#D4AF37', fontWeight: 'bold', textTransform: 'uppercase' }}>
              COUNTDOWN TO THE BLESSED CEREMONY
            </span>
            <Sparkles size={16} color="#D4AF37" />
          </div>
          <h3 className="font-cinzel text-gold-gradient" style={{ fontSize: 'clamp(1.15rem, 3.8vw, 1.6rem)', fontWeight: 'bold', margin: 0, letterSpacing: '1px', textTransform: 'uppercase' }}>
            THURSDAY, SEPTEMBER 10, 2026
          </h3>
        </div>

        {/* 4 Sleek Timer Boxes with Thin Gold Metallic Borders */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(6px, 2vw, 14px)' }}>
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(18, 3, 7, 0.72)',
                padding: 'clamp(10px, 2.2vw, 16px) clamp(4px, 1vw, 10px)',
                borderRadius: '16px',
                border: '1.2px solid rgba(212, 175, 55, 0.55)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(212, 175, 55, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="font-cinzel text-gold-gradient" style={{ fontSize: 'clamp(1.25rem, 5vw, 2.5rem)', fontWeight: 'bold', lineHeight: '1.1', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.8))' }}>
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="font-sans" style={{ fontSize: 'clamp(0.55rem, 1.7vw, 0.72rem)', letterSpacing: '1px', color: '#F7E7B4', marginTop: '6px', fontWeight: '700', textTransform: 'uppercase', opacity: 0.95 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main English Invitation Text Card */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="gold-border-card"
        style={{
          maxWidth: '760px',
          margin: '0 auto 30px auto',
          padding: 'clamp(18px, 4vw, 32px) clamp(12px, 3.5vw, 26px)',
          background: 'linear-gradient(135deg, rgba(35, 6, 15, 0.62), rgba(61, 12, 28, 0.52))'
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', marginBottom: '10px' }}>
          <Heart size={18} color="#D4AF37" fill="#D4AF37" />
        </div>
        <p className="font-body" style={{
          fontSize: 'clamp(0.98rem, 3.2vw, 1.35rem)',
          color: '#FDFBF7',
          lineHeight: '1.7',
          fontStyle: 'italic',
          letterSpacing: '0.2px'
        }}>
          "With the grace and blessings of Almighty Allah, we cordially invite you and your family to grace the auspicious occasion of the Nikkah ceremony of our beloved son <strong style={{ color: '#F7E7B4', fontStyle: 'normal', fontWeight: '700' }}>Mohammed</strong> with <strong style={{ color: '#F7E7B4', fontStyle: 'normal', fontWeight: '700' }}>Aisha</strong>, daughter of C.H. Ibrahim Haji. Join us in celebrating this joyous union followed by a grand reception."
        </p>
      </motion.div>
    </section>
  );
}



