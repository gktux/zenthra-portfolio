import { notFound } from 'next/navigation';
import ServicePage from '@/components/ServicePage';
import { ServiceSchema } from '@/components/StructuredData';
import { fiyatSayfalari, fiyatServis } from '@/data/fiyatData';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(fiyatSayfalari).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = fiyatServis(slug);
  if (!service) return {};
  const path = `/fiyatlar/${slug}`;
  return {
    title: service.title,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: path,
      siteName: 'Zenthra Bilişim',
      locale: 'tr_TR',
      type: 'website',
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const service = fiyatServis(slug);
  if (!service) notFound();
  return (
    <>
      <ServiceSchema service={service} />
      <ServicePage service={service} />
    </>
  );
}
