
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
          <span className="px-2 py-1 text-xs bg-alien-space-light/50 rounded-full text-alien-green">{modules.length} módulos</span>
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
        Explorar Curso
      </Button>
    </div>
  </div>
);

const Academy: React.FC = () => {
  const courses = [
    {
      title: "Abundancia & Libertad",
      description: "Domina los fundamentos de la economía digital, blockchain y sistemas financieros sostenibles para crear abundancia y libertad financiera.",
      icon: <Coins className="h-6 w-6 text-alien-gold" />,
      color: "bg-green-500",
      modules: [
        {
          name: "EcoFinTech",
          topics: [
            "Circularidad + Criterios ESG + Eficiencia & Sostenibilidad + Crecimiento & Desarrollo",
            "Dinámica de Sistemas (Complejo / Dinámico)",
            "Digitalización + Dinero & Sistemas de Pago + Diseño Iterativo & Metodologías",
            "Economía & Finanzas Macro General & Micro Particular + Teoría de Juegos"
          ]
        },
        {
          name: "Ecommerce",
          topics: [
            "Características fundamentales",
            "Fundamentos e Infraestructura",
            "Ventajas & Usos",
            "Formas & Tipos"
          ]
        },
        {
          name: "Blockchain & Criptografía",
          topics: [
            "Activos Digitales (Crypto + Tokens, Bitcoin, Altcoins, Stablecoins, memecoins)",
            "Propiedades Digitales (NFTs + Smart Contracts)",
            "Aplicaciones & Finanzas Descentralizadas"
          ]
        }
      ]
    },
    {
      title: "Autogestión & Sostenibilidad",
      description: "Aprende a gestionar tu vida de manera sostenible integrando ecología, permacultura y gestión consciente de energía, espacio y tiempo.",
      icon: <Leaf className="h-6 w-6 text-alien-gold" />,
      color: "bg-emerald-500",
      modules: [
        {
          name: "Módulo Único Integrado",
          topics: [
            "Ecología + Permacultura + Sostenibilidad",
            "Life + Live (Vida y Vivir)",
            "Energy + Space + Time (Energía, Espacio y Tiempo)"
          ]
        }
      ]
    },
    {
      title: "Armonía & Trascendencia",
      description: "Explora las dimensiones más profundas del ser a través de conciencia, meditación, alquimia filosófica y alimentación sagrada.",
      icon: <Brain className="h-6 w-6 text-alien-gold" />,
      color: "bg-purple-500",
      modules: [
        {
          name: "Conciencia & Energía (Focusing Mindfulness)",
          topics: [
            "Atención & Concentración (Actitud | Aptitud)",
            "Conciencia | Consciencia (Inconsciencia | Preconciencia | Subconsciente)",
            "Ecuanimidad | Plenitud | Enfoque | Percepción",
            "Determinación | Intención | Propósito | Sentido | Voluntad | Entidad | Ser"
          ]
        },
        {
          name: "Meditaciones & Yoga",
          topics: [
            "Técnicas de meditación avanzadas",
            "Práctica de yoga integral",
            "Integración cuerpo-mente-espíritu"
          ]
        },
        {
          name: "Alkymia & Filosofía",
          topics: [
            "Alkymia: Auto trascendencia | Trascendencia",
            "Artes Liberales (Trivium + Quadrivium)",
            "Hermenéutica | Heurística",
            "Axis Mundi | Chackras | Dyed | Kábbalah | Kundalini | Qi",
            "Filosofía: Iluminación Espiritual e Intelectual | Propedéutica"
          ]
        },
        {
          name: "Alimento & Bebida Sagrada",
          topics: [
            "Ayurveda práctica",
            "Ambar | Ambrosia | Amrita | Kundalini",
            "Haoma | Soma",
            "Nutrición consciente y sagrada"
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
              Adquiere capacidades completas de atención para conectar, descubrir y expandir conocimientos y habilidades. 
              Esto te ayuda a evolucionar y te impulsa hacia la experiencia óptima con la plenitud del flujo, 
              así como aumentar los beneficios de tu calidad de vida y ganancias más sostenibles, con un bienestar completo, 
              explorando tanto técnicas ancestrales como tecnologías de vanguardia.
            </p>
          </div>

          {/* Featured Program */}
          <div className="mb-12 bg-alien-space-dark/60 rounded-xl overflow-hidden backdrop-blur-md border border-alien-gold/30">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-alien-gold mb-4 font-nasalization">Programa Master de Certificación</h2>
                <p className="text-gray-300 mb-6 font-[Exo]">
                  Conviértete en un Explorador y Navegador certificado del ΔlieπFlΦw $pac€ y desbloquea oportunidades exclusivas en nuestro ecosistema cósmico en expansión.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-alien-green rounded-full mr-2"></div>
                    <p className="text-alien-green">3 Cursos principales integrados</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-alien-green rounded-full mr-2"></div>
                    <p className="text-alien-green">8 Módulos especializados</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-alien-green rounded-full mr-2"></div>
                    <p className="text-alien-green">Bootcamps con sesiones de mentoría en vivo</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-alien-green rounded-full mr-2"></div>
                    <p className="text-alien-green">Credencial NFT on-chain</p>
                  </div>
                </div>
                <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-[Exo]">
                  Unirse a Lista de Espera
                </Button>
              </div>
              <div className="bg-gradient-to-tr from-alien-green/20 to-alien-gold/20 p-8 flex items-center justify-center">
                <GraduationCap className="h-24 w-24 text-alien-gold" />
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-alien-gold mb-8 font-nasalization">Cursos Principales</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-alien-space-dark/60 rounded-xl p-8 backdrop-blur-md border border-alien-gold/20">
            <h2 className="text-2xl font-bold text-alien-gold mb-4 font-nasalization">¿Listo para Expandir tu Conocimiento Cósmico?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto font-[Exo]">
              Únete a miles de navegadores espaciales en su viaje para dominar los principios del multiverso descentralizado.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-[Exo]">
                Explorar Todos los Cursos
              </Button>
              <Button variant="outline" className="border-alien-green text-alien-green hover:bg-alien-green/20 font-[Exo]">
                Unirse a la Comunidad
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Academy;
