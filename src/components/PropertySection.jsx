import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Grid, List } from 'lucide-react';
import PropertyCard from './PropertyCard';
import SidebarFilter from './SidebarFilter';
import { properties } from '../data/properties.js';

const PropertySection = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState(properties);

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Featured Properties
              </h2>
              <p className="text-gray-600">
                Discover your perfect home from our curated collection
              </p>
            </div>
            
            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* View Toggle */}
              <div className="hidden rounded-lg border border-gray-300 p-1 md:flex">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`rounded-md p-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`rounded-md p-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
              
              {/* Filter Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 md:hidden"
              >
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="flex gap-8">
          {/* Sidebar Filter - Desktop */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden w-64 flex-shrink-0 lg:block"
          >
            <SidebarFilter onFilterChange={setFilteredProperties} />
          </motion.aside>

          {/* Mobile Filter Modal */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/50 lg:hidden"
                onClick={() => setShowFilters(false)}
              >
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 30 }}
                  className="h-full w-80 max-w-full bg-white p-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <SidebarFilter onFilterChange={setFilteredProperties} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Property Grid */}
          <motion.div
            layout
            className="flex-1"
          >
            <div className={`
              ${viewMode === 'grid' 
                ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' 
                : 'space-y-6'
              }
            `}>
              {filteredProperties.map((property) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProperties.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <div className="mb-4 text-6xl">🏡</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 sm:text-2xl">No properties found</h3>
                <p className="text-gray-600">Try adjusting your filters</p>
              </motion.div>
            )}

            {/* Load More */}
            {filteredProperties.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-12 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg border-2 border-orange-500 px-8 py-4 text-base font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Load More Properties
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;