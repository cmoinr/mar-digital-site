import React, { useState } from 'react';
import { motion } from 'framer-motion';
import whatsappIcon from '@/assets/icons/whatsapp.svg';

/**
 * FloatingWhatsAppButton Component
 * 
 * Botón flotante de WhatsApp en la esquina inferior derecha
 * 
 * Props:
 *   - whatsappLink: URL del link de WhatsApp Business (ej: https://wa.me/...)
 *   - iconPath: Ruta del icono SVG o PNG (opcional, por defecto usa whatsapp.svg)
 *   - showLabel: Mostrar etiqueta de texto (por defecto: true)
 */
export default function FloatingWhatsAppButton({ 
  whatsappLink = "https://wa.me/1234567890", 
  iconPath = null,
  showLabel = true 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Etiqueta con animación */}
      {showLabel && isHovered && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.2 }}
          className="bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg whitespace-nowrap"
        >
          Contacta con nosotros
        </motion.div>
      )}

      {/* Botón flotante */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <img 
          src={iconPath || whatsappIcon} 
          alt="WhatsApp" 
          className="w-14 h-14"
        />
      </a>
    </motion.div>
  );
}
