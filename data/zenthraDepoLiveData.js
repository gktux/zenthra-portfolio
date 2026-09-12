export const zenthraDepoLiveData = {
  tr: {
    company: "Zenthra Bilişim",
    productName: "Zenthra Bilişim Depo Live",
    hero: {
      anaBaslik: "Zenthra Bilişim Depo Live: Depo ve Stok Süreçlerinizi Canlı ve Sıfır Hata ile Yönetin",
      altBaslik: "El terminalleri, karekod/barkod okuma, canlı lokasyon takibi ve uçtan uca ERP/e-ticaret entegrasyonları ile mal kabulden sevkiyata kadar tüm depo operasyonlarınızı anlık olarak izleyin.",
      metrikler: [
        { deger: "7/24", aciklama: "Canlı Stok & El Terminali Senkronizasyonu" },
        { deger: "%99.9", aciklama: "Sayım ve Sevkiyat Doğruluğu" }
      ]
    },
    moduller: [
      {
        id: "realtime_wms",
        modulAdi: "Canlı Stok & Raf Lokasyon Takibi",
        aciklama: "Deponuzdaki her bir ürünün hangi rafta, hangi gözde ve hangi adette olduğunu anlık olarak görüntüleyin.",
        ozellikler: [
          "Dinamik adresleme ve raf/koridor bazlı stok haritası",
          "Kritik stok seviyesi ve anlık hareket uyarıları",
          "Karantina, rezerv ve blokeli stok yönetimi"
        ]
      },
      {
        id: "terminal_scan",
        modulAdi: "El Terminali & Barkod / Karekod Entegrasyonu",
        aciklama: "Saha personeli el terminalleri ile barkod ve QR kodları okutarak işlemleri saniyeler içinde tamamlar.",
        ozellikler: [
          "Android / iOS uyumlu el terminali ve tablet yazılımı",
          "Tekli ve toplu karekod/barkod doğrulama desteği",
          "İnternet kesintisinde dahi çevrimdışı (offline) çalışma yeteneği"
        ]
      },
      {
        id: "inbound",
        modulAdi: "Akıllı Mal Kabul & Giriş Kalite Kontrol",
        aciklama: "Tedarikçiden gelen ürünleri kapıda el terminali ile doğrulayın, eksik veya hatalı kabullerin önüne geçin.",
        ozellikler: [
          "Satınalma siparişleriyle otomatik eşleştirme ve kabul kontrolü",
          "Giriş kalite kontrol adımları ve kapı kabul onayları",
          "Otomatik raf yönlendirme (Putaway) algoritmaları"
        ]
      },
      {
        id: "picking_dispatch",
        modulAdi: "Dalga Bazlı Sipariş Toplama & Sevkiyat",
        aciklama: "Siparişleri en optimize yolla toplayın, kargo etiketlerini otomatik basıp sevkiyatı hatasız tamamlayın.",
        ozellikler: [
          "En kısa rota algoritması ile zaman kazandıran toplama (Pick-to-Light / Wave)",
          "Yanlış ürün paketlemeyi engelleyen sesli/görsel uyarı sistemi",
          "Kargo ve lojistik firmaları ile otomatik irsaliye/etiket entegrasyonu"
        ]
      },
      {
        id: "lot_serial",
        modulAdi: "Seri / Lot & Anlık Sayım Takibi",
        aciklama: "Son kullanım tarihi (SKT), seri ve lot numarası takibi ile tam izlenebilirlik sağlayın.",
        ozellikler: [
          "Geriye dönük %100 lot ve seri numarası izlenebilirliği",
          "Depoyu kapatmadan bölge/raf bazlı canlı stok sayımı",
          "Sayım farkı kök neden analizi ve otomatik stok düzeltme"
        ]
      },
      {
        id: "integration",
        modulAdi: "ERP & E-Ticaret / Pazaryeri Entegrasyonu",
        aciklama: "Netsis, Logo, Mikro, Nebim ve Trendyol, N11, Hepsiburada gibi pazaryerleriyle çift yönlü canlı senkronizasyon.",
        ozellikler: [
          "E-Ticaret siparişlerinin depoya anında düşmesi ve stok düşüşü",
          "Logo, Netsis, Mikro ve Nebim ERP sistemleriyle çift yönlü API",
          "Otomatik stok güncellemeleri ile çift satış (over-selling) riskine son"
        ]
      }
    ],
    nedenBiz: [
      {
        baslik: "%100 Canlı ve Gerçek Zamanlı Depo Görünürlüğü",
        aciklama: "Saha personeli el terminaliyle bir ürünü okuttuğu an tüm sistemde stok güncellenir. Kağıt formlar ve manuel veri girişinden doğan hatalar tamamen ortadan kalkar."
      },
      {
        baslik: "Sıfır Hatalı Sevkiyat ve Paketleme Güvencesi",
        aciklama: "Sipariş toplama ve kargolama aşamasında yanlış ürün okutulduğunda sistem anında ikaz verir. Müşterilerinize her zaman doğru ürünü göndermenizi garantiler."
      },
      {
        baslik: "Mevcut ERP ve Pazaryerlerinizle Tam Uyum",
        aciklama: "Kullandığınız ticari yazılımları veya e-ticaret altyapılarınızı değiştirmeden Zenthra Bilişim Depo Live entegre olur, veri aktarımlarını otomatize eder."
      },
      {
        baslik: "Hızlı Kurulum ve Kolay Saha Adaptasyonu",
        aciklama: "Sade ve sezgisel kullanıcı arayüzü sayesinde depo personeliniz birkaç dakikalık eğitimle sistemi aktif olarak kullanmaya başlar."
      }
    ],
    sss: [
      {
        soru: "Zenthra Bilişim Depo Live hangi el terminalleri ve cihazlarla çalışır?",
        cevap: "Android ve iOS işletim sistemine sahip tüm profesyonel el terminalleri, tabletler ve akıllı telefonlarla tam uyumludur. Ayrıca kablosuz barkod/karekod okuyucuları da destekler."
      },
      {
        soru: "Depo Live mevcut ERP (Logo, Netsis, Mikro, Nebim vb.) sistemimize bağlanabilir mi?",
        cevap: "Evet. Zenthra Bilişim Depo Live, Türkiye'de yaygın olarak kullanılan tüm ERP ve ticari yazılımlarla (Logo, Netsis, Mikro, Nebim vb.) hazır API entegrasyonlarına sahiptir."
      },
      {
        soru: "İnternet kesintisi yaşandığında saha operasyonu durur mu?",
        cevap: "Hayır. Depo Live el terminali uygulaması çevrimdışı (offline) çalışma modunu destekler. Bağlantı yeniden sağlandığında tüm işlemler arka planda otomatik senkronize olur."
      },
      {
        soru: "Stok sayımları sırasında depoyu kapatmamız gerekir mi?",
        cevap: "Hayır. Depo Live'ın canlı ve koridor/raf bazlı sayım özelliği sayesinde günlük sevkiyat operasyonları devam ederken arka planda kısmi veya tam sayım gerçekleştirebilirsiniz."
      },
      {
        soru: "Depo Live kurulum süreci ne kadar zaman alır?",
        cevap: "Deponuzun büyüklüğü ve entegre edilecek sistemlere bağlı olarak kurulum, test ve personel eğitimleri genellikle 1 ila 2 hafta içinde tamamlanmaktadır."
      }
    ],
    ctaMetinleri: {
      demoTalebi: "Depo Live Canlı Gösterimi Talep Edin — Deponuz İçin Ücretsiz İnceleme ve Randevu Alın",
      iletisim: "Depo Uzmanlarımızla Görüşün — Deponuz İçin En Verimli Çözümü Birlikte Tasarlayalım"
    }
  },
  en: {
    company: "Zenthra Bilişim",
    productName: "Zenthra Bilişim Depo Live",
    hero: {
      anaBaslik: "Zenthra Bilişim Depo Live: Real-Time & Zero-Error Warehouse Management",
      altBaslik: "Track and manage your entire warehouse operations from goods receipt to dispatch in real-time with handheld terminals, QR/barcode scanning, bin tracking, and ERP integration.",
      metrikler: [
        { deger: "24/7", aciklama: "Real-Time Stock & Handheld Terminal Sync" },
        { deger: "99.9%", aciklama: "Inventory & Dispatch Accuracy Rate" }
      ]
    },
    moduller: [
      {
        id: "realtime_wms",
        modulAdi: "Real-Time Inventory & Bin Tracking",
        aciklama: "Visualize exact product quantities, rack numbers, and shelf bins across your warehouse instantaneously.",
        ozellikler: [
          "Dynamic bin location mapping & aisle management",
          "Threshold alerts & real-time inventory movement notifications",
          "Quarantine, reserved, and blocked inventory controls"
        ]
      },
      {
        id: "terminal_scan",
        modulAdi: "Handheld Terminal & Barcode/QR Scanning",
        aciklama: "Enable floor personnel to process receipts, pickings, and audits in seconds using mobile terminals.",
        ozellikler: [
          "Native Android & iOS handheld terminal / tablet software",
          "Single & batch QR/barcode validation support",
          "Offline operation resilience during network interruptions"
        ]
      },
      {
        id: "inbound",
        modulAdi: "Smart Goods Inwarding & Inspection",
        aciklama: "Verify incoming shipments at the dock gate to eliminate supplier discrepancies and entry errors.",
        ozellikler: [
          "Automatic PO matching & inbound line verification",
          "Inbound quality control checks & gate clearance approvals",
          "Intelligent putaway location suggestion algorithms"
        ]
      },
      {
        id: "picking_dispatch",
        modulAdi: "Wave Picking & Automated Dispatch",
        aciklama: "Optimize order picking routes, print logistics labels automatically, and dispatch with zero errors.",
        ozellikler: [
          "Shortest picking route optimization (Pick-to-Light / Wave)",
          "Audio-visual alert system preventing wrong product packing",
          "Logistics & carrier integration for auto waybills & shipping labels"
        ]
      },
      {
        id: "lot_serial",
        modulAdi: "Serial / Lot & Cycle Counting",
        aciklama: "Ensure end-to-end traceability with Expiration Date, Serial, and Lot number tracking.",
        ozellikler: [
          "100% retrospective Lot and Serial Number traceability",
          "Live zone & bin cycle counting without halting warehouse operations",
          "Discrepancy root-cause analysis & automated inventory adjustments"
        ]
      },
      {
        id: "integration",
        modulAdi: "ERP & Marketplace Synchronization",
        aciklama: "Bi-directional real-time integration with ERPs (Netsis, Logo, Mikro) and major e-commerce platforms.",
        ozellikler: [
          "Instant e-commerce order routing to warehouse floor",
          "Bi-directional API connectors for ERP systems",
          "Automated stock synchronization eliminating over-selling risks"
        ]
      }
    ],
    nedenBiz: [
      {
        baslik: "100% Live & Real-Time Warehouse Visibility",
        aciklama: "The moment a item is scanned with a handheld terminal, inventory updates system-wide, eliminating paper forms and manual data entry errors."
      },
      {
        baslik: "Zero-Error Dispatch & Packing Assurance",
        aciklama: "If an incorrect item is scanned during order picking or packaging, the system immediately warns the operator, guaranteeing accurate customer shipments."
      },
      {
        baslik: "Full Compatibility with Existing ERPs",
        aciklama: "Zenthra Bilişim Depo Live integrates smoothly without disrupting your current ERP software or e-commerce storefronts."
      },
      {
        baslik: "Fast Deployment & Intuitive Operation",
        aciklama: "With an intuitive user interface, warehouse staff become proficient with just a few minutes of orientation."
      }
    ],
    sss: [
      {
        soru: "Which handheld terminals and devices are supported?",
        cevap: "Depo Live is compatible with all professional Android/iOS handheld terminals, industrial tablets, smartphones, and wireless barcode scanners."
      },
      {
        soru: "Can Depo Live integrate with our current ERP system?",
        cevap: "Yes. Zenthra Bilişim Depo Live features pre-built API integrations for leading ERP systems including Logo, Netsis, Mikro, Nebim, and custom APIs."
      },
      {
        soru: "Does floor operation stop during internet outages?",
        cevap: "No. The mobile handheld app supports offline mode. All local transactions automatically synchronize once connectivity is restored."
      },
      {
        soru: "Do we need to freeze operations during inventory audits?",
        cevap: "No. Thanks to live bin-level cycle counting, you can conduct partial or complete inventory audits while daily dispatches continue uninterrupted."
      },
      {
        soru: "How long does deployment take?",
        cevap: "Depending on warehouse scale and software integrations, setup, testing, and staff training are typically completed within 1 to 2 weeks."
      }
    ],
    ctaMetinleri: {
      demoTalebi: "Schedule a Live Depo Live Demo — Book a Free Consultation Tailored to Your Warehouse",
      iletisim: "Talk with Our Logistics Specialists — Let's Design the Optimal WMS Solution Together"
    }
  }
};
