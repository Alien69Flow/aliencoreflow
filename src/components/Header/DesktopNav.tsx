
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { GraduationCap, Clover, Network } from 'lucide-react';

const DesktopNav = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {/* About */}
        <NavigationMenuItem>
          <Link to="/about" className={navigationMenuTriggerStyle() + " text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light"}>
            About
          </Link>
        </NavigationMenuItem>
        
        {/* Alien Trip */}
        <NavigationMenuItem>
          <Link to="/alien-trip" className={navigationMenuTriggerStyle() + " text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light"}>
            AlienTrip
          </Link>
        </NavigationMenuItem>
        
        {/* Contact */}
        <NavigationMenuItem>
          <Link to="/contact" className={navigationMenuTriggerStyle() + " text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light"}>
            Contact
          </Link>
        </NavigationMenuItem>
        
        {/* Explore Spaces with dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light">
            Explore Spaces
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="bg-alien-space-dark/95 backdrop-blur-lg border border-alien-gold/20 p-4 rounded-lg min-w-[400px] grid grid-cols-1 gap-3 z-50">
              <div className="flex items-start p-2 hover:bg-alien-space-light cursor-pointer rounded-md">
                <GraduationCap className="mr-3 h-5 w-5 text-alien-green mt-1" />
                <div>
                  <Link to="/academy" className="w-full text-alien-gold hover:text-alien-green font-semibold">Academy</Link>
                  <p className="text-gray-400 text-sm">Unlock cosmic knowledge through comprehensive educational resources.</p>
                </div>
              </div>
              <div className="flex items-start p-2 hover:bg-alien-space-light cursor-pointer rounded-md">
                <Clover className="mr-3 h-5 w-5 text-alien-gold mt-1" />
                <div>
                  <Link to="/clubs" className="w-full text-alien-gold hover:text-alien-green font-semibold">Clubs</Link>
                  <p className="text-gray-400 text-sm">Join specialized communities focused on specific interests.</p>
                </div>
              </div>
              <div className="flex items-start p-2 hover:bg-alien-space-light cursor-pointer rounded-md">
                <Network className="mr-3 h-5 w-5 text-alien-green mt-1" />
                <div>
                  <Link to="/conetworking" className="w-full text-alien-gold hover:text-alien-green font-semibold">CoNetWorKing</Link>
                  <p className="text-gray-400 text-sm">Connect with like-minded individuals across the multiverse.</p>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        {/* Language Selector */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light">
            <img 
              src="/lovable-uploads/58877924-4e26-4862-938b-986102e0b5c0.png" 
              alt="Language Selection" 
              className="w-5 h-5 mr-1 rounded-full"
            />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="bg-alien-space-dark/95 backdrop-blur-lg border border-alien-gold/20 p-2 rounded-lg w-[180px] z-50">
              <ul className="grid w-full">
                <li className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-5 h-4 mr-2" />
                  English
                </li>
                <li className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/es.png" alt="Español" className="w-5 h-4 mr-2" />
                  Español
                </li>
                <li className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/de.png" alt="Deutsch" className="w-5 h-4 mr-2" />
                  Deutsch
                </li>
                <li className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/fr.png" alt="Français" className="w-5 h-4 mr-2" />
                  Français
                </li>
                <li className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green flex items-center">
                  <img src="https://flagcdn.com/w20/cn.png" alt="中文" className="w-5 h-4 mr-2" />
                  中文
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNav;
