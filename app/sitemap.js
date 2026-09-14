import { servicesList } from '@/data/servicesData';
import { rehberListesi } from '@/data/rehberData';

const BASE = 'https://www.zenthrabilisim.com';

export default function sitemap() {
  const now = new Date();
  const core = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/projects/depo-live`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/projects/erp`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/hizmetler`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/rehber`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/contacts`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const services = servicesList.map((s) => ({
    url: `${BASE}/hizmetler/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const rehber = rehberListesi.map((y) => ({
    url: `${BASE}/rehber/${y.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...core, ...services, ...rehber];
}
