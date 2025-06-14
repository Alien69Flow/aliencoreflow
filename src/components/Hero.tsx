
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScrollText, Globe, Orbit } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-16 overflow-hidden">
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex flex-col justify-center items-center mb-12 relative">
            <motion.img 
              src="/lovable-uploads/ALogo.png" 
              alt="AlienFlowSpaceDAO Logo" 
              className="h-24 md:h-28 gold-glow z-20" 
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
          
          <div className="star-wars-crawl mb-10">
            <div className="star-wars-content">
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-glow text-center font-nasalization leading-tight"
                style={{ 
                  fontFamily: "'Nasalization', sans-serif !important",
                  letterSpacing: '0.1em'
                }}
              >
                <span className="text-alien-green">Δlieπ</span>
                <span className="text-alien-gold">FlΦw</span>
                <span className="text-alien-green"> $pac€</span>
                <span className="text-alien-gold"> DAO</span>
              </h1>
            </div>
          </div>
          
          <div className="star-wars-crawl mb-10">
            <div className="star-wars-content">
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto font-[Exo] text-center leading-relaxed"
                style={{ letterSpacing: '0.025em' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Access & Explore the DAO with Innovative Solutions, Unlock Energy Efficiency & Environmental Sustainability, Uniting: BioFi, DeFi, DePin, DeSci, IPFS, QFS, ReFi, RWA, SocialFi, and TradFi under one cosmic ecosystem.
              </motion.p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link to="/about">
            <Button 
              className="bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-nasalization px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-colors"
            >
              <Orbit className="mr-2 h-4 w-4" /> About Enter Portal
            </Button>
          </Link>
 
          <Link to="/alien-trip">
            <Button 
              className="bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-nasalization px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-colors"
            >
              <ScrollText className="mr-2 h-4 w-4" /> Alientrip Manifesto
            </Button>
          </Link>

          <Link to="/contact">
            <Button 
              className="bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-nasalization px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base rounded-full transition-colors"
            >
              <Globe className="mr-2 h-4 w-4" /> Contact & Join
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
