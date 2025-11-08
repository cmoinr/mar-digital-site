import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, TrendingUp, Globe, BarChart3, Briefcase, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
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
        <title>Nuestros Servicios - Mar Digital</title>
        <meta name="description" content="En Mar Digital integramos creatividad y estrategia para que tu marca tenga presencia, identidad y resultados medibles en digital." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Nuestros Servicios
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
              En Mar Digital integramos creatividad y estrategia para que tu marca tenga 
              presencia, identidad y resultados medibles en digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mar Digital Creative */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <img src="https://horizons-cdn.hostinger.com/a6ca65f8-09dc-4ddf-a714-07c8ebf24d62/logo_rebrand---mar-creative---entrega-01-AWx6o.png" alt="Mar Digital Creative Logo" className="h-16 w-auto mr-4"/>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Mar Digital Creative
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Creamos soluciones digitales que elevan la identidad de tu marca y generan confianza en tus clientes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3"><Globe className="h-6 w-6 text-[#075296] mt-1 shrink-0" /><div><h4 className="font-bold">Diseño y Desarrollo Web</h4><p className="text-gray-600">Landing Pages, Websites Corporativos y E-commerce optimizados para conversión.</p></div></div>
                <div className="flex items-start space-x-3"><Palette className="h-6 w-6 text-[#1fd0ff] mt-1 shrink-0" /><div><h4 className="font-bold">Branding & Diseño Gráfico</h4><p className="text-gray-600">Logos, identidades visuales y packs de contenido para una marca sólida y profesional.</p></div></div>
                <div className="flex items-start space-x-3"><BarChart3 className="h-6 w-6 text-[#8cc63f] mt-1 shrink-0" /><div><h4 className="font-bold">Social Media & Copywriting</h4><p className="text-gray-600">Contenido gráfico + textos estratégicos para redes sociales que conectan y venden.</p></div></div>
                <div className="flex items-start space-x-3"><TrendingUp className="h-6 w-6 text-[#369c08] mt-1 shrink-0" /><div><h4 className="font-bold">Marketing Digital & Ads</h4><p className="text-gray-600">Configuración de plataformas, gestión de Google Ads y Meta Ads para atraer más clientes.</p></div></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-full"
            >
              <img alt="A designer sketching ideas on a tablet in a bright, modern studio" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1668337376593-630fbf2980be" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mar Digital Business */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-full lg:order-last"
            >
              <img alt="A team of business professionals collaborating around a table with laptops and documents" className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1597385196258-b043c8c515d4" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:order-first"
            >
              <div className="flex items-center mb-6">
                <img src="https://horizons-cdn.hostinger.com/a6ca65f8-09dc-4ddf-a714-07c8ebf24d62/logo_rebrand---mar-bussines---entrega-01-F8M0i.png" alt="Mar Digital Business Logo" className="h-16 w-auto mr-4"/>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Mar Digital Business
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Acompañamos a empresas y startups con consultoría estratégica para crecer con bases sólidas y visión a futuro.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3"><Briefcase className="h-6 w-6 text-[#075296] mt-1 shrink-0" /><div><h4 className="font-bold">Consultoría en Modelos de Negocio</h4><p className="text-gray-600">Diagnóstico y rediseño estratégico.</p></div></div>
                <div className="flex items-start space-x-3"><TrendingUp className="h-6 w-6 text-[#369c08] mt-1 shrink-0" /><div><h4 className="font-bold">Transformación Digital</h4><p className="text-gray-600">Procesos, herramientas y KPIs para evolucionar tu empresa.</p></div></div>
                <div className="flex items-start space-x-3"><BarChart3 className="h-6 w-6 text-[#8cc63f] mt-1 shrink-0" /><div><h4 className="font-bold">Análisis y Proyección Financiera</h4><p className="text-gray-600">Modelos dinámicos, escenarios y planificación de capital.</p></div></div>
                <div className="flex items-start space-x-3"><Lightbulb className="h-6 w-6 text-[#1fd0ff] mt-1 shrink-0" /><div><h4 className="font-bold">Estructuración de Capital</h4><p className="text-gray-600">Estrategias para optimizar financiamiento y atraer inversionistas.</p></div></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              ¿Listo para impulsar tu negocio?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto">
              Ya sea que necesites creatividad para tu marca o consultoría estratégica para tu empresa, 
              en Mar Digital tenemos el servicio perfecto para ti.
            </p>
            <Button 
              onClick={handleCTA}
              size="lg" 
              className="bg-[#1fd0ff] hover:bg-white text-black font-bold px-12 py-6 text-xl"
            >
              Solicita tu propuesta personalizada
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;