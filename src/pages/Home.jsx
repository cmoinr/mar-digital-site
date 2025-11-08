
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import AnimatedPixelBackground from '@/components/AnimatedPixelBackground';
const Home = () => {
  const {
    toast
  } = useToast();
  const handleCTA = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: ""
    });
  };
  return <>
      <Helmet>
        <title>Mar Digital - Impulsa tu marca con diseño y estrategia digital</title>
        <meta name="description" content="En Mar Digital unimos creatividad y estrategia: desde páginas web y branding que hacen brillar tu negocio, hasta consultoría avanzada para que tu empresa crezca con bases sólidas." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedPixelBackground />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Impulsa tu marca con
              <span className="block text-[#1fd0ff]">diseño y estrategia digital</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto">
              En Mar Digital unimos creatividad y estrategia: desde páginas web y branding que hacen brillar tu negocio, 
              hasta consultoría avanzada para que tu empresa crezca con bases sólidas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={handleCTA} size="lg" className="bg-[#1fd0ff] hover:bg-[#0e88e2] text-black font-semibold px-8 py-4 text-lg">
                Empieza tu proyecto hoy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button onClick={handleCTA} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#075296] px-8 py-4 text-lg">
                Explora nuestros paquetes
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ¿Quiénes somos? */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-8">
              ¿Quiénes somos?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Somos un equipo que combina diseño creativo y consultoría estratégica.
              Nuestro propósito es ayudarte a construir una marca fuerte y un negocio 
              preparado para crecer en digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nuestras Divisiones */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-8">
              Nuestras Divisiones
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Mar Digital Creative */}
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="creative-gradient rounded-2xl p-8 text-white hover-scale card-glow">
              <div className="flex items-center mb-6">
                <img src="https://horizons-cdn.hostinger.com/a6ca65f8-09dc-4ddf-a714-07c8ebf24d62/logo_rebrand---mar-creative---entrega-01-AWx6o.png" alt="Mar Digital Creative Logo" className="h-12 w-auto mr-4" />
                <h3 className="text-2xl font-bold">Mar Digital Creative</h3>
              </div>
              <p className="text-lg mb-6 text-white/90">
                Diseño Web, Branding, Social Media y Marketing Digital.
              </p>
              <p className="text-white/80 mb-6">
                Ideal para emprendedores y empresas que buscan identidad sólida y presencia real en línea.
              </p>
              <img alt="A vibrant and creative digital art piece" className="w-full h-48 object-cover rounded-lg" src="https://horizons-cdn.hostinger.com/a6ca65f8-09dc-4ddf-a714-07c8ebf24d62/logo_rebrand---mar-creative---entrega-08-ooY3L.png" />
            </motion.div>

            {/* Mar Digital Business */}
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="business-gradient rounded-2xl p-8 text-white hover-scale card-glow">
              <div className="flex items-center mb-6">
                <img src="https://horizons-cdn.hostinger.com/a6ca65f8-09dc-4ddf-a714-07c8ebf24d62/logo_rebrand---mar-bussines---entrega-01-F8M0i.png" alt="Mar Digital Business Logo" className="h-12 w-auto mr-4" />
                <h3 className="text-2xl font-bold">Mar Digital Business</h3>
              </div>
              <p className="text-lg mb-6 text-white/90">
                Consultoría estratégica en modelos de negocio, transformación digital y análisis financiero.
              </p>
              <p className="text-white/80 mb-6">
                Pensado para empresas que necesitan claridad, estructura y rutas de crecimiento.
              </p>
              <img alt="Professionals in a modern office analyzing data on a large screen" className="w-full h-48 object-cover rounded-lg" src="https://horizons-cdn.hostinger.com/a6ca65f8-09dc-4ddf-a714-07c8ebf24d62/logo_rebrand---mar-bussines---entrega-08-323Z8.png" />
            </motion.div>
          </div>

          <div className="text-center">
            <Button onClick={handleCTA} size="lg" className="bg-[#075296] hover:bg-[#0e88e2] text-white px-8 py-4 text-lg">
              Conoce más de nuestras divisiones
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-8">
              Beneficios de trabajar con nosotros
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: <CheckCircle className="h-8 w-8 text-[#8cc63f]" />,
            title: "Diseño profesional con enfoque estratégico"
          }, {
            icon: <Users className="h-8 w-8 text-[#075296]" />,
            title: "Procesos claros y acompañamiento constante"
          }, {
            icon: <Zap className="h-8 w-8 text-[#1fd0ff]" />,
            title: "Paquetes adaptados a cada etapa de tu negocio"
          }, {
            icon: <TrendingUp className="h-8 w-8 text-[#369c08]" />,
            title: "Resultados medibles y sostenibles"
          }].map((benefit, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="text-center p-6 rounded-xl bg-white shadow-lg hover-scale">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  {benefit.title}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="section-padding gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Servicios destacados
            </h2>
            <p className="text-lg md:text-xl text-white/90">Vista rápida de lo que podemos hacer por ti</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[{
            title: "Diseño Web",
            description: "Páginas y tiendas online que convierten visitantes en clientes."
          }, {
            title: "Branding & Diseño Gráfico",
            description: "Identidades visuales que transmiten confianza."
          }, {
            title: "Marketing & Redes Sociales",
            description: "Contenido y campañas que generan crecimiento."
          }, {
            title: "Consultoría Estratégica",
            description: "Modelos de negocio, finanzas y transformación digital."
          }].map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="glass-effect rounded-xl p-6 text-white hover-scale">
                <h3 className="text-xl font-bold mb-4 text-[#1fd0ff]">{service.title}</h3>
                <p className="text-white/90">{service.description}</p>
              </motion.div>)}
          </div>

          <div className="text-center">
            <Button onClick={handleCTA} size="lg" className="bg-white text-[#075296] hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Ver todos los servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Haz crecer tu negocio hoy.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              No importa si apenas empiezas o ya lideras una empresa consolidada. 
              En Mar Digital tenemos la combinación perfecta de creatividad + estrategia 
              para que tu marca brille en digital.
            </p>
            <Button asChild size="lg" className="bg-[#1fd0ff] hover:bg-[#0e88e2] text-black font-bold px-12 py-6 text-xl">
              <a href="tel:+573183183093">
                Quiero mi propuesta personalizada
                <ArrowRight className="ml-2 h-6 w-6" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>;
};
export default Home;
