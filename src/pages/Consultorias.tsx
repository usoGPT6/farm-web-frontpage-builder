import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Consultorias = () => {
  const consultorias = [
    {
      id: 'consultoria-abc',
      title: 'Consultoria ABC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/lovable-uploads/73fa1b2a-8640-4b28-9572-4aa0be4eed6e.png'
    },
    {
      id: 'consultoria-klm',
      title: 'Consultoria KLM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/lovable-uploads/73fa1b2a-8640-4b28-9572-4aa0be4eed6e.png'
    },
    {
      id: 'consultoria-ghi',
      title: 'Consultoria GHI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/lovable-uploads/73fa1b2a-8640-4b28-9572-4aa0be4eed6e.png'
    },
    {
      id: 'consultoria-xyz',
      title: 'Consultoria XYZ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/lovable-uploads/73fa1b2a-8640-4b28-9572-4aa0be4eed6e.png'
    }
  ];

  return (
    <div className="min-h-screen font-ibm-plex">
      <Header />
      
      {/* Hero Section with Background Image and Waves */}
      <section className="relative h-[400px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/lovable-uploads/ee755a30-a880-4ef6-909e-b9798ce315eb.png')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="font-ibm-plex text-5xl font-bold mb-6">
              Consultorias realizadas
            </h1>
          </div>
        </div>

        {/* Waves */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-20" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#1EC4BF"></path>
          </svg>
          <svg className="relative block w-full h-16 -mt-1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F5F5F5"></path>
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