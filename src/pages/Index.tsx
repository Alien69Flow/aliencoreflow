
import React, { useEffect } from 'react';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EcosystemSection from '@/components/EcosystemSection';
import FeaturesSection from '@/components/FeaturesSection';
import ParticipationSection from '@/components/ParticipationSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import { motion, useAnimation } from 'framer-motion';

const Index = () => {
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        opacity: 1,
        transition: { duration: 1 }
      });
    };
    startAnimation();
  }, [controls]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={controls} className="min-h-screen bg-alien-space">
      <StarBackground />
      <Header />
      <main className="pt-20">
        <Hero />
        <EcosystemSection />
        <FeaturesSection />
        <ParticipationSection />
        <StatsSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
