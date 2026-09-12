const ORG = {
  '@type': 'Organization',
  '@id': 'https://www.zenthrabilisim.com/#organization',
  name: 'Zenthra Bilişim',
  url: 'https://www.zenthrabilisim.com',
  logo: 'https://www.zenthrabilisim.com/logo.png',
  email: 'info@zenthrabilisim.com',
  telephone: '+90-531-580-07-53',
  areaServed: { '@type': 'Country', name: 'Türkiye' },
  address: { '@type': 'PostalAddress', addressCountry: 'TR', addressRegion: 'Samsun' },
};

export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      ORG,
      {
        '@type': 'WebSite',
        '@id': 'https://www.zenthrabilisim.com/#website',
        url: 'https://www.zenthrabilisim.com',
        name: 'Zenthra Bilişim',
        inLanguage: 'tr-TR',
        publisher: { '@id': 'https://www.zenthrabilisim.com/#organization' },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SoftwareSchema({ name, description, url, image, features = [] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    image,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android, iOS',
    inLanguage: 'tr-TR',
    featureList: features,
    publisher: { '@id': 'https://www.zenthrabilisim.com/#organization' },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'TRY',
      description: '14 gün ücretsiz deneme, kredi kartı gerekmez',
      availability: 'https://schema.org/InStock',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceSchema({ service }) {
  const url = `https://www.zenthrabilisim.com/hizmetler/${service.slug}`;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.h1,
        description: service.metaDescription,
        serviceType: service.serviceType,
        url,
        provider: { '@id': 'https://www.zenthrabilisim.com/#organization' },
        areaServed: { '@type': 'Place', name: service.areaServed },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: service.h1,
          itemListElement: service.features.map((f) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: f.title, description: f.desc },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://www.zenthrabilisim.com' },
          { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: 'https://www.zenthrabilisim.com/hizmetler' },
          { '@type': 'ListItem', position: 3, name: service.h1, item: url },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
