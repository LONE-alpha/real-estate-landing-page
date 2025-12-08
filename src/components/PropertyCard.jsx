import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, Star, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group h-full"
    >
      <div className="h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden sm:h-72">
          <img
            src={property.image || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80'}
            alt={property.title || 'Property'}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Badges */}
          <div className="absolute left-3 top-3">
            <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
              {property.type || 'Property'}
            </span>
          </div>
          
          {/* Favorite Button */}
          <button className="absolute right-3 top-3 rounded-full bg-white/90 p-2 backdrop-blur-sm transition-colors hover:bg-white">
            <Heart className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Price & Rating */}
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">
              ${property.price ? property.price.toLocaleString() : '0'}
            </h3>
            <div className="flex items-center">
              <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{property.rating || '0.0'}</span>
            </div>
          </div>

          {/* Title */}
          <h4 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-1">
            {property.title || 'Property Title'}
          </h4>

          {/* Location */}
          <div className="mb-4 flex items-center text-gray-600">
            <MapPin className="mr-2 h-4 w-4" />
            <span className="text-sm">{property.location || 'Location'}</span>
          </div>

          {/* Features */}
          <div className="grid grid-cols-4 gap-2 border-t border-gray-100 pt-4">
            <div className="flex flex-col items-center">
              <Bed className="mb-1 h-5 w-5 text-gray-400" />
              <span className="text-sm font-medium">{property.bedrooms || '0'}</span>
              <span className="text-xs text-gray-500">Beds</span>
            </div>
            <div className="flex flex-col items-center">
              <Bath className="mb-1 h-5 w-5 text-gray-400" />
              <span className="text-sm font-medium">{property.bathrooms || '0'}</span>
              <span className="text-xs text-gray-500">Baths</span>
            </div>
            <div className="flex flex-col items-center">
              <Square className="mb-1 h-5 w-5 text-gray-400" />
              <span className="text-sm font-medium">{property.area || '0'}</span>
              <span className="text-xs text-gray-500">Sq Ft</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-1 h-5 w-5 rounded-full bg-gray-200" />
              <span className="text-sm font-medium">{property.year || '2024'}</span>
              <span className="text-xs text-gray-500">Year</span>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-6 pt-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
           
            className="w-full rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;