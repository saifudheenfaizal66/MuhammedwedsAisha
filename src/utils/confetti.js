import confetti from 'canvas-confetti';

let confettiInstance = null;
let autoCleanupTimer = null;

/**
 * Hardware-accelerated singleton canvas confetti trigger with auto-cleanup after 4.5 seconds.
 */
export function triggerConfetti(customOptions = {}) {
  if (typeof window === 'undefined') return;

  const defaultOptions = {
    particleCount: 95,
    spread: 90,
    origin: { y: 0.6 },
    colors: ['#D4AF37', '#F9E79F', '#C5A059', '#6c5ce7', '#160e33', '#FDFBF7'],
    disableForReducedMotion: true
  };

  const options = { ...defaultOptions, ...customOptions };

  try {
    const canvas = document.getElementById('confetti-canvas');

    if (canvas) {
      if (!confettiInstance) {
        confettiInstance = confetti.create(canvas, {
          resize: true,
          useWorker: true
        });
      }

      confettiInstance(options);

      // Auto-cleanup particle generation after 4.5 seconds to prevent background GPU usage
      if (autoCleanupTimer) {
        clearTimeout(autoCleanupTimer);
      }

      autoCleanupTimer = setTimeout(() => {
        if (confettiInstance) {
          try {
            confettiInstance.reset();
          } catch (e) {
            // Ignore reset errors if canvas was unmounted
          }
        }
      }, 4500);
    } else {
      // Fallback if fixed canvas is not present in DOM
      confetti(options);
    }
  } catch (err) {
    console.warn('Confetti launch error:', err);
  }
}
