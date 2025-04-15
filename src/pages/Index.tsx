
import React, { useEffect } from 'react';
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
  useEffect(() => {
    // Forzar recarga de assets para asegurar que se muestren correctamente
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const src = img.src;
      img.src = '';
      setTimeout(() => {
        img.src = src;
      }, 50);
    });
  }, []);

  return (
    <div className="min-h-screen bg-alien-space">
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: `url('/lovable-uploads/e2d45b36-c4c1-4b45-953d-5376a5f5b6cc.png')`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2,
        }}
      ></div>
      <StarBackground />
      <Header />
      <main className="pt-16 relative z-10">
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
