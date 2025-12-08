import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Rocket, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import CollageSection from '@/components/CollageSection';
import marArtImage from '@/assets/images/mar-art.png';
import marOfficerImage from '@/assets/images/mar-officer-nobg.png';
import marSidesImage from '@/assets/images/mar-sides.png';

// Datos de servicios - URLs optimizadas con compresión
const getServiciosData = (t) => [
  {
    title: t('services.items.0.title'),
    description: t('services.items.0.description'),
    shortDesc: t('services.items.0.shortDesc'),
    image: marArtImage
  },
  {
    title: t('services.items.1.title'),
    description: t('services.items.1.description'),
    shortDesc: t('services.items.1.shortDesc'),
    image: "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
  },
  {
    title: t('services.items.2.title'),
    description: t('services.items.2.description'),
    shortDesc: t('services.items.2.shortDesc'),
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
  },
  {
    title: t('services.items.3.title'),
    description: t('services.items.3.description'),
    shortDesc: t('services.items.3.shortDesc'),
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
const ServiciosScroll = ({ navigate, serviciosData, t }) => {
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
          {t('divisions.viewAll')}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation('home');
  const [badgeIndex, setBadgeIndex] = useState(0);
  const badgeTexts = t('badge.texts', { returnObjects: true });
  const serviciosData = getServiciosData(t);

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
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>

      {/* Hero Section - Minimalista y Futurista */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
        {/* Animated Pixelated Waves Background */}
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave1" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="transparent"/>
                <rect className="wave-pixel" x="0" y="20" width="20" height="20" fill="#0066ff" opacity="0.15">
                  <animate attributeName="opacity" values="0.15;0.3;0.15" dur="4s" repeatCount="indefinite"/>
                </rect>
                <rect className="wave-pixel" x="20" y="30" width="20" height="20" fill="#0066ff" opacity="0.12">
                  <animate attributeName="opacity" values="0.12;0.25;0.12" dur="4s" begin="0.2s" repeatCount="indefinite"/>
                </rect>
                <rect className="wave-pixel" x="40" y="25" width="20" height="20" fill="#0077ff" opacity="0.18">
                  <animate attributeName="opacity" values="0.18;0.35;0.18" dur="4s" begin="0.4s" repeatCount="indefinite"/>
                </rect>
                <rect className="wave-pixel" x="60" y="15" width="20" height="20" fill="#0088ff" opacity="0.14">
                  <animate attributeName="opacity" values="0.14;0.28;0.14" dur="4s" begin="0.6s" repeatCount="indefinite"/>
                </rect>
              </pattern>
              
              <pattern id="wave2" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="transparent"/>
                <rect x="0" y="40" width="25" height="25" fill="#00d4ff" opacity="0.1">
                  <animate attributeName="opacity" values="0.1;0.22;0.1" dur="5s" repeatCount="indefinite"/>
                </rect>
                <rect x="25" y="50" width="25" height="25" fill="#00d4ff" opacity="0.08">
                  <animate attributeName="opacity" values="0.08;0.18;0.08" dur="5s" begin="0.3s" repeatCount="indefinite"/>
                </rect>
                <rect x="50" y="45" width="25" height="25" fill="#00bbff" opacity="0.12">
                  <animate attributeName="opacity" values="0.12;0.25;0.12" dur="5s" begin="0.6s" repeatCount="indefinite"/>
                </rect>
                <rect x="75" y="35" width="25" height="25" fill="#00aaff" opacity="0.09">
                  <animate attributeName="opacity" values="0.09;0.2;0.09" dur="5s" begin="0.9s" repeatCount="indefinite"/>
                </rect>
              </pattern>
              
              <pattern id="wave3" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <rect width="120" height="120" fill="transparent"/>
                <rect x="0" y="60" width="30" height="30" fill="#0066ff" opacity="0.06">
                  <animate attributeName="opacity" values="0.06;0.15;0.06" dur="6s" repeatCount="indefinite"/>
                </rect>
                <rect x="30" y="70" width="30" height="30" fill="#0077ff" opacity="0.08">
                  <animate attributeName="opacity" values="0.08;0.18;0.08" dur="6s" begin="0.4s" repeatCount="indefinite"/>
                </rect>
                <rect x="60" y="65" width="30" height="30" fill="#0088ff" opacity="0.07">
                  <animate attributeName="opacity" values="0.07;0.16;0.07" dur="6s" begin="0.8s" repeatCount="indefinite"/>
                </rect>
                <rect x="90" y="55" width="30" height="30" fill="#0099ff" opacity="0.05">
                  <animate attributeName="opacity" values="0.05;0.14;0.05" dur="6s" begin="1.2s" repeatCount="indefinite"/>
                </rect>
              </pattern>
            </defs>
            
            {/* Layer 1 - Moving left to right */}
            <rect width="100%" height="100%" fill="url(#wave1)">
              <animateTransform
                attributeName="transform"
                type="translate"
                from="-80 0"
                to="0 0"
                dur="8s"
                repeatCount="indefinite"
              />
            </rect>
            
            {/* Layer 2 - Moving left to right (slower) */}
            <rect width="100%" height="100%" fill="url(#wave2)">
              <animateTransform
                attributeName="transform"
                type="translate"
                from="-100 0"
                to="0 0"
                dur="12s"
                repeatCount="indefinite"
              />
            </rect>
            
            {/* Layer 3 - Moving left to right (slowest) */}
            <rect width="100%" height="100%" fill="url(#wave3)">
              <animateTransform
                attributeName="transform"
                type="translate"
                from="-120 0"
                to="0 0"
                dur="16s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </div>
        
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#0066ff] rounded-full blur-[150px] opacity-15"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00d4ff] rounded-full blur-[150px] opacity-15"></div>
        
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

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white leading-relaxed mb-6 tracking-relaxed">
              {t('hero.title')}
              <span className="block gradient-text-light pb-4">{t('hero.titleHighlight')}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
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
                {t('hero.ctaPrimary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => navigate('/servicios')} 
                variant="outline" 
                size="lg" 
                className="btn-outline-futuristic border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/10 px-8 py-6 text-lg rounded-full"
              >
                {t('hero.ctaSecondary')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Collage Section */}
      <CollageSection />

      {/* ¿Quiénes somos? - Minimalista */}
      <section className="pt-20 pb-4 px-6 lg:px-8 bg-[#12121a] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="line-accent mb-8 mx-auto"></div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center">
              {t('about.title')} <span className="gradient-text">{t('about.titleHighlight')}</span>?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                {t('about.description')}
              </p>
              <div className="flex justify-center lg:justify-end">
                <img 
                  src={marOfficerImage}
                  alt="Mar Digital Team"
                  loading="lazy"
                  className="max-w-sm lg:max-w-md w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nuestras Divisiones - Cards con Hover Expandible */}
      <section className="section-padding bg-[#0a0a0f] relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#0066ff] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00d4ff] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-20"
          >
            <div className="line-accent mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              {t('divisions.title')} <span className="gradient-text">{t('divisions.titleHighlight')}</span>
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
                  <h3 className="text-2xl font-medium text-white">{t('divisions.creative.title')}</h3>
                </div>
                
                {/* Contenido expandible */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                  <p className="text-lg text-gray-200 mb-3">
                    {t('divisions.creative.description')}
                  </p>
                  <p className="text-gray-400 mb-6">
                    {t('divisions.creative.subtitle')}
                  </p>
                  <div className="h-px w-full bg-gradient-to-r from-[#00d4ff]/50 to-transparent mb-5"></div>
                  <span 
                    onClick={() => navigate('/creative')}
                    className="text-[#00d4ff] text-sm font-medium flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    {t('divisions.creative.cta')} <ArrowRight className="w-4 h-4" />
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
                  <h3 className="text-2xl font-medium text-white">{t('divisions.business.title')}</h3>
                </div>
                
                {/* Contenido expandible */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                  <p className="text-lg text-gray-200 mb-3">
                    {t('divisions.business.description')}
                  </p>
                  <p className="text-gray-400 mb-6">
                    {t('divisions.business.subtitle')}
                  </p>
                  <div className="h-px w-full bg-gradient-to-r from-[#00d4ff]/50 to-transparent mb-5"></div>
                  <span 
                    onClick={() => navigate('/business')}
                    className="text-[#00d4ff] text-sm font-medium flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    {t('divisions.business.cta')} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              
              {/* Glow effect en hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_60px_-15px_rgba(0,212,255,0.3)]"></div>
            </motion.div>
          </div>
          {/* Botón */}
          <div className="text-center mt-12">
            <Button 
              onClick={() => navigate('/servicios')} 
              size="lg" 
              className="btn-outline-futuristic border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/10 px-10 py-6 text-lg rounded-full"
            >
              {t('divisions.viewAll')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Beneficios - Minimalista */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/19926784/pexels-photo-19926784.jpeg" 
            alt="Benefits background"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/95 via-[#0a0a0f]/70 to-[#0a0a0f]/50"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-20"
          >
            <div className="line-accent mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              {t('benefits.title')} <span className="gradient-text">{t('benefits.titleHighlight')}</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {t('benefits.items', { returnObjects: true }).map((benefit, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                viewport={{ once: true }} 
                className="text-center p-10 rounded-2xl card-futuristic"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center text-[#00d4ff]">
                  {index === 0 && <Target className="h-6 w-6" />}
                  {index === 1 && <Sparkles className="h-6 w-6" />}
                  {index === 2 && <Rocket className="h-6 w-6" />}
                  {index === 3 && <BarChart3 className="h-6 w-6" />}
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
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('services.title')} <span className="gradient-text">{t('services.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-400">{t('services.subtitle')}</p>
          </motion.div>

          <ServiciosScroll navigate={navigate} serviciosData={serviciosData} t={t} />
        </div>
      </section>

      {/* CTA Final - Impactante */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={marSidesImage}
            alt="CTA background"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/95 via-[#0a0a0f]/70 to-[#0a0a0f]/50"></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#0066ff] rounded-full blur-[200px] opacity-10 z-0"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d4ff] rounded-full blur-[200px] opacity-10 z-0"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="space-y-10"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t('finalCta.title')}
              <span className="block gradient-text-light">{t('finalCta.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('finalCta.subtitle')}
            </p>
            <Button 
              asChild 
              size="lg" 
              className="btn-futuristic bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:from-[#0077ff] hover:to-[#00e5ff] text-white font-medium px-12 py-7 text-xl rounded-full"
            >
              <a href="tel:+573183183093">
                {t('finalCta.button')}
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
