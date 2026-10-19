import { servicesData } from '@/data/servicesData';

// Yerel SEO: bolge bazli web tasarim / SEO sayfalari (/web-tasarim/[bolge]).
// Samsun merkez ve ilceleri oncelikli; Karadeniz illeri ikinci halka.
export const webTasarimBolgeler = {
  samsun: {
    ad: 'Samsun',
    de: 'Samsun’da',
    tip: 'il',
    cevre: 'Atakum, İlkadım, Canik, Tekkeköy, Bafra, Çarşamba, Terme, Havza, Vezirköprü ve Kavak',
    not: 'Merkez ofisimiz Samsun’da; yüz yüze toplantı, aynı gün görüşme ve yerinde destek veriyoruz.',
  },
  atakum: {
    ad: 'Atakum',
    de: 'Atakum’da',
    tip: 'ilce',
    il: 'Samsun',
    cevre: 'Atakum sahil, Mimarsinan, Körfez, Denizevleri, Kurupelit ve Çatalçam',
    not: 'Atakum’daki otel, klinik, restoran, emlak ve hizmet işletmeleri için Google’da “atakum + hizmet” aramalarında öne çıkacak yerel SEO odaklı siteler yapıyoruz.',
  },
  ilkadim: {
    ad: 'İlkadım',
    de: 'İlkadım’da',
    tip: 'ilce',
    il: 'Samsun',
    cevre: 'Samsun merkez, Gazi Mah., Cumhuriyet Mah., Çarşı ve Liman bölgesi',
    not: 'İlkadım’daki esnaf, ticarethane ve kurumlara merkez konumda hızlı toplantı ve yerinde destek.',
  },
  canik: {
    ad: 'Canik',
    de: 'Canik’te',
    tip: 'ilce',
    il: 'Samsun',
    cevre: 'Canik merkez, Gülsan, Kutlukent ve sanayi bölgeleri',
    not: 'Canik’teki üretici, sanayi ve toptan firmalar için B2B odaklı kurumsal tanıtım ve katalog siteleri hazırlıyoruz.',
  },
  bafra: {
    ad: 'Bafra',
    de: 'Bafra’da',
    tip: 'ilce',
    il: 'Samsun',
    cevre: 'Bafra merkez, Bafra OSB ve çevre köyler',
    not: 'Bafra’daki tarım, gıda ve sanayi firmaları için ürün tanıtımı, katalog ve toptan sipariş odaklı web siteleri yapıyoruz.',
  },
  carsamba: {
    ad: 'Çarşamba',
    de: 'Çarşamba’da',
    tip: 'ilce',
    il: 'Samsun',
    cevre: 'Çarşamba merkez ve sanayi bölgesi',
    not: 'Çarşamba’daki üretici ve esnaf işletmeleri için kurumsal site ve yerel SEO çalışması yapıyoruz.',
  },
  ordu: {
    ad: 'Ordu', de: 'Ordu’da', tip: 'il',
    cevre: 'Altınordu, Ünye, Fatsa, Perşembe',
    not: 'Samsun merkezli ekibimizle Ordu ve ilçelerindeki firmalara uzaktan ve yerinde web tasarım hizmeti veriyoruz.',
  },
  trabzon: {
    ad: 'Trabzon', de: 'Trabzon’da', tip: 'il',
    cevre: 'Ortahisar, Akçaabat, Yomra, Arsin',
    not: 'Trabzon’daki otel, turizm, ticaret ve üretim firmalarına uzaktan çalışarak web tasarım ve SEO hizmeti veriyoruz.',
  },
  giresun: {
    ad: 'Giresun', de: 'Giresun’da', tip: 'il',
    cevre: 'Merkez, Bulancak, Espiye, Görele',
    not: 'Giresun’daki fındık ve gıda işletmeleri için ürün tanıtımı ve e-ticaret siteleri hazırlıyoruz.',
  },
  sinop: {
    ad: 'Sinop', de: 'Sinop’ta', tip: 'il',
    cevre: 'Merkez, Boyabat, Gerze, Ayancık',
    not: 'Sinop’taki turizm ve yerel işletmeler için Google’da görünür, hızlı web siteleri yapıyoruz.',
  },
  amasya: {
    ad: 'Amasya', de: 'Amasya’da', tip: 'il',
    cevre: 'Merkez, Merzifon, Suluova',
    not: 'Amasya ve ilçelerindeki firmalara uzaktan web tasarım ve SEO hizmeti veriyoruz.',
  },
  corum: {
    ad: 'Çorum', de: 'Çorum’da', tip: 'il',
    cevre: 'Merkez, Sungurlu, Osmancık',
    not: 'Çorum’daki üretim ve ticaret firmaları için kurumsal web sitesi ve SEO hizmeti veriyoruz.',
  },
  tokat: {
    ad: 'Tokat', de: 'Tokat’ta', tip: 'il',
    cevre: 'Merkez, Turhal, Erbaa, Niksar',
    not: 'Tokat’taki firmalara uzaktan web tasarım ve SEO hizmeti veriyoruz.',
  },
};

export const webTasarimBolgeListesi = Object.entries(webTasarimBolgeler).map(([slug, b]) => ({ slug, ...b }));

const lower = (s) => s.toLocaleLowerCase('tr-TR');

export function webTasarimBolgeServis(slug) {
  const b = webTasarimBolgeler[slug];
  if (!b) return null;
  const base = servicesData['web-tasarim'];
  const ad = b.ad;
  const k = lower(ad);
  const ilStr = b.il ? `${b.il} ${ad}` : ad;

  return {
    ...base,
    url: `https://www.zenthrabilisim.com/web-tasarim/${slug}`,
    title: `${ad} Web Tasarım ve SEO | Kurumsal Web Sitesi — Zenthra Bilişim`,
    metaDescription: `${ad} web tasarım ve SEO: kurumsal web sitesi, e-ticaret, mobil uyumlu hızlı site ve Google’da öne çıkaran teknik altyapı. Reklam harcamadan müşteri kazanın. ${ad} için ücretsiz görüşme ve teklif.`,
    keywords: [
      `${k} web tasarım`, `web tasarım ${k}`, `${k} web sitesi yaptırma`, `${k} seo`, `seo ${k}`,
      `${k} web ajansı`, `${k} kurumsal web sitesi`, `${k} e-ticaret sitesi`, `${k} web tasarım fiyatları`,
      `${k} web yazılım`, ...(b.il ? [`${lower(b.il)} web tasarım`, `${lower(b.il)} seo`] : ['karadeniz web tasarım']),
      'web tasarım samsun', 'samsun seo',
    ].join(', '),
    badge: `Web Tasarım & SEO · ${ad}`,
    h1: `${ad} Web Tasarım ve SEO`,
    lead: `${ilStr} için size özel tasarlanan, hızlı, mobil uyumlu ve Google’da bulunan web siteleri. ${b.not}`,
    areaServed: ad,
    features: [
      ...base.features,
      { title: `${ad} Genelinde Hizmet`, desc: `${b.cevre} dahil ${ad} genelinde web tasarım, yerel SEO ve Google İşletme Profili desteği.` },
    ],
    faq: [
      { q: `${ad} web tasarım fiyatları ne kadar?`, a: `Fiyat sayfa sayısı, e-ticaret ve entegrasyon ihtiyacına göre değişir. ${ad} için ücretsiz görüşmede kapsamı netleştirip sabit fiyatlı teklif veriyoruz.` },
      { q: `${b.de} web sitesi yaptırmak için yüz yüze görüşebilir miyiz?`, a: `${b.not} Uzaktan toplantı ile de aynı kalitede çalışıyoruz.` },
      { q: `${ad} için Google’da öne çıkmak mümkün mü?`, a: `Evet. Teknik SEO altyapısı, yerel SEO ve düzenli içerikle reklam harcamadan “${k} + hizmet” aramalarında üst sıralara çıkmak hedeflenir. Süre rekabete göre genelde 2-4 aydır.` },
      ...base.faq.filter((f) => !f.q.startsWith('Samsun’da web tasarım fiyat') && !f.q.startsWith('Samsun dışındaki')),
    ],
  };
}
