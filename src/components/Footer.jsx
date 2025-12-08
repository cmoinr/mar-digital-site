import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Briefs', path: '/briefs' },
    { name: 'Creative', path: '/creative' },
    { name: 'Business', path: '/business' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'hola@mardigital.com', href: 'mailto:hola@mardigital.com' },
    { icon: Phone, text: '+34 123 456 789', href: 'tel:+34123456789' },
    { icon: MapPin, text: 'Madrid, España', href: null }
  ];

  const companyLinks = [
    { name: 'Política de Cookies', path: '#' },
    { name: 'Política de Privacidad', path: '#' },
    { name: 'Términos y Condiciones', path: '#' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <footer className="bg-[#0a0a0f] border-t border-[#00d4ff]/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066ff] rounded-full blur-[200px] opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00d4ff] rounded-full blur-[200px] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content - 4 Columns */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Link to="/" className="inline-block">
              <img 
                src="https://horizons-cdn.hostinger.com/a6ca65f8-09dc-4ddf-a714-07c8ebf24d62/artboard-14-fbWiw.png" 
                alt="Mar Digital" 
                className="h-16 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Impulsa tu marca con <span className="text-[#00d4ff] font-semibold">diseño</span> y{' '}
              <span className="text-[#0066ff] font-semibold">estrategia digital</span> que genera resultados reales.
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] rounded-full"></div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Accesos Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#00d4ff] transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Datos de Contacto</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="w-5 h-5 text-[#00d4ff] flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{item.text}</span>
                  </>
                );

                return (
                  <li key={index}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-3 hover:text-[#00d4ff] transition-colors duration-200 group"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Column 4: Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Empresa</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#00d4ff] transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#00d4ff]/10"></div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-8"
        >
          <div className="flex flex-col items-center space-y-6">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              Síguenos en
            </h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#12121a] to-[#0a0a0f] border border-[#00d4ff]/20 flex items-center justify-center hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#00d4ff] transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#00d4ff]/10"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-6 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2025 <span className="text-[#00d4ff] font-semibold">Mar Digital</span>. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
