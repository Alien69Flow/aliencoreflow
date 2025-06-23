
import React from 'react';
import StarBackground from '@/components/StarBackground';
import { GraduationCap, BookOpen, Video, Users, Award, Sparkles, Leaf, Brain, Coins, ShoppingCart, Heart, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CourseCard = ({
  title,
  description,
  icon,
  modules,
  color
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  modules: Array<{ name: string; topics: string[] }>;
  color: string;
}) => (
  <div className="bg-alien-space-dark/60 backdrop-blur-md rounded-lg overflow-hidden border border-alien-gold/20 hover:border-alien-gold/50 transition-all hover:transform hover:scale-[1.01]">
    <div className={`h-2 ${color}`}></div>
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-alien-space-light/50 rounded-full">
          {icon}
        </div>
        <div className="flex space-x-2">
          <span className="px-2 py-1 text-xs bg-alien-space-light/50 rounded-full text-alien-green">{modules.length} modules</span>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-alien-gold font-nasalization">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      
      {/* Modules List */}
      <div className="space-y-2 mb-4">
        {modules.map((module, index) => (
          <div key={index} className="bg-alien-space-light/30 rounded p-2">
            <h4 className="text-alien-gold text-sm font-semibold mb-1">{index + 1}· {module.name}</h4>
            <ul className="text-xs text-gray-300 space-y-1">
              {module.topics.map((topic, topicIndex) => (
                <li key={topicIndex} className="flex items-start">
                  <span className="text-alien-green mr-1">·</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <Button variant="outline" className="w-full border-alien-gold/30 text-alien-gold hover:bg-alien-gold/10">
        Explore Course
      </Button>
    </div>
  </div>
);

const Academy: React.FC = () => {
  const courses = [
    {
      title: "Abundance & Freedom",
      description: "Master the fundamentals of digital economy, blockchain and sustainable financial systems to create abundance and financial freedom.",
      icon: <Coins className="h-6 w-6 text-alien-gold" />,
      color: "bg-green-500",
      modules: [
        {
          name: "EcoFinTech",
          topics: [
            "Circularity + ESG Criteria + Efficiency & Sustainability + Growth & Development",
            "Systems Dynamics (Complex / Dynamic) [Critical Degrowth | Theories]",
            "Digitalization + Money & Payment Systems + Iterative Design & Methodologies (Agile / Lean / Manufacturing / Startups)",
            "Economy & Finance - Macro General & Micro Particular - Production / Productivity - Tangible / Intangible + Game Theory"
          ]
        },
        {
          name: "Ecommerce",
          topics: [
            "Characteristics",
            "Fundamentals and Infrastructure", 
            "Advantages & Uses",
            "Forms & Types"
          ]
        },
        {
          name: "Blockchain & Cryptography",
          topics: [
            "Digital Assets (Crypto + Tokens, Bitcoin, Altcoins, Stablecoins, memecoins, shitcoins)",
            "Digital Properties (NFTs + Smart Contracts)",
            "Applications & Decentralized Finance"
          ]
        }
      ]
    },
    {
      title: "Self-Management & Sustainability",
      description: "Learn to manage your life sustainably by integrating ecology, permaculture and conscious management of energy, space and time.",
      icon: <Leaf className="h-6 w-6 text-alien-gold" />,
      color: "bg-emerald-500",
      modules: [
        {
          name: "Integrated Module",
          topics: [
            "Ecology + Permaculture + Sustainability",
            "Life + Live",
            "Energy + Space + Time"
          ]
        }
      ]
    },
    {
      title: "Harmony & Transcendence",
      description: "Explore the deepest dimensions of being through consciousness, meditation, philosophical alchemy and sacred nutrition.",
      icon: <Brain className="h-6 w-6 text-alien-gold" />,
      color: "bg-purple-500",
      modules: [
        {
          name: "Consciousness & Energy (Focusing Mindfulness)",
          topics: [
            "Attention & Concentration - Attitude | Aptitude",
            "Awareness | Consciousness (Unconsciousness | Preconsciousness | Subconscious)",
            "Equanimity | Fullness - Focus | Perception",
            "Determination | Intention | Purpose | Meaning | Will - Entity | Being"
          ]
        },
        {
          name: "Meditations & Yoga",
          topics: [
            "Advanced meditation techniques",
            "Integral yoga practice",
            "Body-mind-spirit integration"
          ]
        },
        {
          name: "Alkymia & Philosophy",
          topics: [
            "Alkymia: Self-transcendence | Transcendence",
            "Liberal Arts (Trivium + Quadrivium)",
            "Hermeneutics | Heuristics",
            "Axis Mundi | Chakras | Djed | Kabbalah | Kundalini | Qi",
            "Asclepius | Caduceus | Cup of Hygieia",
            "Corpus Hermeticum | Kybalion | Opus Magnum | Emerald Tablet",
            "Philosophy: Spiritual and Intellectual Illumination | Propaedeutics (Axiology | Epistemology | Gnoseology | Ontology)"
          ]
        },
        {
          name: "Sacred Food & Drink",
          topics: [
            "Ayurveda practice",
            "Amber | Ambrosia | Amrita | Kundalini",
            "Haoma | Soma",
            "Conscious and sacred nutrition"
          ]
        }
      ]
    }
  ];

  return (
    <div className="relative flex flex-col flex-1">
      <main className="relative z-10 flex-grow container mx-auto px-4 pt-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <GraduationCap className="h-12 w-12 text-alien-gold mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-6 font-nasalization">Academy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-[Exo]">
              Acquire complete attention capabilities to connect, discover and expand knowledge and skills. 
              This helps you evolve and propels you towards optimal experience with flow fullness, 
              as well as increase the benefits of your quality of life and more sustainable gains, with complete well-being, 
              exploring both ancestral techniques and cutting-edge technologies.
            </p>
          </div>

          {/* Featured Program */}
          <div className="mb-12 bg-alien-space-dark/60 rounded-xl overflow-hidden backdrop-blur-md border border-alien-gold/30">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-alien-gold mb-4 font-nasalization">Master Certification Program</h2>
                <p className="text-gray-300 mb-6 font-[Exo]">
                  Become a certified Explorer and Navigator of the ΔlieπFlΦw $pac€ and unlock exclusive opportunities in our expanding cosmic ecosystem.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-alien-green rounded-full mr-2"></div>
                    <p className="text-alien-green">3 integrated main courses</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-alien-green rounded-full mr-2"></div>
                    <p className="text-alien-green">8 specialized modules</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-alien-green rounded-full mr-2"></div>
                    <p className="text-alien-green">Bootcamps with live mentoring sessions</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-alien-green rounded-full mr-2"></div>
                    <p className="text-alien-green">On-chain NFT credential</p>
                  </div>
                </div>
                <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-[Exo]">
                  Join Waitlist
                </Button>
              </div>
              <div className="bg-gradient-to-tr from-alien-green/20 to-alien-gold/20 p-8 flex items-center justify-center">
                <GraduationCap className="h-24 w-24 text-alien-gold" />
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-alien-gold mb-8 font-nasalization">Main Courses</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-alien-space-dark/60 rounded-xl p-8 backdrop-blur-md border border-alien-gold/20">
            <h2 className="text-2xl font-bold text-alien-gold mb-4 font-nasalization">Ready to Expand Your Cosmic Knowledge?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto font-[Exo]">
              Join thousands of space navigators on their journey to master the principles of the decentralized multiverse.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-[Exo]">
                Explore All Courses
              </Button>
              <Button variant="outline" className="border-alien-green text-alien-green hover:bg-alien-green/20 font-[Exo]">
                Join the Community
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Academy;
