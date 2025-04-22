
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="text-alien-gold hover:text-alien-green px-2 py-2">
          Home
        </Link>
        <Link to="/about" className="text-alien-gold hover:text-alien-green px-2 py-2">
          About
        </Link>
        <Link to="/alien-trip" className="text-alien-gold hover:text-alien-green px-2 py-2">
          AlienTrip
        </Link>
        <Link to="/contact" className="text-alien-gold hover:text-alien-green px-2 py-2">
          Contact
        </Link>
        
        {/* Explore Spaces Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light/30 px-2 py-2 rounded flex items-center group"
            >
              Explore Spaces
              <ChevronDown 
                className="ml-2 h-4 w-4 transform transition-transform duration-300 group-data-[state=open]:rotate-180 group-hover:text-alien-green" 
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="bg-alien-space-dark border border-alien-gold/20 p-4 rounded-md w-[320px] shadow-lg z-[9999]"
          >
            <div className="flex flex-col space-y-4">
              <DropdownMenuItem asChild>
                <Link 
                  to="/academy" 
                  className="flex items-start p-2 rounded-lg hover:bg-alien-space-light/20 group cursor-pointer"
                >
                  <div className="flex-1">
                    <h3 className="text-alien-gold group-hover:text-alien-green font-semibold mb-1">Academy</h3>
                    <p className="text-sm text-gray-400">Unlock cosmic knowledge through educational resources</p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/clubs" 
                  className="flex items-start p-2 rounded-lg hover:bg-alien-space-light/20 group cursor-pointer"
                >
                  <div className="flex-1">
                    <h3 className="text-alien-gold group-hover:text-alien-green font-semibold mb-1">Clubs</h3>
                    <p className="text-sm text-gray-400">Join specialized communities focused on interests</p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/conetworking" 
                  className="flex items-start p-2 rounded-lg hover:bg-alien-space-light/20 group cursor-pointer"
                >
                  <div className="flex-1">
                    <h3 className="text-alien-gold group-hover:text-alien-green font-semibold mb-1">CoNetWorKing</h3>
                    <p className="text-sm text-gray-400">Connect with like-minded individuals across the multiverse</p>
                  </div>
                </Link>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Language Selector Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="flex items-center text-alien-gold hover:text-alien-green focus:outline-none group p-2"
            >
              <Globe className="h-5 w-5 group-hover:text-alien-green" />
              <ChevronDown 
                className="ml-1 h-4 w-4 transform transition-transform duration-300 group-data-[state=open]:rotate-180" 
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="bg-alien-space-dark border border-alien-gold/20 p-2 rounded-md w-[220px] shadow-lg z-[9999]"
            align="end"
          >
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
                <DropdownMenuItem 
                  key={lang.code} 
                  className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/20 cursor-pointer p-2 rounded"
                >
                  <img 
                    src={`https://flagcdn.com/w20/${lang.code}.png`} 
                    alt={`${lang.name} flag`} 
                    className="w-5 h-4" 
                  />
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default DesktopNav;

