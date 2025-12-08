
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation('common'); // Usar namespace 'common'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/servicios' },
    { name: t('nav.briefs'), path: '/briefs' },
    { name: t('nav.creative'), path: '/creative' },
    { name: t('nav.business'), path: '/business' },
    { name: t('nav.blog'), path: '/blog' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0a0f]/40 backdrop-blur-xl border-b border-[#00d4ff]/10 shadow-2xl' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://horizons-cdn.hostinger.com/a6ca65f8-09dc-4ddf-a714-07c8ebf24d62/artboard-14-fbWiw.png" alt="Mar Digital Logo" className="h-14 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path 
                    ? 'text-[#00d4ff]' 
                    : scrolled 
                      ? 'text-gray-300 hover:text-[#00d4ff]' 
                      : 'text-white/80 hover:text-[#00d4ff]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* CTA Button - Contacto */}
            <Button
              onClick={() => navigate('/contacto')}
              className="px-6 py-2.5 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:shadow-lg hover:shadow-[#00d4ff]/40 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              {t('nav.contact')}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-md transition-colors ${scrolled ? 'text-gray-300' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#12121a]/80 backdrop-blur-xl border border-[#00d4ff]/20 rounded-lg mt-2 py-4 shadow-xl"
          >
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path 
                    ? 'text-[#00d4ff] bg-[#00d4ff]/10' 
                    : 'text-gray-300 hover:text-[#00d4ff] hover:bg-[#00d4ff]/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="px-4 pt-4 pb-2">
              <LanguageSwitcher isMobile={true} />
            </div>
            
            {/* Mobile CTA Button - Contacto */}
            <div className="px-4 pt-2 pb-2">
              <Button
                onClick={() => {
                  navigate('/contacto');
                  setIsOpen(false);
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] hover:shadow-lg hover:shadow-[#00d4ff]/40 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {t('nav.contact')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
