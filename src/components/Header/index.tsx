
import React from 'react';
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useScroll } from "@/hooks/use-scroll";
import Logo from "@/components/Header/Logo";
import DesktopNav from "@/components/Header/DesktopNav";
import MobileNav from "@/components/Header/MobileNav";
import ConnectButton from "@/components/Header/ConnectButton";
import PriceTicker from "@/components/PriceTicker";

const Header = () => {
  const isScrolled = useScroll();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();

  if (isMobile === undefined) {
    return <div className="bg-alien-space-dark h-16 w-full flex items-center justify-center font-atomic-force">Cargando...</div>;
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-transparent shadow-md backdrop-blur-md" : "py-3 bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-4">
          {!isMobile && <ConnectButton />}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-alien-gold focus:outline-none focus:ring-2 focus:ring-alien-gold"
              aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              data-state={isMenuOpen ? "open" : "closed"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        )}
      </AnimatePresence>
      <div className="w-full mt-1 border-t border-alien-gold/20 border-b border-alien-gold/20">
        <PriceTicker />
      </div>
    </header>
  );
};

export default Header;
