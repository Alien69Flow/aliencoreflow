
import React from 'react';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Send, Mail, MessageSquare, X, Facebook, Instagram, Disc } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-alien-space">
      <StarBackground />
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-8 font-[Atomic Age, Star Wars]">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 font-[Exo]">
                Have questions or want to join the AlienFlowSpace DAO? Reach out through any of these cosmic channels:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-alien-space-dark/50 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/70 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">Email</h3>
                    <a href="mailto:contact@alienflowspace.dao" className="text-gray-300 font-[Exo] hover:text-alien-green">contact@alienflowspace.dao</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/50 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/70 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Disc className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">Discord</h3>
                    <a href="https://discord.gg/alienflowspace" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">discord.gg/alienflowspace</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/50 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/70 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <X className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">X</h3>
                    <a href="https://twitter.com/AlienFlowSpace" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">@AlienFlowSpace</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/50 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/70 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Facebook className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">Facebook</h3>
                    <a href="https://facebook.com/alienflowspace" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">fb.com/alienflowspace</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/50 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/70 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Instagram className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">Instagram</h3>
                    <a href="https://instagram.com/alienflowspace" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">@alienflowspace</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/50 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/70 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Send className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">Telegram</h3>
                    <a href="https://t.me/alienflowspace" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">t.me/alienflowspace</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-alien-space-dark/50 p-6 rounded-lg backdrop-blur-md">
              <h2 className="text-2xl font-semibold text-alien-green mb-4 font-[Atomic Age, Star Wars]">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1 font-[Exo]" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-2 bg-alien-space-light rounded-md border border-gray-600 text-gray-200 focus:border-alien-gold focus:outline-none font-[Exo]"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1 font-[Exo]" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-2 bg-alien-space-light rounded-md border border-gray-600 text-gray-200 focus:border-alien-gold focus:outline-none font-[Exo]"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1 font-[Exo]" htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-alien-space-light rounded-md border border-gray-600 text-gray-200 focus:border-alien-gold focus:outline-none font-[Exo]"
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
      <Footer />
    </div>
  );
};

export default Contact;
