import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Guides', href: '#' },
        { label: 'Support', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Cookie Policy', href: '#' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 }
    })
  };

  return (
    <motion.footer
      className="mt-16 bg-gray-900 text-gray-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div variants={itemVariants}>
          <motion.div
            className="flex items-center gap-2 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-800 text-white font-bold">BE</span>
            <span className="text-lg font-bold text-white">BlueEstate</span>
          </motion.div>
          <p className="text-sm text-gray-400">Find your next home with ease. Modern listings, smart filters, and a beautiful experience.</p>
        </motion.div>

        {footerSections.map((section, sectionIdx) => (
          <motion.div key={section.title} variants={itemVariants}>
            <h4 className="text-white font-semibold mb-3">{section.title}</h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, linkIdx) => (
                <motion.li
                  key={link.label}
                  custom={linkIdx}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    className="hover:text-white transition-colors relative"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-gray-800">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} BlueEstate. All rights reserved.</p>
          <p>
            Made by{' '}
            <motion.a
              href="https://igbins-portfolio.vercel.app/"
              className="text-blue-400 hover:text-blue-300"
              whileHover={{ scale: 1.05 }} target='blank'
            >
              IGBINS MODEL
            </motion.a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;