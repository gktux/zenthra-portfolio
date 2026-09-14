import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { rehberListesi } from '@/data/rehberData';
import { BreadcrumbSchema } from '@/components/StructuredData';

const BASE = 'https://www.zenthrabilisim.com';

export const metadata = {
  title: 'Depo ve Stok Yönetimi Rehberi | Zenthra Bilişim',
  description:
    'Depo yönetim programı seçimi, stok takibi, WMS, depo sayımı ve el terminali kullanımı üzerine uygulamalı rehberler. Sahadan çıkmış, uygulanabilir bilgi.',
  keywords:
    'depo yönetimi rehberi, stok takibi rehberi, WMS rehberi, depo sayımı, depo yönetim programı seçimi',
  alternates: { canonical: '/rehber' },
  openGraph: {
    title: 'Depo ve Stok Yönetimi Rehberi | Zenthra Bilişim',
    description:
      'Depo yönetim programı seçimi, stok takibi, WMS, depo sayımı ve el terminali kullanımı üzerine uygulamalı rehberler.',
    url: '/rehber',
    siteName: 'Zenthra Bilişim',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: BASE },
          { name: 'Rehber', url: `${BASE}/rehber` },
        ]}
      />
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
        <Navbar />

        <section className="section-padding" style={{ paddingTop: '160px', background: '#ffffff' }}>
          <div className="container">
            <ScrollReveal distance="40px" duration="0.8s">
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#86868b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Rehber
              </span>
              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                  marginTop: '12px',
                  marginBottom: '20px',
                  fontFamily: 'var(--font-display)',
                  lineHeight: 1.12,
                  maxWidth: '900px',
                }}
              >
                Depo ve Stok Yönetimi Rehberi
              </h1>
              <p
                style={{
                  color: '#6e6e73',
                  fontSize: '1.15rem',
                  lineHeight: 1.75,
                  maxWidth: '740px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Depo yönetim programı seçiminden sayım yöntemlerine, WMS kavramından el terminali kullanımına kadar
                sahada işe yarayan rehberler. Hepsi Zenthra Depo Live kurulumlarında karşılaştığımız gerçek
                senaryolardan çıktı.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section
          className="section-padding"
          style={{ background: '#fbfbfd', borderTop: '1px solid rgba(0,0,0,0.06)' }}
        >
          <div className="container">
            <div className="grid-2">
              {rehberListesi.map((y) => (
                <ScrollReveal key={y.slug} distance="30px" duration="0.7s">
                  <a
                    href={`/rehber/${y.slug}`}
                    style={{
                      display: 'block',
                      background: '#ffffff',
                      border: '1px solid rgba(0,0,0,0.08)',
                      borderRadius: '18px',
                      padding: '30px',
                      textDecoration: 'none',
                      height: '100%',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: '#6e6e73',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {y.badge}
                    </span>
                    <h2
                      style={{
                        fontSize: '1.4rem',
                        fontFamily: 'var(--font-display)',
                        margin: '10px 0 12px',
                        lineHeight: 1.3,
                        color: '#1d1d1f',
                      }}
                    >
                      {y.h1}
                    </h2>
                    <p
                      style={{
                        color: '#6e6e73',
                        lineHeight: 1.7,
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.98rem',
                        margin: 0,
                      }}
                    >
                      {y.lead.length > 180 ? `${y.lead.slice(0, 180)}…` : y.lead}
                    </p>
                    <span
                      style={{
                        display: 'inline-block',
                        marginTop: '16px',
                        color: '#86868b',
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {y.okuma} okuma
                    </span>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
