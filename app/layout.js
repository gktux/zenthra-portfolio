import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import CustomCursor from '@/components/CustomCursor';
import { OrganizationSchema } from '@/components/StructuredData';
import SmoothScroll from '@/components/SmoothScroll';
import Script from 'next/script';
import MetaPixel from '@/components/MetaPixel';
import WhatsAppBot from '@/components/WhatsAppBot';
import ConsentBanner from '@/components/ConsentBanner';
import { CONSENT_READ_JS } from '@/lib/ads';

// Google Ads etiketi. linker: reklamdan gelen gclid app alan adina
// (kayit orada) tasinsin, donusum kampanyaya baglansin.
const GOOGLE_ADS_ID = 'AW-18446998627';
// GA4 "ana site" akisi. Ayni gtag.js yuklemesine ikinci config olarak biner.
const GA4_ID = 'G-1NJ1VPY1BR';

// Consent Mode v2 varsayilani: tum etiketlerden once calismali, o yuzden <head>
// icinde duz script. Onceki secim varsa ayni anda uygulanir.
const CONSENT_DEFAULT = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
${CONSENT_READ_JS}
var s = zOnay.reklam ? 'granted' : 'denied';
gtag('consent', 'default', { ad_storage: s, ad_user_data: s, ad_personalization: s, analytics_storage: zOnay.analiz ? 'granted' : 'denied', wait_for_update: 500 });
gtag('set', 'ads_data_redaction', !zOnay.reklam);
gtag('set', 'url_passthrough', true);`;

export const metadata = {
  metadataBase: new URL('https://www.zenthrabilisim.com'),
  verification: {
    google: 'vEm4p5z4Oa5jJi8BIfG1AZwMWLz5Lq4DLTHI6_Bs8q8',
  },
  alternates: { canonical: '/' },
  title: 'Zenthra Bilişim | Kurumsal Yazılım & Web Teknolojileri',
  description: 'Zenthra Bilişim - Geleceğin işletmeleri için ölçeklenebilir ERP sistemleri, Depo Live canlı stok otomasyonu, özel yazılımlar ve web teknolojileri.',
  keywords: 'Zenthra Bilişim, Kurumsal Yazılım, Web Teknolojileri, Zenthra ERP, Depo Live, WMS, IT Bakım, Web Tasarım',
  openGraph: {
    title: 'Zenthra Bilişim | Kurumsal Yazılım & Web Teknolojileri',
    description: 'Zenthra Bilişim - Kurumsal ERP sistemleri, Depo Live canlı stok otomasyonu, özel yazılımlar ve web teknolojileri.',
    siteName: 'Zenthra Bilişim',
    url: 'https://www.zenthrabilisim.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zenthra Bilişim — Kurumsal Yazılım ve Web Teknolojileri',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta name="google-site-verification" content="vEm4p5z4Oa5jJi8BIfG1AZwMWLz5Lq4DLTHI6_Bs8q8" />
        <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT }} />
      </head>
      <body>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`gtag('js', new Date());
gtag('set', 'linker', { domains: ['zenthrabilisim.com', 'app.zenthrabilisim.com.tr'] });
gtag('config', '${GOOGLE_ADS_ID}');
gtag('config', '${GA4_ID}');`}
        </Script>
        <MetaPixel />
        <OrganizationSchema />
        <LanguageProvider>
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
          <WhatsAppBot />
          <ConsentBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
