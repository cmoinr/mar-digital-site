import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Palette, BarChart3, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

const Creative = () => {
  const { t } = useTranslation('creative');
  const { toast } = useToast();

  const handleCTA = () => {
    toast({
      title: t('cta.toastTitle'),
      description: ""
    });
  };

  const creativeServices = [
    {
      icon: <Globe className="h-12 w-12 text-[#075296]" />,
      title: t('services.webDev.title'),
      description: t('services.webDev.description')
    },
    {
      icon: <Palette className="h-12 w-12 text-[#1fd0ff]" />,
      title: t('services.branding.title'),
      description: t('services.branding.description')
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-[#8cc63f]" />,
      title: t('services.socialMedia.title'),
      description: t('services.socialMedia.description')
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-[#369c08]" />,
      title: t('services.marketing.title'),
      description: t('services.marketing.description')
    }
  ];

  const creativePacks = [
    {
      name: t('packs.creative.starter.name'),
      description: t('packs.creative.starter.description'),
      idealFor: t('packs.creative.starter.idealFor')
    },
    {
      name: t('packs.creative.growth.name'),
      description: t('packs.creative.growth.description'),
      idealFor: t('packs.creative.growth.idealFor')
    },
    {
      name: t('packs.creative.premium.name'),
      description: t('packs.creative.premium.description'),
      idealFor: t('packs.creative.premium.idealFor')
    }
  ];

  const businessPacks = [
    {
      name: t('packs.business.starter.name'),
      description: t('packs.business.starter.description'),
      idealFor: t('packs.business.starter.idealFor')
    },
    {
      name: t('packs.business.growth.name'),
      description: t('packs.business.growth.description'),
      idealFor: t('packs.business.growth.idealFor')
    },
    {
      name: t('packs.business.premium.name'),
      description: t('packs.business.premium.description'),
      idealFor: t('packs.business.premium.idealFor')
    }
  ];

  const ecommercePacks = [
    {
      name: t('packs.ecommerce.starter.name'),
      description: t('packs.ecommerce.starter.description'),
      idealFor: t('packs.ecommerce.starter.idealFor')
    },
    {
      name: t('packs.ecommerce.growth.name'),
      description: t('packs.ecommerce.growth.description'),
      idealFor: t('packs.ecommerce.growth.idealFor')
    },
    {
      name: t('packs.ecommerce.premium.name'),
      description: t('packs.ecommerce.premium.description'),
      idealFor: t('packs.ecommerce.premium.idealFor')
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
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
              {t('hero.subtitle')}
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
              {t('services.title')}
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
              {t('packsSection.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-400">{t('packsSection.subtitle')}</p>
          </motion.div>

          <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('packsSection.creativeDivision')}</h3>
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

          <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('packsSection.businessDivision')}</h3>
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

          <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('packsSection.ecommerceDivision')}</h3>
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
              {t('benefits.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t('benefits.professional.title'),
                description: t('benefits.professional.description')
              },
              {
                title: t('benefits.identity.title'),
                description: t('benefits.identity.description')
              },
              {
                title: t('benefits.content.title'),
                description: t('benefits.content.description')
              },
              {
                title: t('benefits.scalable.title'),
                description: t('benefits.scalable.description')
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

export default Creative;