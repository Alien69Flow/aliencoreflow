import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green">
              Network
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-alien-space-dark/95 backdrop-blur-lg border border-alien-gold/10 p-4 min-w-[200px] z-50">
              <ul className="space-y-2">
                <li>
                  <Link to="/ecosystem" className="block px-4 py-2 text-alien-gold hover:text-alien-green transition-colors">
                    Ecosystem
                  </Link>
                </li>
                <li>
                  <Link to="/alnet" className="block px-4 py-2 text-alien-gold hover:text-alien-green transition-colors">
                    ALNet
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green">
              Learn
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-alien-space-dark/95 backdrop-blur-lg border border-alien-gold/10 p-4 min-w-[200px] z-50">
              <ul className="space-y-2">
                <li>
                  <Link to="/academy" className="block px-4 py-2 text-alien-gold hover:text-alien-green transition-colors">
                    Academy
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="block px-4 py-2 text-alien-gold hover:text-alien-green transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-alien-space-dark/95 backdrop-blur-lg border border-alien-gold/10 p-4 min-w-[200px] z-50">
              <ul className="space-y-2">
                <li>
                  <Link to="/spaces" className="block px-4 py-2 text-alien-gold hover:text-alien-green transition-colors">
                    Spaces
                  </Link>
                </li>
                <li>
                  <Link to="/trip" className="block px-4 py-2 text-alien-gold hover:text-alien-green transition-colors">
                    AlienTrip
                  </Link>
                </li>
                <li>
                  <Link to="/conetworking" className="block px-4 py-2 text-alien-gold hover:text-alien-green transition-colors">
                    CoNetWorKing
                  </Link>
                </li>
                <li>
                  <Link to="/incubation" className="block px-4 py-2 text-alien-gold hover:text-alien-green transition-colors">
                    Incubation
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green">
              DAO
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-alien-space-dark/95 backdrop-blur-lg border border-alien-gold/10 p-4 min-w-[200px] z-50">
              <ul className="space-y-2">
                <li>
                  <Link to="/governance" className="block px-4 py-2 text-alien-gold hover:text-alien-green transition-colors">
                    Governance
                  </Link>
                </li>
                <li>
                  <Link to="/tokenomics" className="block px-4 py-2 text-alien-gold hover:text-alien-green transition-colors">
                    Tokenomics
                  </Link>
                </li>
                <li>
                  <Link to="/treasury" className="block px-4 py-2 text-alien-gold hover:text-alien-green transition-colors">
                    Treasury
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/contact" className="text-alien-gold hover:text-alien-green">
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNav;
