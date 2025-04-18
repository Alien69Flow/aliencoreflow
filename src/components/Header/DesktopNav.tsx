
import React from 'react';
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
import { Globe } from 'lucide-react';

const DesktopNav = () => {
  return (
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
          <NavigationMenuContent className="bg-alien-space-dark/95 backdrop-blur-lg border border-alien-gold/20 rounded-lg w-[400px]">
            <ul className="grid gap-3 p-4 w-full grid-cols-1">
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
          <NavigationMenuContent className="bg-alien-space-dark/95 backdrop-blur-lg border border-alien-gold/20 p-2 rounded-lg w-[180px]">
            <ul className="grid w-full">
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
  );
};

export default DesktopNav;
