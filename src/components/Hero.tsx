
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScrollText, Globe, Orbit, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-16 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-glow-radial opacity-70 z-0"></div>
      
      {/* Hero Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex justify-center mb-8">
            <motion.img 
              src="/public/lovable-uploads/a0f89be6-744a-4898-8955-b41b14629755.png" 
              alt="AlienFlowSpace Logo" 
              className="h-48 gold-glow animate-float"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-alien-gold text-glow">
            AlienFlow<span className="text-alien-green">Space</span> DAO
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Uniting BioFi, DeFi, DePin, DeSci, IPFS, QFS, ReFi, RWA, SocialFi, and TradFi 
            under one cosmic ecosystem.
          </motion.p>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-medium px-8 py-6 text-lg rounded-full">
            <Orbit className="mr-2 h-5 w-5" /> Enter Portal
          </Button>
          <Button variant="outline" className="border-alien-green text-alien-green hover:text-alien-green-light hover:bg-alien-space-light px-8 py-6 text-lg rounded-full">
            <ScrollText className="mr-2 h-5 w-5" /> Read Manifesto
          </Button>
          <Button variant="ghost" className="text-alien-gold-light hover:text-alien-gold hover:bg-alien-space-light px-8 py-6 text-lg rounded-full">
            <Globe className="mr-2 h-5 w-5" /> Join Community
          </Button>
        </motion.div>
        
        {/* Floating elements */}
        <motion.div 
          className="absolute -right-20 top-20 opacity-20 hidden lg:block"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
          }}
        >
          <Sparkles size={180} className="text-alien-green" />
        </motion.div>
        
        <motion.div 
          className="absolute -left-10 bottom-40 opacity-20 hidden lg:block"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            delay: 1,
          }}
        >
          <Orbit size={140} className="text-alien-gold" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
