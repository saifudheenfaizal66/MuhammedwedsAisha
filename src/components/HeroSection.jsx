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
    <section className="section-container" style={{ textAlign: 'center', paddingTop: 'clamp(30px, 6vw, 50px)', paddingBottom: 'clamp(20px, 4vw, 40px)' }}>
      {/* Islamic Bismillah & Invocation Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ marginBottom: '28px' }}
      >
        <p className="font-calligraphy" style={{ fontSize: 'clamp(2.2rem, 7vw, 3.4rem)', color: '#D4AF37', marginBottom: '8px', filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.8))', lineHeight: 1.3 }}>
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
        
        {/* Requirement 3: Header / Invocation exact text */}
        <p className="font-cinzel" style={{ fontSize: 'clamp(0.95rem, 3.2vw, 1.25rem)', color: '#F7E7B4', marginBottom: '12px', fontWeight: 600, letterSpacing: '1px' }}>
          "In the Name of Allah, the Most Beneficent, the Most Merciful"
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', maxWidth: '300px', margin: '0 auto 16px auto' }}>
          <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, #D4AF37)' }}></span>
          <Sparkles size={14} color="#D4AF37" />
          <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, #D4AF37)' }}></span>
        </div>
        
        <p className="font-cinzel" style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.88rem)', letterSpacing: 'clamp(2px, 1vw, 4px)', textTransform: 'uppercase', color: '#C5A059', fontWeight: 'bold' }}>
          CORDIALLY INVITES YOU TO THE NIKKAH CEREMONY OF
        </p>
      </motion.div>

      {/* Groom & Bride Names Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{ margin: '20px 0 30px 0' }}
      >
        <div style={{ filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.9))' }}>
          <h1
            className="font-alex text-gold-gradient"
            style={{
              fontSize: 'clamp(3.8rem, 14vw, 6.5rem)',
              lineHeight: '1.05',
              margin: '0',
              wordBreak: 'break-word'
            }}
          >
            Mohammed
          </h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', margin: '12px 0' }}>
          <span style={{ width: 'clamp(35px, 12vw, 80px)', height: '1px', background: 'linear-gradient(to right, transparent, #D4AF37)' }}></span>
          <span className="font-calligraphy" style={{ fontSize: 'clamp(2.2rem, 7vw, 3.2rem)', color: '#F7E7B4' }}>with</span>
          <span style={{ width: 'clamp(35px, 12vw, 80px)', height: '1px', background: 'linear-gradient(to left, transparent, #D4AF37)' }}></span>
        </div>

        <div style={{ filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.9))' }}>
          <h1
            className="font-alex text-gold-gradient"
            style={{
              fontSize: 'clamp(3.8rem, 14vw, 6.5rem)',
              lineHeight: '1.05',
              margin: '0',
              wordBreak: 'break-word'
            }}
          >
            Aisha
          </h1>
        </div>
      </motion.div>

      {/* Main English Invitation Text Card with Scroll Stagger */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        className="gold-border-card"
        style={{
          maxWidth: '760px',
          margin: '0 auto 40px auto',
          padding: 'clamp(24px, 5vw, 36px) clamp(16px, 4vw, 30px)',
          background: 'linear-gradient(135deg, rgba(35, 6, 15, 0.58), rgba(61, 12, 28, 0.48))'
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', marginBottom: '12px' }}>
          <Heart size={20} color="#D4AF37" fill="#D4AF37" />
        </div>
        <p className="font-body" style={{
          fontSize: 'clamp(1.15rem, 3.8vw, 1.4rem)',
          color: '#FDFBF7',
          lineHeight: '1.8',
          fontStyle: 'italic',
          letterSpacing: '0.2px'
        }}>
          "With the grace and blessings of Almighty Allah, we cordially invite you and your family to grace the auspicious occasion of the Nikkah ceremony of our beloved son <strong style={{ color: '#F7E7B4', fontStyle: 'normal', fontWeight: '700' }}>Mohammed</strong> with <strong style={{ color: '#F7E7B4', fontStyle: 'normal', fontWeight: '700' }}>Aisha</strong>, daughter of C.H. Ibrahim Haji. Join us in celebrating this joyous union followed by a grand reception."
        </p>
      </motion.div>

      {/* Theme-based Countdown Section */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="gold-border-card"
        style={{
          padding: 'clamp(22px, 5vw, 32px) clamp(14px, 4vw, 24px)',
          display: 'inline-block',
          width: '100%',
          maxWidth: '680px',
          background: 'linear-gradient(135deg, rgba(22, 3, 8, 0.60), rgba(42, 7, 19, 0.50))'
        }}
      >
        {/* Elegant Theme-Based Countdown Heading */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <Calendar size={16} color="#D4AF37" />
            <span className="font-cinzel" style={{ fontSize: 'clamp(0.78rem, 2.5vw, 0.9rem)', letterSpacing: '2px', color: '#D4AF37', fontWeight: 'bold', textTransform: 'uppercase' }}>
              COUNTDOWN TO THE BLESSED CEREMONY
            </span>
            <Sparkles size={16} color="#D4AF37" />
          </div>
          <h3 className="font-cinzel text-gold-gradient" style={{ fontSize: 'clamp(1.15rem, 3.8vw, 1.55rem)', fontWeight: 'bold', margin: 0, letterSpacing: '1px' }}>
            Thursday, September 10, 2026
          </h3>
        </div>

        {/* Live Minimalist Timer Grid */}
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
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(61, 12, 28, 0.3))',
                padding: 'clamp(10px, 2.5vw, 16px) clamp(4px, 1vw, 10px)',
                borderRadius: '14px',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                boxShadow: 'inset 0 0 14px rgba(212, 175, 55, 0.1)'
              }}
            >
              <div className="font-cinzel text-gold-gradient" style={{ fontSize: 'clamp(1.2rem, 5vw, 2.4rem)', fontWeight: 'bold', lineHeight: '1.1' }}>
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="font-sans" style={{ fontSize: 'clamp(0.55rem, 1.8vw, 0.7rem)', letterSpacing: '1px', color: '#F7E7B4', marginTop: '6px', fontWeight: '600', opacity: 0.9 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


