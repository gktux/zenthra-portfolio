'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { ChevronDown, Check, ArrowRight, Clock } from 'lucide-react';

export default function RehberPage({ yazi, ilgiliYazilar = [] }) {
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
              style={{ fontSize: '0.9rem', color: '#86868b', marginBottom: '24px', fontFamily: 'var(--font-body)' }}
            >
              <a href="/" style={{ color: '#86868b', textDecoration: 'none' }}>Ana Sayfa</a>
              <span style={{ margin: '0 8px' }}>/</span>
              <a href="/rehber" style={{ color: '#86868b', textDecoration: 'none' }}>Rehber</a>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: '#6e6e73' }}>{yazi.badge}</span>
            </nav>

            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#86868b',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              {yazi.badge}
            </span>

            <h1
              style={{
                fontSize: 'clamp(2.1rem, 5vw, 3.2rem)',
                marginTop: '12px',
                marginBottom: '20px',
                fontFamily: 'var(--font-display)',
                lineHeight: 1.12,
                maxWidth: '900px',
              }}
            >
              {yazi.h1}
            </h1>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                color: '#86868b',
                fontSize: '0.9rem',
                marginBottom: '24px',
                fontFamily: 'var(--font-body)',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} /> {yazi.okuma} okuma
              </span>
              <span>Güncelleme: {yazi.guncelleme}</span>
            </div>

            <p
              style={{
                color: '#6e6e73',
                fontSize: '1.15rem',
                lineHeight: 1.75,
                maxWidth: '760px',
                fontFamily: 'var(--font-body)',
              }}
            >
              {yazi.lead}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* İçindekiler */}
      <section style={{ background: '#ffffff', paddingBottom: '20px' }}>
        <div className="container">
          <ScrollReveal distance="30px" duration="0.7s">
            <div
              style={{
                maxWidth: '760px',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '16px',
                padding: '24px 28px',
                background: '#fbfbfd',
              }}
            >
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#86868b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                İçindekiler
              </span>
              <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none' }}>
                {yazi.bolumler.map((b, i) => (
                  <li key={i} style={{ marginBottom: '8px' }}>
                    <a
                      href={`#bolum-${i}`}
                      style={{
                        color: '#1d1d1f',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.98rem',
                      }}
                    >
                      {i + 1}. {b.h2}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gövde */}
      <section className="section-padding" style={{ background: '#ffffff', paddingTop: '40px' }}>
        <div className="container">
          <article style={{ maxWidth: '760px' }}>
            {yazi.bolumler.map((bolum, idx) => (
              <ScrollReveal key={idx} distance="30px" duration="0.7s">
                <div id={`bolum-${idx}`} style={{ marginBottom: '52px', scrollMarginTop: '120px' }}>
                  <h2
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      fontFamily: 'var(--font-display)',
                      marginBottom: '18px',
                      lineHeight: 1.25,
                    }}
                  >
                    {bolum.h2}
                  </h2>

                  {bolum.paragraflar?.map((p, i) => (
                    <p
                      key={i}
                      style={{
                        color: '#6e6e73',
                        fontSize: '1.05rem',
                        lineHeight: 1.8,
                        marginBottom: '16px',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {p}
                    </p>
                  ))}

                  {bolum.liste && (
                    <ul style={{ margin: '18px 0 0', padding: 0, listStyle: 'none' }}>
                      {bolum.liste.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            gap: '12px',
                            alignItems: 'flex-start',
                            marginBottom: '12px',
                            color: '#1d1d1f',
                            fontFamily: 'var(--font-body)',
                            lineHeight: 1.65,
                          }}
                        >
                          <Check size={18} style={{ color: '#0071e3', flexShrink: 0, marginTop: '3px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ScrollReveal>
            ))}

            {/* Ürün CTA */}
            <ScrollReveal distance="30px" duration="0.7s">
              <div
                style={{
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '20px',
                  padding: '32px',
                  background: '#fbfbfd',
                  marginBottom: '60px',
                }}
              >
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#6e6e73',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Zenthra Depo Live
                </span>
                <h2
                  style={{
                    fontSize: '1.65rem',
                    fontFamily: 'var(--font-display)',
                    margin: '10px 0 14px',
                    lineHeight: 1.3,
                  }}
                >
                  Bu rehberdeki her adımı yapan bir depo yönetim programı
                </h2>
                <p
                  style={{
                    color: '#6e6e73',
                    lineHeight: 1.75,
                    fontFamily: 'var(--font-body)',
                    marginBottom: '22px',
                  }}
                >
                  Depo Live; mal kabul, raf yerleştirme, sipariş toplama, depoyu kapatmadan sayım ve sevkiyatı tek
                  sistemde yürütür. Personel kendi telefonunu el terminali olarak kullanır, stok raf bazında anlık akar.
                </p>
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <a className="cb-btn cb-btn_cta -md -fill" href="/projects/depo-live">
                    <span className="cb-btn_cta-title">Depo Live&apos;ı İnceleyin</span>
                  </a>
                  <a
                    href="/contacts"
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
                    Ücretsiz Demo Talep Edin <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* SSS */}
            <ScrollReveal distance="30px" duration="0.7s">
              <h2
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.1rem)',
                  fontFamily: 'var(--font-display)',
                  marginBottom: '24px',
                }}
              >
                Sık Sorulan Sorular
              </h2>
            </ScrollReveal>

            <div style={{ marginBottom: '60px' }}>
              {yazi.faq.map((f, idx) => (
                <div
                  key={idx}
                  style={{
                    borderBottom: '1px solid rgba(0,0,0,0.08)',
                    padding: '20px 0',
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    aria-expanded={openFaqIndex === idx}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'var(--font-body)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#1d1d1f',
                    }}
                  >
                    {f.soru}
                    <ChevronDown
                      size={20}
                      style={{
                        flexShrink: 0,
                        transition: 'transform 0.25s ease',
                        transform: openFaqIndex === idx ? 'rotate(180deg)' : 'none',
                      }}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <p
                      style={{
                        marginTop: '14px',
                        color: '#6e6e73',
                        lineHeight: 1.8,
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {f.cevap}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* İlgili yazılar */}
            {ilgiliYazilar.length > 0 && (
              <ScrollReveal distance="30px" duration="0.7s">
                <h2
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'var(--font-display)',
                    marginBottom: '20px',
                  }}
                >
                  İlgili Rehberler
                </h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {ilgiliYazilar.map((r) => (
                    <a
                      key={r.slug}
                      href={`/rehber/${r.slug}`}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '16px',
                        border: '1px solid rgba(0,0,0,0.08)',
                        borderRadius: '14px',
                        padding: '18px 22px',
                        textDecoration: 'none',
                        color: '#1d1d1f',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 600,
                      }}
                    >
                      {r.h1}
                      <ArrowRight size={18} style={{ color: '#0071e3', flexShrink: 0 }} />
                    </a>
                  ))}
                </div>
              </ScrollReveal>
            )}
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
