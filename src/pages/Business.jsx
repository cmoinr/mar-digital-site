import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, BarChart3, DollarSign, Target, CheckCircle, FileText, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Business = () => {
  const { toast } = useToast();

  const handleCTA = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: ""
    });
  };

  const services = [
    {
      icon: <Briefcase className="h-12 w-12 text-[#075296]" />,
      title: "Consultoría en Modelos de Negocio",
      description: "Análisis 360° de tu empresa, rediseño de propuesta de valor y plan estratégico para crecer de manera sostenible."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-[#369c08]" />,
      title: "Transformación Digital",
      description: "Diagnóstico de madurez digital, identificación de procesos clave y plan de implementación con herramientas y KPIs."
    },
    {
      icon: <DollarSign className="h-12 w-12 text-[#8cc63f]" />,
      title: "Valoración de Empresas",
      description: "Estimación objetiva del valor real de tu compañía con metodologías como DCF, múltiplos de mercado y análisis de activos."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-[#0e88e2]" />,
      title: "Análisis Financiero Avanzado",
      description: "Revisión de liquidez, rentabilidad, deuda y eficiencia. Incluye escenarios financieros y recomendaciones estratégicas."
    },
    {
      icon: <FileText className="h-12 w-12 text-[#1fd0ff]" />,
      title: "Modelación y Proyección Financiera",
      description: "Modelos dinámicos en Excel o Power BI para anticipar necesidades de capital y planear el crecimiento."
    },
    {
      icon: <Target className="h-12 w-12 text-[#075296]" />,
      title: "Formulación y Evaluación de Proyectos",
      description: "Estudios completos con VAN, TIR y análisis de viabilidad para tomar decisiones informadas."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mar Digital Business - Estrategia y consultoría para hacer crecer tu empresa</title>
        <meta name="description" content="En Mar Digital Business te ayudamos a estructurar tu negocio con modelos sólidos, transformación digital y gestión financiera avanzada." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 business-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/a6ca65f8-09dc-4ddf-a714-07c8ebf24d62/logo_rebrand---mar-bussines---entrega-01-F8M0i.png" 
              alt="Mar Digital Business" 
              className="w-48 h-auto mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Estrategia y consultoría para hacer crecer tu empresa.
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto">
              En Mar Digital Business te ayudamos a estructurar tu negocio con modelos sólidos, 
              transformación digital y gestión financiera avanzada. No entregamos solo diagnósticos, 
              sino rutas claras de crecimiento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Servicios Business */}
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
              Servicios Business
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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

      {/* Servicios Adicionales */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="business-gradient rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <DollarSign className="h-8 w-8 text-[#8cc63f] mr-3" />
                Estructuración de Capital y Apalancamiento Financiero
              </h3>
              <p className="text-lg text-white/90">
                Definición del mix óptimo entre capital propio y externo, con estrategias para 
                optimizar tu financiamiento y atraer inversionistas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <img alt="Close-up of a stock market graph on a digital screen" className="w-full h-48 object-cover rounded-lg mb-6" src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0" />
              <p className="text-lg text-gray-600 text-center">
                Metodologías internacionales adaptadas a tu realidad empresarial.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
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
              Beneficios de trabajar con Business
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Metodologías internacionales adaptadas a tu realidad",
              "Enfoque premium: diagnóstico + plan de acción",
              "Entregables claros (informes PDF, modelos en Excel/Power BI)",
              "Acompañamiento estratégico hasta implementar resultados"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50 hover-scale"
              >
                <CheckCircle className="h-8 w-8 text-[#8cc63f] mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-800">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologías */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
              Metodologías Premium
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <BarChart3 className="h-12 w-12 text-[#075296] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Análisis DCF</h3>
                <p className="text-gray-600">Flujos de caja descontados para valoración precisa</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <TrendingUp className="h-12 w-12 text-[#8cc63f] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Múltiplos de Mercado</h3>
                <p className="text-gray-600">Comparación con empresas similares del sector</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Target className="h-12 w-12 text-[#369c08] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">VAN y TIR</h3>
                <p className="text-gray-600">Evaluación completa de viabilidad de proyectos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding business-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Tu empresa merece crecer con visión estratégica y bases financieras sólidas.
            </h2>
            <Button 
              onClick={handleCTA}
              size="lg" 
              className="bg-[#8cc63f] hover:bg-white text-black font-bold px-12 py-6 text-xl"
            >
              Solicita tu consultoría Business
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Business;