import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, BarChart3, DollarSign, Target, CheckCircle, FileText, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

const Business = () => {
  const { toast } = useToast();
  const { t } = useTranslation('business');

  const handleCTA = () => {
    toast({
      title: t('cta.toastTitle'),
      description: ""
    });
  };

  const services = [
    {
      icon: <Briefcase className="h-12 w-12 text-[#075296]" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description')
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-[#369c08]" />,
      title: t('services.digital.title'),
      description: t('services.digital.description')
    },
    {
      icon: <DollarSign className="h-12 w-12 text-[#8cc63f]" />,
      title: t('services.valuation.title'),
      description: t('services.valuation.description')
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-[#0e88e2]" />,
      title: t('services.financial.title'),
      description: t('services.financial.description')
    },
    {
      icon: <FileText className="h-12 w-12 text-[#1fd0ff]" />,
      title: t('services.modeling.title'),
      description: t('services.modeling.description')
    },
    {
      icon: <Target className="h-12 w-12 text-[#075296]" />,
      title: t('services.projects.title'),
      description: t('services.projects.description')
    },
    {
      icon: <DollarSign className="h-12 w-12 text-[#8cc63f]" />,
      title: t('services.capital.title'),
      description: t('services.capital.description')
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
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
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
              {t('hero.subtitle')}
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
              {t('services.title')}
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
              {t('benefits.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              {t('benefits.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t('benefits.item1.title'),
                description: t('benefits.item1.description')
              },
              {
                title: t('benefits.item2.title'),
                description: t('benefits.item2.description')
              },
              {
                title: t('benefits.item3.title'),
                description: t('benefits.item3.description')
              },
              {
                title: t('benefits.item4.title'),
                description: t('benefits.item4.description')
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
              {t('methodologies.title')}
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
              <h3 className="text-2xl font-bold mb-4 text-white">{t('methodologies.methodologiesTitle')}</h3>
              <ul className="space-y-3 text-gray-400">
                {t('methodologies.items', { returnObjects: true }).map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></span>
                    {item}
                  </li>
                ))}
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
              <h3 className="text-2xl font-bold mb-4 text-white">{t('methodologies.toolsTitle')}</h3>
              <ul className="space-y-3 text-gray-400">
                {t('methodologies.tools', { returnObjects: true }).map((tool, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></span>
                    {tool}
                  </li>
                ))}
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
              <h3 className="text-2xl font-bold mb-4 text-white">{t('methodologies.deliverablesTitle')}</h3>
              <ul className="space-y-3 text-gray-400">
                {t('methodologies.deliverables', { returnObjects: true }).map((deliverable, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f]"></span>
                    {deliverable}
                  </li>
                ))}
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
              {t('finalCta.title')}
            </h2>
            <Button 
              onClick={handleCTA}
              size="lg" 
              className="btn-futuristic px-12 py-6 text-xl rounded-full"
            >
              {t('finalCta.button')}
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Business;