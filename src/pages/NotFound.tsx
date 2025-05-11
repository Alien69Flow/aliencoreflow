
import React from 'react';
import { Link } from 'react-router-dom';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-alien-space">
      <StarBackground />
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16 flex items-center justify-center min-h-[calc(100vh-16rem)]">
        <div className="text-center max-w-xl">
          <h1 className="text-7xl md:text-9xl font-bold text-alien-gold mb-4 font-nasalization">404</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-[Exo]">Parece que te has perdido en el espacio. Esta dimensión no existe en nuestro multiverso.</p>
          <Link to="/">
            <Button className="bg-alien-green hover:bg-alien-green-light text-alien-space-dark px-8 font-[Exo]">
              <Home className="mr-2 h-5 w-5" /> Volver al inicio
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
