// Sektorel cozum sayfalari (/sektorler/[slug]).
// Hedef: "sektor + cozum" uzun kuyruk aramalari (ornek: "gida toptanci stok takip programi").
// Her sayfa: ozgun giris, sorun -> cozum bolumleri, kapsam kartlari, SSS (FAQPage), ic linkler.

const BASE = 'https://www.zenthrabilisim.com';

const ORTAK_LINKLER = [
  { href: '/projects/depo-live', label: 'Depo Live depo programı' },
  { href: '/projects/erp', label: 'Zenthra ERP' },
  { href: '/hizmetler/pdks-personel-devam-kontrol-sistemi', label: 'PDKS sistemi' },
  { href: '/fiyatlar/depo-programi-fiyatlari', label: 'Depo programı fiyatları' },
  { href: '/fiyatlar/pdks-fiyatlari', label: 'PDKS fiyatları' },
];

export const sektorler = {
  'gida-toptan-dagitim': {
    ad: 'Gıda Toptan ve Dağıtım',
    title: 'Gıda Toptancısı Stok ve Depo Takip Programı | SKT, Lot, Sevkiyat — Zenthra',
    metaDescription:
      'Gıda toptancıları ve dağıtım firmaları için SKT ve lot takipli depo programı, barkodlu sevkiyat, araç yükleme ve cari entegrasyonu. Fire ve miadı geçen ürünü azaltın. Samsun merkezli, Türkiye geneli.',
    keywords:
      'gıda toptancı stok programı, gıda deposu takip programı, skt takip programı, son kullanma tarihi takibi, lot takip programı, gıda dağıtım yazılımı, toptancı depo programı, fifo fefo stok, gıda sevkiyat programı',
    badge: 'Sektörel Çözüm · Gıda',
    h1: 'Gıda Toptan ve Dağıtım Firmaları için Depo ve Stok Takip',
    lead:
      'Son kullanma tarihi yaklaşan ürünü önce çıkarın, lot bazında geri çağırma yapabilin, araç yüklemesini barkodla doğrulayın. Depo Live ve Zenthra ERP gıda toptancısının günlük akışına göre kurulur.',
    serviceType: 'Gıda toptan ve dağıtım sektörü için depo ve stok yönetim yazılımı',
    features: [
      { title: 'SKT ve Lot Takibi', desc: 'Her koli ve palet son kullanma tarihi ve lot numarasıyla kaydedilir. Yaklaşan SKT için otomatik uyarı.' },
      { title: 'FEFO ile Toplama', desc: 'Toplama listesi tarihi en yakın ürünü önce gösterir. Miadı geçen ürün ve fire belirgin azalır.' },
      { title: 'Araç Yükleme Kontrolü', desc: 'Sevkiyat aracına yüklenen her koli barkodla okutulur. Eksik veya yanlış yükleme araç çıkmadan yakalanır.' },
      { title: 'Rota ve Bayi Siparişi', desc: 'Bayi ve market siparişleri rota bazında gruplanır, depo toplama sırası rotaya göre çıkar.' },
      { title: 'Cari ve Fatura Entegrasyonu', desc: 'Sevk edilen miktar doğrudan irsaliye ve faturaya aktarılır. Muhasebe ile depo aynı rakamı görür.' },
      { title: 'Soğuk Oda ve Raf Adresleme', desc: 'Kuru gıda, soğuk oda ve dondurucu bölgeleri ayrı adreslenir. Ürünün nerede olduğu saniyeler içinde bulunur.' },
    ],
    sections: [
      {
        h2: 'Gıda toptancısında stok neden tutmaz?',
        p: [
          'Gıda dağıtımında stok farkının büyük kısmı üç yerden gelir: miadı geçip imha edilen ürün, yanlış araca yüklenen koli ve kâğıt üzerinde tutulan sayım. Excel veya genel muhasebe programı bu üç noktayı görmez, çünkü ürünü sadece adet olarak tutar; tarih, lot ve konum bilgisi yoktur.',
          'Depo Live her ürünü adet + son kullanma tarihi + lot + raf adresi ile birlikte izler. Böylece “stokta 120 koli var” yerine “80’i ağustos tarihli, 40’ı eylül tarihli, A-03 ve soğuk oda 2’de” bilgisini görürsünüz.',
        ],
      },
      {
        h2: 'Geri çağırma (recall) durumunda ne olur?',
        p: [
          'Bir tedarikçi belirli bir lotu geri çağırdığında, kâğıt sistemle o lotun hangi bayilere gittiğini bulmak günler sürer. Lot takibi açık olduğunda tek ekranda lotun giriş tarihi, kalan miktarı ve sevk edildiği müşteriler listelenir.',
        ],
      },
      {
        h2: 'Kurulum nasıl ilerler?',
        list: [
          'Depo ve soğuk oda alanlarının raf adreslerine bölünmesi ve etiketlenmesi',
          'Mevcut stoğun SKT ve lot bilgisiyle ilk sayımı',
          'Personelin telefon veya el terminali ile barkod okutma eğitimi',
          'Muhasebe / ERP entegrasyonu ve ilk ay yerinde destek',
        ],
      },
    ],
    faq: [
      { q: 'Gıda toptancısı için hangi program daha uygun: ERP mi depo programı mı?', a: 'Asıl sorun depoda fire ve yükleme hatasıysa önce Depo Live ile başlamak hızlı sonuç verir. Satış, cari ve finansı da tek yerde toplamak isterseniz Zenthra ERP ile birlikte kurulur.' },
      { q: 'SKT takibi için her ürüne etiket basmak gerekir mi?', a: 'Ürünün kendi barkodu yeterlidir. Mal kabulde SKT ve lot bilgisi girilir veya GS1 karekoddan otomatik okunur; ek etiket sadece raf adresleri için gerekir.' },
      { q: 'El terminali almak zorunda mıyız?', a: 'Hayır. Android telefon kamerası barkod okuyucu olarak çalışır. Yoğun depolarda dayanıklı el terminali öneriyoruz ama başlangıç için şart değildir.' },
      { q: 'Kaç günde kullanmaya başlarız?', a: 'Tek depolu bir toptancıda raf adresleme ve ilk sayımla birlikte genelde 1-2 hafta içinde canlı kullanıma geçilir.' },
    ],
  },

  'uretim-fabrika': {
    ad: 'Üretim ve Fabrika',
    title: 'Fabrika için ERP, Hammadde Stok ve PDKS Çözümleri | Zenthra Bilişim',
    metaDescription:
      'Üretim firmaları ve fabrikalar için hammadde-mamul stok takibi, reçete bazlı üretim, iş emri, vardiya ve PDKS puantaj. Tek ekip kurar, yerinde destek verir. Samsun ve Türkiye geneli.',
    keywords:
      'fabrika erp programı, üretim takip programı, hammadde stok takibi, reçete bazlı üretim, iş emri programı, fabrika pdks, vardiya takip sistemi, üretim planlama yazılımı, kobi erp',
    badge: 'Sektörel Çözüm · Üretim',
    h1: 'Üretim Firmaları ve Fabrikalar için ERP, Stok ve PDKS',
    lead:
      'Hammaddenin depoya girişinden mamulün sevkine kadar her adım tek sistemde. Vardiyalı personelin giriş-çıkışı PDKS ile puantaja otomatik akar.',
    serviceType: 'Üretim sektörü için ERP, stok ve personel takip çözümü',
    features: [
      { title: 'Reçete (Ürün Ağacı)', desc: 'Her mamulün hangi hammaddeden ne kadar kullandığı tanımlanır; üretim girildiğinde hammadde stoktan otomatik düşer.' },
      { title: 'İş Emri ve Üretim Takibi', desc: 'İş emri açılır, hat ve vardiya bazında üretilen miktar ve fire kaydedilir.' },
      { title: 'Hammadde ve Mamul Deposu', desc: 'Hammadde, yarı mamul ve mamul depoları ayrı izlenir. Kritik stok seviyesinde satın alma uyarısı.' },
      { title: 'Vardiyalı PDKS', desc: 'Yüz tanıma veya kartlı PDKS ile vardiya giriş-çıkışı, fazla mesai ve devamsızlık otomatik hesaplanır.' },
      { title: 'Maliyet Görünürlüğü', desc: 'Hammadde ve işçilik maliyeti üretim emrine bağlandığı için birim maliyet gerçek veriden çıkar.' },
      { title: 'IT Altyapı ve Bakım', desc: 'Fabrika ağı, sunucu, yedekleme ve yazıcılar dahil altyapı tek ekipten yönetilir.' },
    ],
    sections: [
      {
        h2: 'Fabrikada en sık karşılaştığımız tablo',
        p: [
          'Satış Excel’de, depo deftere, üretim ustabaşının not defterine, puantaj insan kaynaklarının tablosuna yazılıyor. Ay sonunda kimse aynı rakamı görmüyor; hammaddenin neden bittiği, fazla mesainin neden arttığı tartışılıyor.',
          'Zenthra ERP, Depo Live ve PDKS aynı ekip tarafından kurulduğu için bu dört veri kaynağı tek yerde birleşir. Ayrı firmalarla entegrasyon pazarlığı yapmazsınız.',
        ],
      },
      {
        h2: 'Kademeli geçiş',
        p: [
          'Her şeyi aynı anda değiştirmek üretimi durdurur. Genelde önce PDKS ve depo ile başlıyor, ardından reçete ve iş emrini devreye alıyoruz. Her adım bir öncekinin verisini kullanır.',
        ],
      },
    ],
    faq: [
      { q: 'Hazır ERP mi, özel yazılım mı?', a: 'Zenthra ERP hazır modüllerle gelir ve firmanıza özel ekranlar eklenebilir. Tamamen sıfırdan yazılıma göre çok daha hızlı ve ekonomiktir.' },
      { q: 'PDKS verisi bordro programımıza aktarılır mı?', a: 'Evet. Puantaj Excel veya bordro programının içe aktarma formatında dışa verilir.' },
      { q: 'Birden fazla fabrika veya depo yönetilebilir mi?', a: 'Evet. Her lokasyon ayrı depo olarak tanımlanır, transferler ve stok toplamı merkezden izlenir.' },
    ],
  },

  'insaat-taahhut': {
    ad: 'İnşaat ve Taahhüt',
    title: 'İnşaat Firmaları için Şantiye PDKS, Malzeme Takibi ve ERP | Zenthra',
    metaDescription:
      'İnşaat ve taahhüt firmaları için şantiye personel takibi (PDKS), şantiye malzeme ve demirbaş takibi, taşeron puantajı ve proje bazlı maliyet. Samsun ve Karadeniz geneli kurulum.',
    keywords:
      'şantiye pdks, şantiye personel takip, inşaat malzeme takip programı, şantiye stok programı, taşeron puantaj, inşaat erp, demirbaş takip programı, mobil pdks şantiye',
    badge: 'Sektörel Çözüm · İnşaat',
    h1: 'İnşaat ve Taahhüt Firmaları için Şantiye Takip Çözümleri',
    lead:
      'Şantiyede kim çalıştı, hangi malzeme hangi şantiyeye gitti, proje ne kadara mal oldu? PDKS, şantiye deposu ve ERP ile bu soruların cevabı tek ekranda.',
    serviceType: 'İnşaat sektörü için şantiye personel ve malzeme takip çözümü',
    features: [
      { title: 'Şantiye PDKS', desc: 'Şantiye girişinde yüz tanıma terminali veya konum doğrulamalı mobil PDKS ile personel ve taşeron girişi.' },
      { title: 'Taşeron Puantajı', desc: 'Taşeron ekiplerin günlük çalışma kayıtları firmaya göre ayrılır; hakediş hesabı kolaylaşır.' },
      { title: 'Şantiye Malzeme Deposu', desc: 'Merkez depodan şantiyeye transfer, şantiyede tüketim ve iade barkodla kaydedilir.' },
      { title: 'Demirbaş ve Ekipman', desc: 'İskele, kalıp, makine ve el aletlerinin hangi şantiyede, kimde olduğu izlenir.' },
      { title: 'Proje Bazlı Maliyet', desc: 'Malzeme ve işçilik maliyeti projeye bağlanır; bütçe aşımı erken görülür.' },
      { title: 'Şantiye İnternet ve Kamera', desc: 'Geçici şantiye ofisleri için ağ kurulumu, kamera ve uzaktan erişim altyapısı.' },
    ],
    sections: [
      {
        h2: 'Şantiyede kaybolan para nerede?',
        p: [
          'İnşaat firmalarında kayıp genelde iki kalemde: kayıt dışı kalan işçilik saatleri ve şantiyeler arasında izi kaybolan malzeme. Elle tutulan puantaj ve “şantiyeye gönderdik” notu bu kaybı ölçmeyi imkânsız hale getirir.',
          'PDKS kaydı ve barkodlu malzeme transferi sayesinde her şantiyenin gerçek işçilik ve malzeme tüketimi ölçülür.',
        ],
      },
    ],
    faq: [
      { q: 'Şantiyede elektrik ve internet yoksa PDKS çalışır mı?', a: 'Terminaller çevrimdışı kayıt tutar, bağlantı geldiğinde senkronize olur. Alternatif olarak konum doğrulamalı mobil PDKS kullanılabilir.' },
      { q: 'Şantiye bittiğinde cihazları taşıyabilir miyiz?', a: 'Evet. Terminaller yeni şantiyeye taşınır ve sistemde yeni lokasyon olarak tanımlanır.' },
      { q: 'Taşeron personeli ayrı raporlanır mı?', a: 'Evet. Her personel bağlı olduğu taşeron firmaya göre gruplanır, puantaj firma bazında alınır.' },
    ],
  },

  'lojistik-depo': {
    ad: 'Lojistik ve 3PL Depo',
    title: 'Lojistik ve 3PL Depo Yönetim Sistemi (WMS) | Depo Live — Zenthra',
    metaDescription:
      'Lojistik ve 3PL depolar için çok müşterili WMS: müşteri bazlı stok, raf adresleme, toplama rotası, barkodlu sevkiyat ve depolama ücreti raporu. Telefonla çalışır, hızlı kurulur.',
    keywords:
      '3pl depo programı, lojistik depo yönetim sistemi, wms programı, çok müşterili depo yazılımı, antrepo stok takibi, depolama hizmeti programı, palet takip programı, depo adresleme',
    badge: 'Sektörel Çözüm · Lojistik',
    h1: 'Lojistik ve 3PL Depolar için Depo Yönetim Sistemi',
    lead:
      'Birden fazla müşterinin malını aynı depoda tutuyorsanız, her müşterinin stoğunu, hareketini ve depolama süresini ayrı görmeniz gerekir. Depo Live bunu telefonla çalışan bir WMS ile sağlar.',
    serviceType: 'Lojistik ve 3PL depolar için depo yönetim sistemi',
    features: [
      { title: 'Müşteri Bazlı Stok', desc: 'Her ürün sahibi müşteriye bağlı tutulur; stoklar karışmaz, müşteriye özel rapor verilir.' },
      { title: 'Palet ve Raf Adresleme', desc: 'Her palet bir adrese yerleştirilir; boş adresler ve doluluk oranı anlık görülür.' },
      { title: 'Toplama Rotası', desc: 'Sipariş toplama listesi raf sırasına göre çıkar; yürüme mesafesi ve süre kısalır.' },
      { title: 'Barkodlu Mal Kabul ve Sevk', desc: 'Kabul ve sevkiyatta her kalem okutulur; eksik-fazla anında raporlanır.' },
      { title: 'Depolama Ücreti Raporu', desc: 'Palet-gün veya m² bazında müşteri bazlı depolama raporu, faturalandırmaya hazır.' },
      { title: 'Müşteri Portalı', desc: 'Müşterileriniz kendi stoklarını ve hareketlerini web üzerinden görüntüleyebilir.' },
    ],
    sections: [
      {
        h2: '3PL depoda Excel neden yetmez?',
        p: [
          'Tek müşteri ve az ürünle Excel idare eder. Müşteri sayısı arttığında aynı ürün koduna sahip farklı müşteri malları, kısmi sevkiyatlar ve depolama süresi hesabı tabloyu hızla kullanılamaz hale getirir.',
          'WMS ile her hareket bir müşteriye, bir adrese ve bir personele bağlanır. Hem müşteriye karşı şeffaf olursunuz hem de faturalandırma tartışması biter.',
        ],
      },
    ],
    faq: [
      { q: 'Kaç müşteri ve kaç palet yönetilebilir?', a: 'Sınır yoktur. Sistem bulut tabanlıdır, müşteri ve palet sayısı arttıkça performans etkilenmez.' },
      { q: 'Müşterilerimizin sistemiyle entegrasyon olur mu?', a: 'Pazaryeri, e-ticaret altyapısı veya müşterinin ERP’si ile API ve Excel aktarımıyla entegre edilebilir.' },
      { q: 'Depo Live ile ücretsiz deneme var mı?', a: 'Evet. Demo hesapla kendi ürünlerinizle deneyebilir, ardından kurulum planı çıkarabiliriz.' },
    ],
  },

  'otel-turizm': {
    ad: 'Otel ve Turizm',
    title: 'Oteller için Web Sitesi, PDKS ve IT Altyapı Hizmeti | Zenthra Bilişim',
    metaDescription:
      'Oteller ve turizm işletmeleri için rezervasyon odaklı hızlı web sitesi, Google’da yerel SEO, sezonluk personel PDKS, misafir Wi-Fi (5651 loglama) ve IT bakım. Samsun ve Karadeniz.',
    keywords:
      'otel web sitesi tasarımı, otel seo, otel pdks, otel personel takip, otel wifi 5651, otel it hizmeti, butik otel web sitesi, turizm web tasarım samsun',
    badge: 'Sektörel Çözüm · Otel',
    h1: 'Oteller ve Turizm İşletmeleri için Web, PDKS ve IT',
    lead:
      'Komisyonlu kanallara bağımlılığı azaltan doğrudan rezervasyon sitesi, sezonluk personeli kolay yöneten PDKS ve kesintisiz misafir Wi-Fi’ı tek ekipten.',
    serviceType: 'Otel ve turizm işletmeleri için web, PDKS ve bilişim hizmeti',
    features: [
      { title: 'Doğrudan Rezervasyon Sitesi', desc: 'Hızlı, mobil uyumlu, çok dilli otel sitesi; rezervasyon motoru ve WhatsApp ile doğrudan talep.' },
      { title: 'Yerel SEO ve Google Haritalar', desc: '“şehir + otel” aramaları ve Google İşletme Profili optimizasyonu ile organik görünürlük.' },
      { title: 'Sezonluk Personel PDKS', desc: 'Sezon başında hızlı personel tanımlama, vardiya ve fazla mesai takibi, sezon sonu kolay çıkış.' },
      { title: 'Misafir Wi-Fi ve 5651', desc: 'Kapsama alanı tasarımı, misafir ağı ayrımı ve yasal 5651 loglama.' },
      { title: 'Kamera ve Ağ Güvenliği', desc: 'IP kamera, güvenlik duvarı ve uzaktan erişim yapılandırması.' },
      { title: 'Yerinde Teknik Destek', desc: 'Sezon boyunca öncelikli müdahale ile bakım anlaşması.' },
    ],
    sections: [
      {
        h2: 'Komisyon yerine doğrudan rezervasyon',
        p: [
          'Online seyahat acenteleri her rezervasyondan ciddi komisyon alır. Hızlı açılan, güven veren ve Google’da otel adıyla aramada ilk sırada çıkan bir site, tekrar gelen misafiri doğrudan size yönlendirir.',
        ],
      },
    ],
    faq: [
      { q: 'Otel sitesi çok dilli olabilir mi?', a: 'Evet. Türkçe, İngilizce ve ihtiyaca göre Arapça, Rusça veya Almanca sürümler hazırlanır; her dil ayrı SEO ayarlarıyla yayınlanır.' },
      { q: 'Misafir Wi-Fi için 5651 loglama zorunlu mu?', a: 'Kamuya açık internet sunan işletmeler için yasal yükümlülüktür. Kurulumda loglama altyapısını da hazırlıyoruz.' },
    ],
  },
};

export const sektorListesi = Object.entries(sektorler).map(([slug, s]) => ({ slug, ...s }));

export function sektorServis(slug) {
  const s = sektorler[slug];
  if (!s) return null;
  return {
    ...s,
    slug,
    url: `${BASE}/sektorler/${slug}`,
    areaServed: 'Türkiye',
    crumb: { name: 'Sektörel Çözümler', href: '/sektorler' },
    relatedTitle: 'Diğer sektörel çözümler ve ilgili sayfalar',
    related: [
      ...sektorListesi.filter((x) => x.slug !== slug).map((x) => ({ href: `/sektorler/${x.slug}`, label: x.ad })),
      ...ORTAK_LINKLER,
    ],
  };
}
