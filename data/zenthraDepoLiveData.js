export const zenthraDepoLiveData = {
  tr: {
    company: "Zenthra Bilişim",
    productName: "Zenthra Bilişim Depo Live",
    freeTrialUrl: "https://app.zenthrabilisim.com.tr",
    freeTrialBadge: "⚡ 14 Gün Ücretsiz Deneyin — Kredi Kartı Gerekmez",
    hero: {
      anaBaslik: "Depo Programı: Depo ve Stok Süreçlerinizi Canlı ve Sıfır Hata ile Yönetin",
      altBaslik: "Zenthra Bilişim Depo Live, mal kabulden sevkiyata kadar tüm süreci tek ekranda toplayan barkodlu bir depo programıdır. El terminali, karekod okuma, canlı raf lokasyonu ve QNB entegrasyonuyla deponuzu anlık izleyin.",
      metrikler: [
        { deger: "7/24", aciklama: "Canlı Stok & El Terminali Senkronizasyonu" },
        { deger: "14 Gün", aciklama: "Ücretsiz Deneme, Kurulum Ücreti Yok" }
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
          "Kendi telefonunuzu el terminali olarak kullanabilme"
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
          "Sevkiyat öncesi kontrol okutması ile hatalı paketlemeye son"
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
        modulAdi: "QNB Entegrasyonu",
        aciklama: "Depo Live, QNB ile entegre çalışır; depodaki hareketler QNB tarafına elle tekrar girilmeden aktarılır.",
        ozellikler: [
          "QNB ile hazır entegrasyon",
          "Çift veri girişine ve aktarım hatalarına son",
          "Farklı sistem entegrasyonu ihtiyaçları için ekibimizle görüşün"
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
        baslik: "Ücretsiz Deneme, Kurulum Ücreti Yok",
        aciklama: "Karar vermeden önce 14 gün boyunca kendi verilerinizle deneyin. Aylık abonelik modeliyle büyük bir ilk yatırım yapmadan başlayın."
      },
      {
        baslik: "Hızlı Kurulum ve Kolay Saha Adaptasyonu",
        aciklama: "Sade ve sezgisel kullanıcı arayüzü sayesinde depo personeliniz birkaç dakikalık eğitimle sistemi aktif olarak kullanmaya başlar."
      }
    ],
    sss: [
      {
        soru: "Depo programı nedir, stok takip programından farkı nedir?",
        cevap: "Stok takip programı \"elimde kaç adet var\" sorusunu yanıtlar. Depo programı (WMS) buna \"hangi rafta, hangi lotta, kim koydu, kim aldı\" bilgisini ekler; mal kabul, raf yerleştirme, sayım, toplama ve sevkiyat adımlarını barkodla yönetir. Zenthra Bilişim Depo Live ikisini tek sistemde birleştiren bir depo programıdır."
      },
      {
        soru: "Depo programı fiyatları nasıl belirleniyor, ücretsiz deneyebilir miyim?",
        cevap: "Kullanıcı sayısı ve ihtiyaç duyulan modüllere göre aylık abonelik uygulanır; kurulum ücreti alınmaz. Karar vermeden önce 14 gün boyunca kendi verilerinizle ücretsiz deneyebilir, kredi kartı bilgisi girmeden hesap açabilirsiniz."
      },
      {
        soru: "Zenthra Bilişim Depo Live hangi el terminalleri ve cihazlarla çalışır?",
        cevap: "Android ve iOS işletim sistemine sahip tüm profesyonel el terminalleri, tabletler ve akıllı telefonlarla tam uyumludur. Ayrıca kablosuz barkod/karekod okuyucuları da destekler."
      },
      {
        soru: "Depo Live başka yazılımlarla entegre çalışıyor mu?",
        cevap: "Şu anda hazır entegrasyonumuz QNB ile bulunmaktadır. Farklı bir sistemle entegrasyon ihtiyacınız varsa ekibimizle görüşerek değerlendirebiliriz."
      },
      {
        soru: "Birden fazla depomuz veya şubemiz varsa hepsini tek panelden yönetebilir miyiz?",
        cevap: "Evet. Depo Live çoklu depo ve şube mimarisini destekler. Tüm depolarınız arasındaki stok transferlerini, canlı stok miktarlarını ve operasyonel hareketleri tek bir bulut panelden anlık olarak takip edebilirsiniz."
      },
      {
        soru: "Stok sayımları sırasında depoyu kapatmamız gerekir mi?",
        cevap: "Hayır. Depo Live'ın canlı ve koridor/raf bazlı sayım özelliği sayesinde günlük sevkiyat operasyonları devam ederken arka planda kısmi veya tam sayım gerçekleştirebilirsiniz."
      },
      {
        soru: "Depo Live kurulum süreci ne kadar zaman alır?",
        cevap: "Deponuzun büyüklüğüne ve ürün sayısına bağlı olarak kurulum, test ve personel eğitimleri genellikle 1 ila 2 hafta içinde tamamlanmaktadır."
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
    freeTrialUrl: "https://app.zenthrabilisim.com.tr",
    freeTrialBadge: "⚡ Start 14-Day Free Trial — No Credit Card Required",
    hero: {
      anaBaslik: "Zenthra Bilişim Depo Live: Real-Time & Zero-Error Warehouse Management",
      altBaslik: "Track and manage your entire warehouse operations from goods receipt to dispatch in real-time with handheld terminals, QR/barcode scanning, bin tracking, and QNB integration.",
      metrikler: [
        { deger: "24/7", aciklama: "Real-Time Stock & Handheld Terminal Sync" },
        { deger: "14 Days", aciklama: "Free Trial, No Setup Fee" }
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
          "Use your own smartphone as a handheld terminal"
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
          "Pre-dispatch verification scan to prevent packing errors"
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
        modulAdi: "QNB Integration",
        aciklama: "Depo Live integrates with QNB, so warehouse movements are transferred without manual re-entry.",
        ozellikler: [
          "Ready-made QNB integration",
          "No double data entry or transfer errors",
          "Talk to our team about other integration needs"
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
        baslik: "Free Trial, No Setup Fee",
        aciklama: "Try Depo Live with your own data for 14 days before deciding, then continue on a simple monthly subscription."
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
        soru: "Does Depo Live integrate with other software?",
        cevap: "Our ready-made integration is currently with QNB. If you need an integration with another system, talk to our team and we will evaluate it."
      },
      {
        soru: "Can we manage multiple warehouses or branch locations from a single platform?",
        cevap: "Yes. Depo Live supports multi-warehouse and branch operations. You can monitor stock transfers, real-time inventory levels, and staff activities across all locations from a unified cloud dashboard."
      },
      {
        soru: "Do we need to freeze operations during inventory audits?",
        cevap: "No. Thanks to live bin-level cycle counting, you can conduct partial or complete inventory audits while daily dispatches continue uninterrupted."
      },
      {
        soru: "How long does deployment take?",
        cevap: "Depending on warehouse scale and product count, setup, testing, and staff training are typically completed within 1 to 2 weeks."
      }
    ],
    ctaMetinleri: {
      demoTalebi: "Schedule a Live Depo Live Demo — Book a Free Consultation Tailored to Your Warehouse",
      iletisim: "Talk with Our Logistics Specialists — Let's Design the Optimal WMS Solution Together"
    }
  }
};
