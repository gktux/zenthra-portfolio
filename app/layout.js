import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import CustomCursor from '@/components/CustomCursor';
import { OrganizationSchema } from '@/components/StructuredData';
import SmoothScroll from '@/components/SmoothScroll';

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
