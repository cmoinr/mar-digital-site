import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Componente de imagen optimizada con lazy loading y placeholder
const OptimizedImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="absolute inset-0 bg-[#12121a]">
      {/* Placeholder blur mientras carga */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] animate-pulse" />
      )}
      <img 
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

const CollageSection = () => {
  // URLs optimizadas con parámetros de compresión de Pexels
  const images = [
    { 
      id: 1, 
      url: 'https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      delay: 0, 
      offset: -20 
    },
    { 
      id: 2, 
      url: 'https://images.pexels.com/photos/4126763/pexels-photo-4126763.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      delay: 0.1, 
      offset: 20 
    },
    { 
      id: 3, 
      url: 'https://images.pexels.com/photos/8297441/pexels-photo-8297441.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      delay: 0.2, 
      offset: -15 
    },
    { 
      id: 4, 
      url: 'https://images.pexels.com/photos/2127969/pexels-photo-2127969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      delay: 0.3, 
      offset: 25 
    },
    { 
      id: 5, 
      url: 'https://images.pexels.com/photos/26970289/pexels-photo-26970289.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      delay: 0.4, 
      offset: -10 
    },
    { 
      id: 6, 
      url: 'https://images.pexels.com/photos/14225929/pexels-photo-14225929.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      delay: 0.5, 
      offset: 15 
    },
  ];

  return (
    <section className="relative min-h-[350px] py-16 bg-[#0a0a0f] overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Collage Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image) => {
            return (
              <div
                key={image.id}
                className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Background image con lazy loading */}
                {image.url && (
                  <OptimizedImage 
                    src={image.url} 
                    alt={`Collage ${image.id}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                
                {/* Gradient overlay (opcional, reduce la opacidad si quieres ver más la imagen) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${image.gradient} opacity-30 group-hover:opacity-20 transition-opacity duration-300`}
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
              </div>
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
