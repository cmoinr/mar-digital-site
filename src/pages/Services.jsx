import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, TrendingUp, Globe, BarChart3, Briefcase, Lightbulb, Target } from 'lucide-react';
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
              Nuestros <span className="gradient-text">Servicios</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
              En Mar Digital integramos creatividad y estrategia para que tu marca tenga 
              presencia, identidad y resultados medibles en digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mar Digital Creative */}
      <section className="section-padding bg-[#12121a] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex items-center justify-center mr-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Mar Digital Creative
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-400 mb-8">
                Creamos soluciones digitales que elevan la identidad de tu marca y generan confianza en tus clientes.
              </p>
              <div className="space-y-6">
                <div className="card-futuristic rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0066ff]/10 flex items-center justify-center shrink-0">
                      <Globe className="h-5 w-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Diseño y Desarrollo Web</h4>
                      <p className="text-gray-400 text-sm mb-3">Landing Pages, Websites Corporativos y E-commerce optimizados para conversión.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#0066ff]/10 text-[#00d4ff] text-xs font-medium border border-[#0066ff]/20">Responsive Design</span>
                        <span className="px-3 py-1 rounded-full bg-[#0066ff]/10 text-[#00d4ff] text-xs font-medium border border-[#0066ff]/20">SEO Optimizado</span>
                        <span className="px-3 py-1 rounded-full bg-[#0066ff]/10 text-[#00d4ff] text-xs font-medium border border-[#0066ff]/20">Performance</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-futuristic rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                      <Palette className="h-5 w-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Branding & Diseño Gráfico</h4>
                      <p className="text-gray-400 text-sm mb-3">Logos, identidades visuales y packs de contenido para una marca sólida y profesional.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">Identidad Visual</span>
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">Manual de Marca</span>
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">Assets Digitales</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-futuristic rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                      <BarChart3 className="h-5 w-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Social Media & Copywriting</h4>
                      <p className="text-gray-400 text-sm mb-3">Contenido gráfico + textos estratégicos para redes sociales que conectan y venden.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">Content Strategy</span>
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">Diseño de Posts</span>
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">Copy Persuasivo</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-futuristic rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="h-5 w-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Marketing Digital & Ads</h4>
                      <p className="text-gray-400 text-sm mb-3">Configuración de plataformas, gestión de Google Ads y Meta Ads para atraer más clientes.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">Google Ads</span>
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">Meta Ads</span>
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">Analytics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-[600px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 rounded-2xl backdrop-blur-sm border border-white/10"></div>
              <img alt="A designer sketching ideas on a tablet in a bright, modern studio" className="absolute inset-0 w-full h-full object-cover rounded-2xl mix-blend-luminosity opacity-40" src="https://images.unsplash.com/photo-1668337376593-630fbf2980be" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mar Digital Business */}
      <section className="section-padding bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-[600px] lg:order-first"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 rounded-2xl backdrop-blur-sm border border-white/10"></div>
              <img alt="A team of business professionals collaborating around a table with laptops and documents" className="absolute inset-0 w-full h-full object-cover rounded-2xl mix-blend-luminosity opacity-40" src="https://images.unsplash.com/photo-1597385196258-b043c8c515d4" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent rounded-2xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:order-last"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Mar Digital Business
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-400 mb-8">
                Acompañamos a empresas y startups con consultoría estratégica para crecer con bases sólidas y visión a futuro.
              </p>
              <div className="space-y-6">
                <div className="card-futuristic rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0066ff]/10 flex items-center justify-center shrink-0">
                      <Briefcase className="h-5 w-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Consultoría en Modelos de Negocio</h4>
                      <p className="text-gray-400 text-sm">Diagnóstico y rediseño estratégico para maximizar el valor de tu empresa.</p>
                    </div>
                  </div>
                </div>

                <div className="card-futuristic rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="h-5 w-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Transformación Digital</h4>
                      <p className="text-gray-400 text-sm">Procesos, herramientas y KPIs para evolucionar tu empresa hacia el futuro digital.</p>
                    </div>
                  </div>
                </div>

                <div className="card-futuristic rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                      <BarChart3 className="h-5 w-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Valoración de Empresas</h4>
                      <p className="text-gray-400 text-sm">Métodos financieros avanzados para conocer el valor real de tu compañía.</p>
                    </div>
                  </div>
                </div>

                <div className="card-futuristic rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                      <Lightbulb className="h-5 w-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Análisis y Proyección Financiera</h4>
                      <p className="text-gray-400 text-sm">Modelos dinámicos, escenarios y planificación de capital inteligente.</p>
                    </div>
                  </div>
                </div>

                <div className="card-futuristic rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                      <Target className="h-5 w-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Estructuración de Capital</h4>
                      <p className="text-gray-400 text-sm">Estrategias para optimizar financiamiento y atraer inversionistas estratégicos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-[#12121a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#0066ff] rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d4ff] rounded-full blur-[200px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              ¿Listo para <span className="gradient-text">impulsar</span> tu negocio?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
              Ya sea que necesites creatividad para tu marca o consultoría estratégica para tu empresa, 
              en Mar Digital tenemos el servicio perfecto para ti. Conectemos y construyamos algo extraordinario juntos.
            </p>
            <Button 
              onClick={handleCTA}
              size="lg" 
              className="btn-futuristic bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:from-[#0077ff] hover:to-[#00e5ff] text-white font-medium px-12 py-7 text-xl rounded-full"
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