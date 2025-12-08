import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, TrendingUp, Globe, BarChart3, Briefcase, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation('services'); // Usar namespace 'services'
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate('/contacto');
  };

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
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
              {t('hero.title')} <span className="gradient-text">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
              {t('hero.subtitle')}
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
                  {t('creative.title')}
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-400 mb-8">
                {t('creative.subtitle')}
              </p>
              <div className="space-y-6">
                <div className="card-futuristic rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0066ff]/10 flex items-center justify-center shrink-0">
                      <Globe className="h-5 w-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{t('creative.webDev.title')}</h4>
                      <p className="text-gray-400 text-sm mb-3">{t('creative.webDev.description')}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#0066ff]/10 text-[#00d4ff] text-xs font-medium border border-[#0066ff]/20">{t('creative.webDev.tag1')}</span>
                        <span className="px-3 py-1 rounded-full bg-[#0066ff]/10 text-[#00d4ff] text-xs font-medium border border-[#0066ff]/20">{t('creative.webDev.tag2')}</span>
                        <span className="px-3 py-1 rounded-full bg-[#0066ff]/10 text-[#00d4ff] text-xs font-medium border border-[#0066ff]/20">{t('creative.webDev.tag3')}</span>
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
                      <h4 className="font-semibold text-white mb-2">{t('creative.branding.title')}</h4>
                      <p className="text-gray-400 text-sm mb-3">{t('creative.branding.description')}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">{t('creative.branding.tag1')}</span>
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">{t('creative.branding.tag2')}</span>
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">{t('creative.branding.tag3')}</span>
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
                      <h4 className="font-semibold text-white mb-2">{t('creative.socialMedia.title')}</h4>
                      <p className="text-gray-400 text-sm mb-3">{t('creative.socialMedia.description')}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">{t('creative.socialMedia.tag1')}</span>
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">{t('creative.socialMedia.tag2')}</span>
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">{t('creative.socialMedia.tag3')}</span>
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
                      <h4 className="font-semibold text-white mb-2">{t('creative.marketing.title')}</h4>
                      <p className="text-gray-400 text-sm mb-3">{t('creative.marketing.description')}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">{t('creative.marketing.tag1')}</span>
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">{t('creative.marketing.tag2')}</span>
                        <span className="px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium border border-[#00d4ff]/20">{t('creative.marketing.tag3')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  onClick={handleCTA}
                  size="lg" 
                  className="btn-futuristic bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:from-[#0077ff] hover:to-[#00e5ff] text-white font-semibold px-10 py-6 text-lg rounded-full w-full"
                >
                  {t('creative.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
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
              <img alt="..." className="absolute inset-0 w-full h-full object-cover rounded-2xl" src="/src/assets/images/mar-digital-draw.jpg" />
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
              <img alt="..." className="absolute inset-0 w-full h-full object-cover rounded-2xl" src="/src/assets/images/business-mar.png" />
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
                  {t('business.title')}
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-400 mb-8">
                {t('business.subtitle')}
              </p>
              <div className="space-y-6">
                <div className="card-futuristic rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0066ff]/10 flex items-center justify-center shrink-0">
                      <Briefcase className="h-5 w-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{t('business.consulting.title')}</h4>
                      <p className="text-gray-400 text-sm">{t('business.consulting.description')}</p>
                    </div>
                  </div>
                </div>

                <div className="card-futuristic rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="h-5 w-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{t('business.digital.title')}</h4>
                      <p className="text-gray-400 text-sm">{t('business.digital.description')}</p>
                    </div>
                  </div>
                </div>

                <div className="card-futuristic rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                      <BarChart3 className="h-5 w-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{t('business.financial.title')}</h4>
                      <p className="text-gray-400 text-sm">{t('business.financial.description')}</p>
                    </div>
                  </div>
                </div>

                <div className="card-futuristic rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                      <Lightbulb className="h-5 w-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{t('business.projects.title')}</h4>
                      <p className="text-gray-400 text-sm">{t('business.projects.description')}</p>
                    </div>
                  </div>
                </div>

                <div className="card-futuristic rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                      <Target className="h-5 w-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{t('business.projects.title')}</h4>
                      <p className="text-gray-400 text-sm">{t('business.projects.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  onClick={handleCTA}
                  size="lg" 
                  className="btn-futuristic bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:from-[#0077ff] hover:to-[#00e5ff] text-white font-semibold px-10 py-6 text-lg rounded-full w-full"
                >
                  {t('business.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/31687152/pexels-photo-31687152.jpeg"
            alt="CTA background"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/95 via-[#0a0a0f]/70 to-[#0a0a0f]/50"></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#0066ff] rounded-full blur-[200px] opacity-10 z-0"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d4ff] rounded-full blur-[200px] opacity-10 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              {t('cta.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
              {t('cta.description')}
            </p>
            <Button 
              onClick={handleCTA}
              size="lg" 
              className="btn-futuristic bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:from-[#0077ff] hover:to-[#00e5ff] text-white font-medium px-12 py-7 text-xl rounded-full"
            >
              {t('cta.button')}
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;