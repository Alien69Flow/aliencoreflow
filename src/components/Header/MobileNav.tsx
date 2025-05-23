
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, ChevronDown, ChevronUp } from 'lucide-react';
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
      className="bg-alien-space-dark absolute w-full z-50 top-full shadow-lg"
    >
      <div className="container mx-auto px-4 py-6">
        <nav className="flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-nasalization"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-nasalization"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/alien-trip" 
            className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-nasalization"
            onClick={() => setIsMenuOpen(false)}
          >
            AlienTrip
          </Link>
          <Link 
            to="/contact" 
            className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-nasalization"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          
          {/* Explore Spaces Dropdown */}
          <div className="flex flex-col">
            <button
              onClick={() => setSpacesExpanded(!spacesExpanded)}
              className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md flex justify-between items-center font-nasalization"
            >
              <span>Explore Spaces</span>
              {spacesExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {spacesExpanded && (
              <div className="pl-2 flex flex-col space-y-3 mt-2 bg-alien-space-light/20 p-3 rounded-md">
                <Link 
                  to="/academy" 
                  className="p-2 hover:bg-alien-space-light rounded-md text-alien-gold hover:text-alien-green"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <h3 className="font-nasalization">Academy</h3>
                  <p className="text-sm text-gray-400">Unlock cosmic knowledge through educational resources</p>
                </Link>
                <Link 
                  to="/clubs" 
                  className="p-2 hover:bg-alien-space-light rounded-md text-alien-gold hover:text-alien-green"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <h3 className="font-nasalization">Clubs</h3>
                  <p className="text-sm text-gray-400">Join specialized communities focused on interests</p>
                </Link>
                <Link 
                  to="/conetworking" 
                  className="p-2 hover:bg-alien-space-light rounded-md text-alien-gold hover:text-alien-green"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <h3 className="font-nasalization">CoNetWorKing</h3>
                  <p className="text-sm text-gray-400">Connect with like-minded and profits across the multiverse</p>
                </Link>
              </div>
            )}
          </div>
          
          {/* Language Selector */}
          <div className="flex flex-col">
            <button
              onClick={() => setLanguageExpanded(!languageExpanded)}
              className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md flex items-center justify-between font-nasalization"
            >
              <div className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                <span>Language</span>
              </div>
              {languageExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {languageExpanded && (
              <div className="pl-2 flex flex-col space-y-1 mt-2 bg-alien-space-light/20 p-2 rounded-md">
                <div className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-5 h-4 mr-2" />
                  <span>English</span>
                </div>
                <div className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/es.png" alt="Español" className="w-5 h-4 mr-2" />
                  <span>Español</span>
                </div>
                <div className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/fr.png" alt="Français" className="w-5 h-4 mr-2" />
                  <span>Français</span>
                </div>
                <div className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/cn.png" alt="汉语" className="w-5 h-4 mr-2" />
                  <span>汉语 (Hànyǔ)</span>
                </div>
                <div className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/in.png" alt="हिन्दी" className="w-5 h-4 mr-2" />
                  <span>हिन्दी (Hindī)</span>
                </div>
                <div className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/pt.png" alt="Português" className="w-5 h-4 mr-2" />
                  <span>Português</span>
                </div>
                <div className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/jp.png" alt="日本語" className="w-5 h-4 mr-2" />
                  <span>日本語 (Nihongo)</span>
                </div>
              </div>
            )}
          </div>
          
          <Button className="bg-alien-green hover:bg-alien-green-light text-alien-gold rounded-full mt-4 flex items-center gap-2 font-nasalization">
            <img 
              src="/lovable-uploads/AW.png" 
              alt="Wallet" 
              className="h-6 w-6 rounded-full" 
            />
            <span className="font-nasalization">Connect Portal</span>
          </Button>
        </nav>
      </div>
    </motion.div>
  );
};

export default MobileNav;
