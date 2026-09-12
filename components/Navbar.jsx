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

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="cb-navbar-strip">
        <div className="cb-navbar-container">
          <div className="cb-navbar-grid">
            
            {/* Left Column: Zenthra Bilişim Brand Logo */}
            <div className="cb-navbar-grid-col -left">
              <a href="/" className="cb-navbar-logo" aria-label="Zenthra Bilişim" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/logo.png" alt="Zenthra Bilişim Logo" style={{ height: '32px', width: 'auto', display: 'block' }} />
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span className="logo-text-bold">Zenthra</span>
                  <span className="logo-text-tag">bilişim</span>
                </div>
              </a>
            </div>

            {/* Right Column: Nav Links + Actions (Desktop) */}
            <div className="cb-navbar-grid-col -right cb-desktop-nav">
              <nav className="cb-navbar-navs">
                
                <div className="cb-navbar-nav">
                  <a className="cb-navbar-nav-toggle" href="/projects/erp">
                    <span className="cb-navbar-nav-title">
                      <span data-text="Zenthra Bilişim ERP" style={{ color: '#000000', fontWeight: 700 }}>Zenthra Bilişim ERP</span>
                    </span>
                  </a>
                </div>

                <div className="cb-navbar-nav">
                  <a className="cb-navbar-nav-toggle" href="/projects/depo-live">
                    <span className="cb-navbar-nav-title">
                      <span data-text="Zenthra Bilişim Depo Live" style={{ color: '#000000', fontWeight: 700 }}>Zenthra Bilişim Depo Live</span>
                    </span>
                  </a>
                </div>

                <div className="cb-navbar-nav">
                  <a className="cb-navbar-nav-toggle" href="/#services">
                    <span className="cb-navbar-nav-title">
                      <span data-text={t.nav.services}>{t.nav.services}</span>
                    </span>
                  </a>
                </div>

                <div className="cb-navbar-nav">
                  <a className="cb-navbar-nav-toggle" href="/#projects">
                    <span className="cb-navbar-nav-title">
                      <span data-text={t.nav.projects}>{t.nav.projects}</span>
                    </span>
                  </a>
                </div>

                <div className="cb-navbar-nav">
                  <a className="cb-navbar-nav-toggle" href="/#mission">
                    <span className="cb-navbar-nav-title">
                      <span data-text={t.nav.missionVision}>{t.nav.missionVision}</span>
                    </span>
                  </a>
                </div>

                <div className="cb-navbar-nav">
                  <a className="cb-navbar-nav-toggle" href="/#faq">
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
          <a href="/projects/erp" className="cb-mobile-nav-link" onClick={handleNavClick}>
            Zenthra Bilişim ERP
          </a>
          <a href="/projects/depo-live" className="cb-mobile-nav-link" onClick={handleNavClick}>
            Zenthra Bilişim Depo Live
          </a>
          <a href="/#services" className="cb-mobile-nav-link" onClick={handleNavClick}>
            {t.nav.services}
          </a>
          <a href="/#projects" className="cb-mobile-nav-link" onClick={handleNavClick}>
            {t.nav.projects}
          </a>
          <a href="/#mission" className="cb-mobile-nav-link" onClick={handleNavClick}>
            {t.nav.missionVision}
          </a>
          <a href="/#faq" className="cb-mobile-nav-link" onClick={handleNavClick}>
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
