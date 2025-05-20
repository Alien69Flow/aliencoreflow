import React from 'react';
import { X, Facebook, Instagram, Mail, Disc, Send, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-alien-space-dark border-t border-alien-gold/10 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/ALogo.png" 
                alt="AlienFlowSpaceDAO Logo" 
                className="h-9 w-auto object-contain" 
              />
              <span className="text-lg text-alien-gold font-nasalization font-bold">AlienFlowSpace</span>
            </div>
            <p className="text-gray-400 text-sm font-[Exo] leading-snug">
              Uniting diverse blockchain domains under a cosmic governance structure.
            </p>
            <div className="flex gap-3 pt-1 flex-wrap">
              <a href="https://x.com/alien69flow" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-gray-400 hover:text-alien-gold transition-colors"><X size={18} /></a>
              <a href="https://www.facebook.com/Alien69Flow" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-alien-gold transition-colors"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/alien69flow/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-alien-gold transition-colors"><Instagram size={18} /></a>
              <a href="https://discord.gg/alienflowspace" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-gray-400 hover:text-alien-gold transition-colors"><Disc size={18} /></a>
              <a href="mailto:info@alienflow.space" aria-label="Email" className="text-gray-400 hover:text-alien-gold transition-colors"><Mail size={18} /></a>
              <a href="https://t.me/AlienFlow" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-gray-400 hover:text-alien-gold transition-colors"><Send size={18} /></a>
              <a href="https://github.com/AlienFlowSpaceDAO" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-gray-400 hover:text-alien-gold transition-colors"><Github size={18} /></a>
              <a href="https://linkedin.com/in/alienflow" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-alien-gold transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className="text-alien-gold font-nasalization font-bold mb-3 text-base">Navigation</h4>
            <ul className="space-y-1 text-gray-400 font-[Exo] text-sm leading-tight">
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
            <h4 className="text-alien-gold font-nasalization font-bold mb-3 text-base">Legal</h4>
            <ul className="space-y-1 text-gray-400 font-[Exo] text-sm leading-tight">
              <li>
                <a href="https://alienflowspace.gitbook.io/DAO" target="_blank" rel="noopener noreferrer" className="hover:text-alien-green transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://alienflowspace.gitbook.io/DAO" target="_blank" rel="noopener noreferrer" className="hover:text-alien-green transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://alienflowspace.gitbook.io/DAO" target="_blank" rel="noopener noreferrer" className="hover:text-alien-green transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-alien-gold/10 mt-8 pt-4 text-center text-xs text-gray-500 font-[Exo]">
          © {new Date().getFullYear()} AlienFlowSpace DAO. All rights reserved across the multiverse.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
