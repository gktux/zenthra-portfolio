export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://www.zenthrabilisim.com/sitemap.xml',
    host: 'https://www.zenthrabilisim.com',
  };
}
