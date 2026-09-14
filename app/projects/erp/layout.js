import { SoftwareSchema, FaqSchema, BreadcrumbSchema } from '@/components/StructuredData';
import { zenthraErpData } from '@/data/zenthraErpData';

export const metadata = {
  title: 'ERP Programı | Üretim, Stok, Muhasebe Tek Sistem — Zenthra ERP',
  description:
    'Depo, üretim, kalite, satınalma, muhasebe ve İK süreçlerini tek ekrandan yönetin. Modüler ERP programı, Excel dağınıklığına son. KOBİ ve üretici firmalar için ücretsiz demo.',
  keywords:
    'ERP programı, ERP yazılımı, kurumsal kaynak planlama, üretim yönetim yazılımı, MES, QMS, satınalma yazılımı, muhasebe yazılımı, KOBİ ERP, üretim takip programı',
  alternates: { canonical: '/projects/erp' },
  openGraph: {
    title: 'ERP Programı | Üretim, Stok, Muhasebe Tek Sistem — Zenthra ERP',
    description:
      'Depo, üretim, kalite, satınalma, muhasebe ve İK tek platformda. Gerçek zamanlı veri akışı, modüler kurulum, ücretsiz demo.',
    url: '/projects/erp',
    siteName: 'Zenthra Bilişim',
    images: [{ url: '/erp.png', width: 1200, height: 630, alt: 'Zenthra Bilişim ERP' }],
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function ErpLayout({ children }) {
  return (
    <>
      <SoftwareSchema
        name="Zenthra Bilişim ERP"
        description="Depo, üretim, kalite, satınalma, muhasebe ve İK süreçlerini tek ekrandan yöneten modüler kurumsal kaynak planlama (ERP) programı."
        url="https://www.zenthrabilisim.com/projects/erp"
        image="https://www.zenthrabilisim.com/erp.png"
        features={zenthraErpData.tr.moduller.map((m) => m.modulAdi)}
      />
      <FaqSchema items={zenthraErpData.tr.sss} />
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: 'https://www.zenthrabilisim.com' },
          { name: 'Projeler', url: 'https://www.zenthrabilisim.com/projects/erp' },
          { name: 'Zenthra ERP', url: 'https://www.zenthrabilisim.com/projects/erp' },
        ]}
      />
      {children}
    </>
  );
}
