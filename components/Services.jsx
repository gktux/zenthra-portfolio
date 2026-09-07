'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container">
        
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal distance="40px" duration="0.8s">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {t.services.badge}
              </span>
              <h2 style={{ fontSize: '2.8rem', marginTop: '8px', fontFamily: "var(--font-display)" }}>
                {t.services.title}
              </h2>
            </div>
            <p style={{ color: '#64748b', maxWidth: '450px', fontSize: '1.05rem', fontFamily: "var(--font-body)" }}>
              {t.services.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Services List Grid with Staggered Scroll Reveal */}
        <div className="grid-2">
          {t.services.items.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.1} distance="50px" duration="0.85s">
              <div className="cuberto-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '260px', height: '100%' }}>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#94a3b8', marginBottom: '16px', fontFamily: "var(--font-display)" }}>
                    {item.id}
                  </div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '12px', fontFamily: "var(--font-display)" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
                    {item.desc}
                  </p>
                </div>
                
                <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
                  <a href="#contacts" style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: '#000000',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'transform 0.3s'
                  }}>
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
