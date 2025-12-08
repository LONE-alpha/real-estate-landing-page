import { Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchBar = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-2xl bg-white p-4 shadow-2xl md:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Location */}
          <div className="md:col-span-4">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Location
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Enter city or neighborhood"
                className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>
          </div>

          {/* Property Type */}
          <div className="md:col-span-3">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Property Type
            </label>
            <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20">
              <option value="">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="condo">Condo</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="md:col-span-3">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Price Range
            </label>
            <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20">
              <option value="">Any Price</option>
              <option value="0-300000">$0 - $300,000</option>
              <option value="300000-600000">$300,000 - $600,000</option>
              <option value="600000-1000000">$600,000 - $1M</option>
              <option value="1000000+">$1M+</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="md:col-span-2 flex items-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex w-full items-center justify-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <Filter className="mr-2 h-4 w-4" />
              Search
            </motion.button>
          </div>
        </div>

        {/* Advanced Filters Toggle */}
        <div className="mt-4 flex justify-center">
          <button className="flex items-center text-sm font-medium text-orange-500 hover:text-orange-600">
            <Filter className="mr-2 h-4 w-4" />
            Advanced Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;