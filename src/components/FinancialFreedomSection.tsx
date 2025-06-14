
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, TrendingUp, Shield } from 'lucide-react';
import AnimatedText from './AnimatedText';

const FinancialFreedomSection = () => {
  useEffect(() => {
    // Load CoinMarketCap widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://files.coinmarketcap.com/static/widget/currency.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold mb-4 text-alien-gold text-glow font-nasalization">
            ₿£€$$
          </h2>
          <h3 className="text-3xl font-bold mb-6 text-alien-gold text-glow font-nasalization">
            Financial Freedom
          </h3>

          <div className="flex justify-center mb-6 gap-8">
            <Bitcoin className="text-alien-gold h-12 w-12" />
            <TrendingUp className="text-alien-green h-12 w-12" />
            <Shield className="text-alien-gold h-12 w-12" />
          </div>

          <div className="max-w-5xl mx-auto space-y-4 mb-8">
            <AnimatedText className="text-lg text-gray-300 font-[Exo] leading-relaxed">
              Any Individual or Professional can Understand the Advantage of Digital Money:
            </AnimatedText>
            <AnimatedText className="text-lg text-gray-300 font-[Exo] leading-relaxed">
              Impartial Money that does not discriminate, Decentralized Currencies, Scalable and Stable with the Volatility for Safe Reserves of Values, allowing individuals to secure their wealth while enjoying the benefits of a decentralized economy.
            </AnimatedText>
            <AnimatedText className="text-lg text-gray-300 font-[Exo] leading-relaxed">
              Access with Cryptokens and NFTs to Order & Generate All Types of Experiences, Products & Services According to your Demands Instantly...
            </AnimatedText>
          </div>
        </motion.div>

        {/* ABTC Token Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="card-border p-6 max-w-4xl mx-auto text-center mb-8"
        >
          <h3 className="text-2xl font-bold mb-3 text-alien-gold font-nasalization">
            A₿tc (Aurum nostrum non est aurum vulgi)
          </h3>
          <p className="text-gray-300 mb-4 font-[Exo]">
            Aurum ₿itoin cryptoken serves as collateral and derivative of Bitcoin and gold, providing scalability, stability and growth potential (Φπ)...
          </p>
          <div className="inline-block bg-alien-space-dark px-4 py-2 rounded-full text-alien-green border border-alien-green/30 mb-6">
            • Bitcoin-backed + Interoperable
          </div>
          
          {/* CoinMarketCap Widget */}
          <div className="mt-6 flex justify-center">
            <div 
              className="coinmarketcap-currency-widget" 
              data-currencyid="1" 
              data-base="USD" 
              data-secondary="BTC" 
              data-ticker="true" 
              data-rank="true" 
              data-marketcap="true" 
              data-volume="true" 
              data-statsticker="true" 
              data-stats="USD"
            ></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialFreedomSection;
