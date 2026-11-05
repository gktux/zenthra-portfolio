import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CerezTercihleriLink from '@/components/CerezTercihleriLink';

export const metadata = {
  title: 'Çerez Politikası | Zenthra Bilişim',
  description: 'Zenthra Bilişim web sitesinde kullanılan çerezler, amaçları ve tercihlerinizi nasıl değiştirebileceğiniz.',
  alternates: { canonical: '/cerez-politikasi' },
};

const baslik = { fontSize: '1.25rem', fontWeight: 600, margin: '36px 0 10px' };

export default function CerezPolitikasi() {
  return (
    <div style={{ background: '#fff', color: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ paddingTop: '180px', paddingBottom: '120px', flex: 1 }}>
        <div className="container" style={{ maxWidth: '760px', lineHeight: 1.7 }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600 }}>Çerez Politikası</h1>
          <p>Bu sayfa, zenthrabilisim.com adresinde hangi çerezlerin neden kullanıldığını açıklar.</p>

          <h2 style={baslik}>Zorunlu kayıtlar</h2>
          <p>Çerez tercihiniz ve dil seçiminiz tarayıcınızda saklanır. Bunlar sitenin çalışması için gereklidir ve onay gerektirmez. Reklamdan geldiyseniz kaynak bilgisi (gclid, UTM) oturum boyunca tutulur ve formu gönderirseniz talebinize eklenir.</p>

          <h2 style={baslik}>Analiz çerezleri</h2>
          <p>Google Analytics, sitenin nasıl kullanıldığını ölçmemize yardım eder. Yalnızca onay verirseniz çalışır.</p>

          <h2 style={baslik}>Reklam çerezleri</h2>
          <p>Google Ads ve Meta Pixel, reklamlarımızın sonucunu ölçmek ve sitemizi ziyaret edenlere reklam göstermek için kullanılır. Yalnızca onay verirseniz çalışır. Bu hizmetler verileri yurt dışındaki sunucularda işleyebilir.</p>

          <h2 style={baslik}>Tercihinizi değiştirme</h2>
          <p><CerezTercihleriLink /> bağlantısından analiz ve reklam çerezlerini ayrı ayrı açıp kapatabilirsiniz. Tüm isteğe bağlı çerezleri reddederseniz tercihinizi 6 ay sonra yeniden sorarız. Tarayıcı ayarlarınızdan da çerezleri silebilirsiniz.</p>

          <h2 style={baslik}>İletişim</h2>
          <p>Sorularınız için: <a href="mailto:info@zenthrabilisim.com">info@zenthrabilisim.com</a></p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
