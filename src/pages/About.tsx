
import React from 'react';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-alien-space">
      <StarBackground />
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-8">About AlienFlowSpace</h1>
          
          <div className="space-y-6 text-gray-300">
            <p className="text-xl">
              AlienFlowSpace DAO is a revolutionary decentralized autonomous organization designed to connect and empower diverse blockchain ecosystems.
            </p>
            
            <div className="bg-alien-space-dark/50 p-6 rounded-lg backdrop-blur-md">
              <h2 className="text-2xl font-semibold text-alien-green mb-4">Our Mission</h2>
              <p>
                We aim to create a unified cosmic governance structure that facilitates collaboration between different blockchain domains, from DeFi and BioFi to SocialFi and DeSci, all while maintaining the unique identity of each ecosystem.
              </p>
            </div>
            
            <div className="bg-alien-space-dark/50 p-6 rounded-lg backdrop-blur-md">
              <h2 className="text-2xl font-semibold text-alien-green mb-4">Our Vision</h2>
              <p>
                A multiverse where blockchain innovation transcends the boundaries of isolated projects, creating a harmonic ecosystem where technologies, ideas, and communities flow freely between dimensions, accelerating the evolution of the decentralized web.
              </p>
            </div>
            
            <div className="bg-alien-space-dark/50 p-6 rounded-lg backdrop-blur-md">
              <h2 className="text-2xl font-semibold text-alien-green mb-4">Core Values</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Decentralization and transparency in all operations</li>
                <li>Cross-ecosystem collaboration and resource sharing</li>
                <li>Community-driven governance and inclusive participation</li>
                <li>Sustainable innovation and technological advancement</li>
                <li>Education and accessibility for all beings across the multiverse</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
