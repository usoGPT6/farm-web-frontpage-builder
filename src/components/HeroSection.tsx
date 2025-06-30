
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/4a0e2ce2-25be-4cbc-844d-c688182dc588.png')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-ibm-plex text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            FARM
          </h1>
          <p className="font-ibm-plex text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Soluções sustentáveis em energia renovável para um futuro mais limpo
          </p>
          <Link 
            to="/contato"
            className="inline-block bg-farm-primary hover:bg-farm-primary/90 text-white font-ibm-plex font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Fale conosco
          </Link>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="w-full h-20">
          <path d="M0,60 Q300,100 600,60 T1200,60 L1200,120 L0,120 Z" fill="#1EC4BF" />
          <path d="M0,80 Q300,110 600,80 T1200,80 L1200,120 L0,120 Z" fill="#F5F5F5" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
