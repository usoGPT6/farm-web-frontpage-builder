
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
      titulo: "São Paulo - Sede Principal",
      data: "2018 - Presente",
      imagem: "/lovable-uploads/3f843eb5-c53f-4b40-8227-953be9aa2558.png",
      descricao: "Nossa sede principal localizada no coração financeiro do Brasil"
    },
    {
      id: 2,
      titulo: "Rio de Janeiro - Filial",
      data: "2020 - Presente",
      imagem: "/lovable-uploads/96d24c0f-1dd1-4d1e-afb9-2797cfc551a5.png",
      descricao: "Expansão para atender projetos no estado do Rio de Janeiro"
    },
    {
      id: 3,
      titulo: "Minas Gerais - Operações",
      data: "2021 - Presente",
      imagem: "/lovable-uploads/5408cd79-125c-4c87-99ae-048be3470a20.png",
      descricao: "Centro de operações para projetos de energia renovável"
    },
    {
      id: 4,
      titulo: "Bahia - Energia Solar",
      data: "2022 - Presente",
      imagem: "/lovable-uploads/7fd02d58-7605-49fa-9845-66c81b2c6cf9.png",
      descricao: "Especialização em projetos de energia solar fotovoltaica"
    },
    {
      id: 5,
      titulo: "Ceará - Energia Eólica",
      data: "2023 - Presente",
      imagem: "/lovable-uploads/b48a9089-cba9-43af-8ea6-f37cd74adf47.png",
      descricao: "Foco em desenvolvimento de parques eólicos offshore e onshore"
    },
    {
      id: 6,
      titulo: "Paraná - Biomassa",
      data: "2024 - Presente",
      imagem: "/lovable-uploads/4a0e2ce2-25be-4cbc-844d-c688182dc588.png",
      descricao: "Projetos inovadores de geração de energia a partir de biomassa"
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

      {/* Navigation Tabs - Abaixo da onda */}
      <div className="bg-farm-light py-6">
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

      {/* Conteúdo Principal */}
      <main className="py-16 bg-farm-light">
        {activeTab === 'empresa' ? (
          <>
            {/* Seção A Empresa */}
            <div className="container mx-auto px-4 mb-16">
              <h2 className="font-ibm-plex text-4xl font-bold text-farm-dark mb-12">
                A Empresa
              </h2>
              
              {/* Nossa Trajetória */}
              <div className="mb-16">
                <h3 className="font-ibm-plex text-2xl font-bold text-farm-dark mb-8">
                  Nossa trajetória
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <p className="font-ibm-plex text-lg text-gray-600 leading-relaxed mb-4">
                      É uma sociedade constituída por executivos sêniores, com larga experiência em posições de liderança no planejamento 
                      e execução de estratégias vencedoras na estrutura, na infraestrutura, na construção e na operação, com comprovada habilidade no relacionamento 
                      e negociação com Acionistas, Conselheiros, Executivos e Entidades Governamentais e Privadas.
                    </p>
                    <p className="font-ibm-plex text-lg text-gray-600 leading-relaxed mb-4">
                      Faucibus eget augue vitae justo rhoncus congue. Integer et mattis arcu rutus 
                      lobortis tincidunt. Morbi tristique, nulla ut auctor sollicitudin, ex justo 
                      lacinia magna, ut fermentum lorem tortor sed nisl.
                    </p>
                    <p className="font-ibm-plex text-lg text-gray-600 leading-relaxed">
                      Suspendisse fermentum gravida. Curabitur et lorem vitae elit posuere 
                      sollicitudin. Proin nec sapien velit, porta tincidunt vectum, vel lobortis 
                      odio lacus.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="/lovable-uploads/96d24c0f-1dd1-4d1e-afb9-2797cfc551a5.png" 
                      alt="Nossa trajetória" 
                      className="rounded-lg shadow-lg w-full max-w-md object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Cards Missão, Visão, Valores - sem título */}
            <div className="container mx-auto px-4 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cardsInfo.map((card, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-10 shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 h-80"
                  >
                    <div className="flex justify-center mb-8">
                      <img 
                        src={card.icone} 
                        alt={card.titulo}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <h3 className="font-ibm-plex font-bold text-2xl text-farm-dark mb-6">
                      {card.titulo}
                    </h3>
                    <p className="font-ibm-plex text-gray-600 leading-relaxed text-sm">
                      {card.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Carrossel de Eventos */}
            <div className="container mx-auto px-4">
              <h2 className="font-ibm-plex text-3xl font-bold text-farm-dark text-center mb-12">
                Onde estamos presentes
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
