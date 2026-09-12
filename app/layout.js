import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata = {
  metadataBase: new URL('https://www.zenthrabilisim.com'),
  alternates: {
    canonical: 'https://www.zenthrabilisim.com',
  },
  verification: {
    google: 'vEm4p5z4Oa5jJi8BIfG1AZwMWLz5Lq4DLTHI6_Bs8q8',
  },
  title: 'Zenthra Bilişim | Kurumsal Yazılım & Web Teknolojileri',
  description: 'Zenthra Bilişim - Geleceğin işletmeleri için ölçeklenebilir ERP sistemleri, Depo Live canlı stok otomasyonu, özel yazılımlar ve web teknolojileri.',
  keywords: 'Zenthra Bilişim, Kurumsal Yazılım, Web Teknolojileri, Zenthra ERP, Depo Live, WMS, IT Bakım, Web Tasarım',
  icons: {
    icon: [
      { url: '/logo.png?v=2', type: 'image/png' },
      { url: '/icon.png?v=2', type: 'image/png' },
    ],
    shortcut: '/logo.png?v=2',
    apple: '/logo.png?v=2',
  },
  openGraph: {
    title: 'Zenthra Bilişim | Kurumsal Yazılım & Web Teknolojileri',
    description: 'Zenthra Bilişim - Kurumsal ERP sistemleri, Depo Live canlı stok otomasyonu, özel yazılımlar ve web teknolojileri.',
    siteName: 'Zenthra Bilişim',
    url: 'https://www.zenthrabilisim.com',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Zenthra Bilişim Logo',
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
        <link rel="canonical" href="https://www.zenthrabilisim.com" />
        <link rel="icon" type="image/png" href="/logo.png?v=2" />
        <link rel="shortcut icon" href="/logo.png?v=2" />
        <link rel="apple-touch-icon" href="/logo.png?v=2" />
      </head>
      <body>
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
