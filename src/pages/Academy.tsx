
import React from 'react';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Book, BookOpen, Video, Certificate, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Academy: React.FC = () => {
  const courses = [
    {
      title: "Blockchain Fundamentals",
      description: "Learn the core concepts of blockchain technology and its applications.",
      icon: <Book className="h-8 w-8 text-alien-green" />,
      level: "Beginner",
      modules: 8,
      duration: "4 weeks"
    },
    {
      title: "DAO Governance",
      description: "Understand how decentralized autonomous organizations operate and govern.",
      icon: <Users className="h-8 w-8 text-alien-green" />,
      level: "Intermediate",
      modules: 6,
      duration: "3 weeks"
    },
    {
      title: "Advanced Smart Contracts",
      description: "Master the art of creating and auditing secure smart contracts.",
      icon: <Certificate className="h-8 w-8 text-alien-green" />,
      level: "Advanced",
      modules: 10,
      duration: "6 weeks"
    }
  ];

  return (
    <div className="min-h-screen bg-alien-space">
      <StarBackground />
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-4">AlienFlowSpace Academy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expand your knowledge of the cosmic blockchain multiverse through our curated courses and learning paths.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {courses.map((course, index) => (
              <div key={index} className="bg-alien-space-dark/50 rounded-lg overflow-hidden backdrop-blur-md hover:shadow-lg hover:shadow-alien-green/20 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-alien-space-light p-2 rounded-lg">
                      {course.icon}
                    </div>
                    <span className="bg-alien-gold/20 text-alien-gold px-3 py-1 rounded-full text-sm">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-alien-gold mb-2">{course.title}</h3>
                  <p className="text-gray-300 mb-4">{course.description}</p>
                  <div className="flex justify-between text-sm text-gray-400 mb-6">
                    <span>{course.modules} modules</span>
                    <span>{course.duration}</span>
                  </div>
                  <Button className="w-full bg-alien-green hover:bg-alien-green/80 text-alien-space-dark">
                    Enroll Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-alien-space-dark/70 rounded-lg p-8 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-alien-gold mb-4">Become an Alien Scholar</h2>
                <p className="text-gray-300 mb-6">
                  Join our exclusive learning community and get access to premium courses, one-on-one mentoring with blockchain experts, and certificates recognized across the multiverse.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark">
                    <BookOpen className="mr-2 h-5 w-5" /> Join Scholar Program
                  </Button>
                  <Button variant="outline" className="border-alien-green text-alien-green hover:bg-alien-green/20">
                    <Video className="mr-2 h-5 w-5" /> Watch Demo
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden relative h-60">
                <div className="absolute inset-0 bg-gradient-to-tr from-alien-gold/30 to-alien-green/30 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-alien-gold/20 backdrop-blur-md rounded-full p-4">
                    <Book className="h-16 w-16 text-alien-gold" />
                  </div>
                </div>
                <div className="bg-alien-space-light h-full w-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Academy;
