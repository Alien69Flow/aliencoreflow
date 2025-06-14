
import React from 'react';
import StarBackground from '@/components/StarBackground';
import { Button } from '@/components/ui/button';
import { Send, Mail, MessageSquare, X, Facebook, Instagram, Disc, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="relative flex flex-col flex-1">
      {/* First universe background layer */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('/lovable-uploads/74c23ca3-be80-46d6-9817-d6a5cde81736.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6,
          zIndex: -30
        }}
      />
      
      {/* Second galaxy background layer */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('/lovable-uploads/78a366c8-b4ad-4ae7-8358-3aae322b228f.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4,
          zIndex: -25,
          mixBlendMode: 'screen'
        }}
      />
      
      {/* Star background effect */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -20 }}>
        <StarBackground />
      </div>

      <main className="relative z-10 flex-grow container mx-auto px-4 pt-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-8 font-nasalization text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 font-[Exo]">
                Have questions or want to join the AlienFlowSpace DAO? Reach out through any of these cosmic channels:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">Email</h3>
                    <a href="mailto:info@alienflow.space" className="text-gray-300 font-[Exo] hover:text-alien-green">info@alienflow.space</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Disc className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">Discord</h3>
                    <a href="https://discord.gg/alienflowspace" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">discord.gg/alienflowspace</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <X className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">X</h3>
                    <a href="https://x.com/alien69flow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">@alien69flow</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Facebook className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">Facebook</h3>
                    <a href="https://www.facebook.com/Alien69Flow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">facebook.com/Alien69Flow</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Instagram className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">Instagram</h3>
                    <a href="https://www.instagram.com/alien69flow/" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">@alien69flow</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Send className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">Telegram</h3>
                    <a href="https://T.Me/AlienFlow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">t.me/AlienFlow</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Github className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">GitHub</h3>
                    <a href="https://github.com/AlienFlowSpaceDAO" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">github.com/AlienFlowSpaceDAO</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Linkedin className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">LinkedIn</h3>
                    <a href="https://linkedin.com/in/alienflow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">linkedin.com/in/alienflow</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-alien-space-dark/80 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
              <h2 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1 font-[Exo]" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-2 bg-alien-space-light/50 rounded-md border border-gray-600 text-gray-200 focus:border-alien-gold focus:outline-none font-[Exo]"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1 font-[Exo]" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-2 bg-alien-space-light/50 rounded-md border border-gray-600 text-gray-200 focus:border-alien-gold focus:outline-none font-[Exo]"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1 font-[Exo]" htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-alien-space-light/50 rounded-md border border-gray-600 text-gray-200 focus:border-alien-gold focus:outline-none font-[Exo]"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-alien-green hover:bg-alien-green-light text-alien-space-dark font-[Exo]">
                  <Send size={18} className="mr-2" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
