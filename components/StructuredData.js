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
