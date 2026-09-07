'use client';

import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';

export default function Clients() {
  const { lang } = useLanguage();

  const clientLogos = [
    { name: 'SİBERAY', font: 'sans-serif' },
    { name: 'ZENTEK MAKİNA', font: 'sans-serif' },
    { name: 'REVİZYON PRİME', font: 'sans-serif' }
  ];

  return (
    <section style={{ background: '#ffffff', padding: '60px 0 90px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <ScrollReveal distance="30px" duration="0.8s">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(30px, 6vw, 80px)',
            flexWrap: 'wrap',
            opacity: 0.6,
            filter: 'grayscale(100%)'
          }}>
            {clientLogos.map((client, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: '#000000',
                  letterSpacing: '0.05em',
                  fontFamily: client.font
                }}
              >
                {client.name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
