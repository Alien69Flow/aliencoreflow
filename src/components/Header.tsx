
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-alien-space-dark/90 backdrop-blur-lg' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/public/lovable-uploads/a0f89be6-744a-4898-8955-b41b14629755.png" 
              alt="AlienFlowSpace Logo" 
              className="h-9 mr-2" 
            />
          </Link>
          <Link to="/">
            <span className="font-bold text-xl text-alien-gold font-[Atomic Age, Star Wars]">Alien<span className="text-alien-green">Flow</span></span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-alien-gold hover:text-alien-green transition-colors font-[Exo]">Home</Link>
            <Link to="/about" className="text-alien-gold hover:text-alien-green transition-colors font-[Exo]">About</Link>
            <Link to="/alien-trip" className="text-alien-gold hover:text-alien-green transition-colors font-[Exo]">AlienTrip</Link>
            <Link to="/contact" className="text-alien-gold hover:text-alien-green transition-colors font-[Exo]">Contact</Link>
            <Link to="/academy" className="text-alien-gold hover:text-alien-green transition-colors font-[Exo]">Academy</Link>
            <Link to="/clubs" className="text-alien-gold hover:text-alien-green transition-colors font-[Exo]">Clubs</Link>
            <Link to="/conetworking" className="text-alien-gold hover:text-alien-green transition-colors font-[Exo]">CoNetWorKing</Link>
          </nav>
        )}
        
        {/* Connect Button / Mobile Menu Button */}
        <div className="flex items-center">
          {!isMobile && (
            <Button className="bg-alien-green hover:bg-alien-green-light text-alien-space-dark font-medium rounded-full font-[Exo]">
              Connect Portal
            </Button>
          )}
          
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
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-alien-space-dark/95 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Exo]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Exo]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/alien-trip" 
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Exo]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AlienTrip
                </Link>
                <Link 
                  to="/contact" 
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Exo]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/academy" 
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Exo]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Academy
                </Link>
                <Link 
                  to="/clubs" 
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Exo]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Clubs
                </Link>
                <Link 
                  to="/conetworking" 
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Exo]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CoNetWorKing
                </Link>
                <Button className="bg-alien-green hover:bg-alien-green-light text-alien-space-dark font-medium rounded-full mt-4">
                  Connect Portal
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
