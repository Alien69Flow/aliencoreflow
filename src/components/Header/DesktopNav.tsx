
import React from 'react';
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
    <nav className="hidden md:flex items-center gap-8">
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-dark/50">
              Network
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-alien-space-dark border border-alien-gold/10 p-4 min-w-[200px] z-[100]">
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
            <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-dark/50">
              Learn
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-alien-space-dark border border-alien-gold/10 p-4 min-w-[200px] z-[100]">
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
            <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-dark/50">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-alien-space-dark border border-alien-gold/10 p-4 min-w-[200px] z-[100]">
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
            <NavigationMenuTrigger className="text-alien-gold hover:text-alien-green bg-transparent hover:bg-alien-space-dark/50">
              DAO
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-alien-space-dark border border-alien-gold/10 p-4 min-w-[200px] z-[100]">
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

      {/* Language Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 text-alien-gold hover:text-alien-green focus:outline-none">
          <Globe className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-alien-space-dark border border-alien-gold/10 p-2 z-[100]">
          <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-dark/50 cursor-pointer">
            <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-5 h-4" />
            <span>English</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-dark/50 cursor-pointer">
            <img src="https://flagcdn.com/w20/es.png" alt="Español" className="w-5 h-4" />
            <span>Español</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-dark/50 cursor-pointer">
            <img src="https://flagcdn.com/w20/de.png" alt="Deutsch" className="w-5 h-4" />
            <span>Deutsch</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-dark/50 cursor-pointer">
            <img src="https://flagcdn.com/w20/fr.png" alt="Français" className="w-5 h-4" />
            <span>Français</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-alien-gold hover:text-alien-green hover:bg-alien-space-dark/50 cursor-pointer">
            <img src="https://flagcdn.com/w20/cn.png" alt="中文" className="w-5 h-4" />
            <span>中文</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default DesktopNav;
