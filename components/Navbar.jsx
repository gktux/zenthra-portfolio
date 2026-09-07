'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <div className="cb-navbar-strip">
      <div className="cb-navbar-container">
        <div className="cb-navbar-grid">
          
          {/* Left Column: Zenthra Bilişim Brand Logo */}
          <div className="cb-navbar-grid-col -left">
            <a href="/" className="cb-navbar-logo" aria-label="Zenthra Bilişim">
              <span className="logo-text-bold">Zenthra</span>
              <span className="logo-text-tag">bilişim</span>
            </a>
          </div>

          {/* Right Column: Nav Links + Actions */}
          <div className="cb-navbar-grid-col -right">
            <nav className="cb-navbar-navs">
              
              <div className="cb-navbar-nav">
                <a className="cb-navbar-nav-toggle" href="/projects/erp">
                  <span className="cb-navbar-nav-title">
                    <span data-text="Zenthra Bilişim ERP" style={{ color: '#000000', fontWeight: 700 }}>Zenthra Bilişim ERP</span>
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

        </div>
      </div>
    </div>
  );
}
