
import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, Landmark, Coins } from 'lucide-react';

const FinancialFreedomSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 text-alien-gold text-glow font-[Atomic Age]">
            Financial Freedom
          </h2>
          
          <div className="flex justify-center mb-8">
            <Bitcoin className="text-alien-gold h-16 w-16 mr-4" />
            <Landmark className="text-alien-green h-16 w-16 mx-4" />
            <Coins className="text-alien-gold h-16 w-16 ml-4" />
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl max-w-5xl mx-auto text-gray-300 font-[Exo] leading-relaxed"
          >
            Any Individual or Professional can Understand the Advantage of Digital Money · 
            Impartial Money that does not discriminate, Decentralized Currencies, 
            Stable without Volatility, As Well As Safe Reserves of Values. 
            Access with Crypto, NFTs, Tokens to Order & Generate All Types of
            Experiences, Products & Services According to your Demands Instantly...
          </motion.p>
        </motion.div>
        
        {/* ABTC Token Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="card-border p-8 max-w-3xl mx-auto text-center"
        >
          <Bitcoin className="text-alien-gold h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3 text-alien-gold font-[Atomic Age]">A₿TC</h3>
          <p className="text-gray-300 mb-4 font-[Exo]">
            Alien ₿iTCoin cryptoken serves as collateral and derivative of Bitcoin, providing stability and growth potential in the cosmic ecosystem.
          </p>
          <div className="inline-block bg-alien-space-dark px-4 py-2 rounded-full text-alien-green border border-alien-green/30">
            Bitcoin-backed • Interoperable • Stable
          </div>
        </motion.div>
      </div>
      
      {/* Eliminamos el elemento verde inclinado del fondo */}
    </section>
  );
};

export default FinancialFreedomSection;
