import React from "react";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "src/hooks/use-mobile";
import { useScroll } from "src/hooks/use-scroll";
import Logo from "src/components/Header/Logo";
import DesktopNav from "src/components/Header/DesktopNav";
import MobileNav from "src/components/Header/MobileNav";
import ConnectButton from "src/components/Header/ConnectButton";
import PriceTicker from "src/components/PriceTicker";

const Header = () => {
  const isScrolled = useScroll();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();

  if (isMobile === undefined) {
    return <div className="bg-alien-space-dark h-16 w-full flex items-center justify-center">Cargando...</div>;
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-alien-space-dark/90 backdrop-blur-lg shadow-md" : "py-6 bg-transparent"
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
          <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} id="mobile-menu" />
        )}
      </AnimatePresence>
      <div className="absolute left-0 right-0 bottom-0 translate-y-full w-full bg-alien-space-dark/80">
        <PriceTicker />
      </div>
    </header>
  );
};

export default Header;
