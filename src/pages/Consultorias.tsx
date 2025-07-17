import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Consultorias = () => {
  const consultorias = [
    {
      id: 'consultoria-abc',
      title: 'Consultoria ABC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/lovable-uploads/consultoria-solar.png'
    },
    {
      id: 'consultoria-klm',
      title: 'Consultoria KLM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/lovable-uploads/consultoria-solar.png'
    },
    {
      id: 'consultoria-ghi',
      title: 'Consultoria GHI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/lovable-uploads/consultoria-solar.png'
    },
    {
      id: 'consultoria-xyz',
      title: 'Consultoria XYZ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/lovable-uploads/consultoria-solar.png'
    }
  ];

  return (
    <div className="min-h-screen font-ibm-plex">
      <Header />
      
      {/* Hero Section with Background Image and Waves */}
      <section className="relative h-[400px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/lovable-uploads/6c4cc0a8-46fa-48fa-946c-79bde93f0983.png')"}}>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="font-ibm-plex text-5xl font-bold mb-6">
              Consultorias realizadas
            </h1>
          </div>
        </div>

        {/* Wave decoration - exatamente igual à da home */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" className="w-full h-20" preserveAspectRatio="none">
            <path d="M0,60 Q300,100 600,60 T1200,60 L1200,120 L0,120 Z" fill="#1EC4BF" />
            <path d="M0,80 Q300,110 600,80 T1200,80 L1200,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </section>

      {/* Consultorias Section */}
      <section className="bg-farm-light py-20">
        <div className="container mx-auto px-4">
          {consultorias.map((consultoria, index) => (
            <div key={consultoria.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img 
                  src={consultoria.image}
                  alt={consultoria.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 className="font-ibm-plex text-3xl font-bold text-gray-800 mb-4">
                  {consultoria.title}
                </h2>
                <p className="font-ibm-plex text-lg text-gray-600 leading-relaxed mb-6">
                  {consultoria.description}
                </p>
                <Link 
                  to={`/consultorias/${consultoria.id}`}
                  className="inline-block bg-farm-secondary hover:bg-farm-secondary/90 text-white font-ibm-plex font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultorias;