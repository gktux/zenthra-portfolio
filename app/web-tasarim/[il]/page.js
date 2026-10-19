import { notFound } from 'next/navigation';
import ServicePage from '@/components/ServicePage';
import { ServiceSchema } from '@/components/StructuredData';
import { webTasarimBolgeler, webTasarimBolgeServis } from '@/data/webTasarimSehirler';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(webTasarimBolgeler).map((il) => ({ il }));
}

export async function generateMetadata({ params }) {
  const { il } = await params;
  const service = webTasarimBolgeServis(il);
  if (!service) return {};
  const path = `/web-tasarim/${il}`;
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
  const { il } = await params;
  const service = webTasarimBolgeServis(il);
  if (!service) notFound();
  return (
    <>
      <ServiceSchema service={service} />
      <ServicePage service={service} />
    </>
  );
}
