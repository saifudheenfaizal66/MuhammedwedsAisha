import confetti from 'canvas-confetti';

let confettiInstance = null;
let autoCleanupTimer = null;

/**
 * Hardware-accelerated singleton canvas confetti trigger with smooth 60fps rendering and auto-cleanup.
 * Operates without triggering React component state or continuous DOM re-renders.
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
      // Apply strict hardware acceleration and pointer passthrough to avoid interrupting interactions
      canvas.style.pointerEvents = 'none';
      canvas.style.willChange = 'transform, opacity';
      canvas.style.transform = 'translate3d(0, 0, 0)';
      canvas.style.webkitTransform = 'translate3d(0, 0, 0)';
      canvas.style.backfaceVisibility = 'hidden';
      canvas.style.webkitBackfaceVisibility = 'hidden';

      if (!confettiInstance) {
        // useWorker: false prevents OffscreenCanvas context loss flickering during DOM events
        confettiInstance = confetti.create(canvas, {
          resize: true,
          useWorker: false
        });
      }

      // Launch confetti on dedicated canvas element (0 React re-renders)
      confettiInstance(options);

      // Auto-cleanup particle generation after 4.5 seconds to prevent background GPU/memory usage
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
      // Fallback standard trigger
      confetti(options);
    }
  } catch (err) {
    console.warn('Confetti launch error, falling back to 3D CSS particles:', err);
    triggerCSSConfetti(options);
  }
}

/**
 * Hardware-accelerated 3D CSS DOM Particle Fallback
 * Renders 60fps falling particles directly in DOM outside React state lifecycle.
 */
export function triggerCSSConfetti(options = {}) {
  if (typeof window === 'undefined') return;

  const particleCount = options.particleCount || 45;
  const colors = options.colors || ['#D4AF37', '#F9E79F', '#C5A059', '#6c5ce7', '#FDFBF7'];

  let layer = document.getElementById('confetti-css-layer');
  if (!layer) {
    layer = document.createElement('div');
    layer.id = 'confetti-css-layer';
    layer.className = 'confetti-layer';
    layer.style.cssText = `
      position: fixed;
      inset: 0;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 9999;
      overflow: hidden;
      will-change: transform, opacity;
      transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
    `;
    document.body.appendChild(layer);
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';
    
    const size = Math.floor(Math.random() * 8) + 6;
    const startX = Math.random() * 100;
    const driftX = (Math.random() - 0.5) * 200;
    const rotation = Math.floor(Math.random() * 720) - 360;
    const duration = (Math.random() * 1.5 + 2.5).toFixed(2);
    const delay = (Math.random() * 0.3).toFixed(2);
    const color = colors[i % colors.length];

    particle.style.cssText = `
      position: absolute;
      top: -20px;
      left: ${startX}vw;
      width: ${size}px;
      height: ${size * (Math.random() > 0.5 ? 1 : 1.6)}px;
      background-color: ${color};
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      pointer-events: none;
      will-change: transform, opacity;
      transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      --particle-x: ${driftX}px;
      --particle-rot: ${rotation}deg;
      animation: confettiFall3D ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s forwards;
      -webkit-animation: confettiFall3D ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s forwards;
    `;

    fragment.appendChild(particle);
  }

  layer.appendChild(fragment);

  // Auto-remove layer after all particles finish falling
  setTimeout(() => {
    if (layer && layer.parentNode) {
      layer.parentNode.removeChild(layer);
    }
  }, 4500);
}

