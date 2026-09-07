'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    let lenisInstance = null;
    let animationFrameId = null;

    const startLenis = () => {
      if (typeof window === 'undefined') return;

      if (window.Lenis) {
        lenisInstance = new window.Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1.0,
          touchMultiplier: 2,
          infinite: false,
        });

        function raf(time) {
          lenisInstance?.raf(time);
          animationFrameId = requestAnimationFrame(raf);
        }
        animationFrameId = requestAnimationFrame(raf);
      }
    };

    // Check if script already loaded
    if (window.Lenis) {
      startLenis();
    } else {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/lenis@1.1.9/dist/lenis.min.js';
      script.async = true;
      script.onload = () => {
        startLenis();
      };
      document.head.appendChild(script);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return <>{children}</>;
}
