'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Plus, Minus } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="cb-faq -inverse" style={{ background: '#000000', color: '#ffffff', paddingTop: '120px', paddingBottom: '140px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="cb-faq-container container" style={{ maxWidth: '1100px' }}>
        
        {/* FAQ Header */}
        <ScrollReveal distance="40px" duration="0.8s">
          <div className="cb-faq-header" style={{ marginBottom: '70px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '12px' }}>
              {t.faq.badge}
            </span>
            <div className="cb-tophead-title">
              <h2
                aria-label={t.faq.title}
                style={{
                  fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
                  lineHeight: 1.05,
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.04em',
                  fontFamily: "var(--font-display)"
                }}
              >
                {t.faq.title}
              </h2>
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ Items List with Scroll Reveal */}
        <div className="cb-faq-items" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <ScrollReveal key={idx} delay={idx * 0.08} distance="30px" duration="0.75s">
                <div
                  className={`cb-faq-item-card ${isOpen ? '-active' : ''}`}
                  onClick={() => toggleItem(idx)}
                  style={{
                    background: isOpen ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
                    border: isOpen ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '24px',
                    padding: '24px 32px',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isOpen ? '0 20px 50px rgba(0, 0, 0, 0.5)' : 'none'
                  }}
                >
                  {/* Question Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                    <span
                      style={{
                        fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                        fontWeight: isOpen ? 700 : 500,
                        color: isOpen ? '#ffffff' : '#cbd5e1',
                        transition: 'color 0.3s ease, font-weight 0.3s ease',
                        fontFamily: "var(--font-body)"
                      }}
                    >
                      {item.q}
                    </span>

                    {/* Creative Circular Elastic Toggle Icon */}
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: isOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.08)',
                        color: isOpen ? '#000000' : '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(180deg) scale(1.08)' : 'rotate(0deg) scale(1)',
                        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease, color 0.3s ease'
                      }}
                    >
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </div>

                  {/* Animated Answer Body */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <p
                        style={{
                          paddingTop: '20px',
                          color: '#94a3b8',
                          fontSize: '1.05rem',
                          lineHeight: 1.65,
                          maxWidth: '880px',
                          opacity: isOpen ? 1 : 0,
                          transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
                          transition: 'opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s',
                          fontFamily: "var(--font-body)"
                        }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
