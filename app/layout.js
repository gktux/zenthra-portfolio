import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import CustomCursor from '@/components/CustomCursor';
import { OrganizationSchema } from '@/components/StructuredData';
import SmoothScroll from '@/components/SmoothScroll';
import Script from 'next/script';

// Google Ads etiketi. linker: reklamdan gelen gclid app alan adina
// (kayit orada) tasinsin, donusum kampanyaya baglansin.
const GOOGLE_ADS_ID = 'AW-18446998627';
// GA4 "ana site" akisi. Ayni gtag.js yuklemesine ikinci config olarak biner.
const GA4_ID = 'G-1NJ1VPY1BR';
// Tag Manager konteyneri. GA4 ve Ads zaten gtag ile yukleniyor; konteynere
// ayni etiketler eklenirse sayim ikiye katlanir.
const GTM_ID = 'GTM-W9C4QLFR';

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
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('set', 'linker', { domains: ['zenthrabilisim.com', 'app.zenthrabilisim.com.tr'] });
gtag('config', '${GOOGLE_ADS_ID}');
gtag('config', '${GA4_ID}');`}
        </Script>
        <OrganizationSchema />
        <LanguageProvider>
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
