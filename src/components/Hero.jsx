import React from 'react';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';

const Hero = ({ searchFilters, onSearchChange }) => {
  return (
    <section className="relative overflow-hidden mb-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"></div>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(img/hero/hero1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-white">
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Discover Your Next Home
        </motion.h1>
        <motion.p
          className="mt-4 text-base md:text-lg text-blue-100 max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Explore curated listings across the country with smart filters and immersive photos.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/95 backdrop-blur rounded-xl shadow-xl p-4">
            <SearchBar searchFilters={searchFilters} onSearchChange={onSearchChange} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;