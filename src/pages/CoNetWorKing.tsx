
import React from 'react';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Network, Zap, Globe, Users, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CoNetWorKing: React.FC = () => {
  const networkStats = [
    { label: "Active Nodes", value: "12,435", icon: <Network className="h-6 w-6 text-alien-gold" /> },
    { label: "Total Connections", value: "5.2M", icon: <Activity className="h-6 w-6 text-alien-gold" /> },
    { label: "Network Power", value: "843 TH/s", icon: <Zap className="h-6 w-6 text-alien-gold" /> },
    { label: "Ecosystems Connected", value: "17", icon: <Globe className="h-6 w-6 text-alien-gold" /> },
  ];

  const connectedEcosystems = [
    { name: "BioFi Network", nodes: 2134, uptime: "99.8%" },
    { name: "DeFi Alliance", nodes: 4569, uptime: "99.9%" },
    { name: "SocialFi Collective", nodes: 1782, uptime: "99.7%" },
    { name: "DeSci Consortium", nodes: 1623, uptime: "99.5%" },
    { name: "GameFi Nexus", nodes: 2327, uptime: "99.8%" },
  ];

  return (
    <div className="min-h-screen bg-alien-space">
      <StarBackground />
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-4">CoNetWorKing</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our interplanetary network infrastructure connecting diverse blockchain ecosystems across the multiverse.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {networkStats.map((stat, index) => (
              <div key={index} className="bg-alien-space-dark/50 rounded-lg p-6 backdrop-blur-md border border-alien-gold/10 hover:border-alien-gold/30 transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-alien-space-light p-2 rounded-lg">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-alien-green mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="bg-alien-space-dark/50 rounded-lg p-6 backdrop-blur-md h-full">
                <h2 className="text-2xl font-bold text-alien-gold mb-6">Network Visualization</h2>
                <div className="bg-alien-space-light rounded-lg h-80 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-pulse text-alien-green text-opacity-50">
                      <Network className="h-40 w-40" />
                    </div>
                  </div>
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(circle, rgba(0,255,0,0.1) 0%, rgba(0,0,0,0) 70%)' }}></div>
                  {/* This would be replaced by an actual network visualization component */}
                </div>
                <div className="mt-4 text-center text-gray-400">
                  Interactive network visualization - connect your wallet to view in real-time
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-alien-space-dark/50 rounded-lg p-6 backdrop-blur-md h-full">
                <h2 className="text-2xl font-bold text-alien-gold mb-6">Connected Ecosystems</h2>
                <div className="space-y-4">
                  {connectedEcosystems.map((eco, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-alien-space-light rounded-lg hover:bg-alien-space-light/70 transition-colors">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                        <span className="text-alien-gold">{eco.name}</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        {eco.nodes} nodes | {eco.uptime}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button className="w-full bg-alien-green hover:bg-alien-green/80 text-alien-space-dark">
                    <Globe className="mr-2 h-5 w-5" />
                    View All Ecosystems
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-alien-space-dark/70 rounded-lg p-8 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-alien-gold mb-4">Become a Network Validator</h2>
                <p className="text-gray-300 mb-6">
                  Contribute to the decentralization and security of our cosmos by running a validator node and earn rewards in our native token.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-alien-gold rounded-full p-1 mt-1 mr-3">
                      <Zap className="h-4 w-4 text-alien-space-dark" />
                    </div>
                    <div>
                      <h3 className="text-alien-green font-medium">Earn Staking Rewards</h3>
                      <p className="text-sm text-gray-400">Receive a share of transaction fees and newly minted tokens.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-alien-gold rounded-full p-1 mt-1 mr-3">
                      <Users className="h-4 w-4 text-alien-space-dark" />
                    </div>
                    <div>
                      <h3 className="text-alien-green font-medium">Governance Power</h3>
                      <p className="text-sm text-gray-400">Participate in network decisions and protocol upgrades.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark">
                    Become a Validator
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden relative h-60">
                <div className="absolute inset-0 bg-gradient-to-br from-alien-gold/20 to-alien-green/20 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <Network className="h-24 w-24 text-alien-gold opacity-70" />
                </div>
                <div className="absolute inset-0 bg-alien-space-light/20"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoNetWorKing;
