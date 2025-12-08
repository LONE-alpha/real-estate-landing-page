import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  Building2, Home } from 'lucide-react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    // Hide preloader after loading
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  const realEstateIcons = [
    { icon: Home, color: 'text-orange-500' },
    { icon: Building2, color: 'text-blue-500' },
    { icon: Home, color: 'text-green-500' },
    { icon: Home, color: 'text-purple-500' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="relative w-full max-w-md px-8">
            {/* Animated Icons Grid */}
            <div className="relative mb-8">
              <div className="grid grid-cols-2 gap-6">
                {realEstateIcons.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="flex flex-col items-center"
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        y: [0, -5, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: index * 0.2,
                      }}
                      className={`mb-2 rounded-2xl bg-gradient-to-br from-gray-50 to-white p-4 shadow-lg ${item.color}`}
                    >
                      <item.icon className="h-8 w-8" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              
              {/* Floating Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                  className="relative"
                >
                  <div className="h-24 w-24 rounded-full border-2 border-orange-200" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-3"
                    >
                      <Home className="h-8 w-8 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Logo and Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8 text-center"
            >
              <h1 className="mb-2 text-3xl font-bold text-gray-900">
                <span className="text-orange-500">Estate</span>
                <span className="text-gray-900">Pro</span>
              </h1>
              <p className="text-gray-600">
                Finding your perfect home...
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-4"
            >
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Loading Properties</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
                />
              </div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center space-x-1"
            >
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  animate={{
                    y: [0, -5, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    delay: dot * 0.1,
                  }}
                  className="h-2 w-2 rounded-full bg-orange-500"
                />
              ))}
            </motion.div>

            {/* Loading Tips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-center"
            >
              <div className="inline-block rounded-full bg-gray-100 px-4 py-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Tip:</span> Use filters to find properties faster
                </p>
              </div>
            </motion.div>

            {/* Map Pattern Background */}
            <div className="absolute inset-0 -z-10 opacity-5">
              <div className="h-full w-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cpath%20d%3D%22M100%200C44.8%200%200%2044.8%200%20100s44.8%20100%20100%20100%20100-44.8%20100-100S155.2%200%20100%200zm0%20180c-44.2%200-80-35.8-80-80s35.8-80%2080-80%2080%2035.8%2080%2080-35.8%2080-80%2080z%22%20fill%3D%22%23666%22%2F%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%228%22%20fill%3D%22%23f97316%22%2F%3E%3C%2Fsvg%3E')]"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;