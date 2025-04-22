import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScrollText, Globe, Orbit } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-16 overflow-hidden">
      {/* Background effect with parallax */}
      <div className="absolute inset-0 bg-glow-radial opacity-70 z-0 parallax"></div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="mb-6">
          {/* Logo */}
          <div className="flex flex-col justify-center items-center mb-8 relative">
            <motion.img src="/lovable-uploads/a0f89be6-744a-4898-8955-b41b14629755.png" alt="AlienFlowSpace Logo" initial={{
            scale: 0.8
          }} animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0],
            y: [0, -10, 0]
          }} transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }} className="h-28 gold-glow z-20 object-cover" />
          </div>
          
          {/* Title and Description */}
          <div className="star-wars-crawl mt-6">
            <div className="star-wars-content">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-alien-gold text-glow font-[Atomic Age]">
                AlienFlow<span className="text-alien-green">Space</span> DAO
              </h1>
              
              <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.3,
              duration: 0.8
            }} className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-[Exo] md:text-xl">
                Access & Explore the DAO with Innovative Solutions, Unlock Energy Efficiency & Environmental Sustainability, Uniting: BioFi, DeFi, DePin, DeSci, IPFS, QFS, ReFi, RWA, SocialFi, and TradFi under one cosmic ecosystem.
              </motion.p>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mt-8" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.5,
        duration: 0.8
      }}>
          <Button className="bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-[Exo] px-8 py-6 text-lg rounded-full transition-colors font-extrabold">
            <Orbit className="mr-2 h-5 w-5" /> Enter Portal
          </Button>
          
          <Link to="/contact">
            <Button className="bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-[Exo] px-8 py-6 text-lg rounded-full transition-colors font-extrabold">
              <Globe className="mr-2 h-5 w-5" /> Join Community
            </Button>
          </Link>
          
          <a href="https://alienflowspace.gitbook.io/DAO" target="_blank" rel="noopener noreferrer">
            <Button className="bg-alien-green text-alien-gold hover:bg-alien-gold hover:text-alien-green font-[Exo] px-8 py-6 text-lg rounded-full transition-colors font-extrabold">
              <ScrollText className="mr-2 h-5 w-5" /> Read Manifesto
            </Button>
          </a>
        </motion.div>
      </div>
    </div>;
};
export default Hero;