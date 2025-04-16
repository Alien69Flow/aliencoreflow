
import React from 'react';
import { X, Facebook, MessageSquare, Instagram, Mail, Disc, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-alien-space-dark py-16 border-t border-alien-gold/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/a0f89be6-744a-4898-8955-b41b14629755.png" 
                alt="AlienFlowSpace Logo" 
                className="h-10 w-auto object-contain" 
              />
              <h3 className="text-xl font-bold text-alien-gold font-[Atomic Age, Star Wars]">AlienFlowSpace</h3>
            </div>
            <p className="text-gray-400 font-[Exo]">
              Uniting diverse blockchain domains under a cosmic governance structure.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-alien-gold transition-colors">
                <X size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-alien-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-alien-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-alien-gold transition-colors">
                <Disc size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-alien-gold transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-alien-gold transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className="text-alien-gold font-semibold mb-4 font-[Atomic Age, Star Wars]">Navigation</h4>
            <ul className="space-y-3 text-gray-400 font-[Exo]">
              <li><Link to="/" className="hover:text-alien-green transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-alien-green transition-colors">About</Link></li>
              <li><Link to="/alien-trip" className="hover:text-alien-green transition-colors">AlienTrip</Link></li>
              <li><Link to="/contact" className="hover:text-alien-green transition-colors">Contact</Link></li>
              <li><Link to="/academy" className="hover:text-alien-green transition-colors">Academy</Link></li>
              <li><Link to="/clubs" className="hover:text-alien-green transition-colors">Clubs</Link></li>
              <li><Link to="/conetworking" className="hover:text-alien-green transition-colors">CoNetWorKing</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-alien-gold font-semibold mb-4 font-[Atomic Age, Star Wars]">Legal</h4>
            <ul className="space-y-3 text-gray-400 font-[Exo]">
              <li><a href="#" className="hover:text-alien-green transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-alien-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-alien-green transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-alien-gold/10 mt-12 pt-8 text-center text-gray-500 font-[Exo]">
          <p>© {new Date().getFullYear()} AlienFlowSpace DAO. All rights reserved across the multiverse.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
