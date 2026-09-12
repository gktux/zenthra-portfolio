import ServicePage from '@/components/ServicePage';
import { ServiceSchema } from '@/components/StructuredData';
import { servicesData } from '@/data/servicesData';

const service = servicesData['ozel-yazilim'];

export const metadata = {
  title: service.title,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: { canonical: '/hizmetler/ozel-yazilim' },
  openGraph: {
    title: service.title,
    description: service.metaDescription,
    url: '/hizmetler/ozel-yazilim',
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
