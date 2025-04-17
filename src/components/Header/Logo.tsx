
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/">
        <img 
          src="/lovable-uploads/a0f89be6-744a-4898-8955-b41b14629755.png" 
          alt="AlienFlowSpace Logo" 
          className="h-9 mr-2" 
        />
      </Link>
      <Link to="/">
        <span className="font-bold text-xl text-alien-gold font-[Atomic Age]">Alien<span className="text-alien-green">Flow</span></span>
      </Link>
    </div>
  );
};

export default Logo;
