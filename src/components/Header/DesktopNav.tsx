
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

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="space-x-4">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/" className="text-alien-gold hover:text-alien-green px-2 py-2">
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/about" className="text-alien-gold hover:text-alien-green px-2 py-2">
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/alien-trip" className="text-alien-gold hover:text-alien-green px-2 py-2">
                AlienTrip
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/contact" className="text-alien-gold hover:text-alien-green px-2 py-2">
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light/30 px-2 py-2">
              Explore Spaces
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute top-full left-0 bg-alien-space-dark border border-alien-gold/20 p-4 min-w-[320px] rounded-md shadow-lg z-[100]">
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/academy" 
                    className="flex items-start p-2 rounded-lg hover:bg-alien-space-light/20 group"
                  >
                    <div className="flex-1">
                      <h3 className="text-alien-gold group-hover:text-alien-green font-semibold mb-1">Academy</h3>
                      <p className="text-sm text-gray-400">Unlock cosmic knowledge through educational resources</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/clubs" 
                    className="flex items-start p-2 rounded-lg hover:bg-alien-space-light/20 group"
                  >
                    <div className="flex-1">
                      <h3 className="text-alien-gold group-hover:text-alien-green font-semibold mb-1">Clubs</h3>
                      <p className="text-sm text-gray-400">Join specialized communities focused on interests</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/conetworking" 
                    className="flex items-start p-2 rounded-lg hover:bg-alien-space-light/20 group"
                  >
                    <div className="flex-1">
                      <h3 className="text-alien-gold group-hover:text-alien-green font-semibold mb-1">CoNetWorKing</h3>
                      <p className="text-sm text-gray-400">Connect with like-minded individuals across the multiverse</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Language Selector */}
      <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-alien-gold hover:text-alien-green focus:outline-none">
            <Globe className="h-5 w-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="bg-alien-space-dark border border-alien-gold/20 p-2 mt-2 rounded-md w-40 shadow-lg z-[100]"
            sideOffset={5}
            align="end"
          >
            <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/20 cursor-pointer p-2">
              <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-5 h-4" />
              <span>English</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/20 cursor-pointer p-2">
              <img src="https://flagcdn.com/w20/es.png" alt="Español" className="w-5 h-4" />
              <span>Español</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/20 cursor-pointer p-2">
              <img src="https://flagcdn.com/w20/fr.png" alt="Français" className="w-5 h-4" />
              <span>Français</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/20 cursor-pointer p-2">
              <img src="https://flagcdn.com/w20/cn.png" alt="汉语" className="w-5 h-4" />
              <span>汉语 (Hànyǔ)</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/20 cursor-pointer p-2">
              <img src="https://flagcdn.com/w20/in.png" alt="हिन्दी" className="w-5 h-4" />
              <span>हिन्दी (Hindī)</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/20 cursor-pointer p-2">
              <img src="https://flagcdn.com/w20/pt.png" alt="Português" className="w-5 h-4" />
              <span>Português</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-light/20 cursor-pointer p-2">
              <img src="https://flagcdn.com/w20/jp.png" alt="日本語" className="w-5 h-4" />
              <span>日本語 (Nihongo)</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default DesktopNav;
