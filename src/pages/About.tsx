
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Trophy } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="relative flex flex-col flex-1 min-h-screen">
      {/* New cosmic background with improved overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('/lovable-uploads/808e8413-144f-4a4c-834a-cc55fceac706.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -20
        }}
      />
      
      {/* Improved overlay for better text readability */}
      <div className="fixed inset-0 pointer-events-none bg-black/40 backdrop-blur-[1px]" style={{ zIndex: -15 }} />

      {/* Main content */}
      <main className="relative z-10 flex-grow container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero section with improved styling */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-alien-gold mb-6 font-nasalization text-glow leading-tight">
              We offer INNOVATIVE SOLUTIONS with cutting-edge technologies
            </h1>
            <h2 className="text-xl md:text-2xl text-alien-green mb-8 font-[Exo] max-w-3xl mx-auto leading-relaxed">
              Improving Energy Efficiency and Environmental Sustainability, managing to professionally improve work flows and processes, this is WorkFlow.
            </h2>
          </div>

          <div className="space-y-10 text-gray-200 font-[Exo]">
            {/* Web technologies section with enhanced design */}
            <div className="bg-alien-space-dark/80 p-8 rounded-2xl backdrop-blur-lg border border-alien-gold/30 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-3xl font-semibold text-alien-gold mb-2 font-nasalization text-glow">
                    Web 5 (Quantum Computing)
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-alien-gold to-alien-green mx-auto mb-4"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-semibold text-alien-green mb-2 font-nasalization">
                    Web 4 (A.I. Neural Networks)
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-alien-green to-alien-gold mx-auto mb-4"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-semibold text-alien-gold mb-4 font-nasalization">
                    Web 3 (Blockchain)
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-alien-gold to-alien-green mx-auto mb-6"></div>
                </div>
                <p className="text-lg text-center leading-relaxed">
                  AlienFlowSpace DAO = (Decentralized Autonomous Organization) is a space that allows users; access, acquire, redeem, buy, sell and exchange Cryptos, NFTs in an easy and secure way. [...]
                </p>
              </div>
            </div>

            {/* Four pillars section with improved grid and cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-alien-space-dark/80 p-8 rounded-2xl backdrop-blur-lg border border-alien-gold/30 shadow-xl hover:border-alien-gold/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-alien-gold mb-4 font-nasalization text-glow">
                  1st
                </h3>
                <p className="leading-relaxed">
                  We are committed to providing personalized solutions that address current challenges and needs.
                </p>
              </div>
              <div className="bg-alien-space-dark/80 p-8 rounded-2xl backdrop-blur-lg border border-alien-green/30 shadow-xl hover:border-alien-green/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization">
                  2nd
                </h3>
                <p className="leading-relaxed">
                  Greater security by being able to trust the management of data and transactions thanks to the use of cryptography, blockchain, and quantum computing.
                </p>
              </div>
              <div className="bg-alien-space-dark/80 p-8 rounded-2xl backdrop-blur-lg border border-alien-gold/30 shadow-xl hover:border-alien-gold/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-alien-gold mb-4 font-nasalization text-glow">
                  3rd
                </h3>
                <p className="leading-relaxed">
                  Improvement in decision making thanks to advanced data analysis and the application of artificial intelligence, raising awareness about gestal consciousness, generating synergies, and more.
                </p>
              </div>
              <div className="bg-alien-space-dark/80 p-8 rounded-2xl backdrop-blur-lg border border-alien-green/30 shadow-xl hover:border-alien-green/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization">
                  4th
                </h3>
                <p className="leading-relaxed">
                  Optimization of WorkFlow (processes and work flows) promoting energy efficiency and environmental sustainability, in addition to adding value and reducing costs.
                </p>
              </div>
            </div>

            {/* Mission and Values section */}
            <div className="bg-alien-space-dark/80 p-8 rounded-2xl backdrop-blur-lg border border-alien-gold/30 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-semibold text-alien-green mb-4 font-nasalization">
                  Our Mission
                </h3>
                <div className="w-32 h-1 bg-gradient-to-r from-alien-green to-alien-gold mx-auto mb-6"></div>
                <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                  Create the best experiences and synergies that generate greater value for the planet and its beings, implementing environmentally friendly solutions.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-semibold text-alien-gold mb-4 font-nasalization text-glow">
                  Our Values
                </h3>
                <div className="w-32 h-1 bg-gradient-to-r from-alien-gold to-alien-green mx-auto mb-6"></div>
                <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6">
                  Create the best experiences and synergies that generate greater value for the planet and its beings, implementing environmentally friendly solutions.
                </p>
                <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                  Our main objective is to disseminate knowledge to provide a greater understanding of wisdom in different fields and concepts, such as digitalization, efficiency, sustainability, and more.
                </p>
              </div>
            </div>

            {/* Navigation Buttons - Reordered: Academy, Clubs, CoNetworking */}
            <div className="flex flex-wrap justify-center gap-8 my-12">
              <Link to="/academy">
                <Button className="bg-gradient-to-br from-alien-gold to-alien-gold-light hover:from-alien-gold-light hover:to-alien-gold text-alien-space-dark p-8 rounded-2xl text-center w-56 h-24 flex flex-col items-center justify-center shadow-2xl hover:shadow-alien-gold/30 transition-all duration-300 hover:transform hover:scale-110">
                  <GraduationCap className="h-8 w-8 mb-2" />
                  <span className="font-semibold text-lg font-nasalization">Academy</span>
                </Button>
              </Link>
              <Link to="/clubs">
                <Button className="bg-gradient-to-br from-alien-green to-alien-green-light hover:from-alien-green-light hover:to-alien-green text-alien-space-dark p-8 rounded-2xl text-center w-56 h-24 flex flex-col items-center justify-center shadow-2xl hover:shadow-alien-green/30 transition-all duration-300 hover:transform hover:scale-110">
                  <Trophy className="h-8 w-8 mb-2" />
                  <span className="font-semibold text-lg font-nasalization">Clubs</span>
                </Button>
              </Link>
              <Link to="/conetworking">
                <Button className="bg-gradient-to-br from-alien-gold to-alien-gold-light hover:from-alien-gold-light hover:to-alien-gold text-alien-space-dark p-8 rounded-2xl text-center w-56 h-24 flex flex-col items-center justify-center shadow-2xl hover:shadow-alien-gold/30 transition-all duration-300 hover:transform hover:scale-110">
                  <Users className="h-8 w-8 mb-2" />
                  <span className="font-semibold text-lg font-nasalization">CoNetworking</span>
                </Button>
              </Link>
            </div>

            {/* DAO Information section with enhanced design */}
            <div className="bg-alien-space-dark/80 p-8 rounded-2xl backdrop-blur-lg border border-alien-gold/30 shadow-2xl">
              <p className="text-lg leading-relaxed mb-8 text-center">
                Acquire Cryptos, NFTs, Tokens to Associate and participate in Advantages, Benefits, Profits… in the DAO… + We also collaborate with Big Brands & International organizations.
              </p>
              
              <div className="text-center mb-8">
                <h3 className="text-3xl font-semibold text-alien-green mb-4 font-nasalization">
                  Association
                </h3>
                <div className="w-32 h-1 bg-gradient-to-r from-alien-green to-alien-gold mx-auto mb-6"></div>
                <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-8">
                  We have an active, committed and dedicated community of farmers, artists, scientists, creators, developers, entrepreneurs, investment companies, researchers, businesses and more.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-alien-space-dark/90 p-6 rounded-xl backdrop-blur-md border border-alien-gold/20 hover:border-alien-gold/40 transition-all duration-300">
                  <h4 className="text-alien-gold font-semibold mb-3 text-xl font-nasalization text-glow">
                    Decentralization
                  </h4>
                  <p className="leading-relaxed">
                    It means that it is not controlled by a single entity, person or being. This makes it more resistant to censorship and manipulation.
                  </p>
                </div>
                <div className="bg-alien-space-dark/90 p-6 rounded-xl backdrop-blur-md border border-alien-green/20 hover:border-alien-green/40 transition-all duration-300">
                  <h4 className="text-alien-green font-semibold mb-3 text-xl font-nasalization">
                    Flexibility
                  </h4>
                  <p className="leading-relaxed">
                    Allows users to exchange their cryptos & NFTs for other assets, meaning they have more options and flexibility to manage their assets.
                  </p>
                </div>
                <div className="bg-alien-space-dark/90 p-6 rounded-xl backdrop-blur-md border border-alien-gold/20 hover:border-alien-gold/40 transition-all duration-300">
                  <h4 className="text-alien-gold font-semibold mb-3 text-xl font-nasalization text-glow">
                    Liquidity
                  </h4>
                  <p className="leading-relaxed">
                    Offers great liquidity for users who want to buy or sell their cryptocurrencies and NFTs. This means that users can quickly and easily convert their cryptocurrencies and NFTs to other assets.
                  </p>
                </div>
                <div className="bg-alien-space-dark/90 p-6 rounded-xl backdrop-blur-md border border-alien-green/20 hover:border-alien-green/40 transition-all duration-300">
                  <h4 className="text-alien-green font-semibold mb-3 text-xl font-nasalization">
                    Security
                  </h4>
                  <p className="leading-relaxed">
                    Thanks to the use of blockchain technology, quantum computing and artificial intelligence, which means that all transactions are secure and protected against fraud and hacking.
                  </p>
                </div>
              </div>
              
              <div className="bg-alien-space-dark/90 p-6 rounded-xl backdrop-blur-md border border-alien-gold/20 mb-8 text-center">
                <h4 className="text-alien-gold font-semibold mb-3 text-xl font-nasalization text-glow">
                  Transparency
                </h4>
                <p className="leading-relaxed">
                  This is completely transparent, meaning that users can see and verify all transactions and operations that occur on blockchain networks.
                </p>
              </div>
              
              <div className="text-center">
                <Button className="bg-gradient-to-r from-alien-green to-alien-green-light hover:from-alien-green-light hover:to-alien-green text-alien-space-dark font-semibold text-xl px-12 py-4 rounded-full font-nasalization shadow-2xl hover:shadow-alien-green/40 transition-all duration-300 hover:transform hover:scale-105">
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
