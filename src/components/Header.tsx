
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
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
              src="/lovable-uploads/a0f89be6-744a-4898-8955-b41b14629755.png" 
              alt="AlienFlowSpace Logo" 
              className="h-9 mr-2" 
            />
          </Link>
          <Link to="/">
            <span className="font-bold text-xl text-alien-gold font-[Atomic Age]">Alien<span className="text-alien-green">Flow</span></span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-alien-gold hover:text-alien-green transition-colors font-[Atomic Age]">Home</Link>
            <Link to="/about" className="text-alien-gold hover:text-alien-green transition-colors font-[Atomic Age]">About</Link>
            <Link to="/alien-trip" className="text-alien-gold hover:text-alien-green transition-colors font-[Atomic Age]">AlienTrip</Link>
            <Link to="/contact" className="text-alien-gold hover:text-alien-green transition-colors font-[Atomic Age]">Contact</Link>
            <Link to="/academy" className="text-alien-gold hover:text-alien-green transition-colors font-[Atomic Age]">Academy</Link>
            <Link to="/clubs" className="text-alien-gold hover:text-alien-green transition-colors font-[Atomic Age]">Clubs</Link>
            <Link to="/conetworking" className="text-alien-gold hover:text-alien-green transition-colors font-[Atomic Age]">CoNetWorKing</Link>
            <button className="flex items-center text-alien-gold hover:text-alien-green transition-colors">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="fill-current text-alien-gold"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.34-.026.516-.026.179 0 .354.016.533.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z" />
              </svg>
            </button>
          </nav>
        )}
        
        {/* Connect Button / Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {!isMobile && (
            <Button className="bg-alien-green hover:bg-alien-green-light text-alien-gold font-medium rounded-full font-[Atomic Age]">
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
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Atomic Age]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Atomic Age]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/alien-trip" 
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Atomic Age]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AlienTrip
                </Link>
                <Link 
                  to="/contact" 
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Atomic Age]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/academy" 
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Atomic Age]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Academy
                </Link>
                <Link 
                  to="/clubs" 
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Atomic Age]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Clubs
                </Link>
                <Link 
                  to="/conetworking" 
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Atomic Age]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CoNetWorKing
                </Link>
                <div className="flex items-center gap-2 mt-2 ml-4">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="fill-current text-alien-gold"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.34-.026.516-.026.179 0 .354.016.533.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z" />
                  </svg>
                </div>
                <Button className="bg-alien-green hover:bg-alien-green-light text-alien-gold font-medium rounded-full mt-4 font-[Atomic Age]">
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
