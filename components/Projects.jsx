'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Projects() {
  const { t } = useLanguage();

  const titleWords = t.projects.title.split(' ');
  const erpProject = t.projects.items[0];

  return (
    <section
      id="projects"
      style={{
        background: '#000000',
        color: '#ffffff',
        borderTopLeftRadius: '60px',
        borderTopRightRadius: '60px',
        paddingTop: '120px',
        paddingBottom: '120px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal distance="40px" duration="0.8s">
          <div style={{ marginBottom: '60px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
              {t.projects.badge}
            </span>

            <div className="cb-tophead-title">
              <h2
                aria-label={t.projects.title}
                style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                  lineHeight: 1.1,
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.04em',
                  fontFamily: "var(--font-display)"
                }}
              >
                {titleWords.map((word, idx) => (
                  <span
                    key={idx}
                    aria-hidden="true"
                    style={{
                      overflow: 'clip',
                      verticalAlign: 'top',
                      margin: '-0.15em 0.15em',
                      display: 'inline-block'
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        padding: '0.15em',
                        display: 'inline-block',
                        animation: `cbTextReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s both`
                      }}
                    >
                      {word}
                    </span>
                  </span>
                ))}
              </h2>
            </div>
          </div>
        </ScrollReveal>

        {/* Featured Projects Cards Showcase with Scroll Reveal */}
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {t.projects.items && t.projects.items.map((proj, idx) => (
            <ScrollReveal key={idx} distance="60px" duration="0.9s" delay={idx * 0.15}>
              <a
                href={proj.link || (idx === 0 ? "/projects/erp" : "/projects/depo-live")}
                style={{ textDecoration: 'none', color: '#ffffff', display: 'block' }}
                className="cb-project-card"
              >
                <div style={{
                  width: '100%',
                  minHeight: '480px',
                  borderRadius: '36px',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#111111',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.7)',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '32px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      background: 'rgba(255, 255, 255, 0.1)',
                      padding: '8px 20px',
                      borderRadius: '20px',
                      color: '#ffffff'
                    }}>
                      {proj.category}
                    </span>

                    <div className="cb-card-arrow" style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      color: '#000000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease'
                    }}>
                      <ArrowUpRight size={24} />
                    </div>
                  </div>

                  {/* Real Image Cover Showcase */}
                  <div style={{
                    width: '100%',
                    height: '340px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
                    background: '#000000'
                  }}>
                    <img
                      src={proj.image || (idx === 0 ? "/erp.png" : "/depo-live.png")}
                      alt={proj.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        display: 'block',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                  </div>

                  <div>
                    <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '8px', color: '#ffffff', fontFamily: "var(--font-display)" }}>
                      {proj.title}
                    </h3>
                    <p style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: 1.6, maxWidth: '780px' }}>
                      {proj.desc}
                    </p>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
