'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Target, Compass } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function MissionVision() {
  const { t } = useLanguage();

  return (
    <section id="mission" className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal distance="40px" duration="0.8s">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {t.missionVision.badge}
            </span>
            <h2 style={{ fontSize: '2.8rem', marginTop: '8px', marginBottom: '16px', fontFamily: "var(--font-display)" }}>
              {t.missionVision.title}
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', fontFamily: "var(--font-body)" }}>
              {t.missionVision.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Mission & Vision Split Cards */}
        <div className="grid-2" style={{ marginBottom: '60px' }}>
          
          {/* Mission Card */}
          <ScrollReveal delay={0.1} distance="50px" duration="0.85s">
            <div className="cuberto-card" style={{ background: '#ffffff', padding: '48px', height: '100%' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: '#000000',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', fontFamily: "var(--font-display)" }}>
                {t.missionVision.missionTitle}
              </h3>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
                {t.missionVision.missionDesc}
              </p>
            </div>
          </ScrollReveal>

          {/* Vision Card */}
          <ScrollReveal delay={0.2} distance="50px" duration="0.85s">
            <div className="cuberto-card" style={{ background: '#ffffff', padding: '48px', height: '100%' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: '#000000',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Compass size={28} />
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', fontFamily: "var(--font-display)" }}>
                {t.missionVision.visionTitle}
              </h3>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
                {t.missionVision.visionDesc}
              </p>
            </div>
          </ScrollReveal>

        </div>

        {/* Stats Grid */}
        <ScrollReveal delay={0.3} distance="40px" duration="0.85s">
          <div className="grid-4" style={{
            background: '#000000',
            borderRadius: '24px',
            padding: '40px 32px',
            color: '#ffffff',
            textAlign: 'center'
          }}>
            {t.missionVision.stats.map((stat, idx) => (
              <div key={idx} style={{ padding: '16px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: "var(--font-display)", marginBottom: '6px' }}>
                  {stat.value}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: 500, fontFamily: "var(--font-body)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
