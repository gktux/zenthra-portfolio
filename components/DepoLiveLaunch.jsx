'use client';

import { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

// Siteye ilk giriste "Depo Live yayinda" duyurusu.
// Kapatilinca 3 gun boyunca tekrar gosterilmez (localStorage).
const STORAGE_KEY = 'depoLiveLaunchSeen';
const NEVER_KEY = 'depoLiveLaunchNever';
const HIDE_MS = 3 * 24 * 60 * 60 * 1000;
const APP_URL = 'https://app.zenthrabilisim.com.tr/?utm_source=zenthrabilisim&utm_medium=banner&utm_campaign=depolive_lansman';

const SLIDES = [
  { src: '/depo-live-shots/1.jpg', title: 'Anlık depo paneli', text: 'Stok, sipariş ve sevkiyat durumu tek ekranda.' },
  { src: '/depo-live-shots/2.jpg', title: 'Canlı stok listesi', text: 'Barkod, raf konumu, fiziksel ve müsait stok.' },
  { src: '/depo-live-shots/3.jpg', title: 'Sipariş ve sevkiyat', text: 'Barkodla hızlı sipariş, sevk takibi.' },
  { src: '/depo-live-shots/4.jpg', title: '2D depo ve raf haritası', text: 'Raf doluluğu, SKT ve karantina tek bakışta.' },
  { src: '/depo-live-shots/5.jpg', title: 'Raporlar ve analiz', text: 'Stok değeri, marj ve hareket raporları.' },
];

export default function DepoLiveLaunch() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let seen = 0;
    try {
      if (localStorage.getItem(NEVER_KEY) === '1') return;
      seen = Number(localStorage.getItem(STORAGE_KEY)) || 0;
    } catch {}
    if (Date.now() - seen < HIDE_MS) return;
    const t = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(t);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    try { localStorage.setItem(STORAGE_KEY, String(Date.now())); } catch {}
  }, []);

  const neverShow = () => {
    try { localStorage.setItem(NEVER_KEY, '1'); } catch {}
    close();
  };

  const go = useCallback((dir) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (!open || paused) return;
    const t = setInterval(() => go(1), 4000);
    return () => clearInterval(t);
  }, [open, paused, go]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, go]);

  // Mobilde parmakla kaydirma
  const [touchX, setTouchX] = useState(null);
  const onTouchEnd = (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    setTouchX(null);
  };

  if (!open) return null;
  const slide = SLIDES[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Depo Live yayında"
      data-lenis-prevent
      onClick={close}
      style={{
        position: 'fixed', inset: 0, zIndex: 100000,
        background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16, animation: 'dllFade .35s ease both',
      }}
    >
      <style>{`
        @keyframes dllFade{from{opacity:0}to{opacity:1}}
        @keyframes dllUp{from{opacity:0;transform:translateY(24px) scale(.98)}to{opacity:1;transform:none}}
        .dll-card{display:grid;grid-template-columns:1fr 1.35fr}
        @media (max-width:820px){.dll-card{grid-template-columns:1fr}.dll-copy{padding:24px 22px 8px!important}.dll-copy h2{font-size:30px!important}}
      `}</style>

      <div
        className="dll-card"
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{
          position: 'relative', width: '100%', maxWidth: 1080, maxHeight: '92vh', overflow: 'auto',
          background: '#0b0f14', color: '#fff', borderRadius: 24,
          boxShadow: '0 40px 100px rgba(0,0,0,.45)', animation: 'dllUp .5s cubic-bezier(.16,1,.3,1) both',
          fontFamily: 'var(--font-display)',
        }}
      >
        <button
          onClick={close}
          aria-label="Kapat"
          style={{
            position: 'absolute', top: 14, right: 14, zIndex: 2, width: 38, height: 38, borderRadius: 99,
            border: 'none', background: 'rgba(255,255,255,.12)', color: '#fff',
            display: 'grid', placeItems: 'center',
          }}
        >
          <X size={20} />
        </button>

        <div className="dll-copy" style={{ padding: '44px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{
            alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '1.5px solid #c6ff3a', color: '#c6ff3a', borderRadius: 99,
            padding: '6px 14px', fontSize: 13, fontWeight: 700, letterSpacing: '.04em',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: 99, background: '#c6ff3a', boxShadow: '0 0 10px #c6ff3a' }} />
            YENİ · YAYINDA
          </span>
          <h2 style={{ color: '#fff', fontSize: 42, lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.03em', margin: '18px 0 14px' }}>
            Depo Live <span style={{ color: '#c6ff3a' }}>yayında!</span>
          </h2>
          <p style={{ color: '#b8c0cc', fontSize: 17, lineHeight: 1.55, marginBottom: 22 }}>
            Barkodlu depo programı: mal kabul, raf yerleştirme, sayım, toplama ve sevkiyat.
            Telefonunuz el terminali olur. Kurulum ücreti ve kredi kartı yok.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6, background: '#c6ff3a', color: '#0b0f14',
                padding: '13px 20px', borderRadius: 12, fontWeight: 800, fontSize: 16, textDecoration: 'none',
              }}
            >
              14 gün ücretsiz dene <ArrowUpRight size={18} />
            </a>
            <a
              href="/projects/depo-live"
              onClick={close}
              style={{
                display: 'inline-flex', alignItems: 'center', padding: '13px 18px', borderRadius: 12,
                border: '1.5px solid rgba(255,255,255,.25)', color: '#fff', fontWeight: 600, fontSize: 16, textDecoration: 'none',
              }}
            >
              İncele
            </a>
          </div>
          <button
            onClick={neverShow}
            style={{
              alignSelf: 'flex-start', marginTop: 18, padding: 0, border: 'none', background: 'none',
              color: '#8b95a3', fontSize: 14, textDecoration: 'underline', textUnderlineOffset: 3,
            }}
          >
            Bir daha gösterme
          </button>
        </div>

        <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div
            onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
            onTouchEnd={onTouchEnd}
            style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', background: '#161c24', aspectRatio: '16 / 10' }}
          >
            {SLIDES.map((s, i) => (
              <img
                key={s.src}
                src={s.src}
                alt={`Depo Live ekranı: ${s.title}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left',
                  opacity: i === index ? 1 : 0, transition: 'opacity .6s ease',
                }}
              />
            ))}
            {[-1, 1].map((dir) => (
              <button
                key={dir}
                onClick={() => go(dir)}
                aria-label={dir < 0 ? 'Önceki' : 'Sonraki'}
                style={{
                  position: 'absolute', top: '50%', [dir < 0 ? 'left' : 'right']: 10, transform: 'translateY(-50%)',
                  width: 40, height: 40, borderRadius: 99, border: 'none', background: 'rgba(11,15,20,.7)', color: '#fff',
                  display: 'grid', placeItems: 'center',
                }}
              >
                {dir < 0 ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '0 4px 4px' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16 }}>{slide.title}</div>
              <div style={{ color: '#8b95a3', fontSize: 14 }}>{slide.text}</div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {SLIDES.map((s, i) => (
                <button
                  key={s.src}
                  onClick={() => setIndex(i)}
                  aria-label={`${i + 1}. ekran`}
                  style={{
                    width: i === index ? 22 : 8, height: 8, borderRadius: 99, border: 'none', padding: 0,
                    background: i === index ? '#c6ff3a' : 'rgba(255,255,255,.3)', transition: 'width .3s',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
