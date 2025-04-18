import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CircleDollarSign, Calendar, MessagesSquare, Network } from 'lucide-react';
const ParticipationSection = () => {
  return <section id="participate" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image side */}
          <motion.div className="w-full lg:w-1/2" initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <div className="relative">
              
              
              
              
              {/* Floating indicators */}
              
              
              
              
              
            </div>
          </motion.div>
          
          {/* Content side */}
          <motion.div className="w-full lg:w-1/2" initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
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
    </section>;
};
export default ParticipationSection;