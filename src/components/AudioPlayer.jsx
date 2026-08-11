import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Fallback Web Audio Synth if audio element is blocked or fails
  const audioCtxRef = useRef(null);
  const isSynthPlayingRef = useRef(false);
  const timerRef = useRef(null);

  const startSynthMelody = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
      let step = 0;

      const playNextNote = () => {
        if (!isSynthPlayingRef.current) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = step % 2 === 0 ? 'sine' : 'triangle';
        const freq = notes[Math.floor(Math.random() * notes.length)];
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 1.3);

        step++;
        timerRef.current = setTimeout(playNextNote, 600 + Math.random() * 400);
      };

      isSynthPlayingRef.current = true;
      playNextNote();
    } catch (e) {
      console.warn("Audio Context init error:", e);
    }
  };

  const stopSynthMelody = () => {
    isSynthPlayingRef.current = false;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Audio play failed, playing fallback synth", err);
          startSynthMelody();
          setIsPlaying(true);
        });
    } else {
      startSynthMelody();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopSynthMelody();
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  useEffect(() => {
    const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
    const audioUrl = `${base}wedding-bgm.mp3`;
    const audio = new Audio(encodeURI(audioUrl));
    audio.loop = true;
    audioRef.current = audio;

    const handlePlayEvent = () => {
      playAudio();
    };

    window.addEventListener('play-wedding-music', handlePlayEvent);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      stopSynthMelody();
      window.removeEventListener('play-wedding-music', handlePlayEvent);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 'clamp(14px, 3vw, 24px)', right: 'clamp(14px, 3vw, 24px)', zIndex: 1000 }}>
      <button
        onClick={toggleAudio}
        className="pulse-gold"
        style={{
          width: 'clamp(44px, 11vw, 54px)',
          height: 'clamp(44px, 11vw, 54px)',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #C5A059 0%, #FCF6BA 30%, #D4AF37 70%, #AA771C 100%)',
          border: '2px solid #2A2421',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          outline: 'none'
        }}
        aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
        title={isPlaying ? "Music Playing" : "Click to Play Music"}
      >
        {isPlaying ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            <span className="eq-bar" style={{ width: '3px', height: '14px', background: '#2A2421', borderRadius: '2px', animation: 'eq1 0.6s infinite ease-in-out' }}></span>
            <span className="eq-bar" style={{ width: '3px', height: '22px', background: '#2A2421', borderRadius: '2px', animation: 'eq2 0.6s infinite ease-in-out 0.2s' }}></span>
            <span className="eq-bar" style={{ width: '3px', height: '10px', background: '#2A2421', borderRadius: '2px', animation: 'eq3 0.6s infinite ease-in-out 0.4s' }}></span>
          </div>
        ) : (
          <VolumeX size={22} color="#2A2421" />
        )}
      </button>

      <style>{`
        @keyframes eq1 { 0%, 100% { height: 6px; } 50% { height: 18px; } }
        @keyframes eq2 { 0%, 100% { height: 20px; } 50% { height: 8px; } }
        @keyframes eq3 { 0%, 100% { height: 10px; } 50% { height: 22px; } }
      `}</style>
    </div>
  );
}
