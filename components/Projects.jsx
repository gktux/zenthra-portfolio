'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

// Uzun / kisa sirayla: masonry daginik gorunum
const IMAGE_HEIGHTS = ['620px', '560px', '520px', '640px'];

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
        <ScrollReveal>
          <div style={{ maxWidth: '1130px', margin: '0 auto 110px', textAlign: 'left' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>
              {t.projects.badge}
            </span>

            <div className="cb-tophead-title">
              <h2
                aria-label={t.projects.title}
                style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                  lineHeight: 1.1,
                  fontWeight: 600,
                  color: '#ffffff',
                  letterSpacing: '-0.04em',
                  fontFamily: "var(--font-display)"
                }}
              >
                {t.projects.title}
              </h2>
            </div>
          </div>
        </ScrollReveal>

        {/* Cuberto tarzi: iki sutun, sag sutun asagi kaymis, uzun/kisa gorseller */}
        <style>{`
          .cb-work-grid { max-width: 1130px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; column-gap: 120px; align-items: start; }
          .cb-work-col { display: flex; flex-direction: column; gap: 110px; }
          .cb-work-col--right { padding-top: 150px; }
          .cb-work-media { width: 100%; border-radius: 24px; overflow: hidden; background: #111; }
          .cb-work-media img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; transition: transform 0.6s cubic-bezier(0.4,0,0.2,1); }
          .cb-work-item:hover .cb-work-media img { transform: scale(1.04); }
          .cb-work-item:hover .cb-work-title { opacity: 0.7; }
          @media (max-width: 860px) {
            .cb-work-grid { grid-template-columns: 1fr; }
            .cb-work-col { gap: 64px; }
            .cb-work-col--right { padding-top: 64px; }
          }
        `}</style>
        <div className="cb-work-grid">
          {[0, 1].map((col) => (
            <div key={col} className={`cb-work-col${col === 1 ? ' cb-work-col--right' : ''}`}>
              {(t.projects.items || []).map((proj, idx) => idx % 2 !== col ? null : (
                <ScrollReveal key={idx} delay={col * 0.1}>
                  <a href={proj.link} {...(proj.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="cb-work-item" style={{ textDecoration: 'none', color: '#ffffff', display: 'block' }}>
                    <div className="cb-work-media" style={{ height: IMAGE_HEIGHTS[idx % IMAGE_HEIGHTS.length] }}>
                      <img src={proj.image} alt={proj.title} />
                    </div>
                    <div style={{ marginTop: '28px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#86868b', display: 'block', marginBottom: '10px' }}>
                        {proj.category}
                      </span>
                      <h3 className="cb-work-title" style={{ fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.3, color: '#ffffff', fontFamily: "var(--font-display)", transition: 'opacity 0.3s ease', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        {proj.title} <ArrowUpRight size={22} style={{ flexShrink: 0, marginTop: '4px' }} />
                      </h3>
                      <p style={{ color: '#a1a1aa', fontSize: '1rem', lineHeight: 1.6, marginTop: '8px' }}>
                        {proj.desc}
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
