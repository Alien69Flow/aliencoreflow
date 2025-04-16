
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScrollText, Globe, Orbit, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-16 overflow-hidden">
      {/* Background effect with parallax */}
      <div className="absolute inset-0 bg-glow-radial opacity-70 z-0 parallax"></div>
      
      {/* Hero Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {/* Logo and Wallet images floating separately */}
          <div className="flex flex-col justify-center items-center mb-16 relative">
            <motion.img 
              src="/lovable-uploads/a0f89be6-744a-4898-8955-b41b14629755.png" 
              alt="AlienFlowSpace Logo" 
              className="h-48 gold-glow z-20"
              initial={{ scale: 0.8 }}
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Wallet image floating below logo with proper distance */}
            <motion.img 
              src="/lovable-uploads/e2d45b36-c4c1-4b45-953d-5376a5f5b6cc.png" 
              alt="Wallet" 
              className="h-32 rounded-full mt-8 z-10"
              initial={{ scale: 0.9 }}
              animate={{ 
                scale: [1, 1.08, 1],
                rotate: [0, -3, 0],
                y: [0, 8, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            />
          </div>
          
          {/* Title and subtitle with Star Wars effect */}
          <div className="star-wars-crawl mt-20">
            <div className="star-wars-content">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-alien-gold text-glow font-[Atomic Age]">
                AlienFlow<span className="text-alien-green">Space</span> DAO
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 font-[Exo]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Access & Explore the DAO with Innovative Solutions, Unlock Energy Efficiency & Environmental Sustainability, Uniting: BioFi, DeFi, DePin, DeSci, IPFS, QFS, ReFi, RWA, SocialFi, and TradFi under one cosmic ecosystem.
              </motion.p>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button className="bg-alien-green hover:bg-alien-green-light text-alien-space-dark font-medium px-8 py-6 text-lg rounded-full font-[Exo]">
            <Orbit className="mr-2 h-5 w-5" /> Enter Portal
          </Button>
          <Button variant="outline" className="border-alien-green text-alien-green hover:text-alien-green-light hover:bg-alien-space-light px-8 py-6 text-lg rounded-full font-[Exo]">
            <ScrollText className="mr-2 h-5 w-5" /> Read Manifesto
          </Button>
          <Button variant="ghost" className="text-alien-gold-light hover:text-alien-gold hover:bg-alien-space-light px-8 py-6 text-lg rounded-full font-[Exo]">
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
