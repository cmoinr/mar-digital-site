import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Diseño Web",
      subtitle: "Experiencias digitales memorables",
      gradient: "from-[#ff006e] via-[#00d4ff] to-[#0066ff]",
      bgColor: "bg-gradient-to-br from-[#1a0033] via-[#0a0a0f] to-[#001a4d]"
    },
    {
      id: 2,
      title: "Branding Futurista",
      subtitle: "Identidades visuales que impactan",
      gradient: "from-[#00d4ff] via-[#00ff88] to-[#ffaa00]",
      bgColor: "bg-gradient-to-br from-[#001a2e] via-[#0a0a0f] to-[#2e1a00]"
    },
    {
      id: 3,
      title: "Marketing Digital",
      subtitle: "Estrategias que generan crecimiento",
      gradient: "from-[#00ff88] via-[#00d4ff] to-[#ff006e]",
      bgColor: "bg-gradient-to-br from-[#001a00] via-[#0a0a0f] to-[#330011]"
    },
    {
      id: 4,
      title: "Consultoría Estratégica",
      subtitle: "Transformación digital con propósito",
      gradient: "from-[#ffaa00] via-[#ff006e] to-[#00d4ff]",
      bgColor: "bg-gradient-to-br from-[#2e1700] via-[#0a0a0f] to-[#1a0033]"
    }
  ];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = slides.length - 1;
      if (nextIndex >= slides.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0a0a0f] py-20">
      {/* Background blur effect */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${currentSlide.bgColor}`}></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
        <div className="absolute inset-0 bg-[#0a0a0f]/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  {currentSlide.title}
                </h2>
              </motion.div>

              <motion.div
                key={`subtitle-${currentSlide.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className={`text-xl font-semibold bg-gradient-to-r ${currentSlide.gradient} bg-clip-text text-transparent`}>
                  {currentSlide.subtitle}
                </p>
              </motion.div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Soluciones innovadoras que combinan tecnología y creatividad para llevar tu marca al siguiente nivel.
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-3 pt-4">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? `bg-gradient-to-r ${currentSlide.gradient} w-8 h-3`
                      : 'bg-gray-600 w-3 h-3 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <div className="relative h-[400px] md:h-[500px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 }
                }}
                className="absolute inset-0"
              >
                <div className={`relative h-full rounded-3xl overflow-hidden ${currentSlide.bgColor} backdrop-blur-xl border border-white/10`}>
                  {/* Gradient overlay image */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentSlide.gradient} opacity-80`}></div>

                  {/* Animated elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                      className="w-64 h-64 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-2xl"
                    />
                  </div>

                  {/* Icon/Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center z-10">
                      <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="mb-4"
                      >
                        <span className={`text-8xl font-bold bg-gradient-to-r ${currentSlide.gradient} bg-clip-text text-transparent`}>
                          {currentSlide.id}
                        </span>
                      </motion.div>
                      <p className="text-white/60 text-lg">de {slides.length}</p>
                    </div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          x: [0, Math.random() * 100 - 50],
                          y: [0, Math.random() * 100 - 50],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 4 + i,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${currentSlide.gradient}`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                onClick={() => paginate(-1)}
                className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                onClick={() => paginate(1)}
                className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
