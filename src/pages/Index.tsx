
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ImpactSection from '@/components/ImpactSection';
import ConsultoriaCarousel from '@/components/ConsultoriaCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-ibm-plex">
      <Header />
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <ConsultoriaCarousel />
      <Footer />
    </div>
  );
};

export default Index;
