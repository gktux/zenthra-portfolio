'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const onMouseOver = (e) => {
      // Interactive element hover detection
      try {
        const target = e.target.closest('a, button, input, textarea, .cb-project-card, .cuberto-card, .cb-btn_cta, .cb-btn_round, .cb-lang-toggle');
        setIsHovered(!!target);
      } catch (err) {
        setIsHovered(false);
      }

      // Detect background brightness safely by traversing parents
      let isDarkFound = false;
      let el = e.target;
      
      while (el && el !== document.body && el !== document.documentElement) {
        try {
          const style = window.getComputedStyle(el);
          const bg = style ? style.backgroundColor : '';
          
          if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
            const rgb = bg.match(/\d+/g);
            if (rgb && rgb.length >= 3) {
              const r = parseInt(rgb[0], 10);
              const g = parseInt(rgb[1], 10);
              const b = parseInt(rgb[2], 10);
              const alpha = rgb.length >= 4 ? parseFloat(rgb[3]) : 1;
              
              if (alpha > 0.1) {
                // Perceived brightness formula
                const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                if (brightness < 130) {
                  isDarkFound = true;
                }
                break;
              }
            }
          }
        } catch (err) {
          // Ignore style calculation errors on detached nodes
        }
        el = el.parentElement;
      }

      setIsDarkBg(isDarkFound);
    };

    window.addEventListener('mouseover', onMouseOver, { passive: true });

    let animId;
    const loop = () => {
      // Instant precision dot follow
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Smooth physics lerp follower ring
      ring.current.x += (mouse.current.x - ring.current.x) * 0.22;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.22;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  // Dynamic colors based on background
  const dotColor = isDarkBg ? '#ffffff' : '#000000';
  const ringBorderColor = isDarkBg 
    ? (isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.75)')
    : (isHovered ? '#000000' : 'rgba(0, 0, 0, 0.4)');
  const ringBgColor = isDarkBg
    ? (isHovered ? 'rgba(255, 255, 255, 0.18)' : 'transparent')
    : (isHovered ? 'rgba(0, 0, 0, 0.08)' : 'transparent');

  return (
    <div style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.25s ease' }}>
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          backgroundColor: dotColor,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999999,
          willChange: 'transform',
          transition: 'background-color 0.2s ease',
          boxShadow: isDarkBg ? '0 0 10px rgba(255, 255, 255, 0.8)' : 'none'
        }}
      />

      {/* Trailing Outer Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '52px' : '32px',
          height: isHovered ? '52px' : '32px',
          backgroundColor: ringBgColor,
          border: `1.5px solid ${ringBorderColor}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999998,
          transform: 'scale(1)',
          transition: 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, border-color 0.2s ease',
          willChange: 'transform, width, height'
        }}
      />
    </div>
  );
}
