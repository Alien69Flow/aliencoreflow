
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <NavigationMenu className="max-w-none">
        <NavigationMenuList className="space-x-1">
          <NavigationMenuItem>
            <Link to="/" className="text-alien-gold hover:text-alien-green px-3 py-2 block">
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/about" className="text-alien-gold hover:text-alien-green px-3 py-2 block">
              About
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/alien-trip" className="text-alien-gold hover:text-alien-green px-3 py-2 block">
              AlienTrip
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contact" className="text-alien-gold hover:text-alien-green px-3 py-2 block">
              Contact
            </Link>
          </NavigationMenuItem>
          
          {/* Explore Spaces Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light/30 focus:bg-alien-space-light/30 px-3 py-2 data-[state=open]:text-alien-green data-[state=open]:bg-alien-space-light/30">
              Explore Spaces
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-alien-space-dark border border-alien-gold/20 p-4 rounded-md w-[320px] shadow-lg z-50">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/academy" 
                  className="flex items-start p-2 rounded-lg hover:bg-alien-space-light/20 group cursor-pointer"
                >
                  <div className="flex-1">
                    <h3 className="text-alien-gold group-hover:text-alien-green font-semibold mb-1">Academy</h3>
                    <p className="text-sm text-gray-400">Unlock cosmic knowledge through educational resources</p>
                  </div>
                </Link>
                <Link 
                  to="/clubs" 
                  className="flex items-start p-2 rounded-lg hover:bg-alien-space-light/20 group cursor-pointer"
                >
                  <div className="flex-1">
                    <h3 className="text-alien-gold group-hover:text-alien-green font-semibold mb-1">Clubs</h3>
                    <p className="text-sm text-gray-400">Join specialized communities focused on interests</p>
                  </div>
                </Link>
                <Link 
                  to="/conetworking" 
                  className="flex items-start p-2 rounded-lg hover:bg-alien-space-light/20 group cursor-pointer"
                >
                  <div className="flex-1">
                    <h3 className="text-alien-gold group-hover:text-alien-green font-semibold mb-1">CoNetWorKing</h3>
                    <p className="text-sm text-gray-400">Connect with like-minded individuals across the multiverse</p>
                  </div>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          {/* Language Selector Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light/30 focus:bg-alien-space-light/30 px-3 py-2 data-[state=open]:text-alien-green data-[state=open]:bg-alien-space-light/30">
              <Globe className="h-5 w-5 mr-1" />
              <span className="sr-only">Language</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-alien-space-dark border border-alien-gold/20 p-2 rounded-md w-[220px] shadow-lg z-50">
              <div className="flex flex-col space-y-1">
                {[
                  { code: 'us', name: 'English', lang: 'en' },
                  { code: 'es', name: 'Español', lang: 'es' },
                  { code: 'fr', name: 'Français', lang: 'fr' },
                  { code: 'cn', name: '汉语 (Hànyǔ)', lang: 'zh' },
                  { code: 'in', name: 'हिन्दी (Hindī)', lang: 'hi' },
                  { code: 'pt', name: 'Português', lang: 'pt' },
                  { code: 'jp', name: '日本語 (Nihongo)', lang: 'ja' },
                ].map((lang) => (
                  <button 
                    key={lang.code} 
                    className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/20 cursor-pointer p-2 rounded text-left"
                  >
                    <img 
                      src={`https://flagcdn.com/w20/${lang.code}.png`} 
                      alt={`${lang.name} flag`} 
                      className="w-5 h-4" 
                    />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNav;
