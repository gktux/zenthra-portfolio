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

// --- Cerez onayi (Consent Mode v2) ---
export const CONSENT_KEY = 'zenthra-cerez-onayi';

export function applyConsent(kabul) {
  const durum = kabul ? 'granted' : 'denied';
  try { localStorage.setItem(CONSENT_KEY, durum); } catch {}
  if (typeof window === 'undefined') return;
  window.gtag?.('consent', 'update', {
    ad_storage: durum,
    ad_user_data: durum,
    ad_personalization: durum,
    analytics_storage: durum,
  });
  window.fbq?.('consent', kabul ? 'grant' : 'revoke');
}

// --- Reklam kaynagi: form kaydina gclid/UTM yazilir (cevrimdisi donusum icin) ---
const ATTRIBUTION_KEY = 'zenthra-reklam-kaynagi';
const ATTRIBUTION_PARAMS = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term'];

export function captureAttribution() {
  try {
    const url = new URLSearchParams(window.location.search);
    const bulunan = {};
    ATTRIBUTION_PARAMS.forEach(p => { if (url.get(p)) bulunan[p] = url.get(p); });
    if (!Object.keys(bulunan).length) return;
    bulunan.landing_page = window.location.pathname;
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(bulunan));
  } catch {}
}

// Ayri alan olarak ekler; Apps Script bu alanlari henuz okumuyorsa kaybolmasin
// diye ozeti "product" sutununa da yazar.
export function addAttribution(params) {
  let kaynak = null;
  try { kaynak = JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY)); } catch {}
  if (!kaynak) return;
  Object.entries(kaynak).forEach(([k, v]) => params.append(k, v));
  const ozet = Object.entries(kaynak).map(([k, v]) => `${k}=${v}`).join(' ');
  params.set('product', `${params.get('product') || ''} | ${ozet}`);
}

// Ikincil olcum: tiklama gercek lead degildir, Ads'te birincil yapilmamali.
export function trackContactClick(kanal) {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', `${kanal}_click`, { page_path: window.location.pathname });
}
