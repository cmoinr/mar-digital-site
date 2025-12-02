import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Rocket, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import CollageSection from '@/components/CollageSection';

// Datos de servicios - URLs optimizadas con compresión
const serviciosData = [
  {
    title: "Diseño Web",
    description: "Páginas y tiendas online que convierten visitas en clientes. Desde landing pages hasta e-commerce completos.",
    shortDesc: "Páginas y tiendas online que convierten.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
  },
  {
    title: "Branding",
    description: "Identidades visuales que transmiten confianza y reflejan la esencia de tu negocio. Logos, paletas y manuales de marca.",
    shortDesc: "Identidades visuales que transmiten confianza.",
    image: "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
  },
  {
    title: "Marketing Digital",
    description: "Contenido y campañas que generan crecimiento real. Gestión de redes, ads en Meta y Google, SEO y más.",
    shortDesc: "Contenido y campañas que generan crecimiento.",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
  },
  {
    title: "Consultoría",
    description: "Estrategia, finanzas y transformación digital. Modelos de negocio sólidos y rutas claras de crecimiento.",
    shortDesc: "Estrategia, finanzas y transformación digital.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
  }
];

// Componente de imagen optimizada con lazy loading
const OptimizedServiceImage = ({ src, alt, className, isActive }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] animate-pulse" />
      )}
      <motion.img 
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className={className}
      />
    </>
  );
};

// Componente ServiciosScroll
const ServiciosScroll = ({ navigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      {/* Contenedor principal */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 items-center">
        {/* Columna izquierda - Lista de servicios (30%) */}
        <div className="lg:col-span-3 space-y-4">
          {serviciosData.map((service, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-5 rounded-xl border transition-all duration-500 cursor-pointer ${
                index === activeIndex 
                  ? 'border-[#00d4ff]/40 bg-[#00d4ff]/5 shadow-lg shadow-[#00d4ff]/10' 
                  : 'border-white/5 bg-white/[0.02]'
              }`}
              style={{
                filter: index === activeIndex ? 'none' : 'blur(1px)',
                opacity: index === activeIndex ? 1 : 0.4
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index === activeIndex ? 'bg-[#00d4ff] scale-125' : 'bg-gray-600'
                }`}></div>
                <h3 className={`text-lg font-medium transition-colors duration-500 ${
                  index === activeIndex ? 'text-white' : 'text-gray-500'
                }`}>{service.title}</h3>
              </div>
              <p className={`text-sm pl-5 transition-colors duration-500 ${
                index === activeIndex ? 'text-gray-400' : 'text-gray-600'
              }`}>{service.shortDesc}</p>
            </div>
          ))}
        </div>

        {/* Columna derecha - Imagen (70%) */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden group">
            {/* Imágenes con transición y lazy loading */}
            <AnimatePresence mode="wait">
              <OptimizedServiceImage 
                key={activeIndex}
                src={serviciosData[activeIndex].image} 
                alt={serviciosData[activeIndex].title}
                isActive={true}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/50 to-transparent"></div>
            
            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#00d4ff]/20 text-[#00d4ff] border border-[#00d4ff]/30 mb-4">
                    0{activeIndex + 1} / 0{serviciosData.length}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-medium text-white mb-3">
                    {serviciosData[activeIndex].title}
                  </h3>
                  <p className="text-gray-300 max-w-lg leading-relaxed">
                    {serviciosData[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl border border-[#00d4ff]/20 group-hover:border-[#00d4ff]/40 transition-colors duration-500"></div>
          </div>
        </div>
      </div>

      {/* Botón */}
      <div className="text-center mt-12">
        <Button 
          onClick={() => navigate('/servicios')} 
          size="lg" 
          className="btn-outline-futuristic border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/10 px-10 py-6 text-lg rounded-full"
        >
          Ver todos los servicios
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [badgeIndex, setBadgeIndex] = useState(0);

  const badgeTexts = [
    'Creatividad + Estrategia',
    'Hacemos que tu idea impacte',
    'Diseño que convierte',
    'Tu marca merece brillar'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % badgeTexts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
            {/* Badge - Dinámico */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5"
            >
              <Sparkles className="w-4 h-4 text-[#00d4ff] shrink-0" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={badgeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm text-[#00d4ff] font-medium"
                >
                  {badgeTexts[badgeIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-relaxed mb-6 tracking-relaxed">
              Impulsa tu marca
              <span className="block gradient-text-light pb-4">en digital</span>
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
                onClick={() => navigate('/contacto')} 
                size="lg" 
                className="btn-futuristic bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:from-[#0077ff] hover:to-[#00e5ff] text-white font-medium px-8 py-6 text-lg rounded-full"
              >
                Empieza tu proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => navigate('/servicios')} 
                variant="outline" 
                size="lg" 
                className="btn-outline-futuristic border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/10 px-8 py-6 text-lg rounded-full"
              >
                Ver servicios
              </Button>
            </motion.div>
          </motion.div>
        </div>
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

      {/* Nuestras Divisiones - Cards con Hover Expandible */}
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
              className="group relative h-28 hover:h-80 transition-all duration-500 ease-out rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image - Solo visible en hover */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                  alt="Creative background"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-[#0a0a0f]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Card Background por defecto */}
              <div className="absolute inset-0 z-0 bg-[#12121a] border border-white/10 rounded-2xl group-hover:border-[#00d4ff]/30 transition-all duration-500"></div>
              
              {/* Contenido */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Header - Siempre visible */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-white">Mar Digital Creative</h3>
                </div>
                
                {/* Contenido expandible */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                  <p className="text-lg text-gray-200 mb-3">
                    Diseño Web, Branding, Social Media y Marketing Digital.
                  </p>
                  <p className="text-gray-400 mb-6">
                    Para emprendedores y empresas que buscan identidad sólida y presencia real en línea.
                  </p>
                  <div className="h-px w-full bg-gradient-to-r from-[#00d4ff]/50 to-transparent mb-5"></div>
                  <span 
                    onClick={() => navigate('/creative')}
                    className="text-[#00d4ff] text-sm font-medium flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    Explorar servicios <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              
              {/* Glow effect en hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_60px_-15px_rgba(0,212,255,0.3)]"></div>
            </motion.div>

            {/* Mar Digital Business */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }} 
              className="group relative h-28 hover:h-80 transition-all duration-500 ease-out rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image - Solo visible en hover */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                  alt="Business background"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-[#0a0a0f]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Card Background por defecto */}
              <div className="absolute inset-0 z-0 bg-[#12121a] border border-white/10 rounded-2xl group-hover:border-[#00d4ff]/30 transition-all duration-500"></div>
              
              {/* Contenido */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Header - Siempre visible */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex items-center justify-center shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-white">Mar Digital Business</h3>
                </div>
                
                {/* Contenido expandible */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                  <p className="text-lg text-gray-200 mb-3">
                    Consultoría estratégica, modelos de negocio y transformación digital.
                  </p>
                  <p className="text-gray-400 mb-6">
                    Para empresas que necesitan claridad, estructura y rutas de crecimiento.
                  </p>
                  <div className="h-px w-full bg-gradient-to-r from-[#00d4ff]/50 to-transparent mb-5"></div>
                  <span 
                    onClick={() => navigate('/business')}
                    className="text-[#00d4ff] text-sm font-medium flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    Explorar servicios <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              
              {/* Glow effect en hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_60px_-15px_rgba(0,212,255,0.3)]"></div>
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

      {/* Servicios Destacados - Scroll Interactivo */}
      <section className="bg-[#12121a] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <div className="line-accent mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-6">
              Servicios <span className="gradient-text">destacados</span>
            </h2>
            <p className="text-xl text-gray-400">Lo que podemos hacer por ti</p>
          </motion.div>

          <ServiciosScroll navigate={navigate} />
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
