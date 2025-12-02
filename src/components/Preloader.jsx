import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Preloader = ({ show = false, onComplete }) => {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Lock page scroll while the preloader is visible
  useEffect(() => {
    if (!show) return;
    
    const prevOverflow = document.body.style.overflow;
    const prevScrollY = window.scrollY;
    
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${prevScrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, prevScrollY);
    };
  }, [show]);

  // Simulate loading progress
  useEffect(() => {
    if (!show) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Optional: Call completion callback
          if (onComplete) {
            setTimeout(() => onComplete(), 300);
          }
          return 100;
        }
        return Math.min(prev + (5 + Math.random() * 15), 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [show, onComplete]);

  // Respect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    
    const handler = (e) => setReduceMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const trackVariants = {
    animate: {
      background: [
        'linear-gradient(90deg, #f3f4f6 0%, #e5e7eb 50%, #f3f4f6 100%)',
        'linear-gradient(90deg, #e5e7eb 0%, #f3f4f6 50%, #e5e7eb 100%)',
        'linear-gradient(90deg, #f3f4f6 0%, #e5e7eb 50%, #f3f4f6 100%)'
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const slidingAnimation = reduceMotion
    ? {
        opacity: [0.6, 1, 0.6],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      }
    : {
        x: [0, 224, 0],
        rotate: [0, 5, -5, 0],
        transition: {
          duration: 1.2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: [0.4, 0, 0.2, 1]
        }
      };

  return (
    <AnimatePresence mode="wait">
      {show && (



        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-white to-gray-50 flex items-center justify-center"
          variants={containerVariants}
          initial="initial"
          exit="exit"
          role="status"
          aria-live="polite"
          aria-label="Loading page content"
        >
          <div className="flex flex-col items-center space-y-8">
            
            {/* Main Logo/Brand */}
            <motion.div
              className="flex flex-col items-center space-y-4"
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
            </motion.div>
            <motion.div 
              className="text-center space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-gray-600 font-medium">
                {progress < 30 && "Preparing your experience..."}
                {progress >= 30 && progress < 70 && "Loading property data..."}
                {progress >= 70 && progress < 90 && "Almost ready..."}
                {progress >= 90 && "Welcome to BlueEstate!"}
              </p>
              <p className="text-xs text-gray-400">
                Your dream home awaits
              </p>
            </motion.div>

            {/* Animated Loading Track */}
            <div className="w-80 max-w-[85vw] space-y-6">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Loading...</span>
                  <span>{progress}%</span>
                </div>
              </div>

              {/* Sliding Logo Animation */}
              <div className="space-y-4">

                {/* Dots Animation */}
                <div className="flex justify-center space-x-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="h-2 w-2 bg-blue-600 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Loading Text with Typing Effect */}

          </div>

          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;