import React from 'react';
import StarBackground from '@/components/StarBackground';
import { Network, Globe, Users, Zap, Briefcase, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ConnectionProps = {
  name: string;
  role: string;
  location: string;
  expertise: string[];
  avatar: string;
};

const ConnectionCard = ({ connection }: { connection: ConnectionProps }) => (
  <div className="bg-alien-space-dark/50 rounded-lg p-5 backdrop-blur-md border border-alien-gold/20 hover:border-alien-gold/50 transition-all">
    <div className="flex items-center mb-4">
      <div className="h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-alien-gold">
        <img src={connection.avatar} alt={connection.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="font-semibold text-alien-gold font-[Exo]">{connection.name}</h3>
        <p className="text-sm text-gray-300 font-[Exo]">{connection.role}</p>
        <div className="flex items-center text-xs text-alien-green mt-1">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{connection.location}</span>
        </div>
      </div>
    </div>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {connection.expertise.map((skill, index) => (
        <span key={index} className="px-2 py-1 text-xs bg-alien-space-light rounded-full text-alien-gold">
          {skill}
        </span>
      ))}
    </div>
    
    <div className="flex justify-between">
      <Button variant="outline" className="text-sm border-alien-gold/30 text-alien-gold hover:bg-alien-gold/10 font-[Exo]">
        View Profile
      </Button>
      <Button variant="outline" className="text-sm border-alien-green/30 text-alien-green hover:bg-alien-green/10 font-[Exo]">
        Connect
      </Button>
    </div>
  </div>
);

const CoNetWorKing: React.FC = () => {
  const connections: ConnectionProps[] = [
    {
      name: "Alex Quantum",
      role: "DeFi Architect",
      location: "Berlin, Germany",
      expertise: ["Smart Contracts", "Tokenomics", "Yield Farming"],
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
      name: "Sophia Stellar",
      role: "BioFi Researcher",
      location: "Singapore",
      expertise: ["Genomics", "Decentralized Science", "Data Analysis"],
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
      name: "Marcus Nova",
      role: "SocialFi Developer",
      location: "Rio de Janeiro, Brazil",
      expertise: ["Community Building", "Web3 Social", "Content DAOs"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
      name: "Ava Proxima",
      role: "RWA Specialist",
      location: "Toronto, Canada",
      expertise: ["Tokenization", "Legal Frameworks", "Asset Management"],
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
      name: "Kai Nebula",
      role: "DePin Engineer",
      location: "Tokyo, Japan",
      expertise: ["IoT", "Network Infrastructure", "Hardware Integration"],
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
      name: "Luna Eclipse",
      role: "NFT Artist & Curator",
      location: "Barcelona, Spain",
      expertise: ["Digital Art", "Metaverse Design", "Creative DAOs"],
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop"
    }
  ];

  const upcomingEvents = [
    {
      title: "Web3 Innovators Summit",
      date: "Jan 15, 2026",
      location: "Virtual Event",
      attendees: 1250
    },
    {
      title: "DeFi & RWA Integration Conference",
      date: "Feb 3, 2026",
      location: "Zurich, Switzerland",
      attendees: 820
    },
    {
      title: "BioFi Research Consortium",
      date: "Feb 18, 2026",
      location: "Boston, USA",
      attendees: 540
    }
  ];

  const collaborationOpportunities = [
    {
      title: "Quantum Finance Research",
      description: "Seeking data scientists and quantum computing experts for research on quantum-resistant DeFi.",
      category: "Research",
      spots: 3
    },
    {
      title: "Multi-Chain Bridge Development",
      description: "Looking for experienced blockchain developers to build a cross-chain asset transfer protocol.",
      category: "Development",
      spots: 5
    },
    {
      title: "ReFi Impact Measurement",
      description: "Creating standardized metrics for measuring environmental impact of ReFi projects.",
      category: "Analytics",
      spots: 4
    }
  ];

  return (
    <div className="min-h-screen bg-alien-space">
      <StarBackground />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Network className="h-16 w-16 text-alien-gold mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-6 font-[Atomic Age, Star Wars]">CoNetWorKing</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-[Exo]">
              Connect with like-minded individuals across the multiverse and forge powerful collaborations to shape the future.
            </p>
          </div>

          {/* Connection Map */}
          <div className="mb-16 relative bg-alien-space-dark/30 rounded-lg overflow-hidden p-6 backdrop-blur-md border border-alien-gold/20">
            <h2 className="text-2xl font-bold text-alien-gold mb-6 font-[Atomic Age]">Global Network</h2>
            
            <div className="aspect-[2/1] bg-alien-space-dark/50 rounded-lg relative overflow-hidden">
              {/* World map with glow points */}
              <div className="absolute inset-0 opacity-30 flex items-center justify-center">
                <Globe className="w-full h-full text-alien-gold opacity-10" />
              </div>
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500">
                <path d="M200,150 C400,50 600,450 800,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                <path d="M300,350 C500,250 600,150 850,300" stroke="url(#lineGradient2)" strokeWidth="2" fill="none" />
                <path d="M150,250 C350,350 650,350 750,150" stroke="url(#lineGradient3)" strokeWidth="2" fill="none" />
                
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#FFD700" stopOpacity="0.7" />
                  </linearGradient>
                  <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFD700" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#4CAF50" stopOpacity="0.7" />
                  </linearGradient>
                  <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#FFD700" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
                
                {/* Connection nodes */}
                <circle cx="200" cy="150" r="8" fill="#FFD700" className="animate-pulse">
                  <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="800" cy="200" r="8" fill="#4CAF50" className="animate-pulse">
                  <animate attributeName="r" values="8;12;8" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="350" r="6" fill="#FFD700" className="animate-pulse">
                  <animate attributeName="r" values="4;8;4" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="850" cy="300" r="7" fill="#4CAF50" className="animate-pulse">
                  <animate attributeName="r" values="5;9;5" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="150" cy="250" r="5" fill="#FFD700" className="animate-pulse">
                  <animate attributeName="r" values="3;7;3" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="750" cy="150" r="9" fill="#4CAF50" className="animate-pulse">
                  <animate attributeName="r" values="7;11;7" dur="4.5s" repeatCount="indefinite" />
                </circle>
              </svg>
              
              {/* Network stats */}
              <div className="absolute bottom-4 right-4 bg-alien-space-dark/70 p-3 rounded-lg backdrop-blur-md">
                <div className="flex items-center space-x-4 text-sm">
                  <div>
                    <p className="text-alien-gold font-bold">15,782</p>
                    <p className="text-xs text-gray-300">Active Members</p>
                  </div>
                  <div>
                    <p className="text-alien-gold font-bold">142</p>
                    <p className="text-xs text-gray-300">Countries</p>
                  </div>
                  <div>
                    <p className="text-alien-gold font-bold">2,340</p>
                    <p className="text-xs text-gray-300">Collaborations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-[Exo]">
                Explore Network Map
              </Button>
            </div>
          </div>

          {/* Featured Connections */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-alien-gold font-[Atomic Age]">Featured Connections</h2>
              <Button variant="outline" className="border-alien-green text-alien-green hover:bg-alien-green/10 font-[Exo]">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {connections.map((connection, index) => (
                <ConnectionCard key={index} connection={connection} />
              ))}
            </div>
          </div>

          {/* Events and Opportunities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Upcoming Networking Events */}
            <div>
              <h2 className="text-2xl font-bold text-alien-gold mb-6 font-[Atomic Age]">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-alien-space-dark/50 p-4 rounded-lg backdrop-blur-md border border-alien-gold/20">
                    <h3 className="text-lg font-semibold text-alien-gold font-[Exo]">{event.title}</h3>
                    <div className="flex justify-between items-center mt-2 text-sm">
                      <div className="flex items-center text-alien-green">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{event.location}</span>
                      </div>
                      <div className="text-gray-300">{event.date}</div>
                    </div>
                    <div className="mt-3 flex items-center text-sm text-gray-300">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                ))}
                
                <Button className="w-full bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-[Exo]">
                  Browse All Events
                </Button>
              </div>
            </div>
            
            {/* Collaboration Opportunities */}
            <div>
              <h2 className="text-2xl font-bold text-alien-gold mb-6 font-[Atomic Age]">Collaboration Opportunities</h2>
              <div className="space-y-4">
                {collaborationOpportunities.map((opportunity, index) => (
                  <div key={index} className="bg-alien-space-dark/50 p-4 rounded-lg backdrop-blur-md border border-alien-gold/20">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-semibold text-alien-gold font-[Exo]">{opportunity.title}</h3>
                      <span className="px-2 py-1 text-xs bg-alien-space-light rounded-full text-alien-green">
                        {opportunity.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mt-2 font-[Exo]">{opportunity.description}</p>
                    <div className="flex justify-between items-center mt-3">
                      <div className="text-sm text-alien-green">
                        <span>{opportunity.spots} spots available</span>
                      </div>
                      <Button variant="outline" className="text-sm border-alien-green/30 text-alien-green hover:bg-alien-green/10 font-[Exo]">
                        Apply
                      </Button>
                    </div>
                  </div>
                ))}
                
                <Button className="w-full bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-[Exo]">
                  View All Opportunities
                </Button>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-alien-green/30 to-alien-gold/30 rounded-lg p-8 text-center backdrop-blur-md">
            <Briefcase className="h-12 w-12 text-alien-gold mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-alien-gold mb-3 font-[Atomic Age]">Create Your Professional Profile</h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-6 font-[Exo]">
              Showcase your skills, experience, and interests to connect with the perfect collaborators for your next cosmic venture.
            </p>
            <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-[Exo] px-8">
              Build Your Profile
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoNetWorKing;
