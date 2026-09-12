'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Globe, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="cb-footer" style={{ background: '#000000', color: '#ffffff', paddingTop: '100px', paddingBottom: '60px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="cb-footer-container container">
        
        {/* Top Grid: Office Location on Left, Navigation Links on Right */}
        <div className="cb-footer-grid" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '48px', marginBottom: '80px' }}>
          
          {/* Left Column: Office Contacts */}
          <div className="cb-footer-grid-col -left" style={{ flex: '1', minWidth: '300px' }}>
            <div className="cb-footer-locations" style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
              
              {/* Single Office / Address */}
              <address className="cb-footer-location" style={{ fontStyle: 'normal' }}>
                <div className="cb-footer-location-action" style={{ marginBottom: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a className="cb-btn_cta -inverse-btn" href={`mailto:${t.contacts.email}`} style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
                    <span className="cb-btn_cta-title">
                      <span data-text={t.contacts.email}>{t.contacts.email}</span>
                    </span>
                  </a>

                  <a className="cb-btn_cta -inverse-btn" href="https://wa.me/905315800753?text=Merhaba,%20size%20zenthrabilisim.com%20web%20sitesi%20üzerinden%20ulaşıyorum." target="_blank" rel="noopener noreferrer" style={{ padding: '10px 24px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <MessageCircle size={16} color="#25D366" />
                    <span className="cb-btn_cta-title">
                      <span data-text={t.contacts.phone}>{t.contacts.phone}</span>
                    </span>
                  </a>
                </div>

                <div className="cb-footer-location-caption" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                  Zenthra Bilişim • Samsun
                </div>
                <div className="cb-footer-location-address" style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                  Samsun Atakum Atakent,<br /> Atakent Bulvarı
                </div>
              </address>

            </div>
          </div>

          {/* Right Column: 2-Column Links */}
          <div className="cb-footer-grid-col -right">
            <div className="cb-footer-navs" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px 48px' }}>
              <a className="cb-footer-nav" href="/projects/erp">
                <span className="cb-footer-nav-title"><span data-text="Zenthra Bilişim ERP" style={{ color: '#3b82f6' }}>Zenthra Bilişim ERP</span></span>
              </a>
              <a className="cb-footer-nav" href="/#services">
                <span className="cb-footer-nav-title"><span data-text={t.nav.services}>{t.nav.services}</span></span>
              </a>
              <a className="cb-footer-nav" href="/#projects">
                <span className="cb-footer-nav-title"><span data-text={t.nav.projects}>{t.nav.projects}</span></span>
              </a>
              <a className="cb-footer-nav" href="/#mission">
                <span className="cb-footer-nav-title"><span data-text={t.nav.missionVision}>{t.nav.missionVision}</span></span>
              </a>
              <a className="cb-footer-nav" href="/#faq">
                <span className="cb-footer-nav-title"><span data-text={t.nav.faq}>{t.nav.faq}</span></span>
              </a>
              <a className="cb-footer-nav" href="/contacts">
                <span className="cb-footer-nav-title"><span data-text={t.nav.contacts}>{t.nav.contacts}</span></span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Grid: Copyright & Social Circular Buttons */}
        <div className="cb-footer-bgrid" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px', paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          
          {/* Bottom Left Links & Copy */}
          <div className="cb-footer-bgrid-col -left" style={{ display: 'flex', alignItems: 'center', gap: '24px', fontSize: '0.85rem', color: '#64748b' }}>
            <a href="https://www.zenthrabilisim.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>zenthrabilisim.com</a>
            <span>2026, Zenthra Bilişim</span>
          </div>

          {/* Bottom Right Circular Social Buttons */}
          <div className="cb-footer-bgrid-col -right">
            <div className="cb-footer-socials" style={{ display: 'flex', gap: '12px' }}>
              <a className="cb-btn_round" href="https://wa.me/905315800753?text=Merhaba,%20size%20zenthrabilisim.com%20web%20sitesi%20üzerinden%20ulaşıyorum." target="_blank" rel="noopener noreferrer" title="WhatsApp"><MessageCircle size={18} /></a>
              <a className="cb-btn_round" href="https://www.zenthrabilisim.com" target="_blank" rel="noopener noreferrer" title="zenthrabilisim.com"><Globe size={18} /></a>
              <a className="cb-btn_round" href="https://www.linkedin.com/company/zenthra-bi%CC%87li%CC%87%C5%9Fi%CC%87m/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
