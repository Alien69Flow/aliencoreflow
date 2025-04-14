
import React from 'react';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Star, Rocket, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Clubs: React.FC = () => {
  const clubs = [
    {
      name: "Cosmic Coders",
      members: 1243,
      rating: 4.8,
      description: "A community of blockchain developers building the future of decentralized applications.",
      nextMeeting: "May 15, 2025",
      location: "Virtual",
      tags: ["Development", "Smart Contracts", "Web3"]
    },
    {
      name: "DeFi Explorers",
      members: 876,
      rating: 4.7,
      description: "Exploring the frontiers of decentralized finance, yield farming, and liquidity protocols.",
      nextMeeting: "May 12, 2025",
      location: "Virtual + NYC",
      tags: ["DeFi", "Trading", "Investment"]
    },
    {
      name: "NFT Collectors",
      members: 2105,
      rating: 4.9,
      description: "Discussing digital art, collectibles, and the cultural impact of non-fungible tokens.",
      nextMeeting: "May 20, 2025",
      location: "Virtual",
      tags: ["NFT", "Art", "Collectibles"]
    },
    {
      name: "Governance Guardians",
      members: 562,
      rating: 4.6,
      description: "Focused on DAO governance mechanisms and decentralized decision-making processes.",
      nextMeeting: "May 18, 2025",
      location: "Virtual + London",
      tags: ["Governance", "DAOs", "Voting"]
    }
  ];

  return (
    <div className="min-h-screen bg-alien-space">
      <StarBackground />
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-4">AlienFlowSpace Clubs</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join specialized communities within our interplanetary ecosystem and connect with like-minded cosmic beings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {clubs.map((club, index) => (
              <div key={index} className="bg-alien-space-dark/50 rounded-lg overflow-hidden backdrop-blur-md border border-alien-gold/10 hover:border-alien-gold/30 transition-all duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-alien-gold">{club.name}</h3>
                    <div className="flex items-center bg-alien-gold/20 px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 text-alien-gold mr-1" fill="currentColor" />
                      <span className="text-alien-gold">{club.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{club.description}</p>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-2">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{club.members} members</span>
                  </div>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Next meeting: {club.nextMeeting}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{club.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {club.tags.map((tag, i) => (
                      <span key={i} className="bg-alien-space-light px-3 py-1 rounded-full text-xs text-alien-green">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-alien-green hover:bg-alien-green/80 text-alien-space-dark">
                    Join Club
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-alien-space-dark/70 rounded-lg p-8 backdrop-blur-md">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-alien-gold mb-2">Create Your Own Club</h2>
              <p className="text-gray-300">
                Have a unique interest not covered by existing clubs? Start your own community within the AlienFlowSpace ecosystem.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark px-8">
                <Rocket className="mr-2 h-5 w-5" /> Launch New Club
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Clubs;
