
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const DesktopNav = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academy', path: '/academy' },
    { name: 'Alien Trip', path: '/alien-trip' },
    { name: 'Clubs', path: '/clubs' },
    { name: 'CoNetWorKing', path: '/conetworking' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
      {navLinks.map((link, index) => {
        const isActive = location.pathname === link.path;
        
        return (
          <Link 
            key={index} 
            to={link.path}
            className={`relative px-3 py-2 rounded-lg transition-all duration-300 font-nasalization ${
              isActive 
                ? 'text-alien-gold' 
                : 'text-gray-300 hover:text-alien-gold'
            }`}
          >
            {link.name}
            {isActive && (
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 w-full bg-alien-gold"
                layoutId="activeNav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default DesktopNav;
