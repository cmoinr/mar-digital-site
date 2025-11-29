import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CollageSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Array de colores neon para las imágenes del collage
  const images = [
    { id: 1, gradient: 'from-[#ff006e] to-[#ff4466]', delay: 0, offset: -20 },
    { id: 2, gradient: 'from-[#00d4ff] to-[#0099ff]', delay: 0.1, offset: 20 },
    { id: 3, gradient: 'from-[#00ff88] to-[#00cc66]', delay: 0.2, offset: -15 },
    { id: 4, gradient: 'from-[#ffaa00] to-[#ff8800]', delay: 0.3, offset: 25 },
    { id: 5, gradient: 'from-[#ff00ff] to-[#aa00ff]', delay: 0.4, offset: -10 },
    { id: 6, gradient: 'from-[#00ffff] to-[#0088ff]', delay: 0.5, offset: 15 },
  ];

  return (
    <section className="relative min-h-[350px] py-16 bg-[#0a0a0f] overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Collage Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-max">
          {images.map((image, index) => {
            // Alternar alturas para crear un efecto de masonry
            const heights = ['h-48', 'h-56', 'h-64', 'h-52'];
            const height = heights[index % heights.length];
            
            // Alternar anchos también
            const cols = index % 3 === 0 ? 'md:col-span-1' : 'md:col-span-1';

            return (
              <motion.div
                key={image.id}
                style={{
                  y: (scrollY - 400) * (image.offset / 100) || 0
                }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                className={`relative ${height} ${cols} rounded-2xl overflow-hidden group cursor-pointer`}
              >
                {/* Image container with gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${image.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Animated overlay elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 6 + image.delay * 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="w-32 h-32 rounded-full backdrop-blur-sm border border-white/20"
                  />
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        delay: image.delay + i * 0.2
                      }}
                      className="absolute w-1 h-1 rounded-full bg-white"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`
                      }}
                    />
                  ))}
                </div>

                {/* Glass effect border */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/30 transition-colors duration-300"></div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default CollageSection;
