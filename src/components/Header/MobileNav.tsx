
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
  
  if (!isMenuOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="bg-alien-space-dark/95 backdrop-blur-lg overflow-hidden max-h-[80vh] overflow-y-auto"
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
              <div className="pl-8 flex flex-col space-y-2 mt-2">
                <Link 
                  to="/academy" 
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Atomic Age] flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <GraduationCap className="mr-2 h-4 w-4 text-alien-green" />
                  Academy
                </Link>
                <Link 
                  to="/clubs" 
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Atomic Age] flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Clover className="mr-2 h-4 w-4 text-alien-gold" />
                  Clubs
                </Link>
                <Link 
                  to="/conetworking" 
                  className="text-alien-gold py-2 px-4 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Atomic Age] flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Network className="mr-2 h-4 w-4 text-alien-green" />
                  CoNetWorKing
                </Link>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2 mt-2 ml-4">
            <img 
              src="/lovable-uploads/58877924-4e26-4862-938b-986102e0b5c0.png" 
              alt="Language Selection" 
              className="w-5 h-5 rounded-full"
            />
            <span className="text-alien-gold">English</span>
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
