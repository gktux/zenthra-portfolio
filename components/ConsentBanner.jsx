'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CONSENT_KEY, applyConsent, captureAttribution, trackContactClick } from '@/lib/ads';

// Cerez onayi + reklam olcumu. Secim yapilana kadar Consent Mode "denied" kalir
// (varsayilan app/layout.js icinde, etiketlerden once ayarlanir).
export default function ConsentBanner() {
  const [goster, setGoster] = useState(false);

  useEffect(() => {
    captureAttribution();

    let kayit = null;
    try { kayit = localStorage.getItem(CONSENT_KEY); } catch {}
    if (!kayit) setGoster(true);

    const ac = () => setGoster(true);
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

  const sec = kabul => {
    applyConsent(kabul);
    setGoster(false);
  };

  return (
    <div className="cerez" role="dialog" aria-label="Çerez tercihleri">
      <p className="cerez__metin">
        Sitemizi ölçmek ve size uygun reklamlar göstermek için çerez kullanıyoruz. Zorunlu olmayan çerezler
        yalnızca onayınızla çalışır. <Link href="/cerez-politikasi">Çerez Politikası</Link>
      </p>
      <div className="cerez__butonlar">
        <button type="button" className="cerez__buton" onClick={() => sec(false)}>Reddet</button>
        <button type="button" className="cerez__buton" onClick={() => sec(true)}>Kabul Et</button>
      </div>
    </div>
  );
}
