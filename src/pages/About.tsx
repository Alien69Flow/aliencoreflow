
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
        {/* Milky Way Background with overlay */}
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ 
            backgroundImage: `url('/lovable-uploads/134e6b93-e922-4d1e-b95a-523e355bf892.png')` 
          }}
        ></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-8 font-[Atomic Age]">About AlienFlowSpace</h1>
          
          <div className="space-y-6 text-gray-300 font-[Exo]">
            <p className="text-xl">
              AlienFlowSpace DAO is a revolutionary decentralized autonomous organization designed to connect and empower diverse blockchain ecosystems.
            </p>
            
            <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
              <h2 className="text-2xl font-semibold text-alien-green mb-4 font-[Atomic Age]">Our Mission</h2>
              <p>
                We aim to create a unified cosmic governance structure that facilitates collaboration between different blockchain domains, from DeFi and BioFi to SocialFi and DeSci, all while maintaining the unique identity of each ecosystem.
              </p>
            </div>
            
            <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
              <h2 className="text-2xl font-semibold text-alien-green mb-4 font-[Atomic Age]">Our Vision</h2>
              <p>
                A multiverse where blockchain innovation transcends the boundaries of isolated projects, creating a harmonic ecosystem where technologies, ideas, and communities flow freely between dimensions, accelerating the evolution of the decentralized web.
              </p>
            </div>
            
            <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
              <h2 className="text-2xl font-semibold text-alien-green mb-4 font-[Atomic Age]">Core Values</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Decentralization and transparency in all operations</li>
                <li>Cross-ecosystem collaboration and resource sharing</li>
                <li>Community-driven governance and inclusive participation</li>
                <li>Sustainable innovation and technological advancement</li>
                <li>Education and accessibility for all beings across the multiverse</li>
              </ul>
            </div>
            
            <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
              <h2 className="text-2xl font-semibold text-alien-green mb-4 font-[Atomic Age]">Documentation</h2>
              <p className="mb-4">
                For more information about AlienFlowSpace DAO including green papers, manifesto, tokenomics and roadmap, please visit our official documentation:
              </p>
              <a 
                href="https://alienflowspace.gitbook.io/DAO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-alien-gold hover:text-alien-green transition-colors inline-flex items-center"
              >
                AlienFlowSpace GitBook Documentation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
