
import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, Landmark, Coins } from 'lucide-react';
import AnimatedText from './AnimatedText';

const FinancialFreedomSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 text-alien-gold text-glow font-atomic-force">
            Financial Freedom
          </h2>

          <div className="flex justify-center mb-8">
            <Bitcoin className="text-alien-gold h-16 w-16 mr-4" />
            <Landmark className="text-alien-green h-16 w-16 mx-4" />
            <Coins className="text-alien-gold h-16 w-16 ml-4" />
          </div>

          <AnimatedText className="text-xl max-w-5xl mx-auto text-gray-300 font-[Exo] leading-relaxed">
            Any Individual or Professional can Understand the Advantage of Digital Money: Impartial Money that does not discriminate, Decentralized Currencies, Scalable and Stable with the Volatility. Safe Reserves of Values, allowing individuals to secure their wealth while enjoying the benefits of a decentralized economy.
          </AnimatedText>
          <AnimatedText className="text-xl max-w-5xl mx-auto text-gray-300 font-[Exo] leading-relaxed mt-4">
            Access with Cryptokens and NFTs to Order & Generate All Types of Experiences, Products & Services According to your Demands Instantly...
          </AnimatedText>
        </motion.div>

        {/* ABTC Token Highlight */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="card-border p-8 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-3 text-alien-gold font-atomic-force">
            A₿tc (Aurum nostrum non est aurum vulgi)
          </h3>
          <p className="text-gray-300 mb-4 font-[Exo]">
            Aurum ₿itoin cryptoken serves as collateral and derivative of Bitcoin and gold, providing scalability, stability and growth potential (Φπ)...
          </p>
          <div className="inline-block bg-alien-space-dark px-4 py-2 rounded-full text-alien-green border border-alien-green/30">
            • Bitcoin-backed + Interoperable
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialFreedomSection;
