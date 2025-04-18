
import React from 'react';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EcosystemSection from '@/components/EcosystemSection';
import FeaturesSection from '@/components/FeaturesSection';
import ParticipationSection from '@/components/ParticipationSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import FinancialFreedomSection from '@/components/FinancialFreedomSection';
import ExploreSpacesSection from '@/components/ExploreSpacesSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-alien-space">
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: `url('/lovable-uploads/97b958b4-b3ba-464b-929a-b8783d910484.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
        }}
      ></div>
      <StarBackground />
      <Header />
      <main className="relative z-10 pt-16">
        <Hero />
        <EcosystemSection />
        <FinancialFreedomSection />
        <ExploreSpacesSection />
        <FeaturesSection />
        <ParticipationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
