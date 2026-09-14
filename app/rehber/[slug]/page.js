import { notFound } from 'next/navigation';
import RehberPage from '@/components/RehberPage';
import { rehberYazilari } from '@/data/rehberData';
import { FaqSchema, BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';

const BASE = 'https://www.zenthrabilisim.com';

export function generateStaticParams() {
  return Object.keys(rehberYazilari).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const yazi = rehberYazilari[params.slug];
  if (!yazi) return {};

  const url = `/rehber/${yazi.slug}`;
  return {
    title: `${yazi.title} — Zenthra Bilişim`,
    description: yazi.metaDescription,
    keywords: yazi.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: yazi.title,
      description: yazi.metaDescription,
      url,
      siteName: 'Zenthra Bilişim',
      images: [{ url: '/depo-live.png', width: 1200, height: 630, alt: yazi.h1 }],
      locale: 'tr_TR',
      type: 'article',
    },
  };
}

export default function Page({ params }) {
  const yazi = rehberYazilari[params.slug];
  if (!yazi) notFound();

  const ilgiliYazilar = (yazi.ilgili || [])
    .map((s) => rehberYazilari[s])
    .filter(Boolean)
    .map((y) => ({ slug: y.slug, h1: y.h1 }));

  const url = `${BASE}/rehber/${yazi.slug}`;

  return (
    <>
      <ArticleSchema
        headline={yazi.h1}
        description={yazi.metaDescription}
        url={url}
        image={`${BASE}/depo-live.png`}
        datePublished={yazi.guncelleme}
      />
      <FaqSchema items={yazi.faq} />
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: BASE },
          { name: 'Rehber', url: `${BASE}/rehber` },
          { name: yazi.h1, url },
        ]}
      />
      <RehberPage yazi={yazi} ilgiliYazilar={ilgiliYazilar} />
    </>
  );
}
