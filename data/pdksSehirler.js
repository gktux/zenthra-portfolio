import { servicesData } from '@/data/servicesData';

// Yerel SEO: il bazli PDKS / Armongate sayfalari (/pdks/[il]).
// Samsun merkez; Karadeniz ve komsu illerde yerinde kurulum.
export const pdksSehirler = {
  samsun: {
    ad: 'Samsun',
    de: 'Samsun’da',
    ilceler: ['Atakum', 'İlkadım', 'Canik', 'Tekkeköy', 'Bafra', 'Çarşamba', 'Terme', 'Havza', 'Vezirköprü', 'Kavak'],
    not: 'Merkez ofisimiz Samsun’da; aynı gün keşif ve hızlı yerinde servis veriyoruz.',
    sanayi: 'Samsun Merkez OSB, Kutlukent, Gıda OSB, Bafra ve Çarşamba sanayi siteleri',
  },
  ordu: {
    ad: 'Ordu',
    de: 'Ordu’da',
    ilceler: ['Altınordu', 'Ünye', 'Fatsa', 'Perşembe', 'Gölköy', 'Korgan'],
    not: 'Samsun merkezli ekibimizle Ordu ve ilçelerine planlı yerinde kurulum yapıyoruz.',
    sanayi: 'Ordu OSB, Ünye ve Fatsa sanayi bölgeleri',
  },
  trabzon: {
    ad: 'Trabzon',
    de: 'Trabzon’da',
    ilceler: ['Ortahisar', 'Akçaabat', 'Yomra', 'Arsin', 'Of', 'Sürmene', 'Araklı'],
    not: 'Trabzon’da fabrika, otel, hastane ve ofislere planlı yerinde kurulum ve uzaktan destek veriyoruz.',
    sanayi: 'Arsin OSB ve Beşikdüzü OSB',
  },
  giresun: {
    ad: 'Giresun',
    de: 'Giresun’da',
    ilceler: ['Merkez', 'Bulancak', 'Espiye', 'Görele', 'Tirebolu', 'Şebinkarahisar'],
    not: 'Giresun’da fındık işleme tesisleri ve işletmelere PDKS kurulumu yapıyoruz.',
    sanayi: 'Giresun ve Bulancak sanayi bölgeleri',
  },
  rize: {
    ad: 'Rize',
    de: 'Rize’de',
    ilceler: ['Merkez', 'Çayeli', 'Pazar', 'Ardeşen', 'Fındıklı'],
    not: 'Rize’de çay fabrikaları ve işletmelere toz ve nemli ortama uygun cihazlarla kurulum yapıyoruz.',
    sanayi: 'Rize çay fabrikaları ve sanayi bölgeleri',
  },
  sinop: {
    ad: 'Sinop',
    de: 'Sinop’ta',
    ilceler: ['Merkez', 'Boyabat', 'Gerze', 'Ayancık'],
    not: 'Sinop ve ilçelerine Samsun’dan yerinde kurulum yapıyoruz.',
    sanayi: 'Sinop ve Boyabat sanayi bölgeleri',
  },
  amasya: {
    ad: 'Amasya',
    de: 'Amasya’da',
    ilceler: ['Merkez', 'Merzifon', 'Suluova', 'Taşova', 'Gümüşhacıköy'],
    not: 'Amasya, Merzifon ve Suluova’ya Samsun’dan hızlı yerinde kurulum yapıyoruz.',
    sanayi: 'Merzifon OSB ve Suluova OSB',
  },
  tokat: {
    ad: 'Tokat',
    de: 'Tokat’ta',
    ilceler: ['Merkez', 'Turhal', 'Erbaa', 'Niksar', 'Zile'],
    not: 'Tokat ve ilçelerine planlı yerinde kurulum ve uzaktan destek veriyoruz.',
    sanayi: 'Tokat OSB, Turhal ve Erbaa sanayi bölgeleri',
  },
  corum: {
    ad: 'Çorum',
    de: 'Çorum’da',
    ilceler: ['Merkez', 'Sungurlu', 'Osmancık', 'Alaca', 'İskilip'],
    not: 'Çorum’daki fabrika ve işletmelere PDKS ve turnike kurulumu yapıyoruz.',
    sanayi: 'Çorum OSB ve Sungurlu sanayi bölgesi',
  },
  kastamonu: {
    ad: 'Kastamonu',
    de: 'Kastamonu’da',
    ilceler: ['Merkez', 'Tosya', 'Taşköprü', 'İnebolu'],
    not: 'Kastamonu ve ilçelerine planlı yerinde kurulum yapıyoruz.',
    sanayi: 'Kastamonu OSB ve Tosya sanayi bölgesi',
  },
};

export const pdksSehirListesi = Object.entries(pdksSehirler).map(([slug, s]) => ({ slug, ...s }));

const lower = (s) => s.toLocaleLowerCase('tr-TR');

export function pdksSehirServis(slug) {
  const s = pdksSehirler[slug];
  if (!s) return null;
  const base = servicesData['pdks-personel-devam-kontrol-sistemi'];
  const il = s.ad;
  const k = lower(il);
  const ilceStr = s.ilceler.join(', ');

  return {
    ...base,
    url: `https://www.zenthrabilisim.com/pdks/${slug}`,
    title: `${il} PDKS | Armongate Yetkili Bayi — Yüz Tanıma, Parmak İzi, Geçiş Kontrol`,
    metaDescription: `${il} PDKS sistemi ve Armongate yetkili bayi: yüz tanıma, parmak izi, kartlı ve mobil geçiş kontrol, turnike, puantaj. ${il} genelinde ücretsiz keşif, kurulum ve teknik destek.`,
    keywords: [
      `${k} pdks`, `pdks ${k}`, `${k} pdks sistemi`, `${k} pdks cihazı`, `${k} pdks fiyatları`,
      `${k} armongate`, `armongate ${k}`, `armongate bayi ${k}`, `${k} yüz tanıma sistemi`,
      `${k} parmak izi okuyucu`, `${k} geçiş kontrol sistemi`, `${k} kartlı geçiş sistemi`,
      `${k} turnike sistemi`, `${k} personel takip sistemi`, `${k} puantaj programı`,
      `${k} mesai takip sistemi`, `${k} personel giriş çıkış sistemi`,
      ...s.ilceler.map((i) => `${lower(i)} pdks`),
      'armongate yetkili bayi', 'karadeniz pdks',
    ].join(', '),
    badge: `Armongate Yetkili Bayi · ${il}`,
    h1: `${il} PDKS ve Geçiş Kontrol Sistemleri`,
    lead: `${il} ve ilçelerinde Armongate yetkili bayisi olarak PDKS, yüz tanıma, parmak izi, kartlı ve mobil geçiş kontrol sistemleri kuruyoruz. ${s.not}`,
    areaServed: il,
    features: [
      ...base.features,
      { title: `${il} Genelinde Yerinde Kurulum`, desc: `${ilceStr} başta olmak üzere ${il} genelinde ücretsiz keşif, montaj, eğitim ve teknik servis. ${s.sanayi} işletmelerine hizmet.` },
    ],
    faq: [
      { q: `${s.de} PDKS kurulumu yapıyor musunuz?`, a: `Evet. ${s.not} ${ilceStr} dahil ${il} genelinde ücretsiz keşif sonrası kurulum yapıyoruz.` },
      { q: `${s.de} Armongate yetkili bayi var mı?`, a: `Zenthra Bilişim, Armongate yetkili bayisi olarak ${il} bölgesine orijinal cihaz, garanti, kurulum ve destek sağlar.` },
      { q: `${il} PDKS fiyatları ne kadar?`, a: `Fiyat; kapı ve personel sayısı, yüz tanıma / parmak izi / kart / mobil tercihi, turnike ihtiyacı ve bulut veya yerel kurulum seçimine göre değişir. ${il} için ücretsiz keşif sonrası net teklif veriyoruz.` },
      ...base.faq.filter((f) => !f.q.startsWith('Hangi bölgelere') && !f.q.startsWith('Fiyat nasıl')),
    ],
  };
}
