
import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Database, Coins } from 'lucide-react';

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

const StatsSection = () => {
  return (
    <section className="py-16 bg-alien-space-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`mx-auto mb-4 p-4 rounded-full bg-alien-space-dark w-fit ${stat.color}`}>
                {stat.icon}
              </div>
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className={`text-4xl font-bold mb-2 ${stat.color}`}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Subtle animated background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
    </section>
  );
};

export default StatsSection;
