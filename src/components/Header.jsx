import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur shadow-md'
          : 'bg-white/90 backdrop-blur border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <motion.a
          href="/"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-800 text-white font-bold"
            whileHover={{ rotate: 12 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            BE
          </motion.span>
          <span className="text-xl font-extrabold text-gray-900">BlueEstate</span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              className="relative hover:text-blue-800 transition-colors"
              whileHover="hover"
              initial="initial"
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-800"
                variants={{
                  initial: { width: 0 },
                  hover: { width: '100%' }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.button
            className="hidden sm:inline-flex rounded-md border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign in
          </motion.button>
          <motion.button
            className="btn-primary text-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            List a Property
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;