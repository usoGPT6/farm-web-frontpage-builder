
const ImpactSection = () => {
  const impacts = [
    {
      number: "2.3mil",
      description: "Tons de CO2 evitadas anualmente"
    },
    {
      number: "Nascente",
      description: "Empresa em crescimento acelerado"
    },
    {
      number: "+1000",
      description: "Projetos analisados com sucesso"
    }
  ];

  return (
    <section className="bg-farm-tertiary py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-ibm-plex text-4xl font-bold text-white mb-6">
            Impactos
          </h2>
          <p className="font-ibm-plex text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Nosso compromisso com a sustentabilidade gera resultados mensuráveis 
            que transformam o meio ambiente e a sociedade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <span className="font-ibm-plex text-5xl md:text-6xl font-bold text-white block">
                  {impact.number}
                </span>
              </div>
              <p className="font-ibm-plex text-lg text-white/90 leading-relaxed">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
