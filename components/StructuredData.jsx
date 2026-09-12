'use client';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zenthra Bilişim',
    url: 'https://www.zenthrabilisim.com',
    logo: 'https://www.zenthrabilisim.com/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/zenthra-bi%CC%87li%CC%87%C5%9Fi%CC%87m/'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-531-580-0753',
      contactType: 'customer service',
      email: 'info@zenthrabilisim.com',
      areaServed: 'TR',
      availableLanguage: ['Turkish', 'English']
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
