import React from 'react';
import { motion } from 'framer-motion';

export default function CoupleIllustration() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '420px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
      {/* Background Glowing Aura Ring */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.35, 0.6, 0.35],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '-10px',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.25) 0%, rgba(255,183,197,0.15) 50%, transparent 70%)',
          border: '1px dashed rgba(212, 175, 55, 0.4)',
          pointerEvents: 'none'
        }}
      />

      {/* Floating Couple Silhouette Vector Container */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1 }
        }}
        style={{ position: 'relative', zIndex: 5, width: '100%', height: 'auto' }}
      >
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 15px 25px rgba(88,17,26,0.18))' }}
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="groomSherwani" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9F6F0" />
              <stop offset="50%" stopColor="#EFE7D8" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>

            <linearGradient id="groomShawl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#800020" />
              <stop offset="100%" stopColor="#58111A" />
            </linearGradient>

            <linearGradient id="brideAttire" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#800020" />
              <stop offset="50%" stopColor="#58111A" />
              <stop offset="100%" stopColor="#3D0C11" />
            </linearGradient>

            <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BF953F" />
              <stop offset="25%" stopColor="#FCF6BA" />
              <stop offset="50%" stopColor="#B38728" />
              <stop offset="100%" stopColor="#AA771C" />
            </linearGradient>

            <linearGradient id="dupattaVeil" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB7C5" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#800020" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.4" />
            </linearGradient>

            <radialGradient id="sparkleGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Decorative Arch */}
          <path
            d="M 120 440 C 120 200, 380 200, 380 440 Z"
            fill="none"
            stroke="url(#goldAccent)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* GROOM (Left Silhouette - Traditional Sherwani & Turban) */}
          <g id="groom">
            {/* Turban/Kulla */}
            <path d="M 180 140 C 170 110, 210 90, 230 115 C 240 100, 260 110, 250 135 C 235 150, 195 155, 180 140 Z" fill="url(#groomShawl)" />
            {/* Turban Jewel (Kalgi) */}
            <path d="M 225 105 Q 225 90 220 80 Q 230 90 225 105 Z" fill="url(#goldAccent)" />
            <circle cx="225" cy="108" r="4" fill="#800020" />

            {/* Groom Head (Faceless Minimalist Ivory-Beige Tone) */}
            <path d="M 195 135 C 190 160, 200 185, 220 190 C 235 185, 240 160, 235 135 Z" fill="#F4E0D0" />

            {/* Groom Neck & Collar */}
            <path d="M 205 185 L 235 185 L 240 210 L 200 210 Z" fill="#EFE7D8" stroke="url(#goldAccent)" strokeWidth="2" />

            {/* Groom Sherwani Body */}
            <path d="M 160 210 C 180 210, 220 210, 245 220 L 255 440 L 140 440 Z" fill="url(#groomSherwani)" stroke="#D4AF37" strokeWidth="1.5" />

            {/* Groom Royal Shawl/Dupatta Draped Across Shoulder */}
            <path d="M 155 225 C 190 240, 220 300, 230 440 L 180 440 C 170 340, 150 260, 155 225 Z" fill="url(#groomShawl)" opacity="0.9" />

            {/* Gold Buttons & Embroidery on Sherwani */}
            <line x1="210" y1="215" x2="210" y2="380" stroke="url(#goldAccent)" strokeWidth="2.5" />
            <circle cx="210" cy="235" r="2.5" fill="#58111A" />
            <circle cx="210" cy="260" r="2.5" fill="#58111A" />
            <circle cx="210" cy="285" r="2.5" fill="#58111A" />
            <circle cx="210" cy="310" r="2.5" fill="#58111A" />
          </g>

          {/* BRIDE (Right Silhouette - Traditional Embroidered Lehenga & Veiled Dupatta) */}
          <g id="bride">
            {/* Bride Head (Faceless Minimalist Warm Skin Tone) */}
            <path d="M 275 145 C 270 170, 280 190, 295 195 C 310 190, 315 170, 310 145 Z" fill="#F4E0D0" />

            {/* Golden Maang Tikka / Matha Patti Hair Ornament */}
            <path d="M 285 145 L 295 145" stroke="url(#goldAccent)" strokeWidth="2" />
            <circle cx="295" cy="150" r="3" fill="url(#goldAccent)" />

            {/* Bride Draped Hijab / Translucent Veil (Dupatta) */}
            <path
              d="M 265 140 C 260 120, 325 120, 325 145 C 335 180, 345 280, 355 440 L 265 440 C 265 320, 260 190, 265 140 Z"
              fill="url(#dupattaVeil)"
              stroke="url(#goldAccent)"
              strokeWidth="1.5"
            />

            {/* Bride Embroidered Blouse & Lehenga Attire */}
            <path d="M 260 215 C 280 210, 320 210, 340 220 L 365 440 L 255 440 Z" fill="url(#brideAttire)" stroke="url(#goldAccent)" strokeWidth="1.5" />

            {/* Golden Zari & Henna Floral Motifs on Lehenga */}
            <path d="M 270 260 Q 310 280 345 260" stroke="url(#goldAccent)" strokeWidth="2" fill="none" />
            <path d="M 265 320 Q 310 345 355 320" stroke="url(#goldAccent)" strokeWidth="2" fill="none" />
            <path d="M 260 380 Q 310 405 360 380" stroke="url(#goldAccent)" strokeWidth="2" fill="none" />

            {/* Henna Detail on Hand (Minimalist overlay) */}
            <path d="M 250 300 Q 260 310 255 320" stroke="#800020" strokeWidth="2" fill="none" />
          </g>

          {/* Front Center Rose Bouquet Accent */}
          <g id="flowerBouquet" transform="translate(230, 290)">
            <circle cx="20" cy="20" r="14" fill="#800020" />
            <circle cx="12" cy="14" r="10" fill="#FFB7C5" />
            <circle cx="28" cy="14" r="10" fill="#D4AF37" />
            <path d="M 20 34 Q 10 50 0 60 M 20 34 Q 30 50 40 60" stroke="#58111A" strokeWidth="2" />
          </g>

          {/* Floating Gold Sparkle Stars */}
          <path d="M 120 160 L 123 166 L 130 167 L 125 172 L 126 179 L 120 175 L 114 179 L 115 172 L 110 167 L 117 166 Z" fill="url(#goldAccent)" />
          <path d="M 370 140 L 372 144 L 377 145 L 373 149 L 374 154 L 370 151 L 366 154 L 367 149 L 363 145 L 368 144 Z" fill="url(#goldAccent)" />
          <path d="M 250 80 L 253 87 L 260 88 L 255 93 L 256 100 L 250 96 L 244 100 L 245 93 L 240 88 L 247 87 Z" fill="url(#goldAccent)" />
        </svg>
      </motion.div>
    </div>
  );
}
