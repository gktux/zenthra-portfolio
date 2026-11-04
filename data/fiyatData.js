// Fiyat sayfalari (/fiyatlar/[slug]). "fiyat" iceren aramalar satin almaya en yakin aramalardir.
// fiyat: null olan satirlar tabloda "Teklif ile" gorunur.
// Depo Live fiyatlari app.zenthrabilisim.com.tr panelindeki plan fiyatlariyla AYNI olmali.

const BASE = 'https://www.zenthrabilisim.com';

export const fiyatSayfalari = {
  'depo-programi-fiyatlari': {
    ad: 'Depo programı fiyatları',
    title: 'Depo Programı Fiyatları 2026 | Depo Live Paketleri — Zenthra',
    metaDescription:
      'Depo Live depo ve stok takip programı fiyatları: aylık 1.490 TL’den başlayan paketler, kullanıcı ve depo sayısına göre seçenekler, 14 gün ücretsiz deneme. Kurulum ücreti yok.',
    keywords:
      'depo programı fiyatları, stok takip programı fiyatları, depo yönetim sistemi fiyat, wms fiyatları, barkodlu stok programı fiyat, depo takip programı ücretli, depo live fiyat',
    badge: 'Fiyatlar · Depo Live',
    h1: 'Depo Programı Fiyatları',
    lead:
      'Depo Live aylık abonelikle çalışır; kurulum ücreti ve donanım zorunluluğu yoktur. Tüm paketlerde 14 gün ücretsiz deneme vardır, kart bilgisi istenmez.',
    serviceType: 'Depo ve stok takip yazılımı aboneliği',
    priceTable: {
      baslik: 'Depo Live paketleri (aylık, KDV hariç)',
      not: 'Yıllık ödemede yaklaşık 2 ay ücretsiz. Güncel fiyatlar ve deneme için app.zenthrabilisim.com.tr adresini ziyaret edin.',
      satirlar: [
        { paket: 'Başlangıç', kimin: 'Tek depolu küçük işletme', kapsam: '3 kullanıcı, 1 depo, 2.000 ürün, mobil el terminali', fiyat: '1.490 TL / ay' },
        { paket: 'Büyüme', kimin: 'E-ticaret ve çok depolu ekipler', kapsam: '7 kullanıcı, 3 depo, 15.000 ürün', fiyat: '3.990 TL / ay' },
        { paket: 'Profesyonel', kimin: 'Yüksek hacimli sevkiyat', kapsam: '20 kullanıcı, 10 depo, 100.000 ürün, denetim kaydı, aynı gün destek', fiyat: '8.990 TL / ay' },
        { paket: 'Kurumsal', kimin: 'Çok tesisli kurumlar', kapsam: 'Sınırsız kullanıcı, depo ve ürün, özel entegrasyon, atanmış temsilci', fiyat: '18.990 TL / ay' },
      ],
    },
    features: [
      { title: 'Kurulum Ücreti Yok', desc: 'Hesap açılır, ürünler Excel’den içe aktarılır, aynı gün kullanmaya başlanır.' },
      { title: 'El Terminali Şart Değil', desc: 'Android telefon kamerası barkod okuyucu olarak çalışır. Ek donanım maliyeti yoktur.' },
      { title: 'Paket Değişimi Serbest', desc: 'İhtiyaç arttıkça üst pakete geçilir; veriler aynen korunur.' },
      { title: '14 Gün Ücretsiz Deneme', desc: 'Kendi ürünlerinizle tüm özellikleri deneyin, memnun kalmazsanız hiçbir ücret ödemezsiniz.' },
    ],
    sections: [
      {
        h2: 'Depo programı fiyatını ne belirler?',
        p: [
          'Bulut depo programlarında fiyatı belirleyen üç ana etken vardır: aynı anda çalışacak kullanıcı sayısı, yönetilen depo sayısı ve ürün kartı adedi. Lisans satın alınan masaüstü programlardan farklı olarak sunucu, yedekleme ve güncelleme maliyeti aboneliğe dahildir.',
          'Tek depolu, birkaç bin ürünle çalışan bir işletme için Başlangıç paketi yeterlidir. Pazaryeri siparişleri ve birden fazla depo devreye girdiğinde Büyüme paketi daha ekonomik hale gelir.',
        ],
      },
      {
        h2: 'Excel’e göre gerçek maliyet',
        p: [
          'Excel ücretsiz görünür ama yanlış sevkiyat, sayım farkı ve bulunamayan ürün için harcanan personel saati düzenli bir gider kalemidir. Aylık birkaç yanlış sevkiyatın maliyeti, çoğu işletmede Başlangıç paketi ücretini geçer.',
        ],
      },
    ],
    faq: [
      { q: 'Depo programı fiyatlarına KDV dahil mi?', a: 'Tablodaki fiyatlar KDV hariçtir. Fatura Zenthra Bilişim adına kesilir.' },
      { q: 'Kurulum veya eğitim için ayrıca ücret var mı?', a: 'Standart kurulum ve uzaktan eğitim ücretsizdir. Yerinde kurulum, raf etiketleme ve veri göçü gibi ek hizmetler ayrıca fiyatlandırılır; Kurumsal pakette dahildir.' },
      { q: 'Aboneliği istediğim zaman iptal edebilir miyim?', a: 'Evet. Aylık abonelik dönem sonunda iptal edilir; verilerinizi Excel olarak dışa aktarabilirsiniz.' },
      { q: 'Yıllık ödemede indirim var mı?', a: 'Evet. Yıllık ödemede yaklaşık iki aylık ücret indirilir.' },
    ],
    related: [
      { href: '/projects/depo-live', label: 'Depo Live tanıtım' },
      { href: '/sektorler/gida-toptan-dagitim', label: 'Gıda toptancısı depo programı' },
      { href: '/sektorler/lojistik-depo', label: '3PL depo yönetim sistemi' },
      { href: '/rehber/depo-yonetim-programi', label: 'Depo yönetim programı rehberi' },
    ],
  },

  'pdks-fiyatlari': {
    ad: 'PDKS fiyatları',
    title: 'PDKS Fiyatları 2026 | Yüz Tanıma ve Kartlı PDKS Cihazı — Zenthra',
    metaDescription:
      'PDKS sistemi ve cihaz fiyatlarını belirleyen etkenler: cihaz tipi (yüz tanıma, parmak izi, kart), kapı sayısı, turnike ve yazılım. Samsun ve Karadeniz’de kurulum dahil teklif.',
    keywords:
      'pdks fiyatları, pdks cihazı fiyatları, yüz tanıma pdks fiyat, parmak izi okuyucu fiyat, personel takip sistemi fiyatı, turnike fiyatları, armongate fiyat, pdks samsun fiyat',
    badge: 'Fiyatlar · PDKS',
    h1: 'PDKS Fiyatları ve Kurulum Maliyeti',
    lead:
      'PDKS maliyeti cihaz tipine, kapı ve personel sayısına göre değişir. Keşif ücretsizdir; cihaz, kurulum ve yazılımı tek kalemde, sabit fiyatla teklif ediyoruz.',
    serviceType: 'Personel devam kontrol sistemi satış ve kurulumu',
    mailCta: true,
    priceTable: {
      baslik: 'PDKS çözüm seçenekleri',
      not: 'Döviz kuruna bağlı cihaz fiyatları değiştiği için güncel rakamı keşif sonrası yazılı teklifle veriyoruz.',
      satirlar: [
        { paket: 'Kartlı PDKS', kimin: 'Küçük ofis, tek giriş', kapsam: 'RFID/Mifare kart okuyucu, kartlar, bulut yazılım', fiyat: null },
        { paket: 'Yüz Tanıma PDKS', kimin: 'Fabrika, şantiye, mağaza', kapsam: 'Armongate yüz tanıma terminali, kurulum, puantaj yazılımı', fiyat: null },
        { paket: 'Turnikeli Geçiş', kimin: 'Yoğun personel girişi', kapsam: 'Turnike + yüz tanıma/kart, kablolama, kurulum', fiyat: null },
        { paket: 'Mobil PDKS', kimin: 'Saha ve şantiye ekipleri', kapsam: 'Konum doğrulamalı telefon uygulaması, donanımsız', fiyat: null },
      ],
    },
    features: [
      { title: 'Ücretsiz Keşif', desc: 'Kapı, kablolama ve ağ durumunu yerinde görüp kesin maliyet çıkarıyoruz.' },
      { title: 'Kurulum Dahil Teklif', desc: 'Cihaz, montaj, yazılım ve eğitim tek fiyatta; sürpriz kalem yok.' },
      { title: 'Yetkili Armongate Kurulumu', desc: 'Garantili cihaz ve yerinde teknik destek.' },
      { title: 'Bordroya Aktarım', desc: 'Puantaj Excel ve bordro programı formatında dışa verilir.' },
    ],
    sections: [
      {
        h2: 'PDKS maliyetini ne belirler?',
        list: [
          'Cihaz tipi: kart okuyucu en ekonomik, yüz tanıma en hijyenik ve hile riski en düşük seçenektir',
          'Kapı / giriş noktası sayısı',
          'Turnike veya kapı kilidi entegrasyonu ihtiyacı',
          'Personel sayısı ve vardiya düzeni',
          'Kablolama ve ağ altyapısının hazır olup olmadığı',
        ],
      },
    ],
    faq: [
      { q: 'PDKS cihazı tek başına alınabilir mi?', a: 'Evet, ama kurulum ve yazılım yapılandırması yapılmadan puantaj doğru çıkmaz. Kurulumlu teklif uzun vadede daha ekonomiktir.' },
      { q: 'Aylık yazılım ücreti var mı?', a: 'Bulut puantaj yazılımı tercih edilirse personel sayısına göre küçük bir aylık ücret vardır; yerel kurulumda tek seferlik lisanstır.' },
      { q: 'Samsun dışına kurulum yapıyor musunuz?', a: 'Evet. Ordu, Trabzon, Amasya, Çorum, Tokat, Sinop ve Giresun başta olmak üzere Karadeniz genelinde yerinde kurulum yapıyoruz.' },
    ],
    related: [
      { href: '/hizmetler/pdks-personel-devam-kontrol-sistemi', label: 'PDKS sistemi' },
      { href: '/pdks/samsun', label: 'Samsun PDKS' },
      { href: '/sektorler/uretim-fabrika', label: 'Fabrika PDKS' },
      { href: '/sektorler/insaat-taahhut', label: 'Şantiye PDKS' },
    ],
  },

  'web-tasarim-fiyatlari': {
    ad: 'Web tasarım fiyatları',
    title: 'Web Tasarım Fiyatları 2026 Samsun | Kurumsal Site ve SEO — Zenthra',
    metaDescription:
      'Samsun web tasarım fiyatları: tanıtım sitesi, kurumsal site, e-ticaret ve SEO paketlerini belirleyen etkenler. Hazır şablon değil, hızlı ve Google uyumlu özel tasarım. Ücretsiz teklif.',
    keywords:
      'web tasarım fiyatları, web tasarım fiyatları samsun, web sitesi yaptırma fiyatları, kurumsal web sitesi fiyat, e-ticaret sitesi fiyatları, seo fiyatları, web sitesi kaç para',
    badge: 'Fiyatlar · Web Tasarım',
    h1: 'Web Tasarım Fiyatları',
    lead:
      'Web sitesi fiyatı sayfa sayısı, tasarım özgünlüğü, e-ticaret ve entegrasyon ihtiyacına göre değişir. Kapsamı birlikte netleştirip sabit fiyatlı teklif veriyoruz.',
    serviceType: 'Web sitesi tasarım ve SEO hizmeti',
    priceTable: {
      baslik: 'Web tasarım paketleri',
      not: 'Ücretsiz görüşmede ihtiyacınızı dinleyip aynı gün yazılı teklif gönderiyoruz.',
      satirlar: [
        { paket: 'Tanıtım Sitesi', kimin: 'Esnaf, klinik, küçük işletme', kapsam: '5-7 sayfa, mobil uyum, iletişim/WhatsApp, temel SEO, Google İşletme', fiyat: null },
        { paket: 'Kurumsal Site', kimin: 'KOBİ ve kurumlar', kapsam: 'Özel tasarım, çok dilli, blog, teknik SEO, yönetim paneli', fiyat: null },
        { paket: 'E-Ticaret', kimin: 'Online satış yapacak firmalar', kapsam: 'Ürün yönetimi, sanal POS, kargo, pazaryeri ve stok entegrasyonu', fiyat: null },
        { paket: 'SEO Bakım', kimin: 'Mevcut sitesi olanlar', kapsam: 'Aylık içerik, teknik SEO, Search Console raporu', fiyat: null },
      ],
    },
    features: [
      { title: 'Sabit Fiyat', desc: 'Teklifte yazan kapsam dışında ek ücret çıkmaz.' },
      { title: 'Hız ve SEO Dahil', desc: 'Her site teknik SEO altyapısı ve yüksek PageSpeed skoruyla teslim edilir.' },
      { title: 'Alan Adı ve Hosting', desc: 'Domain, SSL ve barındırma kurulumu tek elden.' },
      { title: 'Teslim Sonrası Destek', desc: 'Yayın sonrası ilk ay ücretsiz düzeltme ve eğitim.' },
    ],
    sections: [
      {
        h2: 'Ucuz web sitesi neden pahalıya patlar?',
        p: [
          'Hazır şablonla birkaç günde kurulan siteler genelde ağır eklentilerle yavaş açılır, mobilde bozulur ve Google’da görünmez. Sonuçta site var ama müşteri getirmez; bir yıl sonra yeniden yaptırılır.',
          'Biz siteyi hız, mobil uyum ve arama motoru görünürlüğü önceliğiyle geliştiriyoruz. Amaç güzel görünen bir vitrin değil, size iş getiren bir kanal.',
        ],
      },
    ],
    faq: [
      { q: 'Web sitesi kaç günde teslim edilir?', a: 'Tanıtım siteleri genelde 1-2 hafta, kurumsal siteler 3-4 hafta, e-ticaret siteleri 4-6 hafta içinde yayına alınır.' },
      { q: 'Yıllık ek ücret var mı?', a: 'Alan adı ve hosting yıllık yenilenir. İsteğe bağlı bakım ve SEO paketleri aylık olarak sunulur.' },
      { q: 'Siteyi sonradan kendim güncelleyebilir miyim?', a: 'Evet. Yönetim paneli ile içerik, görsel ve ürünleri kendiniz güncelleyebilirsiniz.' },
    ],
    related: [
      { href: '/hizmetler/web-tasarim', label: 'Web tasarım hizmeti' },
      { href: '/web-tasarim/samsun', label: 'Samsun web tasarım' },
      { href: '/web-tasarim/atakum', label: 'Atakum web tasarım' },
      { href: '/sektorler/otel-turizm', label: 'Otel web sitesi' },
    ],
  },
};

export const fiyatListesi = Object.entries(fiyatSayfalari).map(([slug, f]) => ({ slug, ...f }));

export function fiyatServis(slug) {
  const f = fiyatSayfalari[slug];
  if (!f) return null;
  return {
    ...f,
    slug,
    url: `${BASE}/fiyatlar/${slug}`,
    areaServed: 'Türkiye',
    crumb: { name: 'Fiyatlar', href: '/fiyatlar' },
    relatedTitle: 'İlgili sayfalar',
    related: [
      ...f.related,
      ...fiyatListesi.filter((x) => x.slug !== slug).map((x) => ({ href: `/fiyatlar/${x.slug}`, label: x.ad })),
    ],
  };
}
