import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importar framer-motion para animaciones
import { AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import ConnectButton from './ConnectButton';
import PriceTicker from '../PriceTicker';

// Nuevo componente para pantalla de carga
const SplashScreen = ({ isLoading }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          animate={{ translateY: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src="/path-to-logo.png" alt="Logo" className="w-24 h-24" />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setLoading] = useState(true); // Estado para pantalla de carga
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Desactivar pantalla de carga después de 2 segundos
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Pantalla de carga */}
      <SplashScreen isLoading={isLoading} />

      {/* Header principal */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-3 bg-alien-space-dark/90 backdrop-blur-lg' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center relative">
          {/* Logo con efecto flotante */}
          <motion.div
            animate={{ translateY: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Logo />
          </motion.div>

          {/* Navegación de escritorio */}
          <DesktopNav />

          {/* Botón Connect Wallet visible en todos los dispositivos */}
          <div className="flex items-center gap-4">
            <ConnectButton />

            {/* Menú móvil */}
            {isMobile && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-alien-gold"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {/* Menú móvil desplegable */}
        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          )}
        </AnimatePresence>

        {/* Price Ticker */}
        <div className="absolute left-0 right-0 bottom-0 translate-y-full w-full">
          <PriceTicker />
        </div>
      </header>
    </>
  );
};

export default Header;
