
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ConnectButton from '@/components/Header/ConnectButton';

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ isMenuOpen, setIsMenuOpen }: MobileNavProps) => {
  const location = useLocation();
  
  const closeMenu = () => setIsMenuOpen(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academy', path: '/academy' },
    { name: 'Alien Trip', path: '/alien-trip' },
    { name: 'Clubs', path: '/clubs' },
    { name: 'CoNetWorKing', path: '/conetworking' },
    { name: 'Contact', path: '/contact' },
  ];
  
  // Menu animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };
  
  return (
    <motion.div 
      className="absolute top-full left-0 w-full bg-black bg-opacity-95 z-50 shadow-lg pt-4 pb-6"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
    >
      <div className="container mx-auto px-4">
        <motion.ul className="space-y-4">
          {navLinks.map((link, index) => (
            <motion.li key={index} variants={itemVariants}>
              <Link 
                to={link.path} 
                onClick={closeMenu}
                className={`block py-3 px-2 rounded-md text-center text-xl font-nasalization ${
                  location.pathname === link.path
                    ? 'text-alien-gold bg-alien-space-light'
                    : 'text-gray-300 hover:text-alien-gold hover:bg-alien-space-light/30'
                } transition-all duration-300`}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div 
          className="mt-6 flex justify-center"
          variants={itemVariants}
        >
          <ConnectButton />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MobileNav;
