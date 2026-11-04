import { servicesList } from '@/data/servicesData';
import { rehberListesi } from '@/data/rehberData';
import { pdksSehirListesi } from '@/data/pdksSehirler';
import { webTasarimBolgeListesi } from '@/data/webTasarimSehirler';
import { sektorListesi } from '@/data/sektorData';
import { fiyatListesi } from '@/data/fiyatData';

const BASE = 'https://www.zenthrabilisim.com';

export default function sitemap() {
  // Gercek icerik degisim tarihi; her derlemede new Date() vermek Google'in lastmod'a guvenini bitirir.
  const now = new Date('2026-11-04');
  const core = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/projects/depo-live`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/projects/erp`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/hizmetler`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/sektorler`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/fiyatlar`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
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

  const pdks = pdksSehirListesi.map((s) => ({
    url: `${BASE}/pdks/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: s.slug === 'samsun' ? 0.9 : 0.7,
  }));

  const webTasarim = webTasarimBolgeListesi.map((s) => ({
    url: `${BASE}/web-tasarim/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: s.slug === 'samsun' ? 0.9 : 0.7,
  }));

  const sektor = sektorListesi.map((s) => ({
    url: `${BASE}/sektorler/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const fiyat = fiyatListesi.map((f) => ({
    url: `${BASE}/fiyatlar/${f.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...core, ...services, ...sektor, ...fiyat, ...rehber, ...pdks, ...webTasarim];
}
