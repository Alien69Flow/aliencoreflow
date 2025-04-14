
import React from 'react';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Rocket, Star, Clock, ScrollText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AlienTrip: React.FC = () => {
  const roadmapEvents = [
    {
      quarter: "Q3 2025",
      title: "Genesis Launch",
      description: "Initial deployment of AlienFlowSpace DAO with core governance and token mechanics.",
      completed: true,
      icon: <Rocket className="h-5 w-5" />
    },
    {
      quarter: "Q4 2025",
      title: "Ecosystem Integration Phase I",
      description: "First wave of ecosystem partners onboarded and interconnected within the network.",
      completed: false,
      icon: <Star className="h-5 w-5" />
    },
    {
      quarter: "Q1 2026",
      title: "CoNetWorKing Mainnet",
      description: "Launch of our distributed networking infrastructure connecting all ecosystems.",
      completed: false,
      icon: <Star className="h-5 w-5" />
    },
    {
      quarter: "Q2 2026",
      title: "Cross-Ecosystem Governance",
      description: "Implementation of universal governance mechanics for collaborative decision-making.",
      completed: false,
      icon: <Star className="h-5 w-5" />
    },
    {
      quarter: "Q3 2026",
      title: "Interplanetary Expansion",
      description: "Extension of AlienFlowSpace DAO to additional layer 1 blockchains and ecosystems.",
      completed: false,
      icon: <Star className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-alien-space">
      <StarBackground />
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-6">AlienTrip</h1>
              <p className="text-xl text-gray-300 mb-8">
                Explore our cosmic journey through the blockchain multiverse as we build the next generation of decentralized collaboration.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark">
                  <Rocket className="mr-2 h-5 w-5" /> Join the Journey
                </Button>
                <Button variant="outline" className="border-alien-green text-alien-green hover:bg-alien-green/20">
                  <ScrollText className="mr-2 h-5 w-5" /> Read Whitepaper
                </Button>
              </div>
            </div>
            <div className="bg-alien-space-dark/50 rounded-lg p-6 backdrop-blur-md">
              <h2 className="text-2xl font-bold text-alien-green mb-4">NFT Mint</h2>
              <p className="text-gray-300 mb-6">
                Secure your place in our cosmic ecosystem by minting an AlienFlow Passport NFT, granting you early access to all future features and governance rights.
              </p>
              <div className="bg-alien-space-light rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-alien-gold">Mint Price</span>
                  <span className="text-alien-green font-semibold">0.08 ETH</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-alien-gold">Total Supply</span>
                  <span className="text-alien-green font-semibold">10,000</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-alien-gold">Minted</span>
                  <span className="text-alien-green font-semibold">7,234 / 10,000</span>
                </div>
                <div className="w-full bg-alien-space-dark rounded-full h-2.5 mb-2">
                  <div className="bg-alien-gold h-2.5 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <Button className="w-full bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark">
                Mint Passport NFT
              </Button>
            </div>
          </div>
          
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-alien-gold mb-4">Roadmap</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our mission to unify the blockchain multiverse follows this strategic path through time and space.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-alien-gold/30"></div>
              
              {roadmapEvents.map((event, index) => (
                <div key={index} className="relative grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
                  <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:text-right order-1' : 'order-1 md:order-3'}`}>
                    <h3 className="text-2xl font-bold text-alien-gold mb-2">{event.title}</h3>
                    <div className="text-sm text-alien-green mb-2 flex items-center gap-2 justify-start md:justify-end">
                      <Clock className="h-4 w-4" />
                      <span>{event.quarter}</span>
                    </div>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                  
                  <div className="order-2 flex justify-center">
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                        event.completed ? 'bg-alien-gold' : 'bg-alien-space-light border-2 border-alien-gold/50'
                      }`}>
                        <span className={event.completed ? 'text-alien-space-dark' : 'text-alien-gold'}>
                          {event.icon}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`md:col-span-2 ${index % 2 === 0 ? 'order-3' : 'order-1 md:text-right'}`}>
                    {/* Empty space for alignment */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-alien-space-dark/70 rounded-lg p-8 backdrop-blur-md text-center">
            <h2 className="text-3xl font-bold text-alien-gold mb-4">Join Our Cosmic Journey</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              The AlienFlowSpace DAO is more than a project—it's a movement to transform blockchain collaboration across the multiverse. Be part of this revolutionary journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark px-8 py-6">
                <Rocket className="mr-2 h-5 w-5" /> Join AlienFlowSpace
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AlienTrip;
