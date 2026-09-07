'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

// Vercel deployment sync trigger
export default function Hero() {
  const { t } = useLanguage();
  const videos = ['/giris1.mp4', '/girsi2.mp4'];
  const [videoIndex, setVideoIndex] = useState(0);

  const handleVideoEnded = () => {
    setVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const line1Words = t.hero.titleLine1.split(' ');
  const line2Words = t.hero.titleLine2.split(' ');

  const renderWords = (wordsArray, startIndex = 0) => {
    return wordsArray.map((word, idx) => {
      const globalIdx = startIndex + idx;
      return (
        <span
          key={idx}
          aria-hidden="true"
          style={{
            overflow: 'clip',
            verticalAlign: 'top',
            margin: '-0.15em 0.12em',
            display: 'inline-block'
          }}
        >
          <span
            aria-hidden="true"
            style={{
              padding: '0.15em',
              display: 'inline-block',
              animation: `cbTextReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${0.05 + globalIdx * 0.07}s both`
            }}
          >
            {word}
          </span>
        </span>
      );
    });
  };

  return (
    <section style={{ paddingTop: '180px', paddingBottom: '110px', background: '#ffffff', minHeight: '85vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ width: '100%', textAlign: 'center' }}>
        
        {/* Cuberto Clean Two-Line Headline */}
        <div className="cb-tophead-title" style={{ marginBottom: '36px' }}>
          <h1
            aria-label={`${t.hero.titleLine1} ${t.hero.titleLine2}`}
            style={{
              fontSize: 'clamp(3rem, 7vw, 6.2rem)',
              lineHeight: 1.05,
              fontWeight: 500,
              color: '#000000',
              maxWidth: '1100px',
              margin: '0 auto',
              letterSpacing: '-0.025em',
              fontFamily: "var(--font-display)"
            }}
          >
            <div style={{ display: 'block' }}>
              {renderWords(line1Words, 0)}
            </div>
            <div style={{ display: 'block' }}>
              {renderWords(line2Words, line1Words.length)}
            </div>
          </h1>
        </div>

        {/* Subtitle with Instant Mask Reveal */}
        <div style={{ overflow: 'hidden', maxWidth: '750px', margin: '0 auto 48px auto' }}>
          <p style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
            color: '#475569',
            fontWeight: 400,
            lineHeight: 1.5,
            fontFamily: "var(--font-body)",
            animation: 'cbTextReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both'
          }}>
            {t.hero.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ overflow: 'hidden', padding: '10px 0' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            animation: 'cbTextReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both'
          }}>
            <a href="#projects" className="btn-black-pill" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              <span>{t.hero.ctaProjects}</span>
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>

        {/* Sequential Hero Showcase Video */}
        <div
          style={{
            marginTop: '64px',
            width: '100%',
            maxWidth: '1240px',
            margin: '64px auto 0 auto',
            borderRadius: '36px',
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.12)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            position: 'relative',
            background: '#0f172a',
            animation: 'cbTextReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both'
          }}
        >
          <video
            key={videos[videoIndex]}
            src={videos[videoIndex]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '680px',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>

      </div>
    </section>
  );
}
