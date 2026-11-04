import { notFound } from 'next/navigation';
import ServicePage from '@/components/ServicePage';
import { ServiceSchema } from '@/components/StructuredData';
import { sektorler, sektorServis } from '@/data/sektorData';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(sektorler).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = sektorServis(slug);
  if (!service) return {};
  const path = `/sektorler/${slug}`;
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
  const service = sektorServis(slug);
  if (!service) notFound();
  return (
    <>
      <ServiceSchema service={service} />
      <ServicePage service={service} />
    </>
  );
}
