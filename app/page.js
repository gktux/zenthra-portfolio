import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Projects from '@/components/Projects';
import MissionVision from '@/components/MissionVision';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <Projects />
      <MissionVision />
      <Faq />
      <Footer />
    </main>
  );
}
