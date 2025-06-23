
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Trophy } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="relative flex flex-col flex-1 min-h-screen">
      {/* Optimized background with preload and better performance */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('/lovable-uploads/808e8413-144f-4a4c-834a-cc55fceac706.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -20,
          willChange: 'transform'
        }}
      />
      
      {/* Lighter overlay for better background visibility */}
      <div className="fixed inset-0 pointer-events-none bg-black/25 backdrop-blur-[0.5px]" style={{ zIndex: -15 }} />

      <main className="relative z-10 flex-grow container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Compact hero section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-4 font-nasalization text-glow leading-tight">
              INNOVATIVE SOLUTIONS with cutting-edge technologies
            </h1>
            <h2 className="text-xl md:text-2xl text-alien-green mb-6 font-[Exo] max-w-3xl mx-auto leading-relaxed">
              Improving Energy Efficiency and Environmental Sustainability through professional workflow optimization.
            </h2>
          </div>

          <div className="space-y-8 text-gray-200 font-[Exo]">
            {/* Compact web technologies section */}
            <div className="bg-alien-space-dark/60 p-6 rounded-2xl backdrop-blur-lg border border-alien-gold/30 shadow-2xl">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold text-alien-gold font-nasalization text-glow">
                  Web 5 (Quantum Computing)
                </h3>
                <h3 className="text-2xl font-semibold text-alien-green font-nasalization">
                  Web 4 (A.I. Neural Networks)
                </h3>
                <h3 className="text-2xl font-semibold text-alien-gold font-nasalization">
                  Web 3 (Blockchain)
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-alien-gold to-alien-green mx-auto my-4"></div>
                <p className="text-lg text-center leading-relaxed">
                  AlienFlowSpace DAO is a space that allows users to access, acquire, redeem, buy, sell and exchange Cryptos, NFTs in an easy and secure way.
                </p>
              </div>
            </div>

            {/* Compact four pillars grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-alien-space-dark/60 p-6 rounded-2xl backdrop-blur-lg border border-alien-gold/30 shadow-xl hover:border-alien-gold/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-alien-gold mb-3 font-nasalization text-glow">1st</h3>
                <p className="leading-relaxed">Personalized solutions addressing current challenges and needs.</p>
              </div>
              <div className="bg-alien-space-dark/60 p-6 rounded-2xl backdrop-blur-lg border border-alien-green/30 shadow-xl hover:border-alien-green/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-alien-green mb-3 font-nasalization">2nd</h3>
                <p className="leading-relaxed">Enhanced security through cryptography, blockchain, and quantum computing.</p>
              </div>
              <div className="bg-alien-space-dark/60 p-6 rounded-2xl backdrop-blur-lg border border-alien-gold/30 shadow-xl hover:border-alien-gold/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-alien-gold mb-3 font-nasalization text-glow">3rd</h3>
                <p className="leading-relaxed">Improved decision making through advanced data analysis and artificial intelligence.</p>
              </div>
              <div className="bg-alien-space-dark/60 p-6 rounded-2xl backdrop-blur-lg border border-alien-green/30 shadow-xl hover:border-alien-green/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-alien-green mb-3 font-nasalization">4th</h3>
                <p className="leading-relaxed">WorkFlow optimization promoting energy efficiency and environmental sustainability.</p>
              </div>
            </div>

            {/* Compact mission section */}
            <div className="bg-alien-space-dark/60 p-6 rounded-2xl backdrop-blur-lg border border-alien-gold/30 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-alien-green mb-3 font-nasalization">Our Mission</h3>
                <div className="w-32 h-1 bg-gradient-to-r from-alien-green to-alien-gold mx-auto mb-4"></div>
                <p className="text-lg leading-relaxed">Creating the best experiences and synergies that generate greater value for the planet and its beings, implementing efficient and environmentally sustainable solutions.</p>
              </div>
            </div>

            {/* Compact navigation buttons */}
            <div className="flex flex-wrap justify-center gap-6 my-8">
              <Link to="/academy">
                <Button className="bg-gradient-to-br from-alien-gold to-alien-gold-light hover:from-alien-gold-light hover:to-alien-gold text-alien-space-dark p-6 rounded-2xl text-center w-48 h-20 flex flex-col items-center justify-center shadow-2xl hover:shadow-alien-gold/30 transition-all duration-300 hover:transform hover:scale-110">
                  <GraduationCap className="h-6 w-6 mb-1" />
                  <span className="font-semibold text-lg font-nasalization">Academy</span>
                </Button>
              </Link>
              <Link to="/clubs">
                <Button className="bg-gradient-to-br from-alien-green to-alien-green-light hover:from-alien-green-light hover:to-alien-green text-alien-space-dark p-6 rounded-2xl text-center w-48 h-20 flex flex-col items-center justify-center shadow-2xl hover:shadow-alien-green/30 transition-all duration-300 hover:transform hover:scale-110">
                  <Trophy className="h-6 w-6 mb-1" />
                  <span className="font-semibold text-lg font-nasalization">Clubs</span>
                </Button>
              </Link>
              <Link to="/conetworking">
                <Button className="bg-gradient-to-br from-alien-gold to-alien-gold-light hover:from-alien-gold-light hover:to-alien-gold text-alien-space-dark p-6 rounded-2xl text-center w-48 h-20 flex flex-col items-center justify-center shadow-2xl hover:shadow-alien-gold/30 transition-all duration-300 hover:transform hover:scale-110">
                  <Users className="h-6 w-6 mb-1" />
                  <span className="font-semibold text-lg font-nasalization">CoNetWorKing</span>
                </Button>
              </Link>
            </div>

            {/* Compact DAO information */}
            <div className="bg-alien-space-dark/60 p-6 rounded-2xl backdrop-blur-lg border border-alien-gold/30 shadow-2xl">
              <p className="text-lg leading-relaxed mb-6 text-center">
                Acquire Cryptos, NFTs, tokens to associate and participate in advantages, benefits, profits in the DAO. 
                Join a growing ecosystem of decentralized platforms that support each other through collaboration.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-alien-space-dark/80 p-4 rounded-xl backdrop-blur-md border border-alien-gold/20">
                  <h4 className="text-alien-gold font-semibold mb-2 text-lg font-nasalization text-glow">Decentralization</h4>
                  <p className="text-sm leading-relaxed">Not controlled by a single entity, making it resistant to censorship and manipulation.</p>
                </div>
                <div className="bg-alien-space-dark/80 p-4 rounded-xl backdrop-blur-md border border-alien-green/20">
                  <h4 className="text-alien-green font-semibold mb-2 text-lg font-nasalization">Security</h4>
                  <p className="text-sm leading-relaxed">Protected by blockchain technology, quantum computing and artificial intelligence.</p>
                </div>
                <div className="bg-alien-space-dark/80 p-4 rounded-xl backdrop-blur-md border border-alien-gold/20">
                  <h4 className="text-alien-gold font-semibold mb-2 text-lg font-nasalization text-glow">Transparency</h4>
                  <p className="text-sm leading-relaxed">All transactions and operations are visible and verifiable on blockchain networks.</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-gradient-to-r from-alien-green to-alien-green-light hover:from-alien-green-light hover:to-alien-green text-alien-space-dark font-semibold text-lg px-8 py-3 rounded-full font-nasalization shadow-2xl hover:shadow-alien-green/40 transition-all duration-300 hover:transform hover:scale-105">
                  Access Cryptotokens & NFTs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
