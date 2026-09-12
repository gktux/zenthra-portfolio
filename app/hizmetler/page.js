import ServicesIndex from '@/components/ServicesIndex';
import { servicesList } from '@/data/servicesData';

export const metadata = {
  title: 'Hizmetlerimiz | Yazılım, IT Bakım, Web Tasarım — Zenthra Bilişim',
  description:
    'Özel yazılım geliştirme, kurumsal IT bakım, web sitesi tasarımı ve yazıcı bakım onarım hizmetleri. Samsun merkezli, Karadeniz Bölgesi ve Türkiye geneli.',
  keywords:
    'zenthra bilişim hizmetleri, özel yazılım, kurumsal it bakım, web tasarım samsun, yazıcı bakım onarım, bilişim firması samsun',
  alternates: { canonical: '/hizmetler' },
  openGraph: {
    title: 'Hizmetlerimiz | Zenthra Bilişim',
    description:
      'Özel yazılım geliştirme, kurumsal IT bakım, web sitesi tasarımı ve yazıcı bakım onarım hizmetleri.',
    url: '/hizmetler',
    siteName: 'Zenthra Bilişim',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function Page() {
  return <ServicesIndex services={servicesList} />;
}
