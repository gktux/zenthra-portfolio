'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const SERVICE_LINKS = {
  '01': '/hizmetler/ozel-yazilim',
  '02': '/hizmetler/kurumsal-it-bakim',
  '03': '/hizmetler/web-tasarim',
  '04': '/hizmetler/yazici-bakim-onarim',
  '05': '/hizmetler/pdks-personel-devam-kontrol-sistemi',
  '06': '/projects/depo-live',
};

const EXTRA_LINKS = [
  { href: '/sektorler', label: 'Sektörel çözümler' },
  { href: '/fiyatlar/depo-programi-fiyatlari', label: 'Depo programı fiyatları' },
  { href: '/fiyatlar/pdks-fiyatlari', label: 'PDKS fiyatları' },
  { href: '/fiyatlar/web-tasarim-fiyatlari', label: 'Web tasarım fiyatları' },
  { href: '/web-tasarim/samsun', label: 'Samsun web tasarım' },
  { href: '/pdks/samsun', label: 'Samsun PDKS' },
  { href: '/projects/erp', label: 'Zenthra ERP' },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding" style={{ background: '#fbfbfd', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container">
        
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {t.services.badge}
              </span>
              <h2 style={{ fontSize: '2.8rem', marginTop: '8px', fontFamily: "var(--font-display)" }}>
                {t.services.title}
              </h2>
            </div>
            <p style={{ color: '#86868b', maxWidth: '450px', fontSize: '1.05rem', fontFamily: "var(--font-body)" }}>
              {t.services.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Services List Grid with Staggered Scroll Reveal */}
        <div className="grid-2">
          {t.services.items.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.08}>
              <div className="cuberto-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '260px', height: '100%' }}>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#86868b', marginBottom: '16px', fontFamily: "var(--font-display)" }}>
                    {item.id}
                  </div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '12px', fontFamily: "var(--font-display)" }}>
                    <a href={SERVICE_LINKS[item.id] || '/hizmetler'} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {item.title}
                    </a>
                  </h3>
                  <p style={{ color: '#6e6e73', fontSize: '1rem', lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
                    {item.desc}
                  </p>
                </div>
                
                <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
                  <a href={SERVICE_LINKS[item.id] || '/hizmetler'} aria-hidden="true" tabIndex={-1} style={{
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

        <nav aria-label="Hizmet sayfaları" style={{ marginTop: '48px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <a href="/hizmetler" style={{ padding: '8px 16px', borderRadius: '999px', background: '#000', color: '#fff', textDecoration: 'none', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
            Tüm hizmetler
          </a>
          {EXTRA_LINKS.map((l) => (
            <a key={l.href} href={l.href} style={{ padding: '8px 16px', borderRadius: '999px', border: '1px solid #d2d2d7', color: '#1d1d1f', textDecoration: 'none', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}>
              {l.label}
            </a>
          ))}
        </nav>

      </div>
    </section>
  );
}
