import ServicesIndex from '@/components/ServicesIndex';
import { fiyatListesi } from '@/data/fiyatData';

export const metadata = {
  title: 'Fiyatlar | Depo Programı, PDKS ve Web Tasarım Fiyatları — Zenthra Bilişim',
  description: 'Depo Live depo programı paket fiyatları, PDKS cihaz ve kurulum maliyetleri, web tasarım fiyatları. Şeffaf paketler, ücretsiz teklif.',
  alternates: { canonical: '/fiyatlar' },
  openGraph: { title: 'Fiyatlar | Depo Programı, PDKS ve Web Tasarım Fiyatları — Zenthra Bilişim', description: 'Depo Live depo programı paket fiyatları, PDKS cihaz ve kurulum maliyetleri, web tasarım fiyatları. Şeffaf paketler, ücretsiz teklif.', url: '/fiyatlar', siteName: 'Zenthra Bilişim', locale: 'tr_TR', type: 'website' },
};

export default function Page() {
  return (
    <ServicesIndex
      services={fiyatListesi}
      basePath="/fiyatlar"
      eyebrow="Fiyatlar"
      heading="Fiyatlar ve Paketler"
      intro="Depo programı, PDKS ve web tasarım için fiyatı belirleyen etkenler ve paketler. Net rakam için ücretsiz teklif alın."
    />
  );
}
