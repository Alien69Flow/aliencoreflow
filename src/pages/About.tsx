import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Trophy } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="relative flex flex-col flex-1">
      {/* Contenido principal */}
      <main className="relative z-10 flex-grow container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-4 font-nasalization">
            We offer INNOVATIVE SOLUTIONS with cutting-edge
            technologies
          </h1>
          <h2 className="text-2xl text-alien-green mb-8 font-[Exo]">
            Improving Energy Efficiency and Environmental
            Sustainability, managing to professionally
            improve work flows and processes, this is
            WorkFlow.
          </h2>
          <div className="space-y-8 text-gray-300 font-[Exo]">
            <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
              <h3 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization">
                Web 5 (Quantum Computing)
              </h3>
              <h3 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization">
                Web 4 (A.I. Neural Networks)
              </h3>
              <h3 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization">
                Web 3 (Blockchain)
              </h3>
              <p className="text-lg">
                AlienFlowSpace DAO = (Decentralized
                Autonomous Organization) is a space that
                allows users; access, acquire, redeem, buy,
                sell and exchange Cryptos, NFTs in an easy
                and secure way. [...]
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
                <h3 className="text-xl font-semibold text-alien-gold mb-3 font-nasalization">
                  1st
                </h3>
                <p>
                  We are committed to providing personalized
                  solutions that address current challenges
                  and needs.
                </p>
              </div>
              <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
                <h3 className="text-xl font-semibold text-alien-gold mb-3 font-nasalization">
                  2nd
                </h3>
                <p>
                  Greater security by being able to trust
                  the management of data and transactions
                  thanks to the use of cryptography,
                  blockchain, and quantum computing.
                </p>
              </div>
              <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
                <h3 className="text-xl font-semibold text-alien-gold mb-3 font-nasalization">
                  3rd
                </h3>
                <p>
                  Improvement in decision making thanks to
                  advanced data analysis and the application
                  of artificial intelligence, raising
                  awareness about gestal consciousness,
                  generating synergies, and more.
                </p>
              </div>
              <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
                <h3 className="text-xl font-semibold text-alien-gold mb-3 font-nasalization">
                  4th
                </h3>
                <p>
                  Optimization of WorkFlow (processes and
                  work flows) promoting energy efficiency
                  and environmental sustainability, in
                  addition to adding value and reducing
                  costs.
                </p>
              </div>
            </div>

            <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
              <h3 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization">
                Our mission
              </h3>
              <p className="mb-6">
                Create the best experiences and synergies
                that generate greater value for the planet
                and its beings, implementing environmentally
                friendly solutions.
              </p>
              <h3 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization">
                Our values
              </h3>
              <p className="mb-6">
                Create the best experiences and synergies
                that generate greater value for the planet
                and its beings, implementing environmentally
                friendly solutions.
              </p>
              <p>
                Our main objective is to disseminate
                knowledge to provide a greater understanding
                of wisdom in different fields and concepts,
                such as digitalization, efficiency,
                sustainability, and more.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <Link to="/academy">
                <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark p-6 rounded-lg text-center w-48 h-20 flex flex-col items-center justify-center">
                  <GraduationCap className="h-6 w-6 mb-2" />
                  <span className="font-semibold font-nasalization">Academy</span>
                </Button>
              </Link>
              <Link to="/conetworking">
                <Button className="bg-alien-green hover:bg-alien-green-light text-alien-space-dark p-6 rounded-lg text-center w-48 h-20 flex flex-col items-center justify-center">
                  <Users className="h-6 w-6 mb-2" />
                  <span className="font-semibold font-nasalization">CoNetworking</span>
                </Button>
              </Link>
              <Link to="/clubs">
                <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark p-6 rounded-lg text-center w-48 h-20 flex flex-col items-center justify-center">
                  <Trophy className="h-6 w-6 mb-2" />
                  <span className="font-semibold font-nasalization">Club</span>
                </Button>
              </Link>
            </div>

            <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
              <p className="mb-6">
                Acquire Cryptos, NFTs, Tokens to Associate
                and participate in Advantages, Benefits,
                Profits… in the DAO… + We also collaborate
                with Big Brands & International
                organizations.
              </p>
              <h3 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization">
                Association
              </h3>
              <p className="mb-6">
                We have an active, committed and dedicated
                community of farmers, artists, scientists,
                creators, developers, entrepreneurs,
                investment companies, researchers,
                businesses and more.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-alien-space-dark/80 p-4 rounded-lg backdrop-blur-md border border-alien-gold/20">
                  <h4 className="text-alien-gold font-semibold mb-2 font-nasalization">
                    Decentralization
                  </h4>
                  <p>
                    It means that it is not controlled by a
                    single entity, person or being. This
                    makes it more resistant to censorship
                    and manipulation.
                  </p>
                </div>
                <div className="bg-alien-space-dark/80 p-4 rounded-lg backdrop-blur-md border border-alien-gold/20">
                  <h4 className="text-alien-gold font-semibold mb-2 font-nasalization">
                    Decentralization
                  </h4>
                  <p>
                    Allows users to exchange their cryptos &
                    NFTs for other assets, meaning they have
                    more options and flexibility to manage
                    their assets.
                  </p>
                </div>
                <div className="bg-alien-space-dark/80 p-4 rounded-lg backdrop-blur-md border border-alien-gold/20">
                  <h4 className="text-alien-gold font-semibold mb-2 font-nasalization">
                    Liquidity
                  </h4>
                  <p>
                    Offers great liquidity for users who
                    want to buy or sell their
                    cryptocurrencies and NFTs. This means
                    that users can quickly and easily
                    convert their cryptocurrencies and NFTs
                    to other assets.
                  </p>
                </div>
                <div className="bg-alien-space-dark/80 p-4 rounded-lg backdrop-blur-md border border-alien-gold/20">
                  <h4 className="text-alien-gold font-semibold mb-2 font-nasalization">
                    Security
                  </h4>
                  <p>
                    Thanks to the use of blockchain
                    technology, quantum computing and
                    artificial intelligence, which means
                    that all transactions are secure and
                    protected against fraud and hacking.
                  </p>
                </div>
              </div>
              <div className="bg-alien-space-dark/80 p-4 rounded-lg backdrop-blur-md border border-alien-gold/20 mb-6">
                <h4 className="text-alien-gold font-semibold mb-2 font-nasalization">
                  Transparency
                </h4>
                <p>
                  This is completely transparent, meaning
                  that users can see and verify all
                  transactions and operations that occur on
                  blockchain networks.
                </p>
              </div>
              <div className="text-center">
                <Button className="bg-alien-green hover:bg-alien-green-light text-alien-space-dark font-semibold text-lg px-8 py-3 rounded-full font-nasalization">
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
