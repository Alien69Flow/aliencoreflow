
import React from 'react';
import { X, Facebook, Instagram, Mail, Disc, Send, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-alien-space-dark border-t border-alien-gold/20 py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and description */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/ALogo.png" 
                alt="AlienFlowSpaceDAO Logo" 
                className="h-10 w-auto object-contain gold-glow" 
              />
              <span className="text-xl font-bold text-alien-gold font-nasalization">
                AlienFlowSpace DAO
              </span>
            </div>
            <p className="text-gray-300 text-sm lg:text-base font-[Exo] leading-relaxed max-w-md">
              Uniting diverse blockchain domains under a cosmic governance structure. 
              Building the future of decentralized finance and sustainable technology across the multiverse.
            </p>
            <div className="flex gap-3 pt-2 flex-wrap">
              {[
                { href: "https://x.com/alien69flow", icon: X, label: "X (Twitter)" },
                { href: "https://www.facebook.com/Alien69Flow", icon: Facebook, label: "Facebook" },
                { href: "https://www.instagram.com/alien69flow/", icon: Instagram, label: "Instagram" },
                { href: "https://discord.gg/alienflowspace", icon: Disc, label: "Discord" },
                { href: "mailto:info@alienflow.space", icon: Mail, label: "Email" },
                { href: "https://t.me/AlienFlow", icon: Send, label: "Telegram" },
                { href: "https://github.com/AlienFlowSpaceDAO", icon: Github, label: "Github" },
                { href: "https://linkedin.com/in/alienflow", icon: Linkedin, label: "LinkedIn" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="p-2 text-gray-400 hover:text-alien-gold transition-all duration-300 hover:scale-110 hover:bg-alien-space-light/20 rounded-lg"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className="text-alien-gold font-nasalization font-bold mb-4 text-lg">Navigation</h4>
            <ul className="space-y-3 text-gray-300 font-[Exo]">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/alien-trip", label: "AlienTrip" },
                { to: "/contact", label: "Contact" },
                { to: "/academy", label: "Academy" },
                { to: "/clubs", label: "Clubs" },
                { to: "/conetworking", label: "CoNetWorKing" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="hover:text-alien-green transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal & Resources */}
          <div>
            <h4 className="text-alien-gold font-nasalization font-bold mb-4 text-lg">Resources</h4>
            <ul className="space-y-3 text-gray-300 font-[Exo]">
              {[
                { href: "https://alienflowspace.gitbook.io/DAO", label: "Documentation" },
                { href: "https://alienflowspace.gitbook.io/DAO", label: "Terms of Service" },
                { href: "https://alienflowspace.gitbook.io/DAO", label: "Privacy Policy" },
                { href: "https://alienflowspace.gitbook.io/DAO", label: "Cookie Policy" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-alien-green transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-alien-gold/20 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-xs lg:text-sm text-gray-500 font-[Exo] text-center lg:text-left">
              © {new Date().getFullYear()} AlienFlowSpace DAO. All rights reserved across the multiverse.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Made with</span>
              <span className="text-alien-gold">💚</span>
              <span>for the cosmic community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
