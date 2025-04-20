
import React from 'react';
import { Link } from 'react-router-dom';
import { Earth } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <Link to="/" className="flex items-center gap-2">
        <img 
          src="/lovable-uploads/a0f89be6-744a-4898-8955-b41b14629755.png" 
          alt="AlienFlowSpace Logo" 
          className="h-9" 
        />
        <span className="font-bold text-xl text-alien-gold font-[Atomic Age]">
          Alien<span className="text-alien-green">Flow</span>
        </span>
      </Link>
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
