import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SearchBar = ({ searchFilters, onSearchChange }) => {
  const [form, setForm] = useState({
    location: '',
    type: '',
    minPrice: '',
    maxPrice: ''
  });

  useEffect(() => {
    setForm({
      location: searchFilters?.location || '',
      type: searchFilters?.type || '',
      minPrice: searchFilters?.minPrice ?? '',
      maxPrice: searchFilters?.maxPrice ?? ''
    });
  }, [searchFilters]);

  const update = (field, value) => {
    const next = { ...form, [field]: value };
    setForm(next);
    // Update upstream immediately
    onSearchChange?.({
      location: next.location,
      type: next.type,
      minPrice: next.minPrice === '' ? null : Number(next.minPrice),
      maxPrice: next.maxPrice === '' ? null : Number(next.maxPrice)
    });
  };

  const submit = (e) => {
    e.preventDefault();
    onSearchChange?.({
      location: form.location,
      type: form.type,
      minPrice: form.minPrice === '' ? null : Number(form.minPrice),
      maxPrice: form.maxPrice === '' ? null : Number(form.maxPrice)
    });
  };

  const inputVariants = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    whileFocus: { scale: 1.02, boxShadow: '0 0 0 3px rgba(30, 58, 138, 0.1)' }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.form
      onSubmit={submit}
      className="grid grid-cols-1 md:grid-cols-5 gap-3"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="md:col-span-2" variants={inputVariants}>
        <label className="block text-xs font-medium text-gray-700">Location</label>
        <motion.input
          type="text"
          placeholder="City, State"
          value={form.location}
          onChange={(e) => update('location', e.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-600 focus:ring-0 transition-all"
          aria-label="Location"
          whileFocus={{ scale: 1.02 }}
        />
      </motion.div>

      <motion.div variants={inputVariants}>
        <label className="block text-xs font-medium text-gray-700">Property Type</label>
        <motion.select
          value={form.type}
          onChange={(e) => update('type', e.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-600 focus:ring-0 transition-all"
          aria-label="Property Type"
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

      <motion.div variants={inputVariants}>
        <label className="block text-xs font-medium text-gray-700">Min Price</label>
        <motion.input
          type="number"
          min="0"
          step="5000"
          value={form.minPrice}
          onChange={(e) => update('minPrice', e.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-600 focus:ring-0 transition-all"
          placeholder="e.g. 200000"
          aria-label="Minimum Price"
          whileFocus={{ scale: 1.02 }}
        />
      </motion.div>

      <motion.div variants={inputVariants}>
        <label className="block text-xs font-medium text-gray-700">Max Price</label>
        <div className="flex gap-2">
          <motion.input
            type="number"
            min="0"
            step="5000"
            value={form.maxPrice}
            onChange={(e) => update('maxPrice', e.target.value)}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-600 focus:ring-0 transition-all"
            placeholder="e.g. 800000"
            aria-label="Maximum Price"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="btn-primary mt-1 whitespace-nowrap"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Search
          </motion.button>
        </div>
      </motion.div>
    </motion.form>
  );
};

export default SearchBar;