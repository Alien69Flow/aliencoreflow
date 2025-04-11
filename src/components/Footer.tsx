
import React from 'react';
import { Twitter, Github, MessageSquare, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-alien-space-dark py-16 border-t border-alien-gold/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/public/lovable-uploads/a0f89be6-744a-4898-8955-b41b14629755.png" 
                alt="AlienFlowSpace Logo" 
                className="h-10" 
              />
              <h3 className="text-xl font-bold text-alien-gold">AlienFlowSpace</h3>
            </div>
            <p className="text-gray-400">
              Uniting diverse blockchain domains under a cosmic governance structure.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-alien-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-alien-gold transition-colors">
                <MessageSquare size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-alien-gold transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-alien-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Ecosystems */}
          <div>
            <h4 className="text-alien-gold font-semibold mb-4">Ecosystems</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-alien-green transition-colors">BioFi</a></li>
              <li><a href="#" className="hover:text-alien-green transition-colors">DeFi</a></li>
              <li><a href="#" className="hover:text-alien-green transition-colors">DePin</a></li>
              <li><a href="#" className="hover:text-alien-green transition-colors">DeSci</a></li>
              <li><a href="#" className="hover:text-alien-green transition-colors">SocialFi</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-alien-gold font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-alien-green transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-alien-green transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-alien-green transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-alien-green transition-colors">Forum</a></li>
              <li><a href="#" className="hover:text-alien-green transition-colors">Support</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-alien-gold font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-alien-green transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-alien-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-alien-green transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-alien-green transition-colors">Risk Disclosures</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-alien-gold/10 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} AlienFlowSpace DAO. All rights reserved across the multiverse.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
