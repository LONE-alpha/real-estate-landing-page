import { useState } from 'react';
import { DollarSign, Home, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const SidebarFilter = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [bedrooms, setBedrooms] = useState(0);
  const [propertyType, setPropertyType] = useState('all');

  const handleFilter = () => {
    // Filter logic would go here
    console.log('Filtering...');
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Filters</h3>

      {/* Property Type */}
      <div>
        <label className="mb-3 flex items-center text-sm font-medium text-gray-700">
          <Home className="mr-2 h-4 w-4" />
          Property Type
        </label>
        <div className="space-y-2">
          {['All', 'House', 'Apartment', 'Condo', 'Villa'].map((type) => (
            <button
              key={type}
              onClick={() => setPropertyType(type.toLowerCase())}
              className={`block w-full rounded-lg px-4 py-2 text-left text-sm transition-colors ${
                propertyType === type.toLowerCase()
                  ? 'bg-orange-100 text-orange-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="mb-3 flex items-center text-sm font-medium text-gray-700">
          <DollarSign className="mr-2 h-4 w-4" />
          Price Range
        </label>
        <div className="px-2">
          <input
            type="range"
            min="0"
            max="1000000"
            step="50000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="mt-2 flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>${priceRange[1].toLocaleString()}+</span>
          </div>
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <label className="mb-3 flex items-center text-sm font-medium text-gray-700">
          <Home className="mr-2 h-4 w-4" />
          Bedrooms
        </label>
        <div className="flex flex-wrap gap-2">
          {[0, 1, 2, 3, 4].map((num) => (
            <button
              key={num}
              onClick={() => setBedrooms(num)}
              className={`rounded-lg px-4 py-2 text-sm ${
                bedrooms === num
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {num === 0 ? 'Any' : `${num}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Apply Filters */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleFilter}
        className="w-full rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        Apply Filters
      </motion.button>

      {/* Reset */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Reset All
      </motion.button>
    </div>
  );
};

export default SidebarFilter;