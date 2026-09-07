'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactsPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div style={{ background: '#ffffff', color: '#000000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Main Content: Pure White Background */}
      <main style={{ paddingTop: '180px', paddingBottom: '120px', flex: 1 }}>
        <div className="container">
          
          {/* Page Headline */}
          <div style={{ marginBottom: '60px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '12px' }}>
              {t.contacts.badge}
            </span>

            <h1 style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
              lineHeight: 1.05,
              fontWeight: 800,
              color: '#000000',
              letterSpacing: '-0.045em',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              marginBottom: '20px'
            }}>
              {t.contacts.title}
            </h1>

            <p style={{ fontSize: '1.2rem', color: '#475569', maxWidth: '680px', lineHeight: 1.5 }}>
              {t.contacts.subtitle}
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid-2" style={{ gap: '80px', alignItems: 'start' }}>
            
            {/* Left Column: Direct Office Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#000000', marginBottom: '16px' }}>
                  {t.contacts.infoTitle}
                </h2>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  Zenthra Bilişim ekibi olarak dijital projelerinize yön vermek ve sorularınızı yanıtlamak için buradayız.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '32px' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#000000', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Adres</div>
                    <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#000000' }}>{t.contacts.address}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#25D366', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Telefon & WhatsApp</div>
                    <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#000000', display: 'flex', items: 'center', gap: '12px' }}>
                      <span>{t.contacts.phone}</span>
                      <a
                        href="https://wa.me/905315800753?text=Merhaba,%20size%20zenthrabilisim.com%20web%20sitesi%20üzerinden%20ulaşıyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: '#25D366',
                          color: '#fff',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          padding: '4px 12px',
                          borderRadius: '12px',
                          textDecoration: 'none'
                        }}
                      >
                        WhatsApp'tan Yazın
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#000000', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>E-Posta</div>
                    <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#000000' }}>{t.contacts.email}</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Cuberto cb-input_light Minimalist Form */}
            <div style={{ padding: '0' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <CheckCircle size={54} color="#000000" style={{ margin: '0 auto 20px auto' }} />
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#000000', marginBottom: '10px' }}>
                    {t.contacts.sentSuccess}
                  </h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                  
                  {/* Cuberto Input: Name */}
                  <div className="cb-contact-group">
                    <div className="cb-input cb-input_light">
                      <div className="cb-input_light-box">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t.contacts.namePlaceholder}
                          aria-label={t.contacts.nameLabel}
                        />
                        <div className="cb-input_light-line"></div>
                      </div>
                    </div>
                  </div>

                  {/* Cuberto Input: Email */}
                  <div className="cb-contact-group">
                    <div className="cb-input cb-input_light">
                      <div className="cb-input_light-box">
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t.contacts.emailPlaceholder}
                          aria-label={t.contacts.emailLabel}
                        />
                        <div className="cb-input_light-line"></div>
                      </div>
                    </div>
                  </div>

                  {/* Cuberto Input: Message */}
                  <div className="cb-contact-group">
                    <div className="cb-input cb-input_light">
                      <div className="cb-input_light-box">
                        <textarea
                          name="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={t.contacts.messagePlaceholder}
                          aria-label={t.contacts.messageLabel}
                        />
                        <div className="cb-input_light-line"></div>
                      </div>
                    </div>
                  </div>

                  {/* Cuberto CTA Submit Button */}
                  <div style={{ marginTop: '12px' }}>
                    <button type="submit" className="cb-btn_cta" style={{ padding: '18px 48px', fontSize: '1.05rem' }}>
                      <span className="cb-btn_cta-title">
                        <span data-text={t.contacts.submitBtn}>{t.contacts.submitBtn}</span>
                      </span>
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
