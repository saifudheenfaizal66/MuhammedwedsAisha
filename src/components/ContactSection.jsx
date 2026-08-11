import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Heart, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const primaryContact = "+919562896069";
  const displayContact = "+91 9562896069";

  return (
    <section className="section-container" style={{ paddingBottom: 'clamp(40px, 8vw, 80px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="gold-border-card"
        style={{
          padding: 'clamp(25px, 5vw, 40px) clamp(14px, 4vw, 25px)',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(35, 6, 15, 0.58), rgba(61, 12, 28, 0.48))'
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', marginBottom: '12px' }}>
          <Heart size={20} color="#D4AF37" fill="#D4AF37" />
        </div>

        <p className="font-cinzel" style={{ fontSize: '0.8rem', letterSpacing: '2.5px', color: '#D4AF37', marginBottom: '6px', fontWeight: 'bold' }}>
          FAMILY CONTACTS
        </p>

        <h3 className="font-alex text-gold-gradient" style={{ fontSize: 'clamp(2.2rem, 7vw, 3.4rem)', margin: '4px 0 8px 0', lineHeight: '1.2' }}>
          Mohammed &amp; Aisha Families
        </h3>

        <p className="font-body" style={{ fontSize: 'clamp(1.05rem, 3.5vw, 1.25rem)', color: '#F7E7B4', marginBottom: '20px', opacity: 0.95 }}>
          Feel free to reach out to our families for any assistance or inquiries.
        </p>

        {/* Clean, Non-Glinting Direct Call Contact Button for High Readability */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <a
            href={`tel:${primaryContact}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(135deg, rgba(30, 5, 13, 0.92), rgba(18, 3, 7, 0.95))',
              color: '#FFF1BA',
              border: '1.5px solid #D4AF37',
              borderRadius: '30px',
              padding: '12px 26px',
              fontSize: 'clamp(0.95rem, 3vw, 1.05rem)',
              fontWeight: '600',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#FFF1BA';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#D4AF37';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Phone size={18} color="#D4AF37" />
            <span style={{ color: '#FDFBF7', fontWeight: '600', letterSpacing: '0.5px' }}>
              Call Contact ({displayContact})
            </span>
          </a>
        </div>

        {/* Quranic Verse / Blessing Quote */}
        <div style={{ borderTop: '1px dashed rgba(212, 175, 55, 0.35)', paddingTop: '20px', marginTop: '16px' }}>
          <p className="font-body" style={{ fontSize: 'clamp(1.05rem, 3.5vw, 1.25rem)', color: '#FDFBF7', fontStyle: 'italic', maxWidth: '640px', margin: '0 auto 8px auto', lineHeight: '1.6' }}>
            "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts."
          </p>
          <p className="font-cinzel" style={{ fontSize: '0.78rem', letterSpacing: '1.5px', color: '#D4AF37' }}>
            — SURAH AR-RUM [30:21]
          </p>
        </div>
      </motion.div>

      {/* Luxury Branding Footer */}
      <div style={{ textAlign: 'center', marginTop: '35px', color: '#F7E7B4', padding: '0 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#D4AF37', marginBottom: '8px' }}>
          <Sparkles size={14} />
          <span className="font-cinzel" style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)', letterSpacing: '1.5px', fontWeight: '600' }}>
            MOHAMMED &amp; AISHA • SEPTEMBER 10, 2026
          </span>
          <Sparkles size={14} />
        </div>
        
        <p className="font-body" style={{ fontSize: 'clamp(0.9rem, 3vw, 1rem)', opacity: 0.9, marginBottom: '18px' }}>
          Crafted with love &amp; prayers for an unforgettable Nikkah celebration.
        </p>

        {/* Updated Footer with Reduced Company Name Size and Clickable 'fourdouble' Instagram Link */}
        <footer style={{ 
          marginTop: '20px', 
          paddingTop: '20px', 
          borderTop: '1px solid rgba(212, 175, 55, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontFamily: "'Montserrat', sans-serif"
        }}>
          <p style={{
            fontSize: '0.78rem',
            color: '#F7E7B4',
            margin: 0,
            letterSpacing: '0.3px',
            opacity: 0.95
          }}>
            Designed and Developed by{' '}
            <a
              href="https://instagram.com/fourdouble._"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#D4AF37',
                fontWeight: '700',
                fontSize: '0.78rem',
                textDecoration: 'underline',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFF1BA'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#D4AF37'}
            >
              fourdouble
            </a>
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem' }}>
            <Phone size={13} color="#D4AF37" />
            <a
              href={`tel:${primaryContact}`}
              style={{
                color: '#FDFBF7',
                textDecoration: 'none',
                fontWeight: '500',
                letterSpacing: '0.3px',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#D4AF37'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#FDFBF7'}
            >
              Contact: {displayContact}
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}


