import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, Heart } from 'lucide-react';

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
    <section className="section-container" style={{ textAlign: 'center', paddingTop: 'clamp(20px, 5vw, 45px)', paddingBottom: 'clamp(16px, 3.5vw, 35px)' }}>
      {/* Islamic Bismillah & Invocation Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ marginBottom: '22px' }}
      >
        <p className="font-calligraphy" style={{ fontSize: 'clamp(1.7rem, 5.5vw, 3.2rem)', color: '#D4AF37', marginBottom: '6px', filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.8))', lineHeight: 1.3 }}>
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
        
        {/* Requirement 3: Header / Invocation exact text */}
        <p className="font-cinzel" style={{ fontSize: 'clamp(0.85rem, 2.8vw, 1.2rem)', color: '#F7E7B4', marginBottom: '10px', fontWeight: 600, letterSpacing: '0.5px' }}>
          "In the Name of Allah, the Most Beneficent, the Most Merciful"
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', maxWidth: '280px', margin: '0 auto 14px auto' }}>
          <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, #D4AF37)' }}></span>
          <Sparkles size={14} color="#D4AF37" />
          <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, #D4AF37)' }}></span>
        </div>
        
        <p className="font-cinzel" style={{ fontSize: 'clamp(0.68rem, 2.2vw, 0.85rem)', letterSpacing: 'clamp(1.5px, 0.8vw, 3.5px)', textTransform: 'uppercase', color: '#C5A059', fontWeight: 'bold' }}>
          CORDIALLY INVITES YOU TO THE NIKKAH CEREMONY OF
        </p>
      </motion.div>

      {/* Groom & Bride Names Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{ margin: '16px 0 24px 0' }}
      >
        <div style={{ filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.9))' }}>
          <h1
            className="font-alex text-gold-gradient"
            style={{
              fontSize: 'clamp(2.6rem, 10vw, 6rem)',
              lineHeight: '1.05',
              margin: '0',
              wordBreak: 'break-word'
            }}
          >
            Mohammed
          </h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', margin: '8px 0' }}>
          <span style={{ width: 'clamp(25px, 10vw, 70px)', height: '1px', background: 'linear-gradient(to right, transparent, #D4AF37)' }}></span>
          <span className="font-calligraphy" style={{ fontSize: 'clamp(1.8rem, 5.5vw, 3rem)', color: '#F7E7B4' }}>with</span>
          <span style={{ width: 'clamp(25px, 10vw, 70px)', height: '1px', background: 'linear-gradient(to left, transparent, #D4AF37)' }}></span>
        </div>

        <div style={{ filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.9))' }}>
          <h1
            className="font-alex text-gold-gradient"
            style={{
              fontSize: 'clamp(2.6rem, 10vw, 6rem)',
              lineHeight: '1.05',
              margin: '0',
              wordBreak: 'break-word'
            }}
          >
            Aisha
          </h1>
        </div>
      </motion.div>

      {/* Theme-based Countdown Section (Immediately below Groom & Bride Names) */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        className="gold-border-card"
        style={{
          padding: 'clamp(18px, 4vw, 30px) clamp(10px, 3vw, 22px)',
          display: 'inline-block',
          width: '100%',
          maxWidth: '680px',
          margin: '0 auto 30px auto',
          background: 'linear-gradient(135deg, rgba(22, 3, 8, 0.60), rgba(42, 7, 19, 0.50))'
        }}
      >
        {/* Elegant Theme-Based Countdown Heading */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <Calendar size={15} color="#D4AF37" />
            <span className="font-cinzel" style={{ fontSize: 'clamp(0.7rem, 2.2vw, 0.88rem)', letterSpacing: '1.5px', color: '#D4AF37', fontWeight: 'bold', textTransform: 'uppercase' }}>
              COUNTDOWN TO THE BLESSED CEREMONY
            </span>
            <Sparkles size={15} color="#D4AF37" />
          </div>
          <h3 className="font-cinzel text-gold-gradient" style={{ fontSize: 'clamp(1rem, 3.4vw, 1.45rem)', fontWeight: 'bold', margin: 0, letterSpacing: '0.5px' }}>
            Thursday, September 10, 2026
          </h3>
        </div>

        {/* Live Minimalist Timer Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(4px, 1.8vw, 12px)' }}>
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(61, 12, 28, 0.3))',
                padding: 'clamp(8px, 2vw, 14px) clamp(2px, 0.8vw, 8px)',
                borderRadius: '12px',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                boxShadow: 'inset 0 0 120px rgba(212, 175, 55, 0.05)'
              }}
            >
              <div className="font-cinzel text-gold-gradient" style={{ fontSize: 'clamp(1.05rem, 4.5vw, 2.2rem)', fontWeight: 'bold', lineHeight: '1.1' }}>
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="font-sans" style={{ fontSize: 'clamp(0.52rem, 1.6vw, 0.68rem)', letterSpacing: '0.5px', color: '#F7E7B4', marginTop: '4px', fontWeight: '600', opacity: 0.95 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main English Invitation Text Card ("With the grace and blessings...") */}
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
          background: 'linear-gradient(135deg, rgba(35, 6, 15, 0.58), rgba(61, 12, 28, 0.48))'
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


