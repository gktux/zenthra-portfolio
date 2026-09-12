const BASE = 'https://www.zenthrabilisim.com';

export default function sitemap() {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/projects/depo-live`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/projects/erp`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/contacts`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
