
import React from 'react';
import StarBackground from '@/components/StarBackground';
import { GraduationCap, BookOpen, Video, Users, Award, Sparkles, Leaf, Brain, Coins, ShoppingCart, Heart, Lightbulb, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
  <Card className="bg-alien-space-dark/80 backdrop-blur-lg border-alien-gold/30 hover:border-alien-gold/60 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-alien-gold/20 group">
    <div className={`h-1 ${color} rounded-t-lg`}></div>
    <CardHeader className="pb-4">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-alien-space-light/60 rounded-xl group-hover:bg-alien-gold/20 transition-colors duration-300 border border-alien-gold/20">
          {icon}
        </div>
        <div className="flex space-x-2">
          <span className="px-3 py-1 text-xs bg-alien-space-light/60 rounded-full text-alien-green border border-alien-green/30 font-medium">
            {modules.length} módulos
          </span>
        </div>
      </div>
      <CardTitle className="text-xl font-semibold text-alien-gold font-nasalization group-hover:text-alien-gold-light transition-colors">
        {title}
      </CardTitle>
      <CardDescription className="text-gray-300 text-sm leading-relaxed">
        {description}
      </CardDescription>
    </CardHeader>
    
    <CardContent className="pt-0">
      <div className="space-y-3 mb-6">
        {modules.map((module, index) => (
          <div key={index} className="bg-alien-space-light/40 rounded-lg p-3 border border-alien-gold/10 hover:border-alien-gold/20 transition-colors">
            <h4 className="text-alien-gold text-sm font-semibold mb-2 flex items-center">
              <span className="w-6 h-6 bg-alien-gold/20 rounded-full flex items-center justify-center text-xs mr-2 border border-alien-gold/30">
                {index + 1}
              </span>
              {module.name}
            </h4>
            <ul className="text-xs text-gray-300 space-y-1 ml-8">
              {module.topics.map((topic, topicIndex) => (
                <li key={topicIndex} className="flex items-start leading-relaxed">
                  <span className="text-alien-green mr-2 mt-1">·</span>
                  <span className="flex-1">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <Button variant="outline" className="w-full border-alien-gold/40 text-alien-gold hover:bg-alien-gold/15 hover:border-alien-gold/60 transition-all duration-300 font-medium">
        <BookOpen className="w-4 h-4 mr-2" />
        Explorar Curso
      </Button>
    </CardContent>
  </Card>
);

const PartnerCard = ({ name, url }: { name: string; url: string }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-alien-space-dark/60 backdrop-blur-md rounded-lg p-4 border border-alien-gold/20 hover:border-alien-gold/50 transition-all duration-300 hover:transform hover:scale-105 group flex items-center justify-center min-h-[80px]"
  >
    <div className="text-center">
      <h3 className="text-alien-gold font-semibold text-sm group-hover:text-alien-gold-light transition-colors">
        {name}
      </h3>
      <ExternalLink className="w-3 h-3 text-alien-green mx-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  </a>
);

const Academy: React.FC = () => {
  const courses = [
    {
      title: "Abundancia & Libertad",
      description: "Domina los fundamentos de la economía digital, blockchain y sistemas financieros sostenibles para crear abundancia y libertad financiera.",
      icon: <Coins className="h-6 w-6 text-alien-gold" />,
      color: "bg-gradient-to-r from-green-400 to-green-600",
      modules: [
        {
          name: "EcoFinTech",
          topics: [
            "Circularidad + Criterios ESG + Eficiencia & Sostenibilidad + Crecimiento & Desarrollo",
            "Dinámicas de Sistemas (Complejos / Dinámicos) [Decrecimiento Crítico | Teorías]",
            "Digitalización + Sistemas de Dinero & Pago + Metodologías de Diseño Iterativo",
            "Economía & Finanzas - Macro General & Micro Particular + Teoría de Juegos"
          ]
        },
        {
          name: "Comercio Electrónico",
          topics: [
            "Características fundamentales",
            "Fundamentos e infraestructura", 
            "Ventajas y usos prácticos",
            "Formas y tipos de implementación"
          ]
        },
        {
          name: "Blockchain & Criptografía",
          topics: [
            "Activos Digitales (Crypto + Tokens, Bitcoin, Altcoins, Stablecoins)",
            "Propiedades Digitales (NFTs + Contratos Inteligentes)",
            "Aplicaciones & Finanzas Descentralizadas (DeFi)"
          ]
        }
      ]
    },
    {
      title: "Autogestión & Sostenibilidad",
      description: "Aprende a gestionar tu vida de manera sostenible integrando ecología, permacultura y manejo consciente de energía, espacio y tiempo.",
      icon: <Leaf className="h-6 w-6 text-alien-gold" />,
      color: "bg-gradient-to-r from-emerald-400 to-emerald-600",
      modules: [
        {
          name: "Módulo Integrado",
          topics: [
            "Ecología + Permacultura + Sostenibilidad",
            "Vida + Vivir conscientemente",
            "Energía + Espacio + Tiempo"
          ]
        }
      ]
    },
    {
      title: "Armonía & Trascendencia",
      description: "Explora las dimensiones más profundas del ser a través de la consciencia, meditación, alquimia filosófica y nutrición sagrada.",
      icon: <Brain className="h-6 w-6 text-alien-gold" />,
      color: "bg-gradient-to-r from-purple-400 to-purple-600",
      modules: [
        {
          name: "Consciencia & Energía",
          topics: [
            "Atención & Concentración - Actitud | Aptitud",
            "Consciencia (Inconsciencia | Preconsciencia | Subconsciente)",
            "Ecuanimidad | Plenitud - Enfoque | Percepción",
            "Determinación | Intención | Propósito | Significado"
          ]
        },
        {
          name: "Meditaciones & Yoga",
          topics: [
            "Técnicas avanzadas de meditación",
            "Práctica integral de yoga",
            "Integración cuerpo-mente-espíritu"
          ]
        },
        {
          name: "Alquimia & Filosofía",
          topics: [
            "Alquimia: Auto-trascendencia | Trascendencia",
            "Artes Liberales (Trivium + Quadrivium)",
            "Hermenéutica | Heurística",
            "Filosofía: Iluminación Espiritual e Intelectual"
          ]
        }
      ]
    }
  ];

  const partners = [
    { name: "Alchemy", url: "https://www.alchemy.com/" },
    { name: "Aulafacil", url: "https://www.aulafacil.com/" },
    { name: "Explore", url: "https://www.explore.org/" },
    { name: "OEGlobal", url: "https://www.oeglobal.org/" },
    { name: "OpenupEd", url: "https://www.openuped.eu/" },
    { name: "UNSSC", url: "https://www.unssc.org/" },
    { name: "EdX", url: "https://www.edx.org/" },
    { name: "Google", url: "https://edu.google.com/" },
    { name: "MOOC", url: "https://www.mooc.org/" },
    { name: "Khan Academy", url: "https://www.khanacademy.org/" },
    { name: "Hotmart", url: "https://www.hotmart.com/" },
    { name: "Udemy", url: "https://www.udemy.com/" },
    { name: "Unity Learn", url: "https://learn.unity.com/" },
    { name: "Unreal Engine", url: "https://www.unrealengine.com/en-US/learn" }
  ];

  return (
    <div className="relative flex flex-col flex-1">
      {/* Academy Background Image */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('/lovable-uploads/9e48e9b3-7a5a-4c0a-b89d-9cbbef58d7a7.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15,
          zIndex: -25
        }}
      />
      
      <main className="relative z-10 flex-grow container mx-auto px-4 pt-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-alien-gold/20 rounded-full mb-6 border-2 border-alien-gold/30">
              <GraduationCap className="h-8 w-8 text-alien-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-alien-gold mb-6 font-nasalization">
              Academy
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-[Exo] leading-relaxed">
              Adquiere capacidades completas de atención para conectar, descubrir y expandir conocimientos y habilidades. 
              Esto te ayuda a evolucionar y te impulsa hacia una experiencia óptima con plenitud de flujo, 
              así como aumentar los beneficios de tu calidad de vida y ganancias más sostenibles, con bienestar completo.
            </p>
          </div>

          {/* Featured Program */}
          <Card className="mb-16 bg-alien-space-dark/70 backdrop-blur-lg border-alien-gold/40 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-alien-gold mb-4 font-nasalization">
                  Programa de Certificación Master
                </h2>
                <CardDescription className="text-gray-300 mb-6 font-[Exo] text-base leading-relaxed">
                  Conviértete en un Explorer y Navigator certificado del ΔlieπFlΦw $pac€ y desbloquea oportunidades exclusivas en nuestro ecosistema cósmico en expansión.
                </CardDescription>
                <div className="space-y-4 mb-8">
                  {[
                    "3 cursos principales integrados",
                    "8 módulos especializados",
                    "Bootcamps con sesiones de mentoría en vivo",
                    "Credencial NFT on-chain"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-alien-green rounded-full mr-3 flex-shrink-0"></div>
                      <p className="text-alien-green font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
                <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-[Exo] font-semibold">
                  <Users className="w-4 h-4 mr-2" />
                  Únete a la Lista de Espera
                </Button>
              </CardContent>
              <div className="bg-gradient-to-br from-alien-green/20 via-alien-gold/20 to-purple-500/20 p-8 flex items-center justify-center">
                <div className="relative">
                  <GraduationCap className="h-24 w-24 text-alien-gold" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-alien-green rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-alien-space-dark" />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Course Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-alien-gold mb-2 font-nasalization text-center">
              Cursos Principales
            </h2>
            <p className="text-gray-300 text-center mb-12 font-[Exo]">
              Explora nuestros programas de formación integral
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>

          {/* Partners Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-alien-gold mb-2 font-nasalization text-center">
              Partners Educativos
            </h2>
            <p className="text-gray-300 text-center mb-12 font-[Exo]">
              Colaboramos con las mejores plataformas educativas del mundo
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {partners.map((partner, index) => (
                <PartnerCard key={index} {...partner} />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="text-center bg-alien-space-dark/70 backdrop-blur-lg border-alien-gold/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-alien-gold mb-4 font-nasalization">
                ¿Listo para Expandir tu Conocimiento Cósmico?
              </h2>
              <CardDescription className="text-gray-300 mb-6 max-w-2xl mx-auto font-[Exo] text-base">
                Únete a miles de navegadores espaciales en su viaje para dominar los principios del multiverso descentralizado.
              </CardDescription>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-[Exo] font-semibold">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Explorar Todos los Cursos
                </Button>
                <Button variant="outline" className="border-alien-green text-alien-green hover:bg-alien-green/20 font-[Exo] font-semibold">
                  <Users className="w-4 h-4 mr-2" />
                  Únete a la Comunidad
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Academy;
