import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Logo principal */}
      <Link to="/" className="flex items-center gap-2">
        <img 
          src="/lovable-uploads/ALogo.png" 
          alt="AlienFlowSpaceDAO Logo" 
          className="h-9" 
        />
        <span className="font-bold text-xl">
          <span className="text-alien-green">Δlieπ</span>
          <span className="text-alien-gold">FlΦw</span>
          <span className="text-alien-green">$pac€</span>
          <span className="text-alien-gold">DAO</span>
        </span>
      </Link>

      {/* Icono del planeta */}
      <Link to="/">
        <img 
          src="/lovable-uploads/79900e3c-f502-40b8-a628-e021acfcdb40.png" 
          alt="Earth" 
          className="h-8 w-8 rounded-full hover:opacity-80 transition-opacity"
        />
      </Link>
    </div>
  );
};

export default Logo;
