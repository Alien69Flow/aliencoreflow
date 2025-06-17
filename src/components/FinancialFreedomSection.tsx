
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, TrendingUp, Shield, Coins, Zap, Globe } from 'lucide-react';
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

  const benefits = [
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Exponential potential"
    },
    {
      icon: Shield,
      title: "Secure Storage",
      description: "Protected wealth"
    },
    {
      icon: Zap,
      title: "Instant Transactions",
      description: "Real-time access"
    },
    {
      icon: Coins,
      title: "Digital Assets",
      description: "NFTs & tokens"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-alien-green/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <h2 className="text-6xl md:text-8xl font-bold mb-4 text-alien-gold text-glow font-nasalization tracking-wider">
              ₿£€$$
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-alien-gold/20 to-alien-green/20 blur-xl rounded-full" />
          </div>
          
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-alien-gold text-glow font-nasalization"
          >
            Financial Freedom
          </motion.h3>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Main Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-border p-8 backdrop-blur-md">
              <p className="text-lg text-gray-300 font-[Exo] leading-relaxed mb-6">
                Any Individual or Professional can Understand the Advantage of Digital Money:
              </p>
              
              <div className="space-y-4 text-gray-300 font-[Exo]">
                <p className="leading-relaxed">
                  <span className="text-alien-gold font-semibold">Impartial Money</span> that does not discriminate, 
                  <span className="text-alien-green font-semibold"> Decentralized Currencies</span>, 
                  Scalable and Stable with the Volatility for Safe Reserves of Values.
                </p>
                <p className="leading-relaxed">
                  Allowing individuals to <span className="text-alien-gold font-semibold">secure their wealth</span> while 
                  enjoying the benefits of a <span className="text-alien-green font-semibold">decentralized economy</span>.
                </p>
                <p className="leading-relaxed">
                  Access with <span className="text-alien-gold font-semibold">Cryptokens and NFTs</span> to Order & Generate 
                  All Types of Experiences, Products & Services According to your Demands 
                  <span className="text-alien-green font-semibold"> Instantly</span>...
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="card-border p-4 text-center hover:scale-105 transition-transform duration-300"
              >
                <benefit.icon className="h-8 w-8 text-alien-gold mx-auto mb-2" />
                <h5 className="font-bold text-sm text-alien-green font-nasalization mb-1">
                  {benefit.title}
                </h5>
                <p className="text-xs text-gray-400 font-[Exo]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ABTC Token Highlight - Enhanced */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="card-border p-8 max-w-6xl mx-auto text-center relative overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-alien-gold/5 via-transparent to-alien-green/5" />
          <div className="absolute top-0 left-0 w-32 h-32 bg-alien-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-alien-green/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-alien-gold font-nasalization"
            >
              A₿tc <span className="text-sm text-gray-400">(Aurum nostrum non est aurum vulgi)</span>
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 mb-6 font-[Exo] max-w-3xl mx-auto"
            >
              Aurum ₿itoin cryptoken serves as collateral and derivative of Bitcoin and gold, 
              providing <span className="text-alien-green font-semibold">scalability</span>, 
              <span className="text-alien-gold font-semibold"> stability</span> and 
              <span className="text-alien-green font-semibold"> growth potential (Φπ)</span>...
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-alien-space-dark to-alien-space px-6 py-3 rounded-full border border-alien-green/30 mb-8"
            >
              <Bitcoin className="h-5 w-5 text-alien-gold" />
              <span className="text-alien-green font-semibold font-[Exo]">Bitcoin-backed</span>
              <span className="text-gray-400">•</span>
              <span className="text-alien-gold font-semibold font-[Exo]">Interoperable</span>
            </motion.div>
            
            {/* CoinMarketCap Widget */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div 
                className="coinmarketcap-currency-widget bg-alien-space-dark/50 p-4 rounded-lg border border-alien-gold/20" 
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialFreedomSection;
