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
    },
    {
      icon: <DollarSign className="h-12 w-12 text-[#8cc63f]" />,
      title: "Estructuración de Capital y Apalancamiento Financiero",
      description: "Definición del mix óptimo entre capital propio y externo, con estrategias para optimizar tu financiamiento y atraer inversionistas."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mar Digital Business - Estrategia y consultoría para hacer crecer tu empresa</title>
        <meta name="description" content="En Mar Digital Business te ayudamos a estructurar tu negocio con modelos sólidos, transformación digital y gestión financiera avanzada." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#8cc63f] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#369c08] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/a6ca65f8-09dc-4ddf-a714-07c8ebf24d62/logo_rebrand---mar-bussines---entrega-01-F8M0i.png" 
              alt="Mar Digital Business" 
              className="w-48 h-auto mx-auto mb-8 brightness-0 invert"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Estrategia y consultoría para hacer crecer tu empresa.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
              En Mar Digital Business te ayudamos a estructurar tu negocio con modelos sólidos, 
              transformación digital y gestión financiera avanzada. No entregamos solo diagnósticos, 
              sino rutas claras de crecimiento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Servicios Business */}
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
                className="card-futuristic p-6 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#8cc63f] to-[#369c08] flex items-center justify-center">
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

      {/* Beneficios */}
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
              ¿Por qué trabajar con Business?
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Consultoría de alto nivel con entregables concretos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Metodologías internacionales adaptadas a tu realidad",
                description: "Aplicamos frameworks probados globalmente, ajustados al contexto de tu empresa."
              },
              {
                title: "Enfoque premium: diagnóstico + plan de acción",
                description: "No solo identificamos problemas, te damos la ruta exacta para solucionarlos."
              },
              {
                title: "Entregables claros (informes PDF, modelos en Excel/Power BI)",
                description: "Documentación profesional y herramientas prácticas listas para usar."
              },
              {
                title: "Acompañamiento estratégico hasta implementar resultados",
                description: "Te apoyamos en la ejecución para que las estrategias se conviertan en realidad."
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
                <CheckCircle className="h-8 w-8 text-[#8cc63f] mx-auto mb-4 group-hover:scale-110 transition-transform" />
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

      {/* Metodologías & Herramientas */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Metodologías y entregables profesionales
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card-futuristic p-8 group"
            >
              <BarChart3 className="h-12 w-12 text-[#8cc63f] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 text-white">Metodologías</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></span>
                  Canvas de modelo de negocio
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></span>
                  DCF y múltiplos de mercado
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></span>
                  VAN, TIR, Payback
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></span>
                  Análisis de madurez digital
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="card-futuristic p-8 group"
            >
              <TrendingUp className="h-12 w-12 text-[#8cc63f] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 text-white">Herramientas</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></span>
                  Excel avanzado (modelos dinámicos)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></span>
                  Power BI (dashboards interactivos)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></span>
                  Google Analytics & Data Studio
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></span>
                  Plataformas de automatización
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-futuristic p-8 group"
            >
              <FileText className="h-12 w-12 text-[#8cc63f] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 text-white">Entregables</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></span>
                  Informes ejecutivos en PDF
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></span>
                  Modelos financieros editables
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></span>
                  Planes de acción paso a paso
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></span>
                  Presentaciones ejecutivas
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative section-padding bg-[#0a0a0f] overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#8cc63f] rounded-full blur-[120px] opacity-20 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#369c08] rounded-full blur-[120px] opacity-20 -translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              className="btn-futuristic px-12 py-6 text-xl rounded-full"
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