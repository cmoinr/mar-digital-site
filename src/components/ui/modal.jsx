import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

/**
 * Modal component with futuristic design matching the website's aesthetic
 */
const Modal = ({ isOpen, onClose, title, children, maxWidth = 'max-w-4xl' }) => {
  // Close on ESC key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: 'spring', damping: 25 }}
              className={`relative w-full ${maxWidth} my-8`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Content */}
              <div className="relative bg-gradient-to-br from-[#12121a] to-[#0a0a0f] border-2 border-[#00d4ff]/30 rounded-3xl shadow-2xl overflow-hidden">
                {/* Gradient accent at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066ff] via-[#00d4ff] to-[#0066ff]"></div>
                
                {/* Header */}
                <div className="relative px-6 py-5 border-b border-[#00d4ff]/20 flex items-center justify-between">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {title}
                  </h2>
                  <button
                    onClick={onClose}
                    className="group p-2 rounded-xl hover:bg-[#00d4ff]/10 transition-all duration-300"
                    aria-label="Cerrar modal"
                  >
                    <X className="w-6 h-6 text-gray-400 group-hover:text-[#00d4ff] transition-colors" />
                  </button>
                </div>

                {/* Body */}
                <div className="relative p-6 md:p-8 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
                  {children}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
