
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import PriceTicker from './PriceTicker';

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
        
        {/* Desktop Navigation - Alphabetically ordered */}
        {!isMobile && (
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              {/* Home first, then alphabetically */}
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light font-[Atomic Age]"}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light font-[Atomic Age]"}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/alien-trip">
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light font-[Atomic Age]"}>
                    AlienTrip
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light font-[Atomic Age]"}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light font-[Atomic Age]">
                  Explore Spaces
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-alien-space-dark/95 backdrop-blur-lg border border-alien-gold/20 rounded-lg absolute left-1/2 -translate-x-1/2">
                  <ul className="grid gap-3 p-4 w-[400px] grid-cols-1">
                    <li>
                      <Link to="/academy" className="block p-3 rounded-md hover:bg-alien-space-light">
                        <div className="text-alien-gold font-[Atomic Age] mb-1">Academy</div>
                        <p className="text-sm text-gray-400">Learn from the stars</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/clubs" className="block p-3 rounded-md hover:bg-alien-space-light">
                        <div className="text-alien-gold font-[Atomic Age] mb-1">Clubs</div>
                        <p className="text-sm text-gray-400">Join planetary communities</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/conetworking" className="block p-3 rounded-md hover:bg-alien-space-light">
                        <div className="text-alien-gold font-[Atomic Age] mb-1">CoNetWorKing</div>
                        <p className="text-sm text-gray-400">Connect across the cosmos</p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* Language Selector with Globe Icon */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light">
                  <Globe className="w-5 h-5 mr-1" />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-alien-space-dark/95 backdrop-blur-lg border border-alien-gold/20 p-2 rounded-lg absolute left-1/2 -translate-x-1/2">
                  <ul className="grid w-[180px]">
                    <li className="px-2 py-1.5 text-alien-gold hover:text-alien-green hover:bg-alien-space-light rounded cursor-pointer flex items-center">
                      <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-5 h-auto mr-2" />
                      English
                    </li>
                    <li className="px-2 py-1.5 text-alien-gold hover:text-alien-green hover:bg-alien-space-light rounded cursor-pointer flex items-center">
                      <img src="https://flagcdn.com/w20/es.png" alt="Español" className="w-5 h-auto mr-2" />
                      Español
                    </li>
                    <li className="px-2 py-1.5 text-alien-gold hover:text-alien-green hover:bg-alien-space-light rounded cursor-pointer flex items-center">
                      <img src="https://flagcdn.com/w20/fr.png" alt="Français" className="w-5 h-auto mr-2" />
                      Français
                    </li>
                    <li className="px-2 py-1.5 text-alien-gold hover:text-alien-green hover:bg-alien-space-light rounded cursor-pointer flex items-center">
                      <img src="https://flagcdn.com/w20/cn.png" alt="汉语" className="w-5 h-auto mr-2" />
                      汉语 (Hànyǔ)
                    </li>
                    <li className="px-2 py-1.5 text-alien-gold hover:text-alien-green hover:bg-alien-space-light rounded cursor-pointer flex items-center">
                      <img src="https://flagcdn.com/w20/in.png" alt="हिन्दी" className="w-5 h-auto mr-2" />
                      हिन्दी (Hindī)
                    </li>
                    <li className="px-2 py-1.5 text-alien-gold hover:text-alien-green hover:bg-alien-space-light rounded cursor-pointer flex items-center">
                      <img src="https://flagcdn.com/w20/br.png" alt="Português" className="w-5 h-auto mr-2" />
                      Português
                    </li>
                    <li className="px-2 py-1.5 text-alien-gold hover:text-alien-green hover:bg-alien-space-light rounded cursor-pointer flex items-center">
                      <img src="https://flagcdn.com/w20/jp.png" alt="日本語" className="w-5 h-auto mr-2" />
                      日本語 (Nihongo)
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}
        
        {/* Connect Button / Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {!isMobile && (
            <Button className="bg-alien-green hover:bg-alien-green-light text-alien-gold font-[Atomic Age] rounded-full flex items-center gap-2">
              <img 
                src="/lovable-uploads/e2d45b36-c4c1-4b45-953d-5376a5f5b6cc.png" 
                alt="Wallet" 
                className="h-6 w-6 rounded-full" 
              />
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
                <div className="text-alien-gold py-2 px-4 font-[Atomic Age]">
                  Explore Spaces:
                </div>
                <Link 
                  to="/academy" 
                  className="text-alien-gold py-2 px-8 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Atomic Age]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Academy
                </Link>
                <Link 
                  to="/clubs" 
                  className="text-alien-gold py-2 px-8 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Atomic Age]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Clubs
                </Link>
                <Link 
                  to="/conetworking" 
                  className="text-alien-gold py-2 px-8 hover:text-alien-green hover:bg-alien-space-light rounded-md font-[Atomic Age]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CoNetWorKing
                </Link>
                
                <div className="flex items-center gap-2 mt-2 ml-4">
                  <Globe className="w-5 h-5 text-alien-gold" />
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
        )}
      </AnimatePresence>
      
      {/* Price Ticker */}
      <PriceTicker />
    </header>
  );
};

export default Header;
