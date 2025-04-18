
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CircleDollarSign, Calendar, MessagesSquare, Network } from 'lucide-react';

const ParticipationSection = () => {
  return (
    <section id="participate" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/97b958b4-b3ba-464b-929a-b8783d910484.png" 
                alt="Space view from orbit" 
                className="rounded-xl shadow-2xl object-cover h-full w-full max-h-[600px]"
              />
              <div className="absolute inset-0 bg-alien-space-dark/30 rounded-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-alien-space-dark to-transparent rounded-xl"></div>
              
              {/* Floating indicators */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-1/4 left-1/4 bg-alien-gold/20 backdrop-blur-sm p-2 rounded-full border border-alien-gold/40"
              >
                <CircleDollarSign className="h-6 w-6 text-alien-gold" />
              </motion.div>
              
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-1/3 right-1/4 bg-alien-green/20 backdrop-blur-sm p-2 rounded-full border border-alien-green/40"
              >
                <Network className="h-6 w-6 text-alien-green" />
              </motion.div>
              
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-1/3 right-1/3 bg-alien-gold/20 backdrop-blur-sm p-2 rounded-full border border-alien-gold/40"
              >
                <Calendar className="h-6 w-6 text-alien-gold" />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-alien-gold text-glow">Join the Cosmic Governance</h2>
            <p className="text-xl text-gray-300 mb-8">
              AlienFlowSpace DAO operates on a principle of transparent, decentralized governance where all participants have the opportunity to shape the future of our interplanetary ecosystem.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-alien-space-light p-3 rounded-full">
                  <CircleDollarSign className="h-6 w-6 text-alien-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-alien-gold-light">Token Governance</h3>
                  <p className="text-gray-300">Hold A₿TC cryptokens to participate in voting and proposal creation across all ecosystem domains.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-alien-space-light p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-alien-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-alien-gold-light">Regular Assemblies</h3>
                  <p className="text-gray-300">Join weekly virtual assemblies to discuss proposals and future directions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-alien-space-light p-3 rounded-full">
                  <MessagesSquare className="h-6 w-6 text-alien-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-alien-gold-light">Community Forums</h3>
                  <p className="text-gray-300">Contribute to ongoing discussions and knowledge sharing in our decentralized forums.</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-medium px-8 py-6 text-lg rounded-full">
              Connect & Participate
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-alien-green opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 translate-x-1/2 w-80 h-80 bg-alien-gold opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ParticipationSection;
