import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Rocket, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import CollageSection from '@/components/CollageSection';

const Home = () => {
  const { toast } = useToast();
  
  const handleCTA = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: ""
    });
  };

  return (
    <>
      <Helmet>
        <title>Mar Digital - Impulsa tu marca con diseño y estrategia digital</title>
        <meta name="description" content="En Mar Digital unimos creatividad y estrategia: desde páginas web y branding que hacen brillar tu negocio, hasta consultoría avanzada para que tu empresa crezca con bases sólidas." />
      </Helmet>

      {/* Hero Section - Minimalista y Futurista */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#0066ff] rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00d4ff] rounded-full blur-[150px] opacity-20"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }} 
            className="space-y-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5"
            >
              <Sparkles className="w-4 h-4 text-[#00d4ff]" />
              <span className="text-sm text-[#00d4ff] font-medium">Creatividad + Estrategia</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1] tracking-tight">
              Impulsa tu marca
              <span className="block gradient-text-light">en digital</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Diseño web, branding y consultoría estratégica para que tu negocio 
              destaque y crezca con bases sólidas.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button 
                onClick={handleCTA} 
                size="lg" 
                className="btn-futuristic bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:from-[#0077ff] hover:to-[#00e5ff] text-white font-medium px-8 py-6 text-lg rounded-full"
              >
                Empieza tu proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={handleCTA} 
                variant="outline" 
                size="lg" 
                className="btn-outline-futuristic border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/10 px-8 py-6 text-lg rounded-full"
              >
                Ver servicios
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-[#00d4ff] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Collage Section */}
      <CollageSection />

      {/* ¿Quiénes somos? - Minimalista */}
      <section className="section-padding bg-[#0a0a0f] relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center"
          >
            <div className="line-accent mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-10">
              ¿Quiénes <span className="gradient-text">somos</span>?
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Un equipo que fusiona diseño creativo con consultoría estratégica.
              Construimos marcas fuertes y negocios listos para escalar en el mundo digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nuestras Divisiones - Cards Futuristas */}
      <section className="section-padding bg-[#12121a] relative overflow-hidden">
        {/* Subtle gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-20"
          >
            <div className="line-accent mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-medium text-white">
              Nuestras <span className="gradient-text">Divisiones</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mar Digital Creative */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="card-futuristic rounded-2xl p-10 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-white">Mar Digital Creative</h3>
              </div>
              <p className="text-lg text-gray-300 mb-4">
                Diseño Web, Branding, Social Media y Marketing Digital.
              </p>
              <p className="text-gray-500 mb-8">
                Para emprendedores y empresas que buscan identidad sólida y presencia real en línea.
              </p>
              <div className="h-px w-full bg-gradient-to-r from-[#0066ff]/50 to-transparent mb-6"></div>
              <span className="text-[#00d4ff] text-sm font-medium flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">
                Explorar servicios <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>

            {/* Mar Digital Business */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="card-futuristic rounded-2xl p-10 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-white">Mar Digital Business</h3>
              </div>
              <p className="text-lg text-gray-300 mb-4">
                Consultoría estratégica, modelos de negocio y transformación digital.
              </p>
              <p className="text-gray-500 mb-8">
                Para empresas que necesitan claridad, estructura y rutas de crecimiento.
              </p>
              <div className="h-px w-full bg-gradient-to-r from-[#0066ff]/50 to-transparent mb-6"></div>
              <span className="text-[#00d4ff] text-sm font-medium flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">
                Explorar servicios <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beneficios - Minimalista */}
      <section className="section-padding bg-[#0a0a0f] relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-20"
          >
            <div className="line-accent mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-medium text-white">
              ¿Por qué <span className="gradient-text">elegirnos</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="h-6 w-6" />,
                title: "Enfoque estratégico",
                description: "Cada diseño tiene un propósito claro"
              },
              {
                icon: <Sparkles className="h-6 w-6" />,
                title: "Acompañamiento",
                description: "Procesos claros y soporte constante"
              },
              {
                icon: <Rocket className="h-6 w-6" />,
                title: "Soluciones a medida",
                description: "Adaptadas a cada etapa de tu negocio"
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: "Resultados reales",
                description: "Métricas medibles y sostenibles"
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                viewport={{ once: true }} 
                className="text-center p-8 rounded-2xl card-futuristic"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center text-[#00d4ff]">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="section-padding bg-[#12121a] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-20"
          >
            <div className="line-accent mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-6">
              Servicios <span className="gradient-text">destacados</span>
            </h2>
            <p className="text-xl text-gray-400">Lo que podemos hacer por ti</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Diseño Web",
                description: "Páginas y tiendas online que convierten."
              },
              {
                title: "Branding",
                description: "Identidades visuales que transmiten confianza."
              },
              {
                title: "Marketing Digital",
                description: "Contenido y campañas que generan crecimiento."
              },
              {
                title: "Consultoría",
                description: "Estrategia, finanzas y transformación digital."
              }
            ].map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                viewport={{ once: true }} 
                className="p-8 rounded-2xl border border-white/5 hover:border-[#00d4ff]/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 group"
              >
                <div className="w-2 h-2 rounded-full bg-[#00d4ff] mb-6 group-hover:scale-150 transition-transform"></div>
                <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={handleCTA} 
              size="lg" 
              className="btn-outline-futuristic border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/10 px-10 py-6 text-lg rounded-full"
            >
              Ver todos los servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final - Impactante */}
      <section className="section-padding bg-[#0a0a0f] relative overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#0066ff] rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d4ff] rounded-full blur-[200px] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="space-y-10"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight">
              Haz crecer tu negocio
              <span className="block gradient-text-light">hoy mismo</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Creatividad y estrategia para que tu marca brille en digital.
              Sin importar si apenas empiezas o ya lideras una empresa.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="btn-futuristic bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:from-[#0077ff] hover:to-[#00e5ff] text-white font-medium px-12 py-7 text-xl rounded-full"
            >
              <a href="tel:+573183183093">
                Solicita tu propuesta
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
