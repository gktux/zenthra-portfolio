// Zenthra Bilişim — Depo Live odaklı rehber içerikleri.
// Her kayıt bir /rehber/<slug> sayfasını besler.

export const rehberYazilari = {
  'depo-yonetim-programi': {
    slug: 'depo-yonetim-programi',
    title: 'Depo Yönetim Programı Nedir, Nasıl Seçilir? (2026 Rehberi)',
    metaDescription:
      'Depo yönetim programı nedir, hangi modülleri olmalı, fiyatlar nasıl belirlenir ve yanlış seçim nelere mal olur? Mal kabulden sevkiyata kadar kontrol listesiyle karar rehberi.',
    keywords:
      'depo yönetim programı, depo yönetim sistemi, depo programı, WMS yazılımı, depo otomasyonu, depo yazılımı fiyatları',
    badge: 'Depo Yönetimi',
    h1: 'Depo Yönetim Programı Nedir, Nasıl Seçilir?',
    lead:
      'Depo yönetim programı, malın depoya girdiği andan müşteriye çıktığı ana kadar her hareketi kayıt altına alan ve sahadaki personeli barkod üzerinden yönlendiren yazılımdır. Doğru seçilmiş bir sistem sayım süresini günlerden saatlere indirir; yanlış seçilmiş bir sistem ise personelin yıllarca paralel Excel tutmasına yol açar.',
    okuma: '9 dakika',
    guncelleme: '2026-09-15',
    bolumler: [
      {
        h2: 'Depo yönetim programı tam olarak ne yapar?',
        paragraflar: [
          'Klasik stok yazılımları "elimde kaç adet var" sorusunu cevaplar. Depo yönetim programı ise bir adım öteye geçer ve "bu ürün hangi rafta, hangi lotta, kim tarafından, ne zaman konuldu" sorusunu cevaplar. Aradaki fark, depo büyüdükçe kâr ile zarar arasındaki fark hâline gelir.',
          'Sistem sahada şöyle çalışır: mal kabulde irsaliye okutulur, gelen ürünün barkodu taranır, sistem uygun rafı önerir, personel ürünü o rafa koyup raf barkodunu okutur. Bu andan itibaren stok, adet bazında değil konum bazında bilinir hâle gelir.',
        ],
        liste: [
          'Mal kabul: sipariş ile gelen malın eşleştirilmesi, eksik ve fazla tespiti',
          'Raf yerleştirme: ürünün nereye konacağının sistem tarafından önerilmesi',
          'Toplama (picking): sipariş bazlı toplama listesi ve en kısa rota',
          'Sayım: depoyu kapatmadan koridor veya raf bazlı kısmi sayım',
          'Sevkiyat: paketleme, kontrol okutması ve irsaliye çıkışı',
          'İzlenebilirlik: seri numarası, lot ve son kullanma tarihi takibi',
        ],
      },
      {
        h2: 'Hangi işletmenin depo programına ihtiyacı var?',
        paragraflar: [
          'Karar için depo metrekaresine değil, hata maliyetine bakın. Ayda birkaç yanlış sevkiyat yapan, iade oranı yükselen veya sayım sonrası tutmayan stok farklarını "fire" diye yazan her işletme, yazılımın maliyetini zaten ödüyor demektir; sadece faturası görünmüyor.',
          'Pratik bir eşik: depoda iki kişiden fazla çalışıyorsa ve ürün sayısı 500 kalemi geçtiyse, insan hafızası ölçek olmaktan çıkar. Bu noktadan sonra süreç yazılıma taşınmadığında her yeni personel, sistemin hatasını değil kendi alışkanlığını büyütür.',
        ],
        liste: [
          'E-ticaret ve pazaryeri satışı yapan firmalar: stok tek kanalda yanlışsa hepsinde yanlıştır',
          'Üretim yapan firmalar: hammadde ve yarı mamul konumu üretimi durdurabilir',
          'Gıda, kozmetik, ilaç: son kullanma ve lot takibi yasal zorunluluk',
          'Yedek parça ve teknik malzeme: binlerce kalem, düşük adet, yüksek karışıklık',
        ],
      },
      {
        h2: 'Seçim yaparken sorulması gereken 8 soru',
        paragraflar: [
          'Demolarda her yazılım iyi görünür. Farkı ortaya çıkaran şey, kendi deponuzun en zor senaryosunu demoya taşımanızdır. Aşağıdaki soruları satış görüşmesinde net cevaplattırın ve cevapları yazılı isteyin.',
        ],
        liste: [
          'Sayım sırasında sevkiyat devam edebiliyor mu, yoksa depo kapanmak zorunda mı?',
          'Personel kendi telefonunu el terminali olarak kullanabiliyor mu, yoksa cihaz yatırımı şart mı?',
          'Aynı ürünün birden fazla rafta bulunması destekleniyor mu?',
          'Seri, lot ve son kullanma takibi standart mı, yoksa ek modül mü?',
          'Pazaryeri ve e-ticaret siparişi sisteme otomatik mi düşüyor?',
          'İnternet kesildiğinde saha çalışması duruyor mu?',
          'Yetki ayrımı var mı — depo personeli stok düzeltmesi yapabiliyor mu?',
          'Kaç günde kurulur, veri aktarımı kime ait, eğitim fiyata dahil mi?',
        ],
      },
      {
        h2: 'Depo yönetim programı fiyatları nasıl belirlenir?',
        paragraflar: [
          'Piyasada üç model var: kullanıcı başına aylık abonelik, tek seferlik lisans artı yıllık bakım, ve işlem hacmine göre ücretlendirme. KOBİ ölçeğinde abonelik modeli neredeyse her zaman daha düşük toplam maliyet verir; çünkü güncelleme, sunucu ve yedekleme kalemleri fiyata dahildir.',
          'Teklifleri karşılaştırırken sadece aylık rakama bakmayın. Gerçek maliyet şu dört kalemin toplamıdır: yazılım bedeli, kurulum ve veri aktarımı, donanım (el terminali veya barkod yazıcı), ve personelin öğrenme süresinde kaybedilen verim. Dördüncü kalem genelde en büyüğüdür ve arayüzü karmaşık yazılımlarda katlanır.',
        ],
      },
      {
        h2: 'Kurulumda en sık yapılan üç hata',
        paragraflar: [
          'Birincisi, raf kodlaması yapılmadan yazılıma geçilmesi. Sistem rafı tanımıyorsa konum takibi de yapamaz; önce koridor-raf-göz mantığında fiziksel etiketleme tamamlanmalıdır.',
          'İkincisi, açılış stoğunun kirli aktarılması. Yanlış açılış stoğu, yazılımın hatası gibi görünen aylarca süren güvensizlik yaratır. Geçiş öncesi tam sayım şarttır.',
          'Üçüncüsü, paralel Excel dosyasına izin verilmesi. Ekip eski tabloyu tutmaya devam ederse sistem hiçbir zaman tek doğru kaynak olmaz. Geçiş tarihinden sonra tek kayıt yeri yazılım olmalıdır.',
        ],
      },
    ],
    faq: [
      {
        soru: 'Depo yönetim programı ile stok takip programı aynı şey mi?',
        cevap:
          'Değil. Stok takip programı miktarı bilir, depo yönetim programı konumu ve hareketi de bilir. Küçük bir depoda ikisi aynı işi görebilir; raf sayısı arttığında sadece miktar bilmek sipariş toplamaya yetmez.',
      },
      {
        soru: 'Mevcut muhasebe veya ERP programımızla birlikte çalışır mı?',
        cevap:
          'Doğru kurgulandığında çalışır. Depo yazılımı sahadaki hareketi üretir, muhasebe tarafı bu hareketin mali karşılığını işler. Önemli olan hangi sistemin stok için tek doğru kaynak sayılacağının en baştan kararlaştırılmasıdır.',
      },
      {
        soru: 'Personelimiz teknolojiye yabancı, kullanabilir mi?',
        cevap:
          'Barkod okutma esaslı sistemlerde öğrenme süresi genellikle birkaç gündür, çünkü personel veri girmez; sadece okutur. Klavyeden ürün kodu yazdıran sistemlerden kaçının, asıl zorluk oradadır.',
      },
      {
        soru: 'Geçiş sırasında depo operasyonu durur mu?',
        cevap:
          'Planlı geçişte durmaz. Açılış sayımı genelde hafta sonuna veya düşük hacimli bir güne alınır, ertesi iş günü sahada barkodlu çalışmaya geçilir.',
      },
    ],
    ilgili: ['stok-takip-programi', 'wms-nedir', 'excel-ile-stok-takibi'],
  },

  'stok-takip-programi': {
    slug: 'stok-takip-programi',
    title: 'Stok Takip Programı: Doğru Stok Nasıl Tutulur?',
    metaDescription:
      'Stok takip programı seçerken bakılması gereken özellikler, stok doğruluğu nasıl ölçülür, kritik stok ve sayım farkı nasıl yönetilir? Uygulamalı stok yönetimi rehberi.',
    keywords:
      'stok takip programı, stok yönetimi, stok takip yazılımı, kritik stok seviyesi, stok doğruluk oranı, barkodlu stok takibi',
    badge: 'Stok Yönetimi',
    h1: 'Stok Takip Programı: Doğru Stok Nasıl Tutulur?',
    lead:
      'Stok takibinin amacı rakam tutturmak değil, karar verebilmektir. Sipariş verirken, üretim planlarken ve müşteriye söz verirken güvenebileceğiniz bir stok rakamı yoksa, elinizdeki tüm raporlar tahmin niteliğindedir.',
    okuma: '8 dakika',
    guncelleme: '2026-09-15',
    bolumler: [
      {
        h2: 'Stok doğruluğu nasıl ölçülür?',
        paragraflar: [
          'Stok doğruluk oranı, sayımda sistemle birebir uyan kalem sayısının toplam kalem sayısına bölümüdür. Dikkat: adet farkının toplamına değil, kalem bazında uyuma bakılır. On kalemin dokuzu doğru, biri 300 adet sapıyorsa toplamda tutuyormuş gibi görünen tablo sizi yanıltır.',
          'Sağlıklı bir depoda hedef %98 ve üzeridir. %90 altındaki her depo, satış tarafında "var göründü, yok çıktı" vakası üretir; bu vakanın maliyeti iade, kargo ve müşteri kaybı olarak geri döner.',
        ],
        liste: [
          'Kalem bazlı doğruluk oranını aylık ölçün ve grafikleyin',
          'Sapmanın kaynağını kategori bazında ayırın (hızlı tüketilenler mi, benzer barkodlular mı?)',
          'Düzeltme yetkisini tek kişide toplayın; herkes düzeltirse hata kaynağı kaybolur',
        ],
      },
      {
        h2: 'Programda mutlaka olması gereken özellikler',
        paragraflar: [
          'Stok takip programı denince akla ilk gelen giriş-çıkış kaydıdır ama asıl değer, hatayı oluşmadan engelleyen kontrollerdedir.',
        ],
        liste: [
          'Barkod ve karekod desteği: elle kod yazımı hatanın birinci kaynağıdır',
          'Kritik stok uyarısı: minimum seviyenin altına düşünce bildirim',
          'Çoklu depo ve şube: transferlerin kayıt altında olması',
          'Seri, lot ve son kullanma tarihi: geriye dönük izlenebilirlik',
          'Hareket geçmişi: her düzeltmenin kim tarafından ve ne zaman yapıldığı',
          'Yetkilendirme: stok düzeltme ile stok görüntülemenin ayrı yetkiler olması',
        ],
      },
      {
        h2: 'Kritik stok seviyesi nasıl belirlenir?',
        paragraflar: [
          'Basit ve işe yarayan formül şudur: kritik stok = günlük ortalama tüketim × tedarik süresi (gün) + emniyet stoğu. Emniyet stoğunu ise tedarikçinin gecikme geçmişine göre belirleyin; her zaman zamanında getiren bir tedarikçi için düşük, dalgalı olan için yüksek tutun.',
          'Bu hesabı tüm ürünlere tek tek yapmak yerine ABC analizi uygulayın. Cironun büyük kısmını üreten A grubu ürünlerde hassas takip yapın; C grubunda daha geniş emniyet payı bırakıp takip yükünden kurtulun.',
        ],
      },
      {
        h2: 'Sayım farkı çıktığında ne yapılmalı?',
        paragraflar: [
          'Sayım farkını doğrudan düzeltip kapatmak en kolay ama en zararlı yoldur; çünkü sistemi doğru hâle getirirken hatanın nedenini siler. Önce fark kaleminin son hareketlerine bakın: yanlış barkod okutması mı, iade girişi mi, yoksa kayıtsız numune çıkışı mı?',
          'Tekrarlayan farklar neredeyse her zaman süreç hatasıdır, personel hatası değil. Aynı iki ürünün barkodları benziyorsa etiket değiştirin; numune çıkışı kayıtsız yapılıyorsa numune için ayrı bir çıkış tipi tanımlayın.',
        ],
      },
    ],
    faq: [
      {
        soru: 'Excel ile stok takibi yeterli olur mu?',
        cevap:
          'Tek kişinin kullandığı, günde birkaç hareketin olduğu yapılarda olabilir. Aynı dosyaya iki kişi dokunduğu andan itibaren sürüm karmaşası ve geç kayıt başlar; stok gerçek zamanlı olmaktan çıkar.',
      },
      {
        soru: 'Barkod sistemi kurmak pahalı mı?',
        cevap:
          'Barkod okuyucu donanımı bugün büyük bir yatırım değil ve akıllı telefonlar el terminali olarak kullanılabildiği için birçok işletmede ek cihaz gerekmiyor. Asıl maliyet kalemi etiketleme düzeninin bir kez doğru kurulmasıdır.',
      },
      {
        soru: 'Kaç ürün kalemine kadar manuel takip mümkün?',
        cevap:
          'Pratikte birkaç yüz kalemden sonra manuel takip hata üretmeye başlar. Kalem sayısından daha belirleyici olan günlük hareket sayısıdır; hareket sıklaştıkça manuel kayıt her zaman geriden gelir.',
      },
    ],
    ilgili: ['depo-yonetim-programi', 'depo-sayimi-nasil-yapilir', 'excel-ile-stok-takibi'],
  },

  'wms-nedir': {
    slug: 'wms-nedir',
    title: 'WMS Nedir? Depo Yönetim Sistemi ile ERP Arasındaki Fark',
    metaDescription:
      'WMS (Warehouse Management System) nedir, ne işe yarar, ERP ile farkı nedir ve hangi durumda ayrı bir WMS gerekir? Sade ve uygulamalı açıklama.',
    keywords:
      'WMS nedir, warehouse management system, depo yönetim sistemi, WMS ERP farkı, WMS yazılımı, depo otomasyon sistemi',
    badge: 'Temel Kavramlar',
    h1: 'WMS Nedir? Depo Yönetim Sistemi ile ERP Arasındaki Fark',
    lead:
      'WMS, İngilizce "Warehouse Management System" ifadesinin kısaltmasıdır ve Türkçede depo yönetim sistemi olarak geçer. Kısaca: deponun içinde ne olduğunu değil, deponun içinde ne olup bittiğini yöneten sistemdir.',
    okuma: '7 dakika',
    guncelleme: '2026-09-15',
    bolumler: [
      {
        h2: 'WMS ne yapar, ERP ne yapar?',
        paragraflar: [
          'ERP işletmenin tamamını yönetir: satınalma, muhasebe, üretim, insan kaynakları ve stoğun mali boyutu. WMS ise tek bir alana odaklanır ve o alanda derinleşir: deponun fiziksel operasyonu.',
          'Fark en net şu örnekte görülür. ERP "X ürününden 400 adet var" der. WMS "X ürününün 250 adedi A-03-02 rafında, 150 adedi B-01-04 rafında, ikinci grubun son kullanma tarihi daha yakın, toplamaya oradan başla" der. İkisi de doğrudur; ama sahadaki personelin işini yalnızca ikincisi yapar.',
        ],
        liste: [
          'ERP: mali kayıt, sipariş yönetimi, üretim planı, cari hesap',
          'WMS: raf adresleme, toplama rotası, sayım, sevkiyat kontrolü',
          'Kesişim: stok miktarı — bu yüzden iki sistemin veri akışı net tanımlanmalıdır',
        ],
      },
      {
        h2: 'Hangi durumda ayrı bir WMS gerekir?',
        paragraflar: [
          'ERP tarafındaki stok modülü, raf sayısı az ve hareket düşükse yeterlidir. Aşağıdaki durumlardan ikisi sizde varsa, ERP tarafını zorlamak yerine WMS ile birlikte çalıştırmak hem daha ucuz hem daha hızlı sonuç verir.',
        ],
        liste: [
          'Aynı ürün birden fazla rafta veya birden fazla depoda duruyor',
          'Günlük sipariş sayısı personelin ezberleyebileceği sınırı aştı',
          'Son kullanma tarihi veya lot bazlı çıkış zorunluluğu var (FEFO)',
          'Sayım için depoyu kapatmak zorunda kalıyorsunuz',
          'Toplama sırasında personel ürünü aramakla vakit kaybediyor',
        ],
      },
      {
        h2: 'WMS kurmanın ölçülebilir getirileri',
        paragraflar: [
          'WMS yatırımının geri dönüşü genelde üç kalemde görünür: toplama süresindeki kısalma, yanlış sevkiyat kaynaklı iadelerin azalması ve sayıma harcanan iş gücünün düşmesi. Bu üç kalemi geçiş öncesinde ölçün; aksi hâlde sonrasında iyileşmeyi kanıtlayamazsınız.',
          'Ölçüm için karmaşık araç gerekmez: bir hafta boyunca ortalama sipariş toplama süresini, aylık iade adedini ve son sayımda harcanan toplam adam-saati not etmeniz yeterlidir.',
        ],
      },
    ],
    faq: [
      {
        soru: 'WMS ve ERP aynı anda kullanılabilir mi?',
        cevap:
          'Evet, yaygın kurgu budur. WMS sahadaki hareketi üretir, ERP mali ve idari tarafı yürütür. Kritik nokta stoğun tek doğru kaynağının hangisi olduğunun baştan belirlenmesidir.',
      },
      {
        soru: 'WMS küçük depolar için fazla mı kaçar?',
        cevap:
          'Bulut tabanlı ve telefonla çalışan sistemler sayesinde artık kaçmıyor. Eskiden WMS büyük donanım yatırımı demekti; bugün birkaç personelli depolar da aynı mantıkla çalışabiliyor.',
      },
      {
        soru: 'FEFO ve FIFO farkı nedir?',
        cevap:
          'FIFO ilk giren malın ilk çıkmasıdır. FEFO ise son kullanma tarihi en yakın olanın ilk çıkmasıdır. Gıda, kozmetik ve ilaçta doğru kural genellikle FEFO olur ve bunu elle yönetmek çok zordur.',
      },
    ],
    ilgili: ['depo-yonetim-programi', 'stok-takip-programi', 'el-terminali-ile-stok-takibi'],
  },

  'depo-sayimi-nasil-yapilir': {
    slug: 'depo-sayimi-nasil-yapilir',
    title: 'Depo Sayımı Nasıl Yapılır? Depoyu Kapatmadan Sayım Rehberi',
    metaDescription:
      'Depo sayımı nasıl yapılır, sayım öncesi hazırlık nasıl olmalı, dönemsel ve sürekli sayım farkı nedir? Operasyonu durdurmadan sayım yapmanın adımları.',
    keywords:
      'depo sayımı nasıl yapılır, stok sayımı, dönemsel sayım, sürekli sayım, cycle counting, sayım farkı, envanter sayımı',
    badge: 'Operasyon',
    h1: 'Depo Sayımı Nasıl Yapılır?',
    lead:
      'Sayım, çoğu işletmede yılda bir kez yapılan ve herkesin korktuğu bir operasyondur. Oysa doğru kurguda sayım, yılın bir haftasını yakan bir olay değil, her gün arka planda dönen sıradan bir rutindir.',
    okuma: '8 dakika',
    guncelleme: '2026-09-15',
    bolumler: [
      {
        h2: 'Sayım öncesi hazırlık',
        paragraflar: [
          'Sayımın başarısı sayım gününde değil, öncesinde belirlenir. Hazırlıksız başlayan sayım, farkın gerçek mi yoksa kayıt gecikmesi mi olduğunu ayırt edemez.',
        ],
        liste: [
          'Bekleyen tüm mal kabul ve sevkiyat kayıtlarını sisteme işleyin',
          'Raf ve koridor etiketlerinin okunur olduğunu kontrol edin',
          'Sayım kesme saatini ilan edin: bu saatten sonraki hareketler ayrı işlenir',
          'İade ve numune alanlarını fiziksel olarak ayırın, karışmasın',
          'Sayım ekiplerini ve sorumlu oldukları bölgeleri önceden yazılı dağıtın',
        ],
      },
      {
        h2: 'Dönemsel sayım mı, sürekli sayım mı?',
        paragraflar: [
          'Dönemsel sayımda tüm depo bir defada sayılır; operasyon durur, ekip yorulur, sonuç tek seferde alınır. Sürekli sayımda (cycle counting) ise depo bölgelere ayrılır ve her gün küçük bir bölge sayılır; operasyon hiç durmaz.',
          'Sürekli sayımın asıl faydası iş gücü tasarrufu değil, hata yaşlanmadan yakalanmasıdır. Yılda bir sayan bir depoda hatanın ortalama yaşı altı aydır; kimse altı ay önce ne olduğunu hatırlamaz. Haftalık sayımda hatanın yaşı birkaç gündür ve kaynağı bulunabilir.',
        ],
        liste: [
          'A grubu (yüksek devirli) ürünleri ayda bir sayın',
          'B grubunu üç ayda bir sayın',
          'C grubunu yılda bir kez sayın',
        ],
      },
      {
        h2: 'Barkodlu sayımın klasik sayımdan farkı',
        paragraflar: [
          'Kâğıt listeyle sayımda personel hem sayar hem yazar, sonra bir başkası bunu sisteme girer. İki aktarım adımı, iki hata kaynağı demektir. Barkodlu sayımda personel ürünü okutur ve adet girer; kayıt anında sisteme düşer, ikinci giriş yoktur.',
          'Ayrıca barkodlu sayımda sistem, aynı rafın iki kez sayılmasını veya atlanmasını fark eder. Kâğıt listede bu kontrol tamamen sayan kişinin dikkatine bağlıdır.',
        ],
      },
      {
        h2: 'Sayım sonrası: fark raporunun okunması',
        paragraflar: [
          'Fark raporunu açtığınızda ilk bakılacak şey toplam tutar değil, en çok sapan ilk yirmi kalemdir. Sapmaların büyük kısmı genellikle az sayıda kalemden gelir ve bu kalemlerin ortak bir nedeni vardır: benzer barkod, karışık ambalaj veya kayıt dışı çıkış.',
          'Düzeltmeyi yapmadan önce her sapan kalem için tek cümlelik neden yazın. Bu alışkanlık, bir sonraki sayımda aynı kalemlerin tekrar sapmasını engelleyen tek pratik yöntemdir.',
        ],
      },
    ],
    faq: [
      {
        soru: 'Sayım sırasında sevkiyat yapabilir miyiz?',
        cevap:
          'Bölge bazlı sayım yapan sistemlerde yapabilirsiniz. Sayılan bölge kilitlenir, diğer bölgelerden sevkiyat devam eder. Tüm depoyu tek seferde sayan klasik yöntemde ise operasyonu durdurmak gerekir.',
      },
      {
        soru: 'Sayım ne sıklıkla yapılmalı?',
        cevap:
          'Yasal zorunluluk yıl sonudur, ancak operasyonel sağlık için ABC gruplarına göre sürekli sayım önerilir. Yüksek devirli ürünleri ayda bir saymak, yıl sonu sürprizlerini büyük ölçüde ortadan kaldırır.',
      },
      {
        soru: 'Sayım farkı neden sürekli aynı üründe çıkıyor?',
        cevap:
          'Bu bir süreç hatası işaretidir. En sık nedenler: birbirine benzeyen barkodlar, koli içi adet farklılığı ve kayıt dışı numune veya fire çıkışı. Ürünü değil süreci düzeltmek gerekir.',
      },
    ],
    ilgili: ['stok-takip-programi', 'depo-yonetim-programi', 'el-terminali-ile-stok-takibi'],
  },

  'el-terminali-ile-stok-takibi': {
    slug: 'el-terminali-ile-stok-takibi',
    title: 'El Terminali ile Stok Takibi: Telefon Yeterli mi?',
    metaDescription:
      'El terminali ile stok takibi nasıl yapılır, akıllı telefon el terminali olarak kullanılabilir mi, profesyonel cihaz ne zaman gerekir? Maliyet ve saha karşılaştırması.',
    keywords:
      'el terminali, el terminali ile stok takibi, barkod okuyucu, telefonla barkod okuma, mobil depo uygulaması, karekod okuyucu',
    badge: 'Saha Teknolojisi',
    h1: 'El Terminali ile Stok Takibi: Telefon Yeterli mi?',
    lead:
      'El terminali, depo personelinin elindeki karar noktasıdır. Sistemin verisi ne kadar doğru olursa olsun, sahadaki kişi ürünü okutamıyorsa o veri birkaç saat içinde eskir.',
    okuma: '6 dakika',
    guncelleme: '2026-09-15',
    bolumler: [
      {
        h2: 'Akıllı telefon el terminali olarak kullanılabilir mi?',
        paragraflar: [
          'Kullanılabilir ve birçok işletme için en mantıklı başlangıçtır. Modern telefon kameraları barkod ve karekodu hızlı okur; personel cihazı zaten tanıdığı için eğitim süresi kısalır ve donanım yatırımı sıfıra yakın olur.',
          'Sınır şurada başlar: günde yüzlerce okutma yapan, soğuk hava deposunda veya tozlu ortamda çalışan ekiplerde telefon hem yorulur hem dayanıksızdır. Bu noktada lazer okuyuculu, darbeye dayanıklı profesyonel terminaller devreye girer.',
        ],
        liste: [
          'Düşük ve orta hacim: telefon yeterli, ek maliyet yok',
          'Yüksek hacim, uzun vardiya: fiziksel tuşlu profesyonel terminal',
          'Soğuk hava, toz, nem: endüstriyel sertifikalı cihaz',
          'Uzak mesafeden okuma gereken yüksek raflar: lazer okuyucu',
        ],
      },
      {
        h2: 'Sahada hangi işler el terminaliyle yapılır?',
        paragraflar: [
          'El terminali sadece okutma aracı değildir; personeli yönlendiren ekrandır. İyi kurgulanmış bir akışta personel ne yapacağını düşünmez, ekranın söylediğini yapar.',
        ],
        liste: [
          'Mal kabul: irsaliye okut, ürün okut, adet gir, eksik-fazla anında görülsün',
          'Yerleştirme: sistem raf önerir, personel raf barkodunu okutup onaylar',
          'Toplama: sipariş bazlı liste, sırayla raf ve ürün okutması',
          'Sayım: raf okut, ürün okut, adet gir; fark anında ekranda',
          'Transfer: çıkış deposu ve giriş deposu okutmasıyla kayıt altına alma',
        ],
      },
      {
        h2: 'İnternet kesilirse ne olur?',
        paragraflar: [
          'Depolarda kablosuz ağ kapsama sorunu yaygındır; özellikle metal raflar sinyali keser. Bu nedenle saha uygulamasının bağlantı koptuğunda ne yaptığı, satın alma kararında sorulması gereken ilk teknik sorudur.',
          'Beklenen davranış: uygulama okutmaları cihazda tutar, bağlantı geldiğinde sunucuya aktarır ve çakışma varsa kullanıcıya gösterir. Bağlantı kopunca ekranı kilitleyen uygulamalar saha gerçekliğine uymaz.',
        ],
      },
    ],
    faq: [
      {
        soru: 'Personelin kendi telefonunu kullanması güvenli mi?',
        cevap:
          'Uygulama tarafında yetki ayrımı doğru kurulduğunda güvenlidir. Depo personeli hesabı yalnızca kendi deposunda işlem yapabilmeli, fiyat ve cari bilgisi görememeli, stok düzeltme yetkisi bulunmamalıdır.',
      },
      {
        soru: 'Barkodsuz ürünlerde ne yapılır?',
        cevap:
          'Depo içi kendi etiketinizi basarsınız. Ürünün üretici barkodu olmasa da sisteme tanımlanıp iç barkod üretilir; raf etiketleriyle aynı mantıkla çalışır.',
      },
      {
        soru: 'Kaç el terminali gerekir?',
        cevap:
          'Pratik kural, aynı anda sahada aktif çalışan personel sayısı kadardır. Vardiya değişimiyle cihaz paylaşımı mümkündür; sayım dönemlerinde geçici olarak telefonlarla kapasite artırılabilir.',
      },
    ],
    ilgili: ['depo-yonetim-programi', 'depo-sayimi-nasil-yapilir', 'wms-nedir'],
  },

  'excel-ile-stok-takibi': {
    slug: 'excel-ile-stok-takibi',
    title: 'Excel ile Stok Takibi Nerede Tıkanır? Geçiş Zamanı Nasıl Anlaşılır',
    metaDescription:
      'Excel ile stok takibi ne zamana kadar yeterli, hangi belirtiler geçiş vaktinin geldiğini gösterir ve geçiş nasıl sorunsuz yapılır? Dürüst bir karşılaştırma.',
    keywords:
      'excel ile stok takibi, excel stok programı, stok takip excel, depo programına geçiş, excel yerine stok yazılımı',
    badge: 'Karar Rehberi',
    h1: 'Excel ile Stok Takibi Nerede Tıkanır?',
    lead:
      'Excel kötü bir araç değil; sınırları belli bir araç. Birçok işletme stok takibine Excel ile başlar ve bu doğru bir başlangıçtır. Sorun, işletme büyüdükten sonra da aynı dosyada ısrar edilmesinden çıkar.',
    okuma: '6 dakika',
    guncelleme: '2026-09-15',
    bolumler: [
      {
        h2: 'Excel dosyasının gerçekten yeterli olduğu durumlar',
        paragraflar: [
          'Tek kişinin kaydı tuttuğu, günde birkaç hareketin olduğu, ürün çeşidinin sınırlı olduğu ve raf adresleme gerektirmeyen yapılarda Excel hem ucuz hem esnektir. Bu koşullarda yazılım önermek gereksiz masraf yaratır.',
        ],
      },
      {
        h2: 'Geçiş zamanının geldiğini gösteren altı belirti',
        paragraflar: [
          'Aşağıdakilerden üçü sizde varsa, Excel artık stoğu takip etmiyor; siz Excel dosyasını takip ediyorsunuz demektir.',
        ],
        liste: [
          'Dosyanın "son_güncel_2" gibi birden fazla sürümü dolaşıyor',
          'Sayım sonrası fark düzenli olarak yüksek çıkıyor ve nedeni bulunamıyor',
          'Bir ürünün hangi rafta olduğunu sadece belirli bir personel biliyor',
          'Satış ekibi stok sormak için depoyu telefonla arıyor',
          'Pazaryerinde olmayan ürün satılıp iptal ediliyor',
          'Geçmişe dönük "bu ürün ne zaman çıktı" sorusu cevaplanamıyor',
        ],
      },
      {
        h2: 'Geçiş nasıl sorunsuz yapılır?',
        paragraflar: [
          'Geçişin en riskli kısmı yazılım değil, veridir. Kirli bir tabloyu olduğu gibi aktarmak, eski hataları yeni sisteme taşır ve suç yeni sistemin üstünde kalır.',
        ],
        liste: [
          'Ürün listesini temizleyin: mükerrer kayıtları birleştirin, ölü kalemleri kapatın',
          'Raf kodlamasını yapın ve etiketleri asın',
          'Geçiş öncesi tam sayım yapın; açılış stoğu sayımdan gelsin',
          'Geçiş tarihinden sonra eski dosyayı salt okunur yapın, paralel kayda izin vermeyin',
          'İlk iki hafta günlük kısa kontrol toplantısı yapın',
        ],
      },
      {
        h2: 'Maliyet karşılaştırması nasıl yapılmalı?',
        paragraflar: [
          'Excel tarafının görünen maliyeti sıfırdır, gerçek maliyeti ise düzeltmeye harcanan zaman, yanlış sevkiyat ve elde tutulan fazla stoktur. Karşılaştırmayı yaparken yazılım bedelini bu üç kalemin aylık toplamıyla kıyaslayın; genelde karar birkaç dakikada netleşir.',
        ],
      },
    ],
    faq: [
      {
        soru: 'Excel verilerimiz yeni sisteme aktarılabilir mi?',
        cevap:
          'Aktarılabilir. Ürün kartları, açılış stokları ve tedarikçi listesi toplu olarak yüklenir. Aktarım öncesi mükerrer kayıtların temizlenmesi, işin en kritik adımıdır.',
      },
      {
        soru: 'Geçiş sırasında satış durur mu?',
        cevap:
          'Durmaz. Yaygın yöntem, düşük hacimli bir günde açılış sayımını yapıp ertesi iş günü yeni sistemle çalışmaya başlamaktır.',
      },
      {
        soru: 'Ekip yeni sisteme direnirse ne yapmalı?',
        cevap:
          'Direncin kaynağı genelde ek iş yükü korkusudur. Barkodlu akışta personel daha az yazar, daha çok okutur; bunu ilk günden sahada göstermek direnci büyük ölçüde çözer. Paralel kayda izin vermemek de şarttır.',
      },
    ],
    ilgili: ['stok-takip-programi', 'depo-yonetim-programi', 'wms-nedir'],
  },
};

export const rehberListesi = Object.values(rehberYazilari).map((y) => ({
  slug: y.slug,
  title: y.title,
  h1: y.h1,
  lead: y.lead,
  badge: y.badge,
  okuma: y.okuma,
}));
