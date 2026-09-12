import ServicePage from '@/components/ServicePage';
import { ServiceSchema } from '@/components/StructuredData';
import { servicesData } from '@/data/servicesData';

const service = servicesData['yazici-bakim-onarim'];

export const metadata = {
  title: service.title,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: { canonical: '/hizmetler/yazici-bakim-onarim' },
  openGraph: {
    title: service.title,
    description: service.metaDescription,
    url: '/hizmetler/yazici-bakim-onarim',
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
