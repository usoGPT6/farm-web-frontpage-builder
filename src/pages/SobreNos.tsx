
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SobreNos = () => {
  const [activeTab, setActiveTab] = useState<'empresa' | 'socios'>('empresa');

  const eventos = [
    {
      id: 1,
      titulo: "Reunião Estratégica 2024",
      data: "Janeiro 2024",
      imagem: "/lovable-uploads/3f843eb5-c53f-4b40-8227-953be9aa2558.png",
      descricao: "Planejamento estratégico para expansão de projetos de energia renovável"
    },
    {
      id: 2,
      titulo: "Parceria em Energia Solar",
      data: "Março 2024",
      imagem: "/lovable-uploads/96d24c0f-1dd1-4d1e-afb9-2797cfc551a5.png",
      descricao: "Novo acordo de cooperação para desenvolvimento de usinas solares"
    },
    {
      id: 3,
      titulo: "Inovação Sustentável",
      data: "Maio 2024",
      imagem: "/lovable-uploads/5408cd79-125c-4c87-99ae-048be3470a20.png",
      descricao: "Workshop sobre tecnologias inovadoras em sustentabilidade"
    }
  ];

  const cardsInfo = [
    {
      titulo: "Missão",
      icone: "/lovable-uploads/c0627658-14f0-429d-9164-3679c9b3d5b9.png",
      descricao: "Desenvolver soluções inovadoras em energia renovável que transformem o futuro energético do Brasil de forma sustentável e eficiente."
    },
    {
      titulo: "Visão",
      icone: "/lovable-uploads/93acbbd6-07c9-4134-8e18-b40b19f0ff62.png",
      descricao: "Ser referência nacional em consultoria de energia renovável, liderando a transição energética brasileira."
    },
    {
      titulo: "Valores",
      icone: "/lovable-uploads/c7b0cecd-2902-42f8-99d5-3f129983f4e8.png",
      descricao: "Sustentabilidade, inovação, transparência e compromisso com o meio ambiente e com nossos clientes."
    }
  ];

  return (
    <div className="min-h-screen font-ibm-plex">
      <Header />
      
      {/* Navigation Tabs */}
      <div className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('empresa')}
              className={`font-ibm-plex font-semibold text-lg px-6 py-2 rounded-lg transition-all ${
                activeTab === 'empresa'
                  ? 'bg-farm-secondary text-white'
                  : 'text-farm-dark hover:text-farm-secondary'
              }`}
            >
              Empresa
            </button>
            <button
              onClick={() => setActiveTab('socios')}
              className={`font-ibm-plex font-semibold text-lg px-6 py-2 rounded-lg transition-all ${
                activeTab === 'socios'
                  ? 'bg-farm-secondary text-white'
                  : 'text-farm-dark hover:text-farm-secondary'
              }`}
            >
              Sócios
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section com Onda */}
      <section className="relative h-[400px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/5408cd79-125c-4c87-99ae-048be3470a20.png')`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-ibm-plex text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {activeTab === 'empresa' ? 'Nossa Empresa' : 'Nossos Sócios'}
            </h1>
            <p className="font-ibm-plex text-xl text-white leading-relaxed">
              {activeTab === 'empresa' 
                ? 'Construindo o futuro da energia renovável no Brasil'
                : 'Conheça os profissionais que lideram nossa missão'
              }
            </p>
          </div>
        </div>
        
        {/* Onda decorativa */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" className="w-full h-20" preserveAspectRatio="none">
            <path d="M0,60 Q300,100 600,60 T1200,60 L1200,120 L0,120 Z" fill="#1EC4BF" />
            <path d="M0,80 Q300,110 600,80 T1200,80 L1200,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <main className="py-16 bg-farm-light">
        {activeTab === 'empresa' ? (
          <>
            {/* Seção Texto + Imagem */}
            <div className="container mx-auto px-4 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-ibm-plex text-3xl font-bold text-farm-dark mb-6">
                    Quem Somos
                  </h2>
                  <p className="font-ibm-plex text-lg text-gray-600 leading-relaxed mb-4">
                    A FARM é uma empresa pioneira em consultoria de energia renovável, 
                    fundada com o propósito de acelerar a transição energética brasileira 
                    através de soluções inovadoras e sustentáveis.
                  </p>
                  <p className="font-ibm-plex text-lg text-gray-600 leading-relaxed mb-4">
                    Nossa equipe multidisciplinar combina expertise técnica com visão 
                    estratégica para desenvolver projetos que geram impacto positivo 
                    no meio ambiente e na sociedade.
                  </p>
                  <p className="font-ibm-plex text-lg text-gray-600 leading-relaxed">
                    Acreditamos que a energia renovável é o caminho para um futuro 
                    mais sustentável e próspero para todos.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/96d24c0f-1dd1-4d1e-afb9-2797cfc551a5.png" 
                    alt="Equipe FARM trabalhando" 
                    className="rounded-lg shadow-lg w-full max-w-md object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Cards Missão, Visão, Valores */}
            <div className="container mx-auto px-4 mb-16">
              <h2 className="font-ibm-plex text-3xl font-bold text-farm-dark text-center mb-12">
                Nossos Pilares
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cardsInfo.map((card, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105"
                  >
                    <div className="flex justify-center mb-6">
                      <img 
                        src={card.icone} 
                        alt={card.titulo}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <h3 className="font-ibm-plex font-bold text-xl text-farm-dark mb-4">
                      {card.titulo}
                    </h3>
                    <p className="font-ibm-plex text-gray-600 leading-relaxed">
                      {card.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Carrossel de Eventos */}
            <div className="container mx-auto px-4">
              <h2 className="font-ibm-plex text-3xl font-bold text-farm-dark text-center mb-12">
                Nossos Eventos
              </h2>
              <div className="max-w-4xl mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    {eventos.map((evento) => (
                      <CarouselItem key={evento.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                          <img 
                            src={evento.imagem} 
                            alt={evento.titulo}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-6">
                            <div className="text-farm-secondary font-ibm-plex font-semibold text-sm mb-2">
                              {evento.data}
                            </div>
                            <h3 className="font-ibm-plex font-bold text-lg text-farm-dark mb-3">
                              {evento.titulo}
                            </h3>
                            <p className="font-ibm-plex text-gray-600 text-sm leading-relaxed">
                              {evento.descricao}
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </>
        ) : (
          /* Conteúdo para Sócios */
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="font-ibm-plex text-3xl font-bold text-farm-dark mb-8">
                Nossos Sócios
              </h2>
              <p className="font-ibm-plex text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Conteúdo sobre os sócios em desenvolvimento. Aqui será apresentada 
                informações sobre os fundadores e principais executivos da FARM.
              </p>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default SobreNos;
