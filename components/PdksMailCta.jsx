import { Mail, ArrowUpRight, ShieldCheck, Wrench, Clock } from 'lucide-react';

export const PDKS_MAIL = 'info@zenthrabilisim.com';

const KONU = 'PDKS Teklif Talebi — Armongate';
const GOVDE = `Merhaba, PDKS içeriğiniz ile ilgileniyorum.

Firmamız için PDKS / geçiş kontrol çözümü hakkında bilgi ve teklif almak istiyoruz.

Firma adı:
Yetkili kişi ve telefon:
Şehir / ilçe:
Personel sayısı:
Giriş noktası (kapı/turnike) sayısı:
Tercih edilen yöntem (yüz tanıma / parmak izi / kart / mobil):
Şube sayısı:
Notlar:

Teşekkürler.`;

export const pdksMailHref = `mailto:${PDKS_MAIL}?subject=${encodeURIComponent(KONU)}&body=${encodeURIComponent(GOVDE)}`;

const maddeler = [
  { icon: ShieldCheck, text: 'Armongate yetkili bayi — orijinal cihaz ve garanti' },
  { icon: Wrench, text: 'Ücretsiz keşif, kurulum ve personel eğitimi' },
  { icon: Clock, text: 'Aynı iş günü içinde dönüş' },
];

export default function PdksMailCta() {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '28px',
        padding: 'clamp(36px, 6vw, 64px) clamp(22px, 5vw, 56px)',
        background: 'radial-gradient(120% 140% at 0% 0%, #1d1d1f 0%, #000 60%)',
        color: '#f5f5f7',
        boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: '-120px',
          top: '-120px',
          width: '360px',
          height: '360px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,169,97,0.35) 0%, rgba(201,169,97,0) 70%)',
        }}
      />
      <span
        style={{
          display: 'inline-block',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#c9a961',
          border: '1px solid rgba(201,169,97,0.45)',
          borderRadius: '100px',
          padding: '6px 14px',
          marginBottom: '22px',
        }}
      >
        Armongate Yetkili Bayi
      </span>
      <h2
        style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.7rem)',
          fontFamily: 'var(--font-display)',
          lineHeight: 1.2,
          margin: '0 0 16px',
          color: '#fff',
          maxWidth: '640px',
        }}
      >
        PDKS teklifinizi tek tıkla isteyin
      </h2>
      <p
        style={{
          color: '#a1a1a6',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          maxWidth: '600px',
          margin: '0 0 28px',
          fontFamily: 'var(--font-body)',
        }}
      >
        Butona tıklayın, e-postanız hazır şekilde açılsın. Birkaç bilgiyi doldurup gönderin; ihtiyacınıza uygun
        yüz tanıma, parmak izi, kartlı veya mobil PDKS çözümünü ve net fiyatı size iletelim.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 34px', display: 'grid', gap: '12px' }}>
        {maddeler.map(({ icon: Icon, text }) => (
          <li key={text} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e8e8ed', fontFamily: 'var(--font-body)' }}>
            <Icon size={18} color="#c9a961" style={{ flexShrink: 0 }} />
            {text}
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
        <a
          href={pdksMailHref}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '16px 28px',
            borderRadius: '100px',
            background: 'linear-gradient(135deg, #e3c77d 0%, #c9a961 100%)',
            color: '#000',
            fontWeight: 600,
            textDecoration: 'none',
            fontFamily: 'var(--font-body)',
          }}
        >
          <Mail size={18} />
          E-posta ile Teklif İsteyin
          <ArrowUpRight size={18} />
        </a>
        <a
          href={`mailto:${PDKS_MAIL}`}
          style={{ color: '#f5f5f7', textDecoration: 'none', fontFamily: 'var(--font-body)', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '2px' }}
        >
          {PDKS_MAIL}
        </a>
      </div>
    </div>
  );
}
