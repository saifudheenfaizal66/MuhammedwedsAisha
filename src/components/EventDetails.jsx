import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Navigation, Home, Users, Heart, Sparkles } from 'lucide-react';

export default function EventDetails() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Le+Meridien+Kochi+Maradu";

  const handleCalendarDownload = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nikkah Invitation//Mohammed & Aisha Nikkah//EN
BEGIN:VEVENT
SUMMARY:Nikkah Ceremony - Mohammed & Aisha
DESCRIPTION:Nikkah ceremony of Mohammed (S/o K.M. Abdul Rahiman Sahib) with Aisha (D/o C.H. Ibrahim Haji) followed by Feast at Le Méridien Kochi, Maradu.
LOCATION:Le Méridien Kochi, Maradu
DTSTART:20260910T110000
DTEND:20260910T160000
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Mohammed_Aisha_Nikkah.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section-container">
      {/* Groom & Bride Details Section */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="gold-border-card"
        style={{
          padding: 'clamp(24px, 5vw, 45px) clamp(14px, 4vw, 30px)',
          textAlign: 'center',
          marginBottom: '40px',
          background: 'linear-gradient(135deg, rgba(35, 6, 15, 0.58), rgba(61, 12, 28, 0.48))'
        }}
      >
        <p className="font-cinzel" style={{ fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)', letterSpacing: '2.5px', color: '#D4AF37', marginBottom: '8px', fontWeight: 'bold' }}>
          FAMILY & HOMES
        </p>
        <h2 className="font-cinzel text-gold-gradient" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.4rem)', marginBottom: '30px' }}>
          Groom &amp; Bride Details
        </h2>

        {/* Grid Layout for Groom & Bride Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px', marginBottom: '35px' }}>
          
          {/* Groom Details Card */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(61, 12, 28, 0.48), rgba(22, 3, 8, 0.55))',
              padding: 'clamp(20px, 4vw, 30px)',
              borderRadius: '18px',
              border: '1px solid rgba(212, 175, 55, 0.45)',
              textAlign: 'left',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Users size={22} color="#D4AF37" />
              </div>
              <div>
                <span className="font-cinzel" style={{ fontSize: '0.75rem', letterSpacing: '1.5px', color: '#D4AF37', fontWeight: 'bold', display: 'block' }}>GROOM</span>
                <h3 className="font-cinzel text-gold-gradient" style={{ fontSize: 'clamp(1.3rem, 3.8vw, 1.6rem)', fontWeight: 'bold', margin: 0 }}>
                  Mohammed
                </h3>
              </div>
            </div>

            <div style={{ borderTop: '1px dashed rgba(212, 175, 55, 0.3)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <p className="font-sans" style={{ fontSize: '0.72rem', color: '#C5A059', fontWeight: '700', letterSpacing: '1px' }}>SON OF</p>
                <p className="font-body" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', color: '#FDFBF7', fontWeight: '600' }}>
                  K.M. Abdul Rahiman Sahib
                </p>
              </div>

              <div>
                <p className="font-sans" style={{ fontSize: '0.72rem', color: '#C5A059', fontWeight: '700', letterSpacing: '1px' }}>RESIDENCE</p>
                <p className="font-body" style={{ fontSize: 'clamp(1.05rem, 2.8vw, 1.18rem)', color: '#F7E7B4', lineHeight: '1.5' }}>
                  Alappat Kadavil House,<br />
                  Near Juma Masjid, Eriyad,<br />
                  Kodungallur
                </p>
              </div>
            </div>
          </div>

          {/* Bride Details Card */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(61, 12, 28, 0.48), rgba(22, 3, 8, 0.55))',
              padding: 'clamp(20px, 4vw, 30px)',
              borderRadius: '18px',
              border: '1px solid rgba(212, 175, 55, 0.45)',
              textAlign: 'left',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Home size={22} color="#D4AF37" />
              </div>
              <div>
                <span className="font-cinzel" style={{ fontSize: '0.75rem', letterSpacing: '1.5px', color: '#D4AF37', fontWeight: 'bold', display: 'block' }}>BRIDE</span>
                <h3 className="font-cinzel text-gold-gradient" style={{ fontSize: 'clamp(1.3rem, 3.8vw, 1.6rem)', fontWeight: 'bold', margin: 0 }}>
                  Aisha
                </h3>
              </div>
            </div>

            <div style={{ borderTop: '1px dashed rgba(212, 175, 55, 0.3)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <p className="font-sans" style={{ fontSize: '0.72rem', color: '#C5A059', fontWeight: '700', letterSpacing: '1px' }}>DAUGHTER OF</p>
                <p className="font-body" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', color: '#FDFBF7', fontWeight: '600' }}>
                  C.H. Ibrahim Haji
                </p>
              </div>

              <div>
                <p className="font-sans" style={{ fontSize: '0.72rem', color: '#C5A059', fontWeight: '700', letterSpacing: '1px' }}>RESIDENCE</p>
                <p className="font-body" style={{ fontSize: 'clamp(1.05rem, 2.8vw, 1.18rem)', color: '#F7E7B4', lineHeight: '1.5' }}>
                  Baitul Noor, Rose Villa Compound,<br />
                  Aluva Road, Perumbavoor,<br />
                  Kochi
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Venue & Event Schedule Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(61, 12, 28, 0.62), rgba(22, 3, 8, 0.65))',
            color: '#F7E7B4',
            padding: 'clamp(24px, 5vw, 36px) clamp(14px, 4vw, 26px)',
            borderRadius: '18px',
            border: '2px solid #D4AF37',
            marginBottom: '30px',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)'
          }}
        >
          <p className="font-cinzel" style={{ fontSize: 'clamp(0.78rem, 2.5vw, 0.9rem)', letterSpacing: '2.5px', color: '#D4AF37', marginBottom: '8px', fontWeight: 'bold' }}>
            EVENT SCHEDULE &amp; VENUE
          </p>
          <h2 className="font-cinzel text-gold-gradient" style={{ fontSize: 'clamp(1.5rem, 4.5vw, 2.2rem)', marginBottom: '18px' }}>
            Thursday, September 10, 2026
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '18px', maxWidth: '600px', margin: '0 auto 24px auto' }}>
            <div style={{ background: 'rgba(212, 175, 55, 0.12)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(212, 175, 55, 0.35)' }}>
              <Clock color="#D4AF37" size={22} style={{ margin: '0 auto 6px auto' }} />
              <p className="font-sans" style={{ fontSize: '0.72rem', letterSpacing: '1px', color: '#C5A059', fontWeight: 'bold' }}>NIKKAH CEREMONY</p>
              <p className="font-body" style={{ fontSize: '1.3rem', color: '#FDFBF7', fontWeight: 'bold', margin: '4px 0 0 0' }}>11:00 AM</p>
            </div>

            <div style={{ background: 'rgba(212, 175, 55, 0.12)', padding: '16px', borderRadius: '14px', border: '1px solid rgba(212, 175, 55, 0.35)' }}>
              <Heart color="#D4AF37" size={22} style={{ margin: '0 auto 6px auto' }} />
              <p className="font-sans" style={{ fontSize: '0.72rem', letterSpacing: '1px', color: '#C5A059', fontWeight: 'bold' }}>RECEPTION &amp; FEAST</p>
              <p className="font-body" style={{ fontSize: '1.3rem', color: '#FDFBF7', fontWeight: 'bold', margin: '4px 0 0 0' }}>12:30 PM ONWARDS</p>
            </div>
          </div>

          <div style={{ paddingTop: '10px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '46px', height: '46px', borderRadius: '50%', background: 'linear-gradient(135deg, #C5A059, #AA771C)', color: '#160308', marginBottom: '12px' }}>
              <MapPin size={24} />
            </div>
            <h3 className="font-cinzel" style={{ fontSize: 'clamp(1.4rem, 4.5vw, 1.9rem)', color: '#FFF1BA', marginBottom: '6px', fontWeight: 'bold' }}>
              Le Méridien Kochi, Maradu
            </h3>
            <p className="font-body" style={{ fontSize: 'clamp(1.05rem, 3.5vw, 1.25rem)', color: '#F7E7B4' }}>
              NH 66, Kundannoor, Maradu, Kochi, Kerala
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <Navigation size={18} />
            <span>Open Location (Google Maps)</span>
          </a>

          <button
            onClick={handleCalendarDownload}
            className="btn-bronze"
          >
            <Calendar size={18} />
            <span>Add to Calendar (.ics)</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}


