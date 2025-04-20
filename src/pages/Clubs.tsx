
import React from 'react';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Rocket, Calendar, MessageCircle, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ClubProps = {
  name: string;
  description: string;
  members: number;
  icon: React.ReactNode;
  category: string;
  categoryColor: string;
  bgColor: string;
};

const ClubCard = ({ club }: { club: ClubProps }) => (
  <div className={`${club.bgColor} p-6 rounded-lg backdrop-blur-md overflow-hidden relative group hover:transform hover:scale-[1.02] transition-all`}>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-alien-space-dark/80 z-0"></div>
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-alien-space-dark/60 rounded-full backdrop-blur-md">
          {club.icon}
        </div>
        <span className={`px-2 py-1 text-xs ${club.categoryColor} rounded-full`}>
          {club.category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-alien-gold mb-2 font-[Atomic Age]">{club.name}</h3>
      <p className="text-gray-200 mb-4 text-sm font-[Exo]">{club.description}</p>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Users className="h-4 w-4 text-alien-green mr-1" />
          <span className="text-sm text-alien-green">{club.members} members</span>
        </div>
        <Button variant="outline" className="border-alien-gold/50 text-alien-gold hover:bg-alien-gold/10 text-sm px-3 py-1 h-auto font-[Exo]">
          Join Club
        </Button>
      </div>
    </div>
  </div>
);

const Clubs: React.FC = () => {
  const featuredClubs: ClubProps[] = [
    {
      name: "Cosmic Traders",
      description: "Advanced trading strategies and market analysis for interplanetary assets.",
      members: 2438,
      icon: <Zap className="h-6 w-6 text-alien-gold" />,
      category: "DeFi",
      categoryColor: "bg-blue-500 text-white",
      bgColor: "bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20"
    },
    {
      name: "Governance Council",
      description: "Shaping the future of AlienFlowSpace through collaborative decision-making.",
      members: 1256,
      icon: <Shield className="h-6 w-6 text-alien-gold" />,
      category: "DAO",
      categoryColor: "bg-emerald-500 text-white",
      bgColor: "bg-gradient-to-r from-emerald-900/30 to-green-900/30 border border-emerald-500/20"
    },
    {
      name: "NFT Explorers",
      description: "Discovering and creating digital artifacts across the multiverse.",
      members: 3712,
      icon: <Rocket className="h-6 w-6 text-alien-gold" />,
      category: "NFTs",
      categoryColor: "bg-pink-500 text-white",
      bgColor: "bg-gradient-to-r from-pink-900/30 to-red-900/30 border border-pink-500/20"
    }
  ];

  const allClubs: ClubProps[] = [
    ...featuredClubs,
    {
      name: "DeSci Research",
      description: "Advancing scientific discovery through decentralized collaboration.",
      members: 843,
      icon: <Rocket className="h-6 w-6 text-alien-gold" />,
      category: "Science",
      categoryColor: "bg-cyan-500 text-white",
      bgColor: "bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/20"
    },
    {
      name: "BioFi Innovators",
      description: "Exploring the intersection of biology, blockchain, and finance.",
      members: 621,
      icon: <Rocket className="h-6 w-6 text-alien-gold" />,
      category: "BioFi",
      categoryColor: "bg-green-500 text-white",
      bgColor: "bg-gradient-to-r from-green-900/30 to-teal-900/30 border border-green-500/20"
    },
    {
      name: "ReFi Guardians",
      description: "Protecting and regenerating ecosystems through sustainable finance.",
      members: 1129,
      icon: <Shield className="h-6 w-6 text-alien-gold" />,
      category: "ReFi",
      categoryColor: "bg-lime-500 text-white",
      bgColor: "bg-gradient-to-r from-lime-900/30 to-green-900/30 border border-lime-500/20"
    },
    {
      name: "RWA Architects",
      description: "Tokenizing and optimizing real-world assets on the blockchain.",
      members: 794,
      icon: <Rocket className="h-6 w-6 text-alien-gold" />,
      category: "RWA",
      categoryColor: "bg-amber-500 text-white",
      bgColor: "bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-500/20"
    },
    {
      name: "IPFS Guardians",
      description: "Building and maintaining decentralized storage infrastructure.",
      members: 528,
      icon: <Shield className="h-6 w-6 text-alien-gold" />,
      category: "Infrastructure",
      categoryColor: "bg-indigo-500 text-white",
      bgColor: "bg-gradient-to-r from-indigo-900/30 to-violet-900/30 border border-indigo-500/20"
    },
    {
      name: "Social Networkers",
      description: "Creating decentralized social platforms for the community.",
      members: 1847,
      icon: <Zap className="h-6 w-6 text-alien-gold" />,
      category: "SocialFi",
      categoryColor: "bg-rose-500 text-white",
      bgColor: "bg-gradient-to-r from-rose-900/30 to-pink-900/30 border border-rose-500/20"
    },
  ];

  const upcomingEvents = [
    {
      title: "Trading Masterclass",
      date: "Dec 26, 2025",
      time: "18:00 UTC",
      club: "Cosmic Traders"
    },
    {
      title: "Governance Proposal Review",
      date: "Dec 28, 2025",
      time: "14:00 UTC",
      club: "Governance Council"
    },
    {
      title: "NFT Creation Workshop",
      date: "Dec 30, 2025",
      time: "16:00 UTC",
      club: "NFT Explorers"
    }
  ];

  return (
    <div className="min-h-screen bg-alien-space">
      <StarBackground />
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Users className="h-16 w-16 text-alien-gold mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-6 font-[Atomic Age, Star Wars]">Clubs</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-[Exo]">
              Join specialized communities within the AlienFlowSpace ecosystem to connect with like-minded individuals across the multiverse.
            </p>
          </div>

          {/* Featured Clubs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-alien-gold mb-6 font-[Atomic Age]">Featured Clubs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredClubs.map((club, index) => (
                <ClubCard key={index} club={club} />
              ))}
            </div>
          </div>

          {/* Club Activity */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-alien-gold mb-6 font-[Atomic Age]">All Clubs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {allClubs.map((club, index) => (
                  <ClubCard key={`all-${index}`} club={club} />
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-alien-gold mb-6 font-[Atomic Age]">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-alien-space-dark/50 p-4 rounded-lg backdrop-blur-md border border-alien-gold/20">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-alien-space-light rounded-full">
                        <Calendar className="h-5 w-5 text-alien-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-alien-gold font-[Exo]">{event.title}</h4>
                        <p className="text-sm text-gray-300 font-[Exo]">{event.club}</p>
                        <div className="flex items-center mt-2 text-xs text-alien-green">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{event.date} · {event.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full border-alien-gold/30 text-alien-gold hover:bg-alien-gold/10 mt-2 font-[Exo]">
                  View All Events
                </Button>
              </div>
              
              {/* Create Club CTA */}
              <div className="mt-8 bg-gradient-to-r from-alien-green/30 to-alien-gold/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-alien-gold mb-3 font-[Atomic Age]">Start Your Own Club</h3>
                <p className="text-sm text-gray-200 mb-4 font-[Exo]">
                  Have a unique interest not represented yet? Create your own club and invite others to join.
                </p>
                <Button className="w-full bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-[Exo]">
                  Create Club
                </Button>
              </div>
            </div>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-alien-space-dark/50 p-6 rounded-lg text-center backdrop-blur-md border border-alien-gold/20">
              <p className="text-3xl font-bold text-alien-gold">15+</p>
              <p className="text-sm text-gray-300">Active Clubs</p>
            </div>
            <div className="bg-alien-space-dark/50 p-6 rounded-lg text-center backdrop-blur-md border border-alien-gold/20">
              <p className="text-3xl font-bold text-alien-gold">28.5K</p>
              <p className="text-sm text-gray-300">Members</p>
            </div>
            <div className="bg-alien-space-dark/50 p-6 rounded-lg text-center backdrop-blur-md border border-alien-gold/20">
              <p className="text-3xl font-bold text-alien-gold">450+</p>
              <p className="text-sm text-gray-300">Events Held</p>
            </div>
            <div className="bg-alien-space-dark/50 p-6 rounded-lg text-center backdrop-blur-md border border-alien-gold/20">
              <p className="text-3xl font-bold text-alien-gold">142</p>
              <p className="text-sm text-gray-300">Countries</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Clubs;
