import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata = {
  title: 'Zenthra Bilişim | Dijital Tasarım & Yazılım Ajansı',
  description: 'Zenthra Bilişim - Modern web çözümleri, özel yazılım, IT altyapı & bakım ve dijital marka dönüşümü.',
  keywords: 'Zenthra Bilişim, Yazılım Ajansı, Dijital Tasarım, Next.js, IT Bakım, Web Tasarım',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
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
