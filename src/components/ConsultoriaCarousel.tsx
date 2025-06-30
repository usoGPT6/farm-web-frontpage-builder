
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConsultoriaCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const consultorias = [
    {
      id: 1,
      title: "Consultoria 1",
      description: "Análise completa de viabilidade para projetos de energia solar, incluindo estudos de radiação solar, dimensionamento de sistemas e análise de retorno de investimento.",
      image: "/lovable-uploads/ee755a30-a880-4ef6-909e-b9798ce315eb.png"
    },
    {
      id: 2,
      title: "Consultoria 2", 
      description: "Planejamento estratégico para implementação de parques eólicos, com análise de ventos, estudos ambientais e licenciamento para projetos de grande escala.",
      image: "/lovable-uploads/4a0e2ce2-25be-4cbc-844d-c688182dc588.png"
    },
    {
      id: 3,
      title: "Consultoria 3",
      description: "Otimização energética para indústrias e empresas, desenvolvendo soluções customizadas de eficiência energética e integração de fontes renováveis.",
      image: "/lovable-uploads/ee755a30-a880-4ef6-909e-b9798ce315eb.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % consultorias.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + consultorias.length) % consultorias.length);
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-ibm-plex text-4xl font-bold text-gray-800 mb-6">
            Nossas consultorias
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation buttons - outside the div */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={consultorias[currentSlide].image}
                  alt={consultorias[currentSlide].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="font-ibm-plex text-2xl font-bold text-gray-800 mb-4">
                  {consultorias[currentSlide].title}
                </h3>
                <p className="font-ibm-plex text-gray-600 leading-relaxed">
                  {consultorias[currentSlide].description}
                </p>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {consultorias.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-farm-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Saiba mais button */}
        <div className="text-center mt-12">
          <Link 
            to="/consultorias"
            className="inline-block bg-farm-secondary hover:bg-farm-secondary/90 text-white font-ibm-plex font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultoriaCarousel;
