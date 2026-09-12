import { SoftwareSchema } from '@/components/StructuredData';

export const metadata = {
  title: 'Depo Yönetim Programı | Barkodlu Stok Takibi — Zenthra Depo Live',
  description:
    'Depo Live ile mal kabul, raf yerleştirme, sayım, toplama ve sevkiyatı tek sistemde yönetin. Telefonunuz el terminaline dönüşür, stok raf bazında anlık akar. Ücretsiz demo talep edin.',
  keywords:
    'depo yönetim programı, depo yönetim sistemi, stok takip programı, barkodlu depo programı, WMS yazılımı, el terminali stok, raf bazlı stok takibi, depo otomasyonu',
  alternates: { canonical: '/projects/depo-live' },
  openGraph: {
    title: 'Depo Yönetim Programı | Barkodlu Stok Takibi — Zenthra Depo Live',
    description:
      'Mal kabulden sevkiyata uçtan uca depo yönetimi. Barkodla çalışın, stok raf bazında anlık aksın. Seri, lot ve son kullanma takibi hazır.',
    url: '/projects/depo-live',
    siteName: 'Zenthra Bilişim',
    images: [{ url: '/depo-live.png', width: 1200, height: 630, alt: 'Zenthra Depo Live' }],
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function DepoLiveLayout({ children }) {
  return (
    <>
      <SoftwareSchema
        name="Zenthra Depo Live"
        description="Mal kabul, raf yerleştirme, sayım, toplama ve sevkiyatı tek sistemde yöneten barkodlu depo yönetim programı. Telefon el terminali olarak kullanılır."
        url="https://www.zenthrabilisim.com/projects/depo-live"
        image="https://www.zenthrabilisim.com/depo-live.png"
        features={[
          'Barkodlu mal kabul',
          'Raf yerleştirme önerisi',
          'Sürekli ve dönemsel sayım',
          'Sipariş toplama listesi',
          'Sevkiyat ve e-İrsaliye',
          'Seri, lot ve son kullanma takibi',
          'Depolar arası transfer',
          'Telefonla el terminali kullanımı',
        ]}
      />
      {children}
    </>
  );
}
