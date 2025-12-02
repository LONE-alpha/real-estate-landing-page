import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropertySlider from './PropertySlider';

const PropertyCard = ({ property }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden flex flex-col"
    >
      {/* Square Image Section */}
      <div className="relative aspect-square w-full">
        <PropertySlider images={property.images} altBase={property.title} />

        <div className="absolute top-3 left-3">
          <span className="badge bg-yellow-400/90 text-gray-900 shadow">
            {property.status.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
          <p className="text-blue-800 font-bold">${property.price.toLocaleString()}</p>
        </div>

        <p className="text-sm text-gray-500">
          {property.location} • {property.type}
        </p>

        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {property.description}
        </p>

        <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
          <span className="inline-flex items-center gap-1">
            <svg width="16" height="16" fill="currentColor">
              <path d="M8 2a3 3 0 00-3 3v1H4a2 2 0 00-2 2v5h2v-2h8v2h2V8a2 2 0 00-2-2h-1V5a3 3 0 00-3-3zM6 6V5a2 2 0 114 0v1H6z"/>
            </svg>
            {property.bedrooms}
          </span>

          <span className="inline-flex items-center gap-1">
            <svg width="16" height="16" fill="currentColor">
              <path d="M3 2h10a1 1 0 011 1v9H2V3a1 1 0 011-1zm0 11h10v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z"/>
            </svg>
            {property.bathrooms}
          </span>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100">
          <Link
            to={`/property/${property.id}`}
            className="btn-primary w-full text-center inline-block"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
