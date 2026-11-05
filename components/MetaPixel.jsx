'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { CONSENT_KEY, META_PIXEL_ZENTHRA, META_PIXEL_DEPO_LIVE, metaPixelForPath } from '@/lib/ads';

// Iki pixel ayni fbq yuklemesine init edilir; olaylar trackSingle ile
// sayfanin ait oldugu pixel'e gider (depo-live sayfalari -> Depo Live).
export default function MetaPixel() {
  const pathname = usePathname();
  const firstRender = useRef(true);

  // Ilk PageView inline script'te; burada sadece client-side gecisler.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (typeof window.fbq !== 'function') return;
    window.fbq('trackSingle', metaPixelForPath(pathname), 'PageView');
  }, [pathname]);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
var onay = null; try { onay = localStorage.getItem('${CONSENT_KEY}'); } catch (e) {}
fbq('consent', onay === 'granted' ? 'grant' : 'revoke');
fbq('init', '${META_PIXEL_ZENTHRA}');
fbq('init', '${META_PIXEL_DEPO_LIVE}');
fbq('trackSingle', location.pathname.indexOf('depo-live') !== -1 ? '${META_PIXEL_DEPO_LIVE}' : '${META_PIXEL_ZENTHRA}', 'PageView');`}
      </Script>
    </>
  );
}
