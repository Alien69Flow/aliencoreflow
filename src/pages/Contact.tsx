
import React from 'react';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-alien-space">
      <StarBackground />
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-xl text-gray-300">
                Have questions or want to join the AlienFlowSpace DAO? Reach out through any of these cosmic channels:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-alien-space-dark/50 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/70 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-alien-space-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold">Email</h3>
                    <p className="text-gray-300">contact@alienflowspace.dao</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/50 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/70 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-alien-space-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold">Discord</h3>
                    <p className="text-gray-300">discord.gg/alienflowspace</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/50 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/70 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-alien-space-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold">Twitter</h3>
                    <p className="text-gray-300">@AlienFlowSpace</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-alien-space-dark/50 p-6 rounded-lg backdrop-blur-md">
              <h2 className="text-2xl font-semibold text-alien-green mb-4">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-2 bg-alien-space-light rounded-md border border-gray-600 text-gray-200 focus:border-alien-gold focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-2 bg-alien-space-light rounded-md border border-gray-600 text-gray-200 focus:border-alien-gold focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1" htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-alien-space-light rounded-md border border-gray-600 text-gray-200 focus:border-alien-gold focus:outline-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark">
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
