
import React from 'react';
import StarBackground from '@/components/StarBackground';
import Hero from '@/components/Hero';
import ExploreSpacesSection from '@/components/ExploreSpacesSection';
import EcosystemSection from '@/components/EcosystemSection';
import FeaturesSection from '@/components/FeaturesSection';
import FinancialFreedomSection from '@/components/FinancialFreedomSection';
import ParticipationSection from '@/components/ParticipationSection';

const Index: React.FC = () => {
  return (
    <div className="relative">
      {/* Fixed background image - positioned behind everything */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('/lovable-uploads/EMWBack.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
          zIndex: -30
        }}
      />
      
      {/* Star background effect - also behind content */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -20 }}>
        <StarBackground />
      </div>
      
      {/* Main content - ensure it has proper height and flow */}
      <div className="relative z-10 min-h-screen">
        <Hero />
        <FinancialFreedomSection />
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
