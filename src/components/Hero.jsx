import { motion } from 'framer-motion';
import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Home, Shield, Trophy, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
<div  className="absolute inset-0 bg-[url('img/hero/hero1.png')] bg-no-repeat bg-cover bg-center opacity-20" />

      {/* Content */}
      <div className="relative z-10 container-custom flex min-h-screen flex-col justify-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="heading-1 mb-6 text-white">
            Find Your Dream
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Home with Confidence
            </span>
          </h1>
          
          <p className="mb-10 text-xl text-gray-300">
            Discover premium properties with verified listings, virtual tours, and expert guidance
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <SearchBar />
          </motion.div>

          {/* Stats & Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {[
              { icon: Home, value: '50K+', label: 'Properties' },
              { icon: Shield, value: '100%', label: 'Verified' },
              { icon: Trophy, value: 'Award', label: 'Winning' },
              { icon: TrendingUp, value: '99%', label: 'Satisfaction' },
            ].map((item, index) => (
              <div key={index} className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <item.icon className="mx-auto mb-2 h-8 w-8 text-orange-400" />
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <div className="text-sm text-gray-300">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-8 w-px bg-gradient-to-b from-orange-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;