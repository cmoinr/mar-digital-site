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
      <section className="pt-32 pb-20 creative-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/a6ca65f8-09dc-4ddf-a714-07c8ebf24d62/logo_rebrand---mar-creative---entrega-01-AWx6o.png" 
              alt="Mar Digital Creative" 
              className="w-48 h-auto mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Creatividad que impulsa tu marca.
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto">
              Desde un logo hasta una tienda online completa: en Mar Digital Creative diseñamos 
              experiencias que conectan con tu público y convierten visitas en clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Servicios Creative */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-8">
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
                className="bg-gray-50 rounded-xl p-6 hover-scale card-glow"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Packs */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-8">
              Creative Packs
            </h2>
            <p className="text-lg md:text-xl text-gray-700">Paquetes diseñados para cada etapa de tu negocio.</p>
          </motion.div>

          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">División Creative (Branding + Diseño + Redes)</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {creativePacks.map((pack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="creative-gradient rounded-xl p-6 text-white hover-scale card-glow"
              >
                <h4 className="text-xl font-bold mb-3">{pack.name}</h4>
                <p className="text-white/90 mb-4">{pack.description}</p>
                <p className="text-white/70 text-sm">{pack.idealFor}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">División Business (Web + SEO + Ads)</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {businessPacks.map((pack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="business-gradient rounded-xl p-6 text-white hover-scale card-glow"
              >
                <h4 className="text-xl font-bold mb-3">{pack.name}</h4>
                <p className="text-white/90 mb-4">{pack.description}</p>
                <p className="text-white/70 text-sm">{pack.idealFor}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">División E-Commerce (Tiendas Online)</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {ecommercePacks.map((pack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="creative-gradient rounded-xl p-6 text-white hover-scale card-glow"
              >
                <h4 className="text-xl font-bold mb-3">{pack.name}</h4>
                <p className="text-white/90 mb-4">{pack.description}</p>
                <p className="text-white/70 text-sm">{pack.idealFor}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios de trabajar con Creative */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-8">
              Beneficios de trabajar con Creative
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Diseño profesional con propósito",
              "Identidad de marca sólida y coherente",
              "Contenido pensado para atraer y vender",
              "Soluciones escalables a la medida de tu negocio"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50 hover-scale"
              >
                <CheckCircle className="h-8 w-8 text-[#1fd0ff] mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-800">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding creative-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              className="bg-[#1fd0ff] hover:bg-white text-black font-bold px-12 py-6 text-xl"
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