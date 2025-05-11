
import React from 'react';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, BookOpen, Video, Users, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CourseCard = ({ title, description, icon, level, duration, color }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  level: string;
  duration: string;
  color: string;
}) => (
  <div className="bg-alien-space-dark/50 backdrop-blur-md rounded-lg overflow-hidden border border-alien-gold/20 hover:border-alien-gold/50 transition-all hover:transform hover:scale-[1.01]">
    <div className={`h-2 ${color}`}></div>
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-alien-space-light rounded-full">
          {icon}
        </div>
        <div className="flex space-x-2">
          <span className="px-2 py-1 text-xs bg-alien-space-light rounded-full text-alien-gold">{level}</span>
          <span className="px-2 py-1 text-xs bg-alien-space-light rounded-full text-alien-green">{duration}</span>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-alien-gold font-nasalization">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <Button variant="outline" className="w-full border-alien-gold/30 text-alien-gold hover:bg-alien-gold/10">
        Explore Course
      </Button>
    </div>
  </div>
);

const Academy: React.FC = () => {
  const courses = [
    {
      title: "Blockchain Fundamentals",
      description: "Learn the core concepts of blockchain technology, cryptocurrencies, and decentralized networks.",
      icon: <BookOpen className="h-6 w-6 text-alien-gold" />,
      level: "Beginner",
      duration: "6 hours",
      color: "bg-green-500"
    },
    {
      title: "DeFi Mastery",
      description: "Dive deep into decentralized finance protocols, yield farming, and liquidity provision.",
      icon: <Sparkles className="h-6 w-6 text-alien-gold" />,
      level: "Intermediate",
      duration: "12 hours",
      color: "bg-blue-500"
    },
    {
      title: "Tokenomics Design",
      description: "Understand how to create sustainable token economies and incentive mechanisms.",
      icon: <Award className="h-6 w-6 text-alien-gold" />,
      level: "Advanced",
      duration: "8 hours",
      color: "bg-purple-500"
    },
    {
      title: "Smart Contract Development",
      description: "Learn to code, deploy, and audit secure smart contracts on multiple blockchains.",
      icon: <BookOpen className="h-6 w-6 text-alien-gold" />,
      level: "Advanced",
      duration: "15 hours",
      color: "bg-red-500"
    },
    {
      title: "DAO Governance",
      description: "Master the principles of decentralized governance and community coordination.",
      icon: <Users className="h-6 w-6 text-alien-gold" />,
      level: "Intermediate",
      duration: "9 hours",
      color: "bg-yellow-500"
    },
    {
      title: "Web3 Privacy & Security",
      description: "Protect your assets and identity in the decentralized ecosystem.",
      icon: <Video className="h-6 w-6 text-alien-gold" />,
      level: "All Levels",
      duration: "7 hours",
      color: "bg-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-alien-space">
      <StarBackground />
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <GraduationCap className="h-16 w-16 text-alien-gold mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-6 font-nasalization">Academy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-[Exo]">
              Expand your cosmic knowledge and master the principles of decentralized technologies through our immersive learning experiences.
            </p>
          </div>

          {/* Featured Course */}
          <div className="mb-16 bg-alien-space-dark/60 rounded-xl overflow-hidden backdrop-blur-md border border-alien-gold/30">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-alien-gold mb-4 font-nasalization">Certification Degree Master's Program</h2>
                <p className="text-gray-300 mb-6 font-[Exo]">
                  Become a certified ΔlieπFlΦw $pac€ Explorer & Navigator and unlock exclusive opportunities in our expanding cosmic ecosystem.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-alien-green rounded-full mr-2"></div>
                    <p className="text-alien-green">161 interactive modules</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-alien-green rounded-full mr-2"></div>
                    <p className="text-alien-green">Bootcamps with Live mentoring sessions</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-alien-green rounded-full mr-2"></div>
                    <p className="text-alien-green">On-chain credential NFT</p>
                  </div>
                </div>
                <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-[Exo]">
                  Join Waitlist
                </Button>
              </div>
              <div className="bg-gradient-to-tr from-alien-green/30 to-alien-gold/30 p-8 flex items-center justify-center">
                <GraduationCap className="h-32 w-32 text-alien-gold" />
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-alien-gold mb-8 font-nasalization">Featured Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-alien-space-dark/50 rounded-xl p-8 backdrop-blur-md border border-alien-gold/20">
            <h2 className="text-2xl font-bold text-alien-gold mb-4 font-nasalization">Ready to Expand Your Cosmic Knowledge?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto font-[Exo]">
              Join thousands of space navigators on their journey to master the principles of the decentralized multiverse.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-[Exo]">
                Explore All Courses
              </Button>
              <Button variant="outline" className="border-alien-green text-alien-green hover:bg-alien-green/20 font-[Exo]">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Academy;
