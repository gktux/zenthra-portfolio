'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { applyConsent, captureAttribution, readConsent, shouldAskConsent, trackContactClick } from '@/lib/ads';

// Cerez onayi + reklam olcumu. Secim yapilana kadar Consent Mode "denied" kalir
// (varsayilan app/layout.js icinde, etiketlerden once ayarlanir).
export default function ConsentBanner() {
  const [goster, setGoster] = useState(false);
  const [detay, setDetay] = useState(false);
  const [secim, setSecim] = useState({ analiz: false, reklam: false });

  useEffect(() => {
    captureAttribution();

    if (shouldAskConsent()) setGoster(true);

    // Footer'daki "Cerez Tercihleri": kayitli secimle detay ekrani acilir.
    const ac = () => {
      const k = readConsent();
      setSecim({ analiz: !!k?.analiz, reklam: !!k?.reklam });
      setDetay(true);
      setGoster(true);
    };
    const tikla = e => {
      const a = e.target.closest?.('a[href]');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (href.startsWith('tel:')) trackContactClick('phone');
      else if (href.includes('wa.me/')) trackContactClick('whatsapp');
      else if (href.startsWith('mailto:')) trackContactClick('email');
    };

    window.addEventListener('cerez-tercihleri', ac);
    document.addEventListener('click', tikla, true);
    return () => {
      window.removeEventListener('cerez-tercihleri', ac);
      document.removeEventListener('click', tikla, true);
    };
  }, []);

  if (!goster) return null;

  const kaydet = tercih => {
    applyConsent(tercih);
    setGoster(false);
    setDetay(false);
  };
  const hepsi = () => kaydet({ analiz: true, reklam: true });
  const zorunlu = () => kaydet({ analiz: false, reklam: false });

  return (
    <div className="cerez" role="dialog" aria-label="Çerez tercihleri">
      {detay ? (
        <>
          <p className="cerez__baslik">Çerez tercihleri</p>
          <label className="cerez__kategori">
            <input type="checkbox" checked disabled />
            <span><strong>Zorunlu</strong> Sitenin çalışması ve tercihlerinizin saklanması için gerekir, kapatılamaz.</span>
          </label>
          <label className="cerez__kategori">
            <input type="checkbox" checked={secim.analiz} onChange={e => setSecim({ ...secim, analiz: e.target.checked })} />
            <span><strong>Analiz</strong> Google Analytics ile sitenin nasıl kullanıldığını ölçeriz.</span>
          </label>
          <label className="cerez__kategori">
            <input type="checkbox" checked={secim.reklam} onChange={e => setSecim({ ...secim, reklam: e.target.checked })} />
            <span><strong>Reklam</strong> Google Ads ve Meta ile reklam sonuçlarını ölçer, size uygun reklamlar gösteririz.</span>
          </label>
          <div className="cerez__butonlar">
            <button type="button" className="cerez__buton cerez__buton--ikincil" onClick={() => kaydet(secim)}>Seçimi Kaydet</button>
            <button type="button" className="cerez__buton" onClick={hepsi}>Tümünü Kabul Et</button>
          </div>
        </>
      ) : (
        <>
          <p className="cerez__metin">
            Size daha iyi bir deneyim sunmak ve reklamlarımızı ölçmek için çerez kullanıyoruz. Zorunlu çerezler her zaman
            çalışır, diğerleri onayınıza bağlıdır. <Link href="/cerez-politikasi">Çerez Politikası</Link>
          </p>
          <div className="cerez__butonlar">
            <button type="button" className="cerez__buton cerez__buton--ikincil" onClick={zorunlu}>Sadece Zorunlu</button>
            <button type="button" className="cerez__buton" onClick={hepsi}>Tümünü Kabul Et</button>
          </div>
          <button type="button" className="cerez__tercih" onClick={() => setDetay(true)}>Tercihleri Yönet</button>
        </>
      )}
    </div>
  );
}
