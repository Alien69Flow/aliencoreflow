
import React from 'react';
import StarBackground from '@/components/StarBackground';
import Hero from '@/components/Hero';
import ExploreSpacesSection from '@/components/ExploreSpacesSection';
import EcosystemSection from '@/components/EcosystemSection';
import FeaturesSection from '@/components/FeaturesSection';
import FinancialFreedomSection from '@/components/FinancialFreedomSection';
import ParticipationSection from '@/components/ParticipationSection';
import StatsSection from '@/components/StatsSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-alien-space relative">
      <div className="fixed inset-0 z-0" style={{
        backgroundImage: `url('/lovable-uploads/EMWBack.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.3
      }}></div>
      <StarBackground />
      <div className="relative z-10">
        <Hero />
        <div className="container mx-auto text-center px-4 py-8 section-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-alien-gold font-atomic-force">₿£€$$</h2>
        </div>
        <FinancialFreedomSection />
        {/* StatsSection removed from here as its content has been moved to ParticipationSection */}
        <ExploreSpacesSection />
        <EcosystemSection />
        <FeaturesSection />
        <div className="section-center">
          <ParticipationSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
