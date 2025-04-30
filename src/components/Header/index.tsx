import React from 'react';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ExploreSpacesSection from '@/components/ExploreSpacesSection';
import EcosystemSection from '@/components/EcosystemSection';
import FeaturesSection from '@/components/FeaturesSection';
import FinancialFreedomSection from '@/components/FinancialFreedomSection';
import ParticipationSection from '@/components/ParticipationSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return <div className="min-h-screen bg-alien-space">
      <div className="fixed inset-0 z-0" style={{
      backgroundImage: `url('/lovable-uploads/EMWBack.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: 0.3
    }}></div>
      <StarBackground />
      <Header />
      <main className="relative z-10 pt-16">
        <Hero />
        <div className="container mx-auto text-center px-0 py-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-alien-gold font-[Atomic Age]">₿£€$$</h2>
          
        </div>
        <FinancialFreedomSection />
        <ExploreSpacesSection />
        <EcosystemSection />
        <FeaturesSection />
        <ParticipationSection />
      </main>
      <Footer />
    </div>;
};

export default Index;
