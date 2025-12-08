import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Palette, BarChart3, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Creative = () => {
  const { toast } = useToast();

  const handleCTA = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: ""
    });
  };

  const creativeServices = [
    {
      icon: <Globe className="h-12 w-12 text-[#075296]" />,
      title: "Diseño y Desarrollo Web",
      description: "Creamos sitios web que transmiten confianza y venden. Desde landing pages para captar leads hasta e-commerce robustos con todo lo que necesitas para crecer."
    },
    {
      icon: <Palette className="h-12 w-12 text-[#1fd0ff]" />,
      title: "Branding & Diseño Gráfico",
      description: "Tu identidad visual es la cara de tu negocio. Diseñamos logos, manuales de marca y piezas gráficas que reflejan la esencia de tu empresa y generan impacto."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-[#8cc63f]" />,
      title: "Social Media & Copywriting",
      description: "No se trata solo de publicar, sino de conectar. Creamos piezas gráficas y textos estratégicos que construyen comunidad y generan ventas en redes sociales."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-[#369c08]" />,
      title: "Marketing Digital & Ads",
      description: "Hacemos que tu marca llegue a más personas. Configuramos y gestionamos Google Ads y Meta Ads, optimizamos tu ficha de Google Business y medimos resultados."
    }
  ];

  const creativePacks = [
    {
      name: "Starter Creative Pack",
      description: "Incluye logo, flyer digital y 10 piezas gráficas para redes.",
      idealFor: "Perfecto para emprendedores que quieren arrancar con una identidad clara y profesional."
    },
    {
      name: "Growth Creative Pack",
      description: "Branding completo, 20 piezas gráficas y 10 captions estratégicos.",
      idealFor: "Diseñado para marcas en expansión que buscan consistencia y una imagen sólida en redes."
    },
    {
      name: "Premium Creative Pack",
      description: "Branding completo, 30 piezas gráficas premium y 30 captions avanzados.",
      idealFor: "La solución integral para empresas que quieren destacar con identidad sólida y gestión avanzada de contenidos."
    }
  ];

  const businessPacks = [
    {
      name: "Starter Business Pack",
      description: "Landing Page Semi Pro en WordPress + Google Business Setup.",
      idealFor: "Ideal para empresas que necesitan una presencia digital básica para captar clientes locales."
    },
    {
      name: "Growth Business Pack",
      description: "Website corporativo (WordPress), optimización SEO y Pixel de Meta.",
      idealFor: "Una web optimizada + métricas claras para hacer crecer tu negocio en digital."
    },
    {
      name: "Premium Business Pack",
      description: "Website corporativo Pro (código), gestión de Google Ads y Meta Ads.",
      idealFor: "Estrategia completa de ventas online con web avanzada y campañas publicitarias profesionales."
    }
  ];

  const ecommercePacks = [
    {
      name: "Starter E-Commerce Pack",
      description: "Tienda básica en WordPress + Google Business Setup.",
      idealFor: "La forma más rápida y accesible de empezar a vender en línea."
    },
    {
      name: "Growth E-Commerce Pack",
      description: "E-commerce Pro (código), SEO y Pixel de Meta.",
      idealFor: "Tienda robusta con optimización de tráfico y métricas para crecer sostenidamente."
    },
    {
      name: "Premium E-Commerce Pack",
      description: "E-commerce Pro (código), gestión de Google Ads y Meta Ads.",
      idealFor: "Tienda avanzada con estrategia publicitaria completa para escalar ventas."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mar Digital Creative - Creatividad que impulsa tu marca</title>
        <meta name="description" content="En Mar Digital Creative diseñamos experiencias que conectan con tu público y convierten visitas en clientes." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#0066ff] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00d4ff] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/a6ca65f8-09dc-4ddf-a714-07c8ebf24d62/logo_rebrand---mar-creative---entrega-01-AWx6o.png" 
              alt="Mar Digital Creative" 
              className="w-48 h-auto mx-auto mb-8 brightness-0 invert"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Creatividad que impulsa tu marca.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
              Desde un logo hasta una tienda online completa: en Mar Digital Creative diseñamos 
              experiencias que conectan con tu público y convierten visitas en clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Servicios Creative */}
      <section className="section-padding bg-[#12121a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="line-accent mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Servicios Creative
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creativeServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-futuristic p-6 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex items-center justify-center">
                    {React.cloneElement(service.icon, { className: 'h-8 w-8 text-white' })}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-4 text-center text-white">{service.title}</h3>
                <p className="text-gray-400 text-center text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Packs */}
      <section className="section-padding bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="line-accent mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Creative Packs
            </h2>
            <p className="text-lg md:text-xl text-gray-400">Paquetes diseñados para cada etapa de tu negocio.</p>
          </motion.div>

          <h3 className="text-2xl font-bold text-white mb-8 text-center">División Creative (Branding + Diseño + Redes)</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {creativePacks.map((pack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-futuristic p-8 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#00d4ff]"></div>
                  <h4 className="text-xl font-bold text-white">{pack.name}</h4>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{pack.description}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{pack.idealFor}</p>
              </motion.div>
            ))}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent mb-16"></div>

          <h3 className="text-2xl font-bold text-white mb-8 text-center">División Business (Web + SEO + Ads)</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {businessPacks.map((pack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-futuristic p-8 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#8cc63f]"></div>
                  <h4 className="text-xl font-bold text-white">{pack.name}</h4>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{pack.description}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{pack.idealFor}</p>
              </motion.div>
            ))}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent mb-16"></div>

          <h3 className="text-2xl font-bold text-white mb-8 text-center">División E-Commerce (Tiendas Online)</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {ecommercePacks.map((pack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-futuristic p-8 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#00d4ff]"></div>
                  <h4 className="text-xl font-bold text-white">{pack.name}</h4>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{pack.description}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{pack.idealFor}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios de trabajar con Creative */}
      <section className="section-padding bg-[#12121a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="line-accent mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Beneficios de trabajar con Creative
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Diseño profesional con propósito",
                description: "Cada elemento visual está pensado para cumplir objetivos claros de tu negocio."
              },
              {
                title: "Identidad de marca sólida y coherente",
                description: "Tu marca se verá profesional y consistente en todos los puntos de contacto."
              },
              {
                title: "Contenido pensado para atraer y vender",
                description: "Creamos mensajes y diseños que conectan emocionalmente y generan conversiones."
              },
              {
                title: "Soluciones escalables a la medida de tu negocio",
                description: "Servicios que crecen contigo, desde emprendimiento hasta empresa consolidada."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-futuristic text-center p-6 group"
              >
                <CheckCircle className="h-8 w-8 text-[#00d4ff] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative section-padding bg-[#0a0a0f] overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#0066ff] rounded-full blur-[120px] opacity-20 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00d4ff] rounded-full blur-[120px] opacity-20 -translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Haz que tu marca brille en digital con creatividad y estrategia.
            </h2>
            <Button 
              onClick={handleCTA}
              size="lg" 
              className="btn-futuristic px-12 py-6 text-xl rounded-full"
            >
              Quiero mi propuesta Creative
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Creative;