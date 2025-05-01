import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "../components/Header/Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ConnectButton from "./ConnectButton";
import PriceTicker from "../PriceTicker";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Asegura que `window` esté disponible
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isMobile === undefined) {
    // Renderiza un loader mientras se determina el estado de `isMobile`
    return <div className="bg-alien-space-dark h-16 w-full" />;
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-alien-space-dark/90 backdrop-blur-lg shadow-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Logo */}
        <Logo />

        {/* Navegación de Escritorio */}
        <DesktopNav />

        {/* Botón de Conexión y Menú Móvil */}
        <div className="flex items-center gap-4">
          {!isMobile && <ConnectButton />}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-alien-gold focus:outline-none focus:ring-2 focus:ring-alien-gold"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Menú Móvil */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        )}
      </AnimatePresence>

      {/* Ticker de precios */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-full w-full bg-alien-space-dark/80">
        <PriceTicker />
      </div>
    </header>
  );
};

export default Header;
