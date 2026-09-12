'use client';

import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';

export default function Clients() {
  const { lang } = useLanguage();
  const isTr = lang === 'tr';

  const references = [
    { name: 'DOĞUŞ MEDİKAL', category: isTr ? 'Medikal & Sağlık' : 'Medical & Health' },
    { name: 'LORECA', category: isTr ? 'Kurumsal & Yazılım' : 'Corporate & Software' },
    { name: 'EXE GRUP', category: isTr ? 'Grup Şirketleri & Danışmanlık' : 'Group & Consulting' },
    { name: 'ZENTEK MAKİNE', category: isTr ? 'Endüstri & İmalat' : 'Industry & Manufacturing' },
    { name: 'REVİZYON PRİME', category: isTr ? 'Mühendislik & Proje' : 'Engineering & Project' },
    { name: 'BİLİM FORMÜLÜ', category: isTr ? 'Eğitim & Ar-Ge' : 'Education & R&D' }
  ];

  return (
    <section style={{ background: '#ffffff', padding: '70px 0 90px 0', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <ScrollReveal distance="30px" duration="0.8s">
          
          {/* Header Tag & Title */}
          <div style={{ marginBottom: '44px' }}>
            <span style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              color: '#64748b',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              background: '#f1f5f9',
              padding: '6px 16px',
              borderRadius: '20px',
              display: 'inline-block'
            }}>
              {isTr ? 'Referanslarımız' : 'Our References'}
            </span>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginTop: '14px',
              fontFamily: '"SF Pro Display", sans-serif',
              letterSpacing: '-0.02em'
            }}>
              {isTr ? 'Geliştirdiğimiz Ve Hizmet Verdiğimiz İş Ortaklarımız' : 'Trusted Partners Growing With Us'}
            </h3>
          </div>

          {/* Reference Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '20px',
            maxWidth: '1140px',
            margin: '0 auto'
          }}>
            {references.map((ref, idx) => (
              <div
                key={idx}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '24px 16px',
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '110px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#000000';
                  e.currentTarget.style.borderColor = '#000000';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.18)';
                  const nameEl = e.currentTarget.querySelector('.ref-name');
                  if (nameEl) nameEl.style.color = '#ffffff';
                  const catEl = e.currentTarget.querySelector('.ref-cat');
                  if (catEl) catEl.style.color = '#94a3b8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  const nameEl = e.currentTarget.querySelector('.ref-name');
                  if (nameEl) nameEl.style.color = '#0f172a';
                  const catEl = e.currentTarget.querySelector('.ref-cat');
                  if (catEl) catEl.style.color = '#64748b';
                }}
              >
                <div
                  className="ref-name"
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    letterSpacing: '0.04em',
                    fontFamily: '"SF Pro Display", sans-serif',
                    marginBottom: '4px',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {ref.name}
                </div>
                <div
                  className="ref-cat"
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    color: '#64748b',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {ref.category}
                </div>
              </div>
            ))}
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
