
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const services = [
    {
      icon: '/lovable-uploads/4469467f-02e9-495b-bd2c-f62f155161d9.png',
      title: 'Energia Renovável',
      description: 'Especialistas em soluções de energia limpa e sustentável'
    },
    {
      icon: '/lovable-uploads/7fd02d58-7605-49fa-9845-66c81b2c6cf9.png',
      title: 'Consultoria Técnica',
      description: 'Análise completa e planejamento de projetos energéticos'
    },
    {
      icon: '/lovable-uploads/590d7fd7-5055-41f9-a29f-95a0c2d77f30.png',
      title: 'Parcerias Estratégicas',
      description: 'Conectamos empresas para soluções integradas'
    },
    {
      icon: '/lovable-uploads/9c8e08fd-c8e5-4e8b-acda-4ad009147a77.png',
      title: 'Certificações',
      description: 'Acompanhamento em processos de certificação ambiental'
    }
  ];

  return (
    <section className="bg-farm-light py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-ibm-plex text-4xl font-bold text-gray-800 mb-6">
            Quem somos?
          </h2>
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/de4cbacc-efa2-4e4e-ab18-4cae09dcb0b1.png" 
              alt="FARM Logo" 
              className="h-16 w-auto"
            />
          </div>
          <p className="font-ibm-plex text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa especializada em consultoria de energia renovável, 
            comprometida em desenvolver soluções sustentáveis que transformam o 
            futuro energético do Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="font-ibm-plex font-semibold text-lg text-gray-800 text-center mb-3">
                {service.title}
              </h3>
              <p className="font-ibm-plex text-gray-600 text-center text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="font-ibm-plex text-2xl font-semibold text-gray-800 mb-4">
            Principais Áreas de Atuação
          </h3>
          <Link 
            to="/sobrenos"
            className="inline-block bg-farm-secondary hover:bg-farm-secondary/90 text-white font-ibm-plex font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
