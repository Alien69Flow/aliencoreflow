import React from 'react';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

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
            backgroundImage: `url('/lovable-uploads/8073e719-1a1a-4b94-922a-f671654b2890.png')` 
          }}
        ></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-4 font-nasalization">
            We offer INNOVATIVE SOLUTIONS with cutting-edge technologies
          </h1>
          
          <h2 className="text-2xl text-alien-green mb-8 font-[Exo]">
            Improving Energy Efficiency and Environmental Sustainability, managing
            to professionally improve work flows and processes, this is WorkFlow.
          </h2>
          
          <div className="space-y-8 text-gray-300 font-[Exo]">
            <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
              <h3 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization">Web 5 (Quantum Computing)</h3>
              <h3 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization">Web 4 (A.I. Neural Networks)</h3>
              <h3 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization">Web 3 (Blockchain)</h3>
              <p className="text-lg">
                AlienFlowSpace DAO = (Decentralized Autonomous Organization) is a space that allows users; access, acquire, redeem, buy, sell and exchange Cryptos, NFTs in an easy and secure way. Some of the benefits and advantages are:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
                <h3 className="text-xl font-semibold text-alien-gold mb-3 font-nasalization">1st</h3>
                <p>We are committed to providing personalized solutions that address current challenges and needs.</p>
              </div>
              <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
                <h3 className="text-xl font-semibold text-alien-gold mb-3 font-nasalization">2nd</h3>
                <p>Greater security by being able to trust the management of data and transactions thanks to the use of cryptography, blockchain, and quantum computing.</p>
              </div>
              <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
                <h3 className="text-xl font-semibold text-alien-gold mb-3 font-nasalization">3rd</h3>
                <p>Improvement in decision making thanks to advanced data analysis and the application of artificial intelligence, raising awareness about gestal consciousness, generating synergies between ancestral techniques and cutting-edge technologies, interconnecting sectors such as medicine, nutrition, psychology, health with permaculture.</p>
              </div>
              <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
                <h3 className="text-xl font-semibold text-alien-gold mb-3 font-nasalization">4th</h3>
                <p>Optimization of WorkFlow (processes and work flows) promoting energy efficiency and environmental sustainability, in addition to adding value and reducing costs.</p>
              </div>
            </div>
            
            <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
              <h3 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization">Our mission</h3>
              <p className="mb-6">Create the best experiences and synergies that generate greater value for the planet and its beings, implementing environmentally friendly solutions.</p>
              
              <h3 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization">Our values</h3>
              <p className="mb-6">Create the best experiences and synergies that generate greater value for the planet and its beings, implementing environmentally friendly solutions.</p>
              
              <p>Our main objective is to disseminate knowledge to provide a greater understanding of wisdom in different fields and concepts, such as digitalization, efficiency, sustainability, and of course, transcendent topics. We promote the sustainable growth and development of the environment and its beings so that they can achieve a lifestyle in harmony with the cosmos and its nature. Here you will learn to interpret and improve your quality of life, as well as generate greater profits with your finances. We offer you an academy to learn and delve into the most relevant topics, clubs to meet and connect with other beings related to your interests and exchange experiences, fully customizable products and services, as well as CoNetWorKing spaces and tools establishing lasting collaborations to make the best business…</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-alien-space-dark/80 p-4 rounded-lg backdrop-blur-md border border-alien-gold/20 text-center w-48">
                <h4 className="text-alien-gold font-semibold mb-2 font-nasalization">Academy</h4>
              </div>
              <div className="bg-alien-space-dark/80 p-4 rounded-lg backdrop-blur-md border border-alien-gold/20 text-center w-48">
                <h4 className="text-alien-gold font-semibold mb-2 font-nasalization">CoNetworking</h4>
              </div>
              <div className="bg-alien-space-dark/80 p-4 rounded-lg backdrop-blur-md border border-alien-gold/20 text-center w-48">
                <h4 className="text-alien-gold font-semibold mb-2 font-nasalization">Club</h4>
              </div>
            </div>
            
            <div className="bg-alien-space-dark/60 p-6 rounded-lg backdrop-blur-md border border-alien-gold/20">
              <p className="mb-6">Acquire Cryptos, NFTs, Tokens to Associate and participate in Advantajes, Benefits, Profits… in the DAO… + We also collaborate with Big Brands & International Platforms from Affiliate programs, Referral Marketing, on demand Suppliers… + Join a Growing Ecosystem of Affiliations, Applications, Associations and Decentralized Platforms that support each other by collaborating in networks with algorithms and consensus protocols for smart contracts that promote, in addition to promoting Energy Efficiency & Environmental Sustainability on the Planet. · We serve a wide range of clients; including artists, creators, developers, entrepreneurs, companies, farmers, investors, researchers, scientists and users…</p>
              
              <h3 className="text-2xl font-semibold text-alien-green mb-4 font-nasalization">Association</h3>
              <p className="mb-6">We have an active, committed and dedicated community of farmers, artists, scientists, creators, developers, entrepreneurs, investment companies, researchers, businesses, users who work together, creating new functionalities, that contribute, add, multiply the initiatives and Energy Efficiency & Environmental Sustainability proposals that make this Planet a Better World</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-alien-space-dark/80 p-4 rounded-lg backdrop-blur-md border border-alien-gold/20">
                  <h4 className="text-alien-gold font-semibold mb-2 font-nasalization">Decentralization</h4>
                  <p>it means that it is not controlled by a single entity, person or being. This makes it more resistant to censorship and manipulation.</p>
                </div>
                <div className="bg-alien-space-dark/80 p-4 rounded-lg backdrop-blur-md border border-alien-gold/20">
                  <h4 className="text-alien-gold font-semibold mb-2 font-nasalization">Decentralization</h4>
                  <p>Allows users to exchange their cryptos & NFTs for other assets, meaning they have more options and flexibility to manage their assets.</p>
                </div>
                <div className="bg-alien-space-dark/80 p-4 rounded-lg backdrop-blur-md border border-alien-gold/20">
                  <h4 className="text-alien-gold font-semibold mb-2 font-nasalization">Liquidity</h4>
                  <p>Offers great liquidity for users who want to buy or sell their cryptocurrencies and NFTs. This means that users can quickly and easily convert their cryptocurrencies and NFTs into cash</p>
                </div>
                <div className="bg-alien-space-dark/80 p-4 rounded-lg backdrop-blur-md border border-alien-gold/20">
                  <h4 className="text-alien-gold font-semibold mb-2 font-nasalization">Security</h4>
                  <p>Thanks to the use of blockchain technology, quantum computing and artificial intelligence, which means that all transactions are secure and protected against fraud and hacking</p>
                </div>
              </div>
              
              <div className="bg-alien-space-dark/80 p-4 rounded-lg backdrop-blur-md border border-alien-gold/20 mb-6">
                <h4 className="text-alien-gold font-semibold mb-2 font-nasalization">Transparency</h4>
                <p>This completely transparent, meaning that users can see and verify all transactions and operations that occur on blockchain networks.</p>
              </div>
              
              <div className="text-center">
                <Button className="bg-alien-green hover:bg-alien-green-light text-alien-space-dark font-semibold text-lg px-8 py-3 rounded-full">
                  Access Cryptotokens & NFTs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
