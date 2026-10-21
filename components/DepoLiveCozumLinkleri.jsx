import { ArrowUpRight } from 'lucide-react';

const APP = 'https://app.zenthrabilisim.com.tr';

// Depo Live uygulama alanindaki cozum sayfalari. Anahtar kelime = baglanti metni.
export const DEPO_LIVE_COZUMLER = [
  { yol: '/', baslik: 'Depo programı', metin: 'Mal kabulden sevkiyata barkodlu depo yönetimi.' },
  { yol: '/depo-takip-programi', baslik: 'Depo takip programı', metin: 'Hangi ürün hangi rafta, anlık takip.' },
  { yol: '/stok-takip-programi', baslik: 'Stok takip programı', metin: 'Fiziksel ve satılabilir stok ayrı ayrı.' },
  { yol: '/depo-yonetim-sistemi', baslik: 'Depo yönetim sistemi (WMS)', metin: 'Raf, lot, SKT ve toplama rotası.' },
  { yol: '/barkodlu-stok-programi', baslik: 'Barkodlu stok programı', metin: 'Telefon kamerası el terminali olur.' },
  { yol: '/depo-sayim-programi', baslik: 'Depo sayım programı', metin: 'Depoyu kapatmadan raf raf sayım.' },
  { yol: '/e-ticaret-depo-programi', baslik: 'E-ticaret depo programı', metin: 'Pazaryeri siparişi, toplama ve kargo.' },
];

// Rehber yazisi -> en yakin cozum sayfasi (one cikan kart).
export const REHBER_COZUM = {
  'depo-yonetim-programi': '/depo-yonetim-sistemi',
  'stok-takip-programi': '/stok-takip-programi',
  'wms-nedir': '/depo-yonetim-sistemi',
  'depo-sayimi-nasil-yapilir': '/depo-sayim-programi',
  'el-terminali-ile-stok-takibi': '/barkodlu-stok-programi',
  'excel-ile-stok-takibi': '/stok-takip-programi',
};

export default function DepoLiveCozumLinkleri({ oneCikan, baslik = 'Depo Live çözümleri', kaynak = 'cozum_linkleri' }) {
  const liste = oneCikan
    ? [...DEPO_LIVE_COZUMLER].sort((a, b) => (a.yol === oneCikan ? -1 : b.yol === oneCikan ? 1 : 0))
    : DEPO_LIVE_COZUMLER;

  return (
    <section className="section-padding" style={{ background: '#ffffff', paddingTop: '40px', paddingBottom: '40px' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '24px', fontFamily: 'var(--font-display)' }}>
          {baslik}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
          {liste.map((c) => (
            <a
              key={c.yol}
              href={`${APP}${c.yol}?utm_source=zenthrabilisim&utm_medium=referral&utm_campaign=${kaynak}`}
              style={{
                display: 'block',
                padding: '20px',
                borderRadius: '16px',
                border: c.yol === oneCikan ? '1px solid #0071e3' : '1px solid #e5e5ea',
                textDecoration: 'none',
                color: '#1d1d1f',
                background: '#fbfbfd',
              }}
            >
              <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 600, marginBottom: '6px' }}>
                {c.baslik} <ArrowUpRight size={16} color="#0071e3" />
              </span>
              <span style={{ fontSize: '0.92rem', color: '#6e6e73', fontFamily: 'var(--font-body)' }}>{c.metin}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
