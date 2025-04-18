
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { GraduationCap, Clover, Network } from 'lucide-react';

const DesktopNav = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {/* About */}
        <NavigationMenuItem>
          <Link to="/about">
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light`}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        {/* Alien Trip */}
        <NavigationMenuItem>
          <Link to="/alien-trip">
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light`}>
              AlienTrip
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        {/* Contact */}
        <NavigationMenuItem>
          <Link to="/contact">
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light`}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        {/* Explore Spaces with dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light">
            Explore Spaces
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute top-full left-0 bg-alien-space-dark/95 backdrop-blur-lg border border-alien-gold/20 p-2 rounded-lg min-w-[220px]">
            <ul className="grid w-full gap-1">
              <li className="flex items-center p-2 hover:bg-alien-space-light cursor-pointer rounded-md">
                <GraduationCap className="mr-2 h-4 w-4 text-alien-green" />
                <Link to="/academy" className="w-full text-alien-gold hover:text-alien-green">Academy</Link>
              </li>
              <li className="flex items-center p-2 hover:bg-alien-space-light cursor-pointer rounded-md">
                <Clover className="mr-2 h-4 w-4 text-alien-gold" />
                <Link to="/clubs" className="w-full text-alien-gold hover:text-alien-green">Clubs</Link>
              </li>
              <li className="flex items-center p-2 hover:bg-alien-space-light cursor-pointer rounded-md">
                <Network className="mr-2 h-4 w-4 text-alien-green" />
                <Link to="/conetworking" className="w-full text-alien-gold hover:text-alien-green">CoNetWorKing</Link>
              </li>
            </ul>
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
          <NavigationMenuContent className="absolute top-full left-0 bg-alien-space-dark/95 backdrop-blur-lg border border-alien-gold/20 p-2 rounded-lg w-[180px]">
            <ul className="grid w-full">
              <li className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green">English</li>
              <li className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green">Español</li>
              <li className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green">Deutsch</li>
              <li className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green">Français</li>
              <li className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md text-alien-gold hover:text-alien-green">中文</li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNav;
