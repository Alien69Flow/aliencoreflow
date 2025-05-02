
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CircleDollarSign, Calendar, MessagesSquare, Network, Users, ShieldCheck, Database, Coins } from 'lucide-react';

// Stats that were previously in StatsSection
const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "10,000+",
    label: "DAO Members",
    color: "text-alien-gold"
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    value: "99.9%",
    label: "Protocol Security",
    color: "text-alien-green"
  },
  {
    icon: <Database className="h-8 w-8" />,
    value: "250 TB",
    label: "Data Secured",
    color: "text-alien-gold"
  },
  {
    icon: <Coins className="h-8 w-8" />,
    value: "$125M",
    label: "Total Value Locked",
    color: "text-alien-green"
  }
];

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
            <p className="text-xl text-gray-300 mb-8">ΔlieπFlΦw $pac€ DAO operates on a principle of transparent, decentralized governance where all participants have the opportunity to shape the future of our interplanetary ecosystem.</p>
            
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
            
            <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-medium px-8 py-6 text-lg rounded-full mb-12">
              Connect & Participate
            </Button>
            
            {/* Stats Grid - Moved from StatsSection */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`mx-auto mb-4 p-3 rounded-full bg-alien-space-dark w-fit ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className={`text-3xl font-bold mb-2 ${stat.color}`}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default ParticipationSection;
