'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';
import { CheckCircle2, ChevronDown, Check, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { zenthraDepoLiveData } from '@/data/zenthraDepoLiveData';
import KvkkCheckboxes from '@/components/KvkkCheckboxes';

const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwcnVycJgdY5JIEB_vtCYa-JFifDpqZ7OwmyPpWSmDf-o6mY7JAu4s-0VeWQOAqZ-4j/exec";

export default function DepoLiveProjectPage() {
  const { lang } = useLanguage();
  const isTr = lang === 'tr';
  const data = isTr ? zenthraDepoLiveData.tr : zenthraDepoLiveData.en;

  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  
  // Cuberto style active accordion card index
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);
  const cardRefs = useRef([]);

  // Demo Form State
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    fullName: '',
    businessType: isTr ? 'Depo / Lojistik' : 'Warehouse / Logistics',
    phone: '',
    email: ''
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const search = window.location.search;
      if (hash === '#iletisim' || hash === '#demo' || search.includes('demo=true')) {
        setShowDemoForm(true);
      }
    }
  }, []);

  const [kvkkAccepted, setKvkkAccepted] = useState(false);
  const [commercialConsent, setCommercialConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    if (!demoFormData.fullName || !demoFormData.phone || !kvkkAccepted) return;
    
    setIsSubmitting(true);

    // Security & Sanitization: Clean formula characters (=, +, -, @)
    const sanitize = (text) => {
      if (typeof text !== 'string') return '';
      let cleaned = text.trim();
      if (/^[=+\-@]/.test(cleaned)) {
        cleaned = "'" + cleaned;
      }
      return cleaned;
    };

    const safeData = {
      fullName: sanitize(demoFormData.fullName),
      businessType: sanitize(demoFormData.businessType),
      phone: sanitize(demoFormData.phone),
      email: sanitize(demoFormData.email),
      product: 'Zenthra Bilişim Depo Live',
      timestamp: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })
    };

    try {
      const formData = new URLSearchParams();
      formData.append('fullName', safeData.fullName);
      formData.append('businessType', safeData.businessType);
      formData.append('phone', safeData.phone);
      formData.append('email', safeData.email);
      formData.append('product', safeData.product);
      formData.append('kvkkConsent', kvkkAccepted ? 'Evet (Kabul Edildi)' : 'Hayır');
      formData.append('commercialConsent', commercialConsent ? 'Evet (İzin Verildi)' : 'Hayır');
      formData.append('marketingConsent', marketingConsent ? 'Evet (İzin Verildi)' : 'Hayır');
      formData.append('timestamp', safeData.timestamp);

      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData.toString()
      });

      setIsSubmitting(false);
      setDemoSubmitted(true);
      
      setTimeout(() => {
        setDemoSubmitted(false);
        setShowDemoForm(false);
        setDemoFormData({ fullName: '', businessType: isTr ? 'Depo / Lojistik' : 'Warehouse / Logistics', phone: '', email: '' });
      }, 4000);
    } catch (err) {
      console.error('Form gönderim hatası:', err);
      setIsSubmitting(false);
      setDemoSubmitted(true);
      setTimeout(() => {
        setDemoSubmitted(false);
        setShowDemoForm(false);
        setDemoFormData({ fullName: '', businessType: isTr ? 'Depo / Lojistik' : 'Warehouse / Logistics', phone: '', email: '' });
      }, 4000);
    }
  };

  // Smooth Scroll-Driven Auto-Expand (Cuberto style smooth trigger)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          cardRefs.current.forEach((card, index) => {
            if (!card) return;
            const rect = card.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top <= windowHeight * 0.58 && rect.bottom >= windowHeight * 0.28) {
              setActiveWhyIndex(index);
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ background: '#ffffff', color: '#000000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero Showcase Section */}
      <section style={{ paddingTop: '180px', paddingBottom: '70px', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
        <div className="container">
          
          <ScrollReveal distance="40px" duration="0.8s">
            <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>

              <span style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                display: 'inline-block',
                marginBottom: '16px',
                background: '#e2e8f0',
                padding: '6px 16px',
                borderRadius: '20px'
              }}>
                {isTr ? 'Canlı Depo & Stok Otomasyonu' : 'Live WMS & Inventory Automation'}
              </span>

              <h1 style={{
                fontSize: 'clamp(2.4rem, 5vw, 4.1rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                color: '#0f172a',
                marginBottom: '24px',
                fontFamily: '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
              }}>
                {data.hero.anaBaslik}
              </h1>

              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                color: '#475569',
                lineHeight: 1.65,
                maxWidth: '840px',
                margin: '0 auto 32px auto',
                fontFamily: "var(--font-body)"
              }}>
                {data.hero.altBaslik}
              </p>

              {/* 14-Day Free Trial CTA Block */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '40px'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(37, 99, 235, 0.08)',
                  border: '1px solid rgba(37, 99, 235, 0.25)',
                  color: '#2563eb',
                  padding: '8px 20px',
                  borderRadius: '30px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em'
                }}>
                  <Sparkles size={16} />
                  <span>{data.freeTrialBadge}</span>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '16px',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <a
                    href="https://app.zenthrabilisim.com.tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#2563eb',
                      color: '#ffffff',
                      padding: '18px 36px',
                      borderRadius: '50px',
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      boxShadow: '0 12px 30px rgba(37, 99, 235, 0.35)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{isTr ? '14 Gün Ücretsiz Deneyin' : 'Start 14-Day Free Trial'}</span>
                    <ExternalLink size={18} />
                  </a>

                  <button
                    onClick={() => {
                      setShowDemoForm(true);
                      const el = document.getElementById('iletisim');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      background: '#0f172a',
                      color: '#ffffff',
                      padding: '18px 32px',
                      borderRadius: '50px',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <span>{isTr ? 'Canlı Demo Talep Et' : 'Request Live Demo'}</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
                
                <span style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: 600 }}>
                  {isTr ? 'Anında Kurulumsuz Deneyin: app.zenthrabilisim.com.tr' : 'Instant Cloud Access: app.zenthrabilisim.com.tr'}
                </span>
              </div>

              {/* Metrik Grid */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '24px',
                flexWrap: 'wrap',
                marginTop: '40px'
              }}>
                {data.hero.metrikler.map((m, idx) => (
                  <div key={idx} style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '24px',
                    padding: '24px 36px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '20px',
                    textAlign: 'left'
                  }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#000000', fontFamily: '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                      {m.deger}
                    </div>
                    <div style={{ fontSize: '0.95rem', color: '#475569', fontWeight: 600, fontFamily: "var(--font-body)", maxWidth: '200px', lineHeight: 1.35 }}>
                      {m.aciklama}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </ScrollReveal>

          {/* Apple Monitor Mockup Display Container */}
          <ScrollReveal distance="50px" duration="0.9s" delay={0.15}>
            <div style={{
              marginTop: '50px',
              width: '100%',
              maxWidth: '1200px',
              margin: '50px auto 0 auto',
              borderRadius: '24px',
              background: '#161922',
              padding: '12px 12px 0 12px',
              boxShadow: '0 35px 80px rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.12)'
            }}>
              {/* Apple Window Header Dots */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px 14px 12px'
              }}>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
                <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: '#64748b', fontWeight: 600, fontFamily: 'monospace' }}>app.zenthrabilisim.com.tr</span>
              </div>

              {/* Screen Display Image */}
              <div style={{
                borderRadius: '16px 16px 0 0',
                overflow: 'hidden',
                background: '#090d16',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <img
                  src="/depo-live.png"
                  alt="Zenthra Bilişim Depo Live Sistem Ekranı"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 6 Modules / Capabilities Grid Section */}
      <section style={{ padding: '100px 0', background: '#ffffff' }}>
        <div className="container">
          
          <ScrollReveal distance="40px" duration="0.8s">
            <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px auto' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.14em', display: 'block', marginBottom: '12px' }}>
                {isTr ? 'Uçtan Uca Depo Yetenekleri' : 'End-to-End WMS Capabilities'}
              </span>
              <h2 style={{ fontSize: '2.6rem', fontWeight: 500, color: '#000000', letterSpacing: '-0.025em', fontFamily: "var(--font-display)", marginBottom: '16px' }}>
                {isTr ? 'Deponuzu Dönüştüren 6 Temel Özellik' : '6 Core Capabilities Powering Your Warehouse'}
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
                {isTr
                  ? "Mal kabulden kargolamaya kadar her adımı dijitalleştirin, el terminalleri ile insan hatasını sıfırlayın."
                  : "Digitize every step from goods receipt to dispatch; eliminate manual entry errors using handheld terminals."}
              </p>
            </div>
          </ScrollReveal>

          {/* 6 Cards Grid Layout */}
          <div className="grid-3" style={{ gap: '28px' }}>
            {data.moduller.map((mod, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.06} distance="40px" duration="0.8s">
                <div className="cuberto-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: '36px 30px' }}>
                  <div>
                    {/* Title */}
                    <h3 style={{
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      marginBottom: '12px',
                      color: '#000000',
                      fontFamily: '"SF Pro Display", "Plus Jakarta Sans", "Helvetica Neue", Arial, sans-serif',
                      letterSpacing: '-0.025em'
                    }}>
                      {mod.modulAdi}
                    </h3>

                    {/* Description */}
                    <p style={{
                      color: '#475569',
                      fontSize: '0.98rem',
                      lineHeight: 1.6,
                      marginBottom: '22px',
                      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>
                      {mod.aciklama}
                    </p>

                    {/* Bullet Feature List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px', borderTop: '1px solid #e2e8f0', paddingTop: '18px' }}>
                      {mod.ozellikler.map((oz, oIdx) => (
                        <div key={oIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <CheckCircle2 size={16} color="#0f172a" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span style={{
                            fontSize: '0.86rem',
                            color: '#1e293b',
                            lineHeight: 1.5,
                            fontWeight: 500,
                            fontFamily: '"SF Pro Text", "Roboto", "Segoe UI", sans-serif'
                          }}>
                            {oz}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Zenthra Bilişim Depo Live */}
      <section style={{ padding: '120px 0', background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container">
          <ScrollReveal distance="50px" duration="0.85s">
            
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px auto' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.14em', display: 'block', marginBottom: '12px' }}>
                {isTr ? 'Neden Zenthra Bilişim Depo Live?' : 'Why Choose Zenthra Bilişim Depo Live?'}
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: '#000000', marginBottom: '16px', lineHeight: 1.15, fontFamily: "var(--font-display)", letterSpacing: '-0.025em' }}>
                {isTr ? 'Depo Operasyonlarınız İçin Öne Çıkan Değerler' : 'Distinct Advantages Designed for Modern Logistics'}
              </h2>
            </div>

            {/* Pure Monochromatic Cuberto Cards */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {data.nedenBiz.map((item, idx) => {
                const isActive = activeWhyIndex === idx;
                return (
                  <div
                    key={idx}
                    ref={(el) => (cardRefs.current[idx] = el)}
                    onClick={() => setActiveWhyIndex(idx)}
                    onMouseEnter={() => setActiveWhyIndex(idx)}
                    style={{
                      background: isActive ? '#000000' : '#f1f5f9',
                      color: isActive ? '#ffffff' : '#000000',
                      borderRadius: '32px',
                      padding: isActive ? 'clamp(24px, 4vw, 44px) clamp(20px, 4vw, 54px)' : 'clamp(20px, 4vw, 36px) clamp(20px, 4vw, 54px)',
                      cursor: 'pointer',
                      transition: 'background-color 0.75s cubic-bezier(0.16, 1, 0.3, 1), color 0.75s cubic-bezier(0.16, 1, 0.3, 1), padding 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.75s ease',
                      boxShadow: isActive ? '0 28px 60px rgba(0, 0, 0, 0.24)' : 'none',
                      position: 'relative',
                      overflow: 'hidden',
                      border: isActive ? '1px solid #000000' : '1px solid #e2e8f0',
                      transform: isActive ? 'scale(1.012)' : 'scale(1)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%' }}>
                      
                      {/* Left: Title & Expandable Description */}
                      <div style={{ flex: 1, paddingRight: '40px' }}>
                        <h3 style={{
                          fontSize: isActive ? '2.1rem' : '1.55rem',
                          fontWeight: 800,
                          color: isActive ? '#ffffff' : '#0f172a',
                          fontFamily: '"SF Pro Display", "Plus Jakarta Sans", sans-serif',
                          transition: 'font-size 0.65s cubic-bezier(0.16, 1, 0.3, 1), color 0.5s ease',
                          letterSpacing: '-0.025em',
                          margin: 0
                        }}>
                          {item.baslik}
                        </h3>

                        {/* Modern CSS Grid 1fr / 0fr Smooth Animation */}
                        <div style={{
                          display: 'grid',
                          gridTemplateRows: isActive ? '1fr' : '0fr',
                          transition: 'grid-template-rows 0.75s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}>
                          <div style={{ overflow: 'hidden' }}>
                            <p style={{
                              color: '#cbd5e1',
                              fontSize: '1.25rem',
                              lineHeight: 1.7,
                              maxWidth: '780px',
                              marginTop: '20px',
                              fontFamily: '"Inter", sans-serif',
                              fontWeight: 400,
                              opacity: isActive ? 1 : 0,
                              transform: isActive ? 'translateY(0)' : 'translateY(-12px)',
                              transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s'
                            }}>
                              {item.aciklama}
                            </p>
                          </div>
                        </div>

                      </div>

                      {/* Right: Number Badge */}
                      <div style={{
                        fontSize: '1.75rem',
                        fontWeight: 800,
                        color: isActive ? '#ffffff' : '#94a3b8',
                        fontFamily: '"SF Pro Display", sans-serif',
                        flexShrink: 0,
                        transition: 'color 0.5s ease'
                      }}>
                        0{idx + 1}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* SSS Section */}
      <section style={{ padding: '90px 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <ScrollReveal distance="40px" duration="0.8s">
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '12px' }}>
                {isTr ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 500, color: '#000000', fontFamily: "var(--font-display)" }}>
                {isTr ? 'Zenthra Bilişim Depo Live Hakkında Merak Edilenler' : 'Everything You Need to Know About Depo Live'}
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {data.sss.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '20px',
                    background: '#f8fafc',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}>
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        padding: '24px 28px',
                        background: 'transparent',
                        border: 'none',
                        textAlign: 'left',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: '#0f172a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        fontFamily: "var(--font-display)"
                      }}
                    >
                      <span>{faq.soru}</span>
                      <ChevronDown size={20} color="#64748b" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />
                    </button>
                    {isOpen && (
                      <div style={{
                        padding: '0 28px 24px 28px',
                        color: '#475569',
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        fontFamily: "var(--font-body)",
                        borderTop: '1px solid #cbd5e1'
                      }}>
                        <div style={{ paddingTop: '16px' }}>{faq.cevap}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA Box with Pure Minimalist Cuberto Style Expandable Form */}
      <section id="iletisim" style={{ padding: '60px 0 100px 0', background: '#ffffff' }}>
        <div className="container">
          <ScrollReveal distance="50px" duration="0.85s">
            <div id="demo" style={{
              background: '#000000',
              color: '#ffffff',
              borderRadius: '36px',
              padding: 'clamp(36px, 6vw, 60px) clamp(20px, 5vw, 48px)',
              textAlign: 'center',
              maxWidth: '1100px',
              margin: '0 auto',
              boxShadow: '0 30px 70px rgba(0,0,0,0.25)',
              transition: 'all 0.5s ease'
            }}>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px', fontFamily: '"SF Pro Display", sans-serif', letterSpacing: '-0.02em' }}>
                {data.ctaMetinleri.demoTalebi}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '36px', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto 36px auto', fontFamily: '"Inter", sans-serif' }}>
                {data.ctaMetinleri.iletisim}
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href="https://app.zenthrabilisim.com.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#2563eb',
                    color: '#ffffff',
                    padding: '16px 36px',
                    borderRadius: '50px',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 10px 25px rgba(37, 99, 235, 0.4)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{isTr ? '14 Gün Ücretsiz Deneyin' : 'Start 14-Day Free Trial'}</span>
                  <ExternalLink size={18} />
                </a>

                <button
                  onClick={() => setShowDemoForm(!showDemoForm)}
                  className="cb-btn_cta -inverse-btn"
                  style={{ minWidth: '220px', padding: '16px 36px', cursor: 'pointer' }}
                >
                  <span className="cb-btn_cta-title">
                    <span data-text={showDemoForm ? "Formu Kapat" : "Hemen İletişime Geçin"}>
                      {showDemoForm ? "Formu Kapat" : "Hemen İletişime Geçin"}
                    </span>
                  </span>
                </button>
              </div>

              {/* Pure Cuberto Minimalist Line Form Container */}
              <div style={{
                display: 'grid',
                gridTemplateRows: showDemoForm ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
                marginTop: showDemoForm ? '50px' : '0'
              }}>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{
                    padding: '20px 0 0 0',
                    textAlign: 'left',
                    maxWidth: '800px',
                    margin: '0 auto',
                    opacity: showDemoForm ? 1 : 0,
                    transform: showDemoForm ? 'translateY(0)' : 'translateY(-16px)',
                    transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s'
                  }}>

                    {demoSubmitted ? (
                      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                        <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#ffffff', color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                          <Check size={28} />
                        </div>
                        <h4 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px', fontFamily: '"SF Pro Display", sans-serif' }}>
                          Depo Live Demo Talebiniz Alındı!
                        </h4>
                        <p style={{ color: '#94a3b8', fontSize: '1.05rem', fontFamily: '"Inter", sans-serif' }}>
                          Talebiniz kaydedildi. Uzman ekibimiz deponuz için canlı sunum planlamak üzere sizinle iletişime geçecektir.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                          <h4 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px', fontFamily: '"SF Pro Display", sans-serif' }}>
                            Ücretsiz Depo Live Canlı Demo
                          </h4>
                          <p style={{ fontSize: '0.98rem', color: '#94a3b8', fontFamily: '"Inter", sans-serif' }}>
                            Bilgilerinizi bırakın, deponuza özel canlı WMS gösterimini birlikte planlayalım.
                          </p>
                        </div>

                        <form onSubmit={handleDemoSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px 32px' }}>
                          
                          {/* Ad Soyad */}
                          <div>
                            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                              Ad Soyad
                            </label>
                            <input
                              type="text"
                              required
                              value={demoFormData.fullName}
                              onChange={(e) => setDemoFormData({ ...demoFormData, fullName: e.target.value })}
                              placeholder="Ahmet Yılmaz"
                              style={{
                                width: '100%',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
                                padding: '12px 0',
                                color: '#ffffff',
                                fontSize: '1.05rem',
                                outline: 'none',
                                fontFamily: '"Inter", sans-serif'
                              }}
                            />
                          </div>

                          {/* İşletme Türü */}
                          <div>
                            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                              İşletme / Depo Türü
                            </label>
                            <select
                              value={demoFormData.businessType}
                              onChange={(e) => setDemoFormData({ ...demoFormData, businessType: e.target.value })}
                              style={{
                                width: '100%',
                                background: '#000000',
                                border: 'none',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
                                padding: '12px 0',
                                color: '#ffffff',
                                fontSize: '1.05rem',
                                outline: 'none',
                                fontFamily: '"Inter", sans-serif'
                              }}
                            >
                              <option value="Depo / Lojistik">Depo / Lojistik</option>
                              <option value="Üretim / Fabrika">Üretim / Fabrika</option>
                              <option value="E-Ticaret / Pazaryeri Satıcısı">E-Ticaret / Pazaryeri Satıcısı</option>
                              <option value="Mağaza / Toptan Dağıtım">Mağaza / Toptan Dağıtım</option>
                              <option value="Diğer">Diğer</option>
                            </select>
                          </div>

                          {/* Telefon */}
                          <div>
                            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                              Telefon
                            </label>
                            <input
                              type="tel"
                              required
                              value={demoFormData.phone}
                              onChange={(e) => setDemoFormData({ ...demoFormData, phone: e.target.value })}
                              placeholder="0555 555 55 55"
                              style={{
                                width: '100%',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
                                padding: '12px 0',
                                color: '#ffffff',
                                fontSize: '1.05rem',
                                outline: 'none',
                                fontFamily: '"Inter", sans-serif'
                              }}
                            />
                          </div>

                          {/* E-Posta */}
                          <div>
                            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                              E-Posta
                            </label>
                            <input
                              type="email"
                              required
                              value={demoFormData.email}
                              onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                              placeholder="ahmet@sirket.com"
                              style={{
                                width: '100%',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
                                padding: '12px 0',
                                color: '#ffffff',
                                fontSize: '1.05rem',
                                outline: 'none',
                                fontFamily: '"Inter", sans-serif'
                              }}
                            />
                          </div>

                          {/* KVKK & Consent Checkboxes */}
                          <KvkkCheckboxes
                            kvkkAccepted={kvkkAccepted}
                            setKvkkAccepted={setKvkkAccepted}
                            commercialConsent={commercialConsent}
                            setCommercialConsent={setCommercialConsent}
                            marketingConsent={marketingConsent}
                            setMarketingConsent={setMarketingConsent}
                            theme="dark"
                          />

                          {/* Submit Button */}
                          <div style={{ gridColumn: '1 / -1', marginTop: '20px', textAlign: 'center' }}>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="cb-btn_cta -inverse-btn"
                              style={{
                                width: '100%',
                                padding: '18px 36px',
                                fontSize: '1.05rem',
                                cursor: isSubmitting ? 'wait' : 'pointer',
                                opacity: isSubmitting ? 0.7 : 1
                              }}
                            >
                              <span className="cb-btn_cta-title">
                                <span data-text={isSubmitting ? "Gönderiliyor..." : "Demo Talebini Gönder"}>
                                  {isSubmitting ? "Gönderiliyor..." : "Demo Talebini Gönder"}
                                </span>
                              </span>
                            </button>
                          </div>

                        </form>
                      </>
                    )}

                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
