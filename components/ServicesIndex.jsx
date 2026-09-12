'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesIndex({ services }) {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
      <Navbar />

      <section className="section-padding" style={{ paddingTop: '160px', background: '#ffffff' }}>
        <div className="container">
          <ScrollReveal distance="40px" duration="0.8s">
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Neler Yapıyoruz?
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                marginTop: '12px',
                marginBottom: '24px',
                fontFamily: 'var(--font-display)',
                lineHeight: 1.1,
              }}
            >
              Uçtan Uca Dijital Çözümler
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
              Yazılım geliştirmeden teknik servise kadar işletmenizin bilişim ihtiyacını tek elden
              karşılıyoruz. Aşağıdaki başlıklardan detaylara ulaşabilirsiniz.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="section-padding"
        style={{ background: '#f8fafc', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '60px' }}
      >
        <div className="container">
          <div className="grid-2">
            {services.map((item, idx) => (
              <ScrollReveal key={item.slug} delay={idx * 0.1} distance="50px" duration="0.85s">
                <a
                  href={`/hizmetler/${item.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
                >
                  <div
                    className="cuberto-card"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '260px',
                      height: '100%',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          color: '#94a3b8',
                          marginBottom: '16px',
                          fontFamily: 'var(--font-display)',
                        }}
                      >
                        {item.num}
                      </div>
                      <h2 style={{ fontSize: '1.6rem', marginBottom: '12px', fontFamily: 'var(--font-display)' }}>
                        {item.h1}
                      </h2>
                      <p
                        style={{
                          color: '#475569',
                          fontSize: '1rem',
                          lineHeight: 1.6,
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        {item.lead}
                      </p>
                    </div>

                    <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
                      <span
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: '#000000',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'transform 0.3s',
                        }}
                      >
                        <ArrowUpRight size={20} />
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
