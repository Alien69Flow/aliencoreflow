
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, ChevronDown, ChevronUp, GraduationCap, Clover, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileNav = ({ isMenuOpen, setIsMenuOpen }: MobileNavProps) => {
  const [spacesExpanded, setSpacesExpanded] = useState(false);
  const [languageExpanded, setLanguageExpanded] = useState(false);
  
  if (!isMenuOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="bg-alien-space-dark/95 backdrop-blur-lg overflow-hidden max-h-[80vh] overflow-y-auto absolute w-full z-50"
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
          
          {/* Explore Spaces Dropdown */}
          <div className="flex flex-col">
            <button
              onClick={() => setSpacesExpanded(!spacesExpanded)}
              className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Atomic Age] flex justify-between items-center"
            >
              <span>Explore Spaces</span>
              {spacesExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {spacesExpanded && (
              <div className="pl-2 flex flex-col space-y-3 mt-2 bg-alien-space-light/20 p-3 rounded-md">
                <div className="hover:bg-alien-space-light rounded-md p-2">
                  <Link 
                    to="/academy" 
                    className="text-alien-gold hover:text-alien-green font-[Atomic Age] flex items-start"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <GraduationCap className="mr-2 h-5 w-5 text-alien-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Academy</p>
                      <p className="text-sm text-gray-400">Unlock cosmic knowledge through educational resources.</p>
                    </div>
                  </Link>
                </div>
                
                <div className="hover:bg-alien-space-light rounded-md p-2">
                  <Link 
                    to="/clubs" 
                    className="text-alien-gold hover:text-alien-green font-[Atomic Age] flex items-start"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Clover className="mr-2 h-5 w-5 text-alien-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Clubs</p>
                      <p className="text-sm text-gray-400">Join specialized communities focused on interests.</p>
                    </div>
                  </Link>
                </div>
                
                <div className="hover:bg-alien-space-light rounded-md p-2">
                  <Link 
                    to="/conetworking" 
                    className="text-alien-gold hover:text-alien-green font-[Atomic Age] flex items-start"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Network className="mr-2 h-5 w-5 text-alien-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">CoNetWorKing</p>
                      <p className="text-sm text-gray-400">Connect with like-minded individuals across the multiverse.</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Language Selector */}
          <div className="flex flex-col">
            <button
              onClick={() => setLanguageExpanded(!languageExpanded)}
              className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Atomic Age] flex items-center justify-between"
            >
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/58877924-4e26-4862-938b-986102e0b5c0.png" 
                  alt="Language Selection" 
                  className="w-5 h-5 mr-2 rounded-full"
                />
                <span>English</span>
              </div>
              {languageExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {languageExpanded && (
              <div className="pl-2 flex flex-col space-y-1 mt-2 bg-alien-space-light/20 p-2 rounded-md">
                <div className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-5 h-4 mr-2" />
                  English
                </div>
                <div className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/es.png" alt="Español" className="w-5 h-4 mr-2" />
                  Español
                </div>
                <div className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/de.png" alt="Deutsch" className="w-5 h-4 mr-2" />
                  Deutsch
                </div>
                <div className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/fr.png" alt="Français" className="w-5 h-4 mr-2" />
                  Français
                </div>
                <div className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/cn.png" alt="中文" className="w-5 h-4 mr-2" />
                  中文
                </div>
              </div>
            )}
          </div>
          
          <Button className="bg-alien-green hover:bg-alien-green-light text-alien-gold font-[Atomic Age] rounded-full mt-4 flex items-center gap-2">
            <img 
              src="/lovable-uploads/e2d45b36-c4c1-4b45-953d-5376a5f5b6cc.png" 
              alt="Wallet" 
              className="h-6 w-6 rounded-full" 
            />
            Connect Portal
          </Button>
        </nav>
      </div>
    </motion.div>
  );
};

export default MobileNav;
