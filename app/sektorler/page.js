import ServicesIndex from '@/components/ServicesIndex';
import { sektorListesi } from '@/data/sektorData';

export const metadata = {
  title: 'Sektörel Çözümler | Gıda, Üretim, İnşaat, Lojistik, Otel — Zenthra Bilişim',
  description: 'Gıda toptancısı, fabrika, inşaat, 3PL lojistik ve oteller için sektöre özel depo programı, ERP, PDKS, web ve IT çözümleri.',
  alternates: { canonical: '/sektorler' },
  openGraph: { title: 'Sektörel Çözümler | Gıda, Üretim, İnşaat, Lojistik, Otel — Zenthra Bilişim', description: 'Gıda toptancısı, fabrika, inşaat, 3PL lojistik ve oteller için sektöre özel depo programı, ERP, PDKS, web ve IT çözümleri.', url: '/sektorler', siteName: 'Zenthra Bilişim', locale: 'tr_TR', type: 'website' },
};

export default function Page() {
  return (
    <ServicesIndex
      services={sektorListesi}
      basePath="/sektorler"
      eyebrow="Sektörel Çözümler"
      heading="Sektörünüze Özel Çözümler"
      intro="Her sektörün depo, personel ve satış akışı farklıdır. Size en yakın sektörü seçin, nasıl çalıştığımızı görün."
    />
  );
}
