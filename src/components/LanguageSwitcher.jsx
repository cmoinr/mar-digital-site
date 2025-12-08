import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const LanguageSwitcher = ({ isMobile = false }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language === 'es' ? 'ES' : 'EN';
  const nextLang = i18n.language === 'es' ? 'EN' : 'ES';

  if (isMobile) {
    return (
      <button
        onClick={toggleLanguage}
        className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-xl transition-all duration-300 border border-white/10"
      >
        <Globe className="h-5 w-5" />
        <span className="text-sm font-medium flex-1 text-left">
          Idioma / Language
        </span>
        <span className="text-xs font-bold text-[#00d4ff] bg-[#00d4ff]/10 px-3 py-1 rounded-full">
          {currentLang} → {nextLang}
        </span>
      </button>
    );
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 rounded-xl transition-all duration-300 group"
      title={`Switch to ${nextLang}`}
    >
      <Globe className="h-4 w-4 group-hover:text-[#00d4ff] transition-colors" />
      <span className="text-sm font-medium uppercase">
        {currentLang}
      </span>
    </motion.button>
  );
};

export default LanguageSwitcher;
