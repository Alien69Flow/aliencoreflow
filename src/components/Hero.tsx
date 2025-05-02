
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScrollText, Globe, Orbit } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-16 overflow-hidden">
      {/* Fondo con efecto parallax */}
      <div className="absolute inset-0 bg-glow-radial opacity-70 z-0 parallax"></div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          {/* Logo animado */}
          <div className="flex flex-col justify-center items-center mb-8 relative">
            <motion.img 
              src="/lovable-uploads/ALogo.png" 
              alt="AlienFlowSpaceDAO Logo" 
              className="h-28 gold-glow z-20" 
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
          </div>
          
          {/* Título del Hero */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-glow text-center font-atomic"
          >
            <span className="text-alien-green">Δlieπ</span>
            <span className="text-alien-gold">FlΦw</span>
            <span className="text-alien-green"> $pac€</span>
            <span className="text-alien-gold"> DAO</span>
          </h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 font-[Exo] text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Access & Explore the DAO with Innovative Solutions, Unlock Energy Efficiency & Environmental Sustainability, Uniting: BioFi, DeFi, DePin, DeSci, IPFS, QFS, ReFi, RWA, SocialFi, and TradFi under one cosmic ecosystem.
          </motion.p>
        </motion.div>
        
        {/* Botones de llamada a la acción */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Botón About */}
          <Link to="/about">
            <Button 
              className="bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-atomic px-8 py-6 text-lg rounded-full transition-colors"
            >
              <Orbit className="mr-2 h-5 w-5" /> About Enter Portal
            </Button>
          </Link>

          {/* Botón AlienTrip */}
          <Link to="/alientrip">
            <Button 
              className="bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-atomic px-8 py-6 text-lg rounded-full transition-colors"
            >
              <ScrollText className="mr-2 h-5 w-5" /> Alientrip Manifesto
            </Button>
          </Link>

          {/* Botón Contact */}
          <Link to="/contact">
            <Button 
              className="bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-atomic px-8 py-6 text-lg rounded-full transition-colors"
            >
              <Globe className="mr-2 h-5 w-5" /> Contact & Join
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
