'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);

    if (href && href.includes('#')) {
      const hash = href.substring(href.indexOf('#'));
      const path = href.substring(0, href.indexOf('#'));

      if (typeof window !== 'undefined' && (window.location.pathname === '/' || path === '' || path === '/')) {
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          if (e) e.preventDefault();
          
          if (window.lenis) {
            window.lenis.scrollTo(targetEl, { offset: -70, duration: 1.2 });
          } else {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          
          window.history.pushState(null, '', hash);
        }
      }
    }
  };

  return (
    <>
      <div className="cb-navbar-strip">
        <div className="cb-navbar-container">
          <div className="cb-navbar-grid">
            
            {/* Left Column: Zenthra Bilişim Brand Logo */}
            <div className="cb-navbar-grid-col -left" style={{ display: 'flex', alignItems: 'center' }}>
              <a href="/" className="cb-navbar-logo" aria-label="Zenthra Bilişim" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                <span className="logo-text-bold" style={{ color: '#000000', fontWeight: 700, fontSize: '1.45rem', letterSpacing: '-0.03em', lineHeight: 1, whiteSpace: 'nowrap', transform: 'translateY(-2px)' }}>
                  ZENTHRA BİLİŞİM
                </span>
              </a>
            </div>

            {/* Right Column: Nav Links + Actions (Desktop) */}
            <div className="cb-navbar-grid-col -right cb-desktop-nav">
              <nav className="cb-navbar-navs">
                
                <div className="cb-navbar-nav">
                  <a className="cb-navbar-nav-toggle" href="/projects/depo-live" onClick={(e) => handleNavClick(e, '/projects/depo-live')}>
                    <span className="cb-navbar-nav-title">
                      <span data-text="Depo Live" style={{ color: '#000000', fontWeight: 600 }}>Depo Live</span>
                    </span>
                  </a>
                </div>

                <div className="cb-navbar-nav">
                  <a className="cb-navbar-nav-toggle" href="/projects/erp" onClick={(e) => handleNavClick(e, '/projects/erp')}>
                    <span className="cb-navbar-nav-title">
                      <span data-text="ERP" style={{ color: '#000000', fontWeight: 600 }}>ERP</span>
                    </span>
                  </a>
                </div>

                <div className="cb-navbar-nav">
                  <a className="cb-navbar-nav-toggle" href="https://hizliokuma.zenthrabilisim.com.tr" target="_blank" rel="noopener noreferrer">
                    <span className="cb-navbar-nav-title">
                      <span data-text="Zenthra Odak" style={{ color: '#000000', fontWeight: 600 }}>Zenthra Odak</span>
                    </span>
                  </a>
                </div>

                <div className="cb-navbar-nav">
                  <a className="cb-navbar-nav-toggle" href="/#services" onClick={(e) => handleNavClick(e, '/#services')}>
                    <span className="cb-navbar-nav-title">
                      <span data-text={t.nav.services}>{t.nav.services}</span>
                    </span>
                  </a>
                </div>

                <div className="cb-navbar-nav">
                  <a className="cb-navbar-nav-toggle" href="/#projects" onClick={(e) => handleNavClick(e, '/#projects')}>
                    <span className="cb-navbar-nav-title">
                      <span data-text={t.nav.projects}>{t.nav.projects}</span>
                    </span>
                  </a>
                </div>

                <div className="cb-navbar-nav">
                  <a className="cb-navbar-nav-toggle" href="/#mission" onClick={(e) => handleNavClick(e, '/#mission')}>
                    <span className="cb-navbar-nav-title">
                      <span data-text={t.nav.missionVision}>{t.nav.missionVision}</span>
                    </span>
                  </a>
                </div>

                <div className="cb-navbar-nav">
                  <a className="cb-navbar-nav-toggle" href="/rehber" onClick={(e) => handleNavClick(e, '/rehber')}>
                    <span className="cb-navbar-nav-title">
                      <span data-text="Rehber" style={{ color: '#000000', fontWeight: 600 }}>Rehber</span>
                    </span>
                  </a>
                </div>

                <div className="cb-navbar-nav">
                  <a className="cb-navbar-nav-toggle" href="/#faq" onClick={(e) => handleNavClick(e, '/#faq')}>
                    <span className="cb-navbar-nav-title">
                      <span data-text={t.nav.faq}>{t.nav.faq}</span>
                    </span>
                  </a>
                </div>

                {/* Language Switcher */}
                <div className="cb-navbar-nav">
                  <button onClick={toggleLanguage} className="cb-lang-toggle" title="Dil Değiştir / Switch Language">
                    <Globe size={14} />
                    <span>{t.nav.langSwitch}</span>
                  </button>
                </div>

              </nav>

              {/* Contacts Pill Button Action -> Links to /contacts */}
              <div className="cb-navbar-actions">
                <div className="cb-navbar-action">
                  <a className="cb-btn cb-btn_cta -md -fill" href="/contacts">
                    <span className="cb-btn_cta-title">
                      <span data-text={t.nav.contacts}>{t.nav.contacts}</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile: Hamburger Button */}
            <div className="cb-mobile-menu-trigger">
              <button
                className={`cb-hamburger ${mobileMenuOpen ? '-active' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menü Aç/Kapat"
              >
                <span className="cb-hamburger-line"></span>
                <span className="cb-hamburger-line"></span>
                <span className="cb-hamburger-line"></span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      <div className={`cb-mobile-overlay ${mobileMenuOpen ? '-open' : ''}`}>
        <nav className="cb-mobile-overlay-nav">
          <a href="/projects/depo-live" className="cb-mobile-nav-link" onClick={(e) => handleNavClick(e, '/projects/depo-live')}>
            Depo Live — Depo Programı
          </a>
          <a href="/projects/erp" className="cb-mobile-nav-link" onClick={(e) => handleNavClick(e, '/projects/erp')}>
            Zenthra ERP
          </a>
          <a href="https://hizliokuma.zenthrabilisim.com.tr" target="_blank" rel="noopener noreferrer" className="cb-mobile-nav-link">
            Zenthra Odak
          </a>
          <a href="/#services" className="cb-mobile-nav-link" onClick={(e) => handleNavClick(e, '/#services')}>
            {t.nav.services}
          </a>
          <a href="/#projects" className="cb-mobile-nav-link" onClick={(e) => handleNavClick(e, '/#projects')}>
            {t.nav.projects}
          </a>
          <a href="/#mission" className="cb-mobile-nav-link" onClick={(e) => handleNavClick(e, '/#mission')}>
            {t.nav.missionVision}
          </a>
          <a href="/rehber" className="cb-mobile-nav-link" onClick={(e) => handleNavClick(e, '/rehber')}>
            Rehber
          </a>
          <a href="/#faq" className="cb-mobile-nav-link" onClick={(e) => handleNavClick(e, '/#faq')}>
            {t.nav.faq}
          </a>

          <div className="cb-mobile-overlay-actions">
            <button onClick={() => { toggleLanguage(); handleNavClick(); }} className="cb-lang-toggle -mobile">
              <Globe size={16} />
              <span>{t.nav.langSwitch}</span>
            </button>
            <a className="cb-btn cb-btn_cta -md -fill" href="/contacts" onClick={handleNavClick}>
              <span className="cb-btn_cta-title">
                <span data-text={t.nav.contacts}>{t.nav.contacts}</span>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
