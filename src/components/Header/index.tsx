import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileNav from './MobileNav';
import ConnectButton from './ConnectButton';
import PriceTicker from '../PriceTicker';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-dark/90' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="logo">AlienCoreFlow</div>
        {!isMobile && <ConnectButton />}
        {isMobile && (
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gold">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>
      {isMobile && isMenuOpen && <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      <div className="absolute left-0 right-0 bottom-0 translate-y-full w-full">
        <PriceTicker />
      </div>
    </header>
  );
};

export default Header;
