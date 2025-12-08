import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Palette, Share2, Target, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Briefs = () => {
  const { toast } = useToast();

  const handleBriefClick = (briefName) => {
    toast({
      title: "🚧 Formulario en desarrollo",
      description: `El brief de ${briefName} estará disponible próximamente.`
    });
  };

  const briefsData = [
    {
      id: 1,
      title: "Brief Diseño Web",
      icon: FileText,
      description: "Preguntas sobre tipo de web (landing, corporativa, e-commerce), secciones necesarias, estilo visual, funcionalidades.",
      color: "from-[#0066ff] to-[#0052cc]",
      iconColor: "text-[#0066ff]"
    },
    {
      id: 2,
      title: "Brief Branding & Diseño Gráfico",
      icon: Palette,
      description: "Preguntas sobre identidad actual, colores preferidos, referentes de estilo, público objetivo.",
      color: "from-[#00d4ff] to-[#00a8cc]",
      iconColor: "text-[#00d4ff]"
    },
    {
      id: 3,
      title: "Brief Social Media & Copywriting",
      icon: Share2,
      description: "Preguntas sobre tono de comunicación, plataformas principales, frecuencia de publicación, ejemplos de marcas que admira.",
      color: "from-[#6366f1] to-[#4f46e5]",
      iconColor: "text-[#6366f1]"
    },
    {
      id: 4,
      title: "Brief Marketing Digital (Ads & Configuración)",
      icon: Target,
      description: "Preguntas sobre objetivo de campaña (ventas, leads, visibilidad), público objetivo, presupuesto aproximado.",
      color: "from-[#ec4899] to-[#db2777]",
      iconColor: "text-[#ec4899]"
    },
    {
      id: 5,
      title: "Brief Consultoría Business",
      icon: Briefcase,
      description: "Preguntas sobre sector, tamaño de empresa, principales retos (financieros, estratégicos, digitales).",
      color: "from-[#10b981] to-[#059669]",
      iconColor: "text-[#10b981]"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Briefs - Mar Digital</title>
        <meta name="description" content="Completa un brief rápido según el servicio que buscas y recibe una propuesta personalizada hecha para tu negocio." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0a0a0f] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute top-20 -right-32 w-96 h-96 bg-[#0066ff] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-20 -left-32 w-96 h-96 bg-[#00d4ff] rounded-full blur-[150px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="line-accent mx-auto mb-8"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Cuéntanos lo que <span className="gradient-text">necesitas</span> en 5 minutos
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
              Completa un brief rápido según el servicio que buscas y recibe una propuesta 
              personalizada hecha para tu negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#12121a] to-[#0a0a0f] border border-[#00d4ff]/20 rounded-2xl p-8 md:p-12"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              En <span className="text-[#00d4ff] font-semibold">Mar Digital</span> creemos en procesos claros. 
              Por eso, cada servicio tiene un <span className="text-white font-semibold">brief</span> (formulario) 
              que nos ayuda a entender tus objetivos, gustos y necesidades antes de comenzar. 
              Así podemos diseñar <span className="text-[#0066ff] font-semibold">soluciones a tu medida</span> desde el primer día.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Briefs Grid */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Elige tu <span className="gradient-text">Brief</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Selecciona el tipo de servicio que necesitas y completa el formulario correspondiente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {briefsData.map((brief, index) => {
              const Icon = brief.icon;
              return (
                <motion.div
                  key={brief.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-[#12121a] to-[#0a0a0f] border border-[#00d4ff]/20 rounded-2xl p-8 hover:border-[#00d4ff]/50 transition-all duration-300"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${brief.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${brief.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00d4ff] transition-colors">
                      {brief.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {brief.description}
                    </p>

                    {/* Button */}
                    <Button
                      onClick={() => handleBriefClick(brief.title)}
                      className={`w-full bg-gradient-to-r ${brief.color} hover:opacity-90 text-white font-semibold py-6 rounded-xl transition-all duration-300 group/btn`}
                    >
                      <span>Completar Brief</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0066ff]/5 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              ¿No sabes cuál elegir?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              No te preocupes, contáctanos y te ayudamos a identificar el mejor servicio para tu proyecto.
            </p>
            <Button
              onClick={() => handleBriefClick("Contacto")}
              className="bg-gradient-to-r from-[#00d4ff] to-[#0066ff] hover:opacity-90 text-white font-semibold px-8 py-6 rounded-xl text-lg transition-all duration-300"
            >
              Hablar con el equipo
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Briefs;
