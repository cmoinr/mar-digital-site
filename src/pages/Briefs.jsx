import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Palette, Share2, Target, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import BriefFormModal from '@/components/BriefFormModal';
import { briefTypes } from '@/utils/briefConfig';

const Briefs = () => {
  const { t } = useTranslation('briefs'); // Usar namespace 'briefs'
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedBrief, setSelectedBrief] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBriefClick = (briefType) => {
    setSelectedBrief(briefType);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBrief(null);
  };

  const briefsData = [
    {
      id: 1,
      title: t('cards.webDesign.title'),
      icon: FileText,
      description: t('cards.webDesign.description'),
      color: "from-[#0066ff] to-[#0052cc]",
      iconColor: "text-[#0066ff]",
      briefType: briefTypes.WEB_DESIGN
    },
    {
      id: 2,
      title: t('cards.branding.title'),
      icon: Palette,
      description: t('cards.branding.description'),
      color: "from-[#00d4ff] to-[#00a8cc]",
      iconColor: "text-[#00d4ff]",
      briefType: briefTypes.BRANDING
    },
    {
      id: 3,
      title: t('cards.socialMedia.title'),
      icon: Share2,
      description: t('cards.socialMedia.description'),
      color: "from-[#6366f1] to-[#4f46e5]",
      iconColor: "text-[#6366f1]",
      briefType: briefTypes.SOCIAL_MEDIA
    },
    {
      id: 4,
      title: t('cards.marketing.title'),
      icon: Target,
      description: t('cards.marketing.description'),
      color: "from-[#ec4899] to-[#db2777]",
      iconColor: "text-[#ec4899]",
      briefType: briefTypes.MARKETING
    },
    {
      id: 5,
      title: t('cards.consulting.title'),
      icon: Briefcase,
      description: t('cards.consulting.description'),
      color: "from-[#10b981] to-[#059669]",
      iconColor: "text-[#10b981]",
      briefType: briefTypes.CONSULTING
    }
  ];

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
              {t('hero.title')} <span className="gradient-text">{t('hero.titleHighlight')}</span> {t('hero.titleEnd')}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#12121a] to-[#0a0a0f] border border-[#00d4ff]/20 rounded-2xl p-8 md:p-12"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('intro.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Briefs Grid */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('briefsGrid.title')} <span className="gradient-text">{t('briefsGrid.titleHighlight')}</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t('briefsGrid.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {briefsData.map((brief, index) => {
              const Icon = brief.icon;
              return (
                <motion.div
                  key={brief.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-[#12121a] to-[#0a0a0f] border border-[#00d4ff]/20 rounded-2xl p-8 hover:border-[#00d4ff]/50 transition-all duration-300 flex flex-col"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${brief.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${brief.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00d4ff] transition-colors">
                      {brief.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                      {brief.description}
                    </p>

                    {/* Button */}
                    <Button
                      onClick={() => handleBriefClick(brief.briefType)}
                      className={`w-full bg-gradient-to-r ${brief.color} hover:opacity-90 text-white font-semibold py-6 rounded-xl transition-all duration-300 group/btn mt-auto`}
                    >
                      <span>{t('cta.button')}</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0066ff]/5 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t('finalCta.title')}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t('finalCta.description')}
            </p>
            <Button
              onClick={() => navigate('/contacto')}
              className="bg-gradient-to-r from-[#00d4ff] to-[#0066ff] hover:opacity-90 text-white font-semibold px-8 py-6 rounded-xl text-lg transition-all duration-300"
            >
              {t('finalCta.button')}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Brief Form Modal */}
      {selectedBrief && (
        <BriefFormModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          briefType={selectedBrief}
        />
      )}
    </>
  );
};

export default Briefs;
