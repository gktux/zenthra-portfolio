import ServicePage from '@/components/ServicePage';
import { ServiceSchema } from '@/components/StructuredData';
import { servicesData } from '@/data/servicesData';

const service = servicesData['pdks-personel-devam-kontrol-sistemi'];

export const metadata = {
  title: service.title,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: { canonical: '/hizmetler/pdks-personel-devam-kontrol-sistemi' },
  openGraph: {
    title: service.title,
    description: service.metaDescription,
    url: '/hizmetler/pdks-personel-devam-kontrol-sistemi',
    siteName: 'Zenthra Bilişim',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema service={service} />
      <ServicePage service={service} />
    </>
  );
}
