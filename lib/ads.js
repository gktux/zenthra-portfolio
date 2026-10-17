/**
 * Google Ads dönüşüm izleme yardımcıları.
 * Hesap: ZENTHRA BİLİŞİM (AW-18446998627)
 */

export const GOOGLE_ADS_ID = 'AW-18446998627';

// 1. Zenthra Bilişim Genel İletişim Formu (/contacts)
export const CONVERSION_GENEL_ILETISIM = `${GOOGLE_ADS_ID}/RViKCPL70JodEOO4m9xE`;

// 2. Depo Live Canlı Demo / İletişim Formu (/projects/depo-live)
export const CONVERSION_DEPO_LIVE_DEMO = `${GOOGLE_ADS_ID}/feznCOz70JodEOO4m9xE`;

// Meta Pixel (Events Manager veri setleri, portfolyo: Zenthra)
export const META_PIXEL_ZENTHRA = '1921259542169845';
export const META_PIXEL_DEPO_LIVE = '3332444480276530';

export function metaPixelForPath(pathname = '') {
  return pathname.includes('depo-live') ? META_PIXEL_DEPO_LIVE : META_PIXEL_ZENTHRA;
}

function trackMetaLead(pixelId) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;
  window.fbq('trackSingle', pixelId, 'Lead');
}

/**
 * Genel İletişim Formu (/contacts) başarıyla gönderildiğinde çağrılır.
 */
export function trackGenelIletisimConversion() {
  trackMetaLead(META_PIXEL_ZENTHRA);
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    console.warn('[Google Ads] gtag bulunamadı veya henüz yüklenmedi.');
    return;
  }
  window.gtag('event', 'conversion', {
    send_to: CONVERSION_GENEL_ILETISIM,
    value: 1.0,
    currency: 'TRY'
  });
  console.log('[Google Ads] Genel İletişim Formu dönüşümü tetiklendi:', CONVERSION_GENEL_ILETISIM);
}

/**
 * Depo Live Demo / İletişim Formu (/projects/depo-live) başarıyla gönderildiğinde çağrılır.
 */
export function trackDepoLiveDemoConversion() {
  trackMetaLead(META_PIXEL_DEPO_LIVE);
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    console.warn('[Google Ads] gtag bulunamadı veya henüz yüklenmedi.');
    return;
  }
  window.gtag('event', 'conversion', {
    send_to: CONVERSION_DEPO_LIVE_DEMO,
    value: 1.0,
    currency: 'TRY'
  });
  console.log('[Google Ads] Depo Live Demo dönüşümü tetiklendi:', CONVERSION_DEPO_LIVE_DEMO);
}
