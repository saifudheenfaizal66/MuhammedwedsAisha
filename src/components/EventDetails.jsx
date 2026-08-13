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
          padding: 'clamp(18px, 4vw, 36px) clamp(12px, 3.5vw, 24px)',
          textAlign: 'center',
          marginBottom: '30px',
          background: 'linear-gradient(135deg, rgba(35, 6, 15, 0.58), rgba(61, 12, 28, 0.48))'
        }}
      >
        <p className="font-cinzel" style={{ fontSize: 'clamp(0.72rem, 2.2vw, 0.88rem)', letterSpacing: '2px', color: '#D4AF37', marginBottom: '6px', fontWeight: 'bold' }}>
          FAMILY & HOMES
        </p>
        <h2 className="font-cinzel text-gold-gradient" style={{ fontSize: 'clamp(1.35rem, 4.5vw, 2.1rem)', marginBottom: '20px' }}>
          Groom &amp; Bride Details
        </h2>

        {/* Grid Layout for Groom & Bride Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px', marginBottom: '24px' }}>
          
          {/* Groom Details Card */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(61, 12, 28, 0.65), rgba(22, 3, 8, 0.75))',
              padding: 'clamp(18px, 3.5vw, 26px)',
              borderRadius: '16px',
              border: '1.2px solid rgba(212, 175, 55, 0.55)',
              textAlign: 'center',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.45)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.22)', border: '1px solid #D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 12px rgba(212, 175, 55, 0.3)' }}>
                <Users size={20} color="#D4AF37" />
              </div>
              <span className="font-cinzel" style={{ fontSize: '0.72rem', letterSpacing: '1.5px', color: '#D4AF37', fontWeight: 'bold', display: 'block', textTransform: 'uppercase' }}>GROOM</span>
              <h3 className="font-cinzel text-gold-gradient" style={{ fontSize: 'clamp(1.25rem, 3.8vw, 1.55rem)', fontWeight: 'bold', margin: 0 }}>
                Mohammed
              </h3>
            </div>

            <div style={{ borderTop: '1px dashed rgba(212, 175, 55, 0.35)', paddingTop: '14px', width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center' }}>
              <div>
                <p className="font-sans" style={{ fontSize: '0.7rem', color: '#D4AF37', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>SON OF</p>
                <p className="font-body" style={{ fontSize: 'clamp(1.02rem, 3vw, 1.2rem)', color: '#F5F5F5', fontWeight: '700', margin: '2px 0 0 0' }}>
                  K.M. Abdul Rahiman Sahib
                </p>
              </div>

              <div>
                <p className="font-sans" style={{ fontSize: '0.7rem', color: '#D4AF37', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>RESIDENCE</p>
                <p className="font-body" style={{ fontSize: 'clamp(0.96rem, 2.8vw, 1.12rem)', color: '#F5F5F5', lineHeight: '1.5', margin: '2px 0 0 0', fontWeight: '500' }}>
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
              background: 'linear-gradient(135deg, rgba(61, 12, 28, 0.65), rgba(22, 3, 8, 0.75))',
              padding: 'clamp(18px, 3.5vw, 26px)',
              borderRadius: '16px',
              border: '1.2px solid rgba(212, 175, 55, 0.55)',
              textAlign: 'center',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.45)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.22)', border: '1px solid #D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 12px rgba(212, 175, 55, 0.3)' }}>
                <Home size={20} color="#D4AF37" />
              </div>
              <span className="font-cinzel" style={{ fontSize: '0.72rem', letterSpacing: '1.5px', color: '#D4AF37', fontWeight: 'bold', display: 'block', textTransform: 'uppercase' }}>BRIDE</span>
              <h3 className="font-cinzel text-gold-gradient" style={{ fontSize: 'clamp(1.25rem, 3.8vw, 1.55rem)', fontWeight: 'bold', margin: 0 }}>
                Aisha
              </h3>
            </div>

            <div style={{ borderTop: '1px dashed rgba(212, 175, 55, 0.35)', paddingTop: '14px', width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center' }}>
              <div>
                <p className="font-sans" style={{ fontSize: '0.7rem', color: '#D4AF37', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>DAUGHTER OF</p>
                <p className="font-body" style={{ fontSize: 'clamp(1.02rem, 3vw, 1.2rem)', color: '#F5F5F5', fontWeight: '700', margin: '2px 0 0 0' }}>
                  C.H. Ibrahim Haji
                </p>
              </div>

              <div>
                <p className="font-sans" style={{ fontSize: '0.7rem', color: '#D4AF37', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>RESIDENCE</p>
                <p className="font-body" style={{ fontSize: 'clamp(0.96rem, 2.8vw, 1.12rem)', color: '#F5F5F5', lineHeight: '1.5', margin: '2px 0 0 0', fontWeight: '500' }}>
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
            padding: 'clamp(18px, 4vw, 30px) clamp(12px, 3vw, 20px)',
            borderRadius: '16px',
            border: '1.5px solid #D4AF37',
            marginBottom: '24px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)'
          }}
        >
          <p className="font-cinzel" style={{ fontSize: 'clamp(0.7rem, 2.2vw, 0.85rem)', letterSpacing: '2px', color: '#D4AF37', marginBottom: '6px', fontWeight: 'bold' }}>
            EVENT SCHEDULE &amp; VENUE
          </p>
          <h2 className="font-cinzel text-gold-gradient" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.9rem)', marginBottom: '14px' }}>
            Thursday, September 10, 2026
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '12px', maxWidth: '580px', margin: '0 auto 18px auto' }}>
            <div style={{ background: 'rgba(212, 175, 55, 0.12)', padding: '12px 10px', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.35)' }}>
              <Clock color="#D4AF37" size={20} style={{ margin: '0 auto 4px auto' }} />
              <p className="font-sans" style={{ fontSize: '0.68rem', letterSpacing: '0.8px', color: '#C5A059', fontWeight: 'bold' }}>NIKKAH CEREMONY</p>
              <p className="font-body" style={{ fontSize: 'clamp(1.05rem, 3.2vw, 1.25rem)', color: '#FDFBF7', fontWeight: 'bold', margin: '3px 0 0 0' }}>11:00 AM</p>
            </div>

            <div style={{ background: 'rgba(212, 175, 55, 0.12)', padding: '12px 10px', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.35)' }}>
              <Heart color="#D4AF37" size={20} style={{ margin: '0 auto 4px auto' }} />
              <p className="font-sans" style={{ fontSize: '0.68rem', letterSpacing: '0.8px', color: '#C5A059', fontWeight: 'bold' }}>RECEPTION &amp; FEAST</p>
              <p className="font-body" style={{ fontSize: 'clamp(1.05rem, 3.2vw, 1.25rem)', color: '#FDFBF7', fontWeight: 'bold', margin: '3px 0 0 0' }}>12:30 PM ONWARDS</p>
            </div>
          </div>

          <div style={{ paddingTop: '8px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #C5A059, #AA771C)', color: '#160308', marginBottom: '10px' }}>
              <MapPin size={21} />
            </div>
            <h3 className="font-cinzel" style={{ fontSize: 'clamp(1.18rem, 3.8vw, 1.7rem)', color: '#FFF1BA', marginBottom: '4px', fontWeight: 'bold' }}>
              Le Méridien Kochi, Maradu
            </h3>
            <p className="font-body" style={{ fontSize: 'clamp(0.95rem, 3vw, 1.15rem)', color: '#F7E7B4' }}>
              NH 66, Kundannoor, Maradu, Kochi, Kerala
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <Navigation size={17} />
            <span>Open Location (Google Maps)</span>
          </a>

          <button
            onClick={handleCalendarDownload}
            className="btn-bronze"
          >
            <Calendar size={17} />
            <span>Add to Calendar (.ics)</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}


