
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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
          <img 
            src="/public/lovable-uploads/a0f89be6-744a-4898-8955-b41b14629755.png" 
            alt="AlienFlowSpace Logo" 
            className="h-9 mr-2" 
          />
          <span className="font-bold text-xl text-alien-gold">Alien<span className="text-alien-green">Flow</span></span>
        </div>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-alien-gold transition-colors">Home</a>
            <a href="#ecosystem" className="text-gray-300 hover:text-alien-gold transition-colors">Ecosystem</a>
            <a href="#participate" className="text-gray-300 hover:text-alien-gold transition-colors">Participate</a>
            <a href="#" className="text-gray-300 hover:text-alien-gold transition-colors">Docs</a>
            <a href="#" className="text-gray-300 hover:text-alien-gold transition-colors">Community</a>
          </nav>
        )}
        
        {/* Connect Button / Mobile Menu Button */}
        <div className="flex items-center">
          {!isMobile && (
            <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-medium rounded-full">
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
                <a 
                  href="#" 
                  className="text-gray-300 py-2 px-4 hover:bg-alien-space-light rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#ecosystem" 
                  className="text-gray-300 py-2 px-4 hover:bg-alien-space-light rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ecosystem
                </a>
                <a 
                  href="#participate" 
                  className="text-gray-300 py-2 px-4 hover:bg-alien-space-light rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Participate
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 py-2 px-4 hover:bg-alien-space-light rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Docs
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 py-2 px-4 hover:bg-alien-space-light rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Community
                </a>
                <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-medium rounded-full mt-4">
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
