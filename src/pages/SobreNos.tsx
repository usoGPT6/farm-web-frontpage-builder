
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SobreNos = () => {
  return (
    <div className="min-h-screen font-ibm-plex">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-ibm-plex text-4xl font-bold text-center mb-8">
            Sobre Nós
          </h1>
          <p className="font-ibm-plex text-lg text-center text-gray-600">
            Página em desenvolvimento
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SobreNos;
