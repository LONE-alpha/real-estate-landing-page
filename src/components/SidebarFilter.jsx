import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SidebarFilter = ({ filters, onChange }) => {
  const [local, setLocal] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: ''
  });

  useEffect(() => {
    setLocal({
      type: filters?.type || '',
      minPrice: filters?.minPrice ?? '',
      maxPrice: filters?.maxPrice ?? '',
      bedrooms: filters?.bedrooms ?? '',
      bathrooms: filters?.bathrooms ?? ''
    });
  }, [filters]);

  const update = (field, value) => {
    const next = { ...local, [field]: value };
    setLocal(next);
    onChange?.({
      type: next.type,
      minPrice: next.minPrice === '' ? null : Number(next.minPrice),
      maxPrice: next.maxPrice === '' ? null : Number(next.maxPrice),
      bedrooms: next.bedrooms === '' ? null : Number(next.bedrooms),
      bathrooms: next.bathrooms === '' ? null : Number(next.bathrooms)
    });
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4
      }
    })
  };

  return (
    <motion.aside
      aria-label="Property filters"
      className="
        bg-white rounded-xl border border-gray-200 shadow-sm p-4 w-full
        md:sticky md:top-[var(--header-h)]
        md:max-h-[calc(100vh-var(--header-h))] md:overflow-auto md:overscroll-contain
      "
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        className="text-lg font-semibold text-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Filter
      </motion.h3>

      <div className="mt-4 space-y-4 pr-1 md:pr-2">
        <motion.div custom={0} variants={fieldVariants} initial="hidden" animate="visible">
          <label className="block text-xs font-medium text-gray-700">Property Type</label>
          <motion.select
            value={local.type}
            onChange={(e) => update('type', e.target.value)}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-600 focus:ring-0 transition-all"
            whileFocus={{ scale: 1.02 }}
          >
            <option value="">Any</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Condo</option>
            <option>Townhouse</option>
            <option>Villa</option>
            <option>Studio</option>
          </motion.select>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="visible">
            <label className="block text-xs font-medium text-gray-700">Min Price</label>
            <motion.input
              type="number" min="0" step="5000" value={local.minPrice}
              onChange={(e) => update('minPrice', e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-600 focus:ring-0 transition-all"
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>
          <motion.div custom={2} variants={fieldVariants} initial="hidden" animate="visible">
            <label className="block text-xs font-medium text-gray-700">Max Price</label>
            <motion.input
              type="number" min="0" step="5000" value={local.maxPrice}
              onChange={(e) => update('maxPrice', e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-600 focus:ring-0 transition-all"
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <motion.div custom={3} variants={fieldVariants} initial="hidden" animate="visible">
            <label className="block text-xs font-medium text-gray-700">Bedrooms</label>
            <motion.select
              value={local.bedrooms}
              onChange={(e) => update('bedrooms', e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-600 focus:ring-0 transition-all"
              whileFocus={{ scale: 1.02 }}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </motion.select>
          </motion.div>
          <motion.div custom={4} variants={fieldVariants} initial="hidden" animate="visible">
            <label className="block text-xs font-medium text-gray-700">Bathrooms</label>
            <motion.select
              value={local.bathrooms}
              onChange={(e) => update('bathrooms', e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-600 focus:ring-0 transition-all"
              whileFocus={{ scale: 1.02 }}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </motion.select>
          </motion.div>
        </div>

        <motion.button
          custom={5}
          variants={fieldVariants}
          initial="hidden"
          animate="visible"
          type="button"
          onClick={() => {
            const cleared = { type: '', minPrice: '', maxPrice: '', bedrooms: '', bathrooms: '' };
            setLocal(cleared);
            onChange?.({ type: '', minPrice: null, maxPrice: null, bedrooms: null, bathrooms: null });
          }}
          className="w-full rounded-md border border-gray-300 px-3 py-2 font-semibold hover:bg-gray-50 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Clear Filters
        </motion.button>
      </div>
    </motion.aside>
  );
};

export default SidebarFilter;