
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/de4cbacc-efa2-4e4e-ab18-4cae09dcb0b1.png" 
              alt="FARM Logo" 
              className="h-8 w-auto"
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="font-ibm-plex text-gray-700 hover:text-farm-primary transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/consultorias" 
            className="font-ibm-plex text-gray-700 hover:text-farm-primary transition-colors"
          >
            Consultorias
          </Link>
          <Link 
            to="/sobrenos" 
            className="font-ibm-plex text-gray-700 hover:text-farm-primary transition-colors"
          >
            Sobre nós
          </Link>
          <Link 
            to="/contato" 
            className="font-ibm-plex text-gray-700 hover:text-farm-primary transition-colors"
          >
            Fale conosco
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="px-4 py-2 space-y-2">
            <Link 
              to="/" 
              className="block font-ibm-plex text-gray-700 hover:text-farm-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/consultorias" 
              className="block font-ibm-plex text-gray-700 hover:text-farm-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Consultorias
            </Link>
            <Link 
              to="/sobrenos" 
              className="block font-ibm-plex text-gray-700 hover:text-farm-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre nós
            </Link>
            <Link 
              to="/contato" 
              className="block font-ibm-plex text-gray-700 hover:text-farm-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Fale conosco
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
