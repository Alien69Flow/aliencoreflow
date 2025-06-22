import React from 'react';
import StarBackground from '@/components/StarBackground';
import { Network, TrendingUp, Shield, Coins, Sprout, Pickaxe, Layers, Dna, FlaskConical, Gamepad2, Database, Zap, Leaf, Building, Users, Landmark, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

type ServiceProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const ServiceCard = ({ service }: { service: ServiceProps }) => (
  <Card className="bg-alien-space-dark/70 backdrop-blur-md border border-alien-gold/30 hover:border-alien-gold/60 transition-all duration-300 hover:scale-105">
    <CardHeader className="text-center">
      <div className={`mx-auto mb-4 p-3 rounded-full ${service.color}`}>
        {service.icon}
      </div>
      <CardTitle className="text-alien-gold font-[Atomic Age] text-xl">{service.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-300 font-[Exo] text-center leading-relaxed">
        {service.description}
      </CardDescription>
    </CardContent>
  </Card>
);

const CoNetWorKing: React.FC = () => {
  const services: ServiceProps[] = [
    {
      title: "AMM (Automated Market Maker)",
      description: "Buy and sell cryptocurrencies in an automated and easy way! Facilitate exchange without the need for intermediaries with automated smart contracts using neural intelligence networks for buying cheap and selling high.",
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-blue-500 to-cyan-400"
    },
    {
      title: "BioFi",
      description: "Revolutionize biotechnology funding through decentralized finance. Support and invest in groundbreaking biological research and medical innovations.",
      icon: <Dna className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-teal-500 to-blue-400"
    },
    {
      title: "DeFi (Decentralized Finance)",
      description: "Explore a new financial approach. Access financial services without depending on traditional institutions, with your own private keys and without exposing sensitive data.",
      icon: <Shield className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-purple-500 to-pink-400"
    },
    {
      title: "DeSci (Decentralized Science)",
      description: "Transform scientific research through blockchain technology. Enable transparent, collaborative, and incentivized scientific discoveries.",
      icon: <FlaskConical className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-indigo-500 to-purple-400"
    },
    {
      title: "Dual Investment",
      description: "Maximize your profits by participating in different investment opportunities at the same time.",
      icon: <Layers className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-green-500 to-emerald-400"
    },
    {
      title: "Farming",
      description: "Sow and reap your rewards. Our permaculture farming system allows you to earn more cryptocurrencies by actively participating in the network.",
      icon: <Sprout className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-lime-500 to-green-400"
    },
    {
      title: "GameFi",
      description: "Play to earn in the new gaming economy. Combine gaming entertainment with financial rewards through blockchain-based gaming platforms.",
      icon: <Gamepad2 className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-violet-500 to-fuchsia-400"
    },
    {
      title: "IPFS",
      description: "Store and share data in a distributed file system. Access decentralized storage solutions that ensure data permanence and censorship resistance.",
      icon: <Database className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-slate-500 to-gray-400"
    },
    {
      title: "QFS (Quantum Financial System)",
      description: "Experience next-generation quantum-secured financial transactions. Benefit from quantum-resistant cryptography and ultra-fast processing.",
      icon: <Zap className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-emerald-500 to-teal-400"
    },
    {
      title: "ReFi (Regenerative Finance)",
      description: "Finance that heals the planet. Invest in projects that create positive environmental and social impact while generating sustainable returns.",
      icon: <Leaf className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-green-600 to-lime-400"
    },
    {
      title: "RWA (Real World Assets)",
      description: "Tokenize real-world assets on the blockchain. Bridge traditional assets with digital finance for enhanced liquidity and accessibility.",
      icon: <Building className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-amber-500 to-orange-400"
    },
    {
      title: "SocialFi",
      description: "Monetize your social interactions and content creation. Earn rewards for engaging with communities and creating valuable social connections.",
      icon: <Users className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-pink-500 to-rose-400"
    },
    {
      title: "Staking",
      description: "Earn by staying active! Our Staking system allows you to earn rewards by keeping your cryptocurrencies with our CoNetWorKing.",
      icon: <Coins className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-red-500 to-pink-400"
    },
    {
      title: "TradFi",
      description: "Bridge traditional finance with decentralized systems. Integrate conventional financial services with blockchain technology for enhanced efficiency.",
      icon: <Landmark className="h-8 w-8 text-white" />,
      color: "bg-gradient-to-br from-blue-600 to-indigo-400"
    }
  ];

  const partners = [
    {
      name: "TechCorp",
      logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=150&h=150&auto=format&fit=crop",
      description: "Leading blockchain infrastructure provider"
    },
    {
      name: "CryptoVault",
      logo: "https://images.unsplash.com/photo-1614851099175-e5b30eb872c7?q=80&w=150&h=150&auto=format&fit=crop",
      description: "Secure digital asset management"
    },
    {
      name: "DeFi Protocol",
      logo: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=150&h=150&auto=format&fit=crop",
      description: "Decentralized finance solutions"
    },
    {
      name: "Neural AI",
      logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=150&h=150&auto=format&fit=crop",
      description: "Advanced AI trading algorithms"
    }
  ];

  const communityMembers = [
    {
      name: "Sophia Chen",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&h=150&auto=format&fit=crop",
      role: "DeFi Strategist",
      location: "Singapore"
    },
    {
      name: "Aria Nakamura",
      avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=150&h=150&auto=format&fit=crop",
      role: "Blockchain Developer",
      location: "Tokyo"
    },
    {
      name: "Luna Rodriguez",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
      role: "NFT Artist",
      location: "Barcelona"
    },
    {
      name: "Zara Al-Rashid",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop",
      role: "Crypto Analyst",
      location: "Dubai"
    },
    {
      name: "Isabella Kim",
      avatar: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?q=80&w=150&h=150&auto=format&fit=crop",
      role: "GameFi Designer",
      location: "Seoul"
    },
    {
      name: "Amara Singh",
      avatar: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=150&h=150&auto=format&fit=crop",
      role: "ReFi Advocate",
      location: "Mumbai"
    }
  ];

  const networkStats = [
    { label: "Active Nodes", value: "47,293", change: "+2.8%", icon: Network },
    { label: "BTC Volume", value: "$3.7B", change: "+15.2%", icon: Coins },
    { label: "Global Reach", value: "189", change: "+7 countries", icon: Globe },
    { label: "TPS Network", value: "28,459", change: "+31.4%", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-alien-space relative overflow-hidden">
      {/* Background Network Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/debf8db3-f2a1-4235-9e43-f6b8ba371818.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="fixed inset-0 bg-black/60 z-10" />
      
      <StarBackground />
      
      <main className="container mx-auto px-4 pt-32 pb-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <Network className="h-20 w-20 text-alien-gold mx-auto mb-6 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold text-alien-gold mb-8 font-[Atomic Age, Star Wars] text-glow">
              CoNetWorKing
            </h1>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto font-[Exo] leading-relaxed">
              Connect with the future of decentralized finance through our comprehensive suite of blockchain services
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-alien-gold mb-12 text-center font-[Atomic Age]">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>

          {/* Partners Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-alien-gold mb-12 text-center font-[Atomic Age]">
              Our Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <Card key={index} className="bg-alien-space-dark/70 backdrop-blur-md border border-alien-gold/30 hover:border-alien-gold/60 transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-20 h-20 rounded-full overflow-hidden border-2 border-alien-gold">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-alien-gold font-[Atomic Age] text-lg">
                      {partner.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-300 font-[Exo] text-center text-sm">
                      {partner.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Global Community Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-alien-gold mb-12 text-center font-[Atomic Age]">
              Global Community
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {communityMembers.map((member, index) => (
                <Card key={index} className="bg-alien-space-dark/70 backdrop-blur-md border border-alien-gold/30 hover:border-alien-gold/60 transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <Avatar className="mx-auto mb-4 w-20 h-20 border-2 border-alien-gold">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-alien-gold font-[Atomic Age] text-lg">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-alien-green font-[Exo]">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-gray-300 font-[Exo] text-sm">
                      📍 {member.location}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Real-time Network Stats */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-alien-gold mb-12 text-center font-[Atomic Age]">
              Live Network Stats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {networkStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="bg-alien-space-dark/70 backdrop-blur-md border border-alien-gold/30 hover:border-alien-gold/60 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <IconComponent className="h-8 w-8 text-alien-green mx-auto mb-4 animate-pulse" />
                      <div className="text-2xl font-bold text-alien-gold font-[Atomic Age] mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-300 font-[Exo] text-sm mb-2">
                        {stat.label}
                      </div>
                      <div className="text-alien-green font-[Exo] text-xs">
                        {stat.change}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-alien-green/20 to-alien-gold/20 rounded-xl p-12 text-center backdrop-blur-md border border-alien-gold/30">
            <Network className="h-16 w-16 text-alien-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-alien-gold mb-4 font-[Atomic Age]">
              Ready to Join the Network?
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-8 font-[Exo] text-lg">
              Start your journey into decentralized finance and connect with a global network of innovators and investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-alien-gold hover:bg-alien-gold/90 text-alien-space-dark font-[Exo] px-8 py-3 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-alien-green text-alien-green hover:bg-alien-green/10 font-[Exo] px-8 py-3 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoNetWorKing;
