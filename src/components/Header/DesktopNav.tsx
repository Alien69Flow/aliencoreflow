
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
        
        {/* Ecosystem */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light">
            Ecosystem
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-alien-space-dark/95 backdrop-blur-lg border border-alien-gold/20 p-2 rounded-lg w-[400px]">
            <ul className="grid gap-3 p-4 md:grid-cols-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/alien-trip" className="flex flex-col h-full p-4 rounded-md hover:bg-alien-space-light">
                    <div className="text-alien-gold text-lg font-semibold">Alien Trip</div>
                    <div className="text-gray-400 text-sm">Experience our decentralized metaverse journey</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a href="https://alienflowspace.gitbook.io/DAO" target="_blank" rel="noopener noreferrer" className="flex flex-col h-full p-4 rounded-md hover:bg-alien-space-light">
                    <div className="text-alien-gold text-lg font-semibold">Manifesto</div>
                    <div className="text-gray-400 text-sm">Read our core mission & values</div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        {/* Communities */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light">
            Communities
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-alien-space-dark/95 backdrop-blur-lg border border-alien-gold/20 p-2 rounded-lg w-[400px]">
            <ul className="grid gap-3 p-4 md:grid-cols-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/academy" className="flex flex-col h-full p-4 rounded-md hover:bg-alien-space-light">
                    <div className="text-alien-gold text-lg font-semibold">Academy</div>
                    <div className="text-gray-400 text-sm">Learn through comprehensive resources</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/clubs" className="flex flex-col h-full p-4 rounded-md hover:bg-alien-space-light">
                    <div className="text-alien-gold text-lg font-semibold">Clubs</div>
                    <div className="text-gray-400 text-sm">Join specialized communities</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/conetworking" className="flex flex-col h-full p-4 rounded-md hover:bg-alien-space-light">
                    <div className="text-alien-gold text-lg font-semibold">CoNetWorKing</div>
                    <div className="text-gray-400 text-sm">Connect with like-minded individuals</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        {/* Contact */}
        <NavigationMenuItem>
          <Link to="/contact">
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light`}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        {/* Language Selector with Earth Icon */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-light">
            <img src="/lovable-uploads/e2d45b36-c4c1-4b45-953d-5376a5f5b6cc.png" alt="Translation" className="w-5 h-5 mr-1" />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-alien-space-dark/95 backdrop-blur-lg border border-alien-gold/20 p-2 rounded-lg w-[180px]">
            <ul className="grid w-full">
              <li className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md">English</li>
              <li className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md">Español</li>
              <li className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md">Deutsch</li>
              <li className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md">Français</li>
              <li className="p-2 hover:bg-alien-space-light cursor-pointer rounded-md">中文</li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNav;
