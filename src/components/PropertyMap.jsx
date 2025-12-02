import React from 'react';
import { motion } from 'framer-motion';

const PropertyMap = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  return (
    <motion.section
      className="mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6"
        variants={titleVariants}
      >
        <h2 className="section-title text-center">Explore on the Map</h2>
      </motion.div>

      {/* Full width breakout, with overflow clipped */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-4 overflow-x-hidden">
        <motion.div
          className="h-72 md:h-96 w-full bg-gradient-to-br from-gray-100 to-gray-50 border-y border-gray-200 flex items-center justify-center text-gray-500"
          variants={mapVariants}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Map Integration Coming Soon
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PropertyMap;