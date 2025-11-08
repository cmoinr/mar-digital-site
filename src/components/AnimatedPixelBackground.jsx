import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedPixelBackground = () => {
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    const calculateGrid = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const pixelSize = 16;
      setGrid({
        cols: Math.ceil(screenWidth / pixelSize),
        rows: Math.ceil(screenHeight / pixelSize),
      });
    };

    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  const waveColors = ['#075296', '#0e88e2', '#1fd0ff'];

  const isWavePixel = (row, col, totalRows, totalCols) => {
    const waveCenterY = totalRows * 0.4;
    const waveFrequency = 0.2;
    const waveAmplitude = 3;

    for (let i = 0; i < waveColors.length; i++) {
      const y = waveCenterY + (i - 1) * 4;
      const wavePath = y + Math.sin(col * waveFrequency + i) * waveAmplitude;
      if (row >= wavePath && row < wavePath + 2) {
        return waveColors[i];
      }
    }
    return null;
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <div className="relative w-full h-full">
        {Array.from({ length: grid.rows }).map((_, rowIndex) =>
          Array.from({ length: grid.cols }).map((_, colIndex) => {
            const color = isWavePixel(rowIndex, colIndex, grid.rows, grid.cols);
            if (color) {
              return (
                <motion.div
                  key={`${rowIndex}-${colIndex}`}
                  className="absolute"
                  style={{
                    left: `${colIndex * 16}px`,
                    top: `${rowIndex * 16}px`,
                    width: '16px',
                    height: '16px',
                    backgroundColor: color,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.5, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    delay: Math.random() * 5,
                  }}
                />
              );
            }
            return null;
          })
        )}
      </div>
    </div>
  );
};

export default AnimatedPixelBackground;