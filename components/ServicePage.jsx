'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { ChevronDown, ArrowUpRight, Check } from 'lucide-react';

export default function ServicePage({ service }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
      <Navbar />

      {/* Hero */}
      <section className="section-padding" style={{ paddingTop: '160px', background: '#ffffff' }}>
        <div className="container">
          <ScrollReveal distance="40px" duration="0.8s">
            <nav
              aria-label="breadcrumb"
              style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '24px', fontFamily: 'var(--font-body)' }}
            >
              <a href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Ana Sayfa</a>
              <span style={{ margin: '0 8px' }}>/</span>
              <a href="/hizmetler" style={{ color: '#94a3b8', textDecoration: 'none' }}>Hizmetler</a>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: '#475569' }}>{service.h1}</span>
            </nav>

            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              {service.badge}
            </span>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                marginTop: '12px',
                marginBottom: '24px',
                fontFamily: 'var(--font-display)',
                lineHeight: 1.1,
                maxWidth: '900px',
              }}
            >
              {service.h1}
            </h1>

            <p
              style={{
                color: '#475569',
                fontSize: '1.15rem',
                lineHeight: 1.7,
                maxWidth: '720px',
                fontFamily: 'var(--font-body)',
              }}
            >
              {service.lead}
            </p>

            <div style={{ marginTop: '36px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a className="cb-btn cb-btn_cta -md -fill" href="/contacts">
                <span className="cb-btn_cta-title">Teklif Alın</span>
              </a>
              <a
                href="tel:+905315800753"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 26px',
                  borderRadius: '100px',
                  border: '1px solid rgba(0,0,0,0.15)',
                  color: '#000',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontFamily: 'var(--font-body)',
                }}
              >
                0531 580 07 53
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Kapsam */}
      <section
        className="section-padding"
        style={{ background: '#f8fafc', borderTop: '1px solid rgba(0,0,0,0.06)' }}
      >
        <div className="container">
          <ScrollReveal distance="40px" duration="0.8s">
            <div style={{ marginBottom: '60px' }}>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: '#64748b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Kapsam
              </span>
              <h2 style={{ fontSize: '2.8rem', marginTop: '8px', fontFamily: 'var(--font-display)' }}>
                Neler Yapıyoruz
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid-2">
            {service.features.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.1} distance="50px" duration="0.85s">
                <div
                  className="cuberto-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '220px',
                    height: '100%',
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#000',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '18px',
                      }}
                    >
                      <Check size={18} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontFamily: 'var(--font-display)' }}>
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: '#475569',
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container">
          <ScrollReveal distance="40px" duration="0.8s">
            <div style={{ marginBottom: '50px' }}>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: '#64748b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Sık Sorulanlar
              </span>
              <h2 style={{ fontSize: '2.8rem', marginTop: '8px', fontFamily: 'var(--font-display)' }}>
                Merak Edilenler
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ maxWidth: '860px' }}>
            {service.faq.map((item, idx) => (
              <ScrollReveal key={item.q} delay={idx * 0.08} distance="30px" duration="0.7s">
                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    aria-expanded={openFaqIndex === idx}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '26px 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-display)',
                      color: '#000',
                    }}
                  >
                    {item.q}
                    <ChevronDown
                      size={20}
                      style={{
                        flexShrink: 0,
                        transition: 'transform 0.3s',
                        transform: openFaqIndex === idx ? 'rotate(180deg)' : 'none',
                      }}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <p
                      style={{
                        color: '#475569',
                        fontSize: '1.02rem',
                        lineHeight: 1.7,
                        paddingBottom: '26px',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {item.a}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding"
        style={{ background: '#f8fafc', borderTop: '1px solid rgba(0,0,0,0.06)' }}
      >
        <div className="container">
          <ScrollReveal distance="40px" duration="0.8s">
            <div className="cuberto-card" style={{ textAlign: 'center', padding: '60px 30px' }}>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                  marginBottom: '16px',
                  fontFamily: 'var(--font-display)',
                }}
              >
                İhtiyacınızı konuşalım
              </h2>
              <p
                style={{
                  color: '#475569',
                  fontSize: '1.05rem',
                  maxWidth: '560px',
                  margin: '0 auto 32px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Durumunuzu anlatın, size uygun çözümü ve maliyeti net şekilde paylaşalım.
              </p>
              <a className="cb-btn cb-btn_cta -md -fill" href="/contacts">
                <span className="cb-btn_cta-title">İletişime Geçin</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
