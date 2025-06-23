
import React from 'react';
import StarBackground from '@/components/StarBackground';
import { Rocket, Star, Clock, ScrollText, BookOpen, PieChart } from 'lucide-react';
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

  const tokenomics = [
    { name: "Community Rewards", value: 15, color: "#4CAF50" },
    { name: "Development Reserve Funds", value: 35, color: "#2196F3" },
    { name: "Liquidity Pools", value: 20, color: "#FFC107" },
    { name: "Founders Teams", value: 10, color: "#9C27B0" },
    { name: "Partners", value: 10, color: "#FF5722" },
    { name: "Marketing", value: 10, color: "#E91E63" }
  ];

  return (
    <div className="relative flex flex-col flex-1">
      {/* Cosmic microwave background radiation - optimized */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('/lovable-uploads/74c23ca3-be80-46d6-9817-d6a5cde81736.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8,
          zIndex: -30
        }}
      />
      
      {/* Star background effect */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -20 }}>
        <StarBackground />
      </div>

      <main className="relative z-10 flex-grow container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-6 font-nasalization">AlienTrip</h1>
              <p className="text-xl text-gray-300 mb-8 font-[Exo]">
                Explore our cosmic journey through the knowledge skills multiverse as we build the next generation of decentralized collaboration together, join us to enjoy the advantages, benefits and profits.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-nasalization">
                  <Rocket className="mr-2 h-5 w-5" /> Join the Journey
                </Button>
                <Button variant="outline" className="border-alien-green text-alien-green hover:bg-alien-green/20 font-nasalization" onClick={() => window.open("https://alienflowspace.gitbook.io/DAO", "_blank")}>
                  <ScrollText className="mr-2 h-5 w-5" /> Look Greenpapers
                </Button>
              </div>
              
              {/* Compact GitBook Card */}
              <div className="mt-6 bg-alien-space-dark/40 backdrop-blur-md rounded-lg p-4 border border-alien-gold/20">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-5 w-5 text-alien-gold mr-2" />
                  <h3 className="text-lg font-semibold text-alien-gold font-nasalization">Official Documentation</h3>
                </div>
                <p className="text-gray-300 mb-3 font-[Exo] text-sm">
                  Access our comprehensive documentation to learn about tokenomics, roadmap, and technical specifications.
                </p>
                <a href="https://alienflowspace.gitbook.io/DAO" target="_blank" rel="noopener noreferrer" className="flex items-center text-alien-green hover:text-alien-green-light font-[Exo] text-sm">
                  <span>Visit GitBook</span>
                  <Rocket className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Compact NFT mint section */}
            <div className="bg-alien-space-dark/40 rounded-lg p-6 backdrop-blur-md border border-alien-gold/20">
              <h2 className="text-2xl font-bold text-alien-green mb-4 font-nasalization">Crypto Mint NFT</h2>
              <p className="text-gray-300 mb-4 font-[Exo] text-sm">
                Secure your place in our cosmic ecosystem by minting an ΔlieπFlΦw $pac€ DAO Passport.
              </p>
              <div className="bg-alien-space-light/30 rounded-lg p-3 mb-4">
                <div className="flex justify-between items-center mb-2 text-sm">
                  <span className="text-alien-gold font-[Exo]">Mint Price</span>
                  <span className="text-alien-green font-semibold font-[Exo]">0.08 ₿TC</span>
                </div>
                <div className="flex justify-between items-center mb-2 text-sm">
                  <span className="text-alien-gold font-[Exo]">Total Supply</span>
                  <span className="text-alien-green font-semibold font-[Exo]">1,618.034</span>
                </div>
                <div className="flex justify-between items-center mb-2 text-sm">
                  <span className="text-alien-gold font-[Exo]">Minted</span>
                  <span className="text-alien-green font-semibold font-[Exo]">314.159 / 1,618.034</span>
                </div>
                <div className="w-full bg-alien-space-dark rounded-full h-2 mb-2">
                  <div className="bg-alien-gold h-2 rounded-full" style={{ width: '19%' }}></div>
                </div>
              </div>
              <Button className="w-full bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-nasalization">
                Crypto Mint NFT Passport
              </Button>
            </div>
          </div>
          
          {/* Compact Tokenomics Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-alien-gold mb-4 font-nasalization">Tokenomics</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-[Exo]">
                The A₿TC token distribution ensures sustainable ecosystem growth and balanced governance.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Compact Pie Chart */}
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {tokenomics.reduce((acc, item, i) => {
                    const startAngle = acc.angle;
                    const sliceAngle = item.value / 100 * 360;
                    const endAngle = startAngle + sliceAngle;
                    const x1 = 50 + 40 * Math.cos((startAngle - 90) * (Math.PI / 180));
                    const y1 = 50 + 40 * Math.sin((startAngle - 90) * (Math.PI / 180));
                    const x2 = 50 + 40 * Math.cos((endAngle - 90) * (Math.PI / 180));
                    const y2 = 50 + 40 * Math.sin((endAngle - 90) * (Math.PI / 180));
                    const largeArc = sliceAngle > 180 ? 1 : 0;
                    acc.paths.push(
                      <path 
                        key={i} 
                        d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`} 
                        fill={item.color} 
                        stroke="rgba(0,0,0,0.3)" 
                        strokeWidth="0.5" 
                      />
                    );
                    acc.angle = endAngle;
                    return acc;
                  }, { paths: [], angle: 0 }).paths}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-alien-space-dark/70 rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm">
                    <PieChart className="text-alien-gold h-8 w-8" />
                  </div>
                </div>
              </div>
              
              {/* Compact Legend */}
              <div className="grid grid-cols-2 gap-3">
                {tokenomics.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 mr-2" style={{ backgroundColor: item.color }}></div>
                    <div>
                      <span className="text-gray-300 font-[Exo] text-sm">{item.name}</span>
                      <span className="ml-2 text-alien-gold font-bold font-[Exo] text-sm">{item.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Compact Roadmap */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-alien-gold mb-4 font-nasalization">Roadmap</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-[Exo]">
                Our mission to combine blockchain (web 3), neural intelligence networks (web 4) and quantum computation (web 5).
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-alien-gold/30"></div>
              
              {roadmapEvents.map((event, index) => (
                <div key={index} className="relative grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
                  <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:text-right order-1' : 'order-1 md:order-3'}`}>
                    <h3 className="text-xl font-bold text-alien-gold mb-2 font-nasalization">{event.title}</h3>
                    <div className="text-sm text-alien-green mb-2 flex items-center gap-2 justify-start md:justify-end font-[Exo]">
                      <Clock className="h-4 w-4" />
                      <span>{event.quarter}</span>
                    </div>
                    <p className="text-gray-300 font-[Exo] text-sm">{event.description}</p>
                  </div>
                  
                  <div className="order-2 flex justify-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${event.completed ? 'bg-alien-gold' : 'bg-alien-space-light border-2 border-alien-gold/50'}`}>
                      <span className={event.completed ? 'text-alien-space-dark' : 'text-alien-gold'}>
                        {event.icon}
                      </span>
                    </div>
                  </div>
                  
                  <div className={`md:col-span-2 ${index % 2 === 0 ? 'order-3' : 'order-1 md:text-right'}`}>
                    {/* Empty space for alignment */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Compact CTA */}
          <div className="bg-alien-space-dark/50 rounded-lg p-6 backdrop-blur-md text-center">
            <h2 className="text-2xl font-bold text-alien-gold mb-3 font-nasalization">Join Our Cosmic Journey</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto font-[Exo]">
              The AlienFlowSpace DAO is more than a project—it's a movement to transform blockchain collaboration across the multiverse.
            </p>
            <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark px-6 py-4 font-nasalization">
              <Rocket className="mr-2 h-5 w-5" /> Join AlienFlowSpace
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AlienTrip;
