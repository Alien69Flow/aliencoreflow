
import React from 'react';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EcosystemSection from '@/components/EcosystemSection';
import FeaturesSection from '@/components/FeaturesSection';
import ParticipationSection from '@/components/ParticipationSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-alien-space">
      <StarBackground />
      <Header />
      <main className="pt-16">
        <Hero />
        <EcosystemSection />
        <FeaturesSection />
        <ParticipationSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
