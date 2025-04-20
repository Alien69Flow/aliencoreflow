
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const DesktopNav = () => {
  // Estado para controlar qué menú está abierto
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  
  const handleToggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

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
        
        {/* Explore Spaces using DropdownMenu instead of Popover */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light/30 px-2 py-2 rounded flex items-center">
              Explore Spaces
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="bg-alien-space-dark border border-alien-gold/20 p-4 rounded-md w-[320px] shadow-lg z-50"
          >
            <div className="flex flex-col space-y-4">
              <Link 
                to="/academy" 
                className="flex items-start p-2 rounded-lg hover:bg-alien-space-light/20 group"
              >
                <div className="flex-1">
                  <h3 className="text-alien-gold group-hover:text-alien-green font-semibold mb-1">Academy</h3>
                  <p className="text-sm text-gray-400">Unlock cosmic knowledge through educational resources</p>
                </div>
              </Link>
              <Link 
                to="/clubs" 
                className="flex items-start p-2 rounded-lg hover:bg-alien-space-light/20 group"
              >
                <div className="flex-1">
                  <h3 className="text-alien-gold group-hover:text-alien-green font-semibold mb-1">Clubs</h3>
                  <p className="text-sm text-gray-400">Join specialized communities focused on interests</p>
                </div>
              </Link>
              <Link 
                to="/conetworking" 
                className="flex items-start p-2 rounded-lg hover:bg-alien-space-light/20 group"
              >
                <div className="flex-1">
                  <h3 className="text-alien-gold group-hover:text-alien-green font-semibold mb-1">CoNetWorKing</h3>
                  <p className="text-sm text-gray-400">Connect with like-minded individuals across the multiverse</p>
                </div>
              </Link>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Language Selector using DropdownMenu instead of Popover */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center text-alien-gold hover:text-alien-green focus:outline-none p-0">
            <Globe className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="bg-alien-space-dark border border-alien-gold/20 p-2 rounded-md w-[220px] shadow-lg z-50"
          align="end"
        >
          <div className="flex flex-col space-y-1">
            <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/20 cursor-pointer p-2 rounded">
              <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-5 h-4" />
              <span>English</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/20 cursor-pointer p-2 rounded">
              <img src="https://flagcdn.com/w20/es.png" alt="Español" className="w-5 h-4" />
              <span>Español</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/20 cursor-pointer p-2 rounded">
              <img src="https://flagcdn.com/w20/fr.png" alt="Français" className="w-5 h-4" />
              <span>Français</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/20 cursor-pointer p-2 rounded">
              <img src="https://flagcdn.com/w20/cn.png" alt="汉语" className="w-5 h-4" />
              <span>汉语 (Hànyǔ)</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/20 cursor-pointer p-2 rounded">
              <img src="https://flagcdn.com/w20/in.png" alt="हिन्दी" className="w-5 h-4" />
              <span>हिन्दी (Hindī)</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/20 cursor-pointer p-2 rounded">
              <img src="https://flagcdn.com/w20/pt.png" alt="Português" className="w-5 h-4" />
              <span>Português</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/20 cursor-pointer p-2 rounded">
              <img src="https://flagcdn.com/w20/jp.png" alt="日本語" className="w-5 h-4" />
              <span>日本語 (Nihongo)</span>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default DesktopNav;
