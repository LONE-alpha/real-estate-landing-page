import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import propertiesData from '../data/properties.js';
import PropertySlider from '../components/PropertySlider';
import PropertyMap from '../components/PropertyMap';

const PropertySingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = useMemo(() => {
    return propertiesData.find(p => p.id === parseInt(id));
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-6">The property you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Back to Listings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-blue-800 font-semibold hover:text-blue-900 transition"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Listings
        </button>
      </div>

      {/* Hero Section with Image Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto px-4 sm:px-6"
      >
        <div className="rounded-2xl overflow-hidden shadow-xl ">
          <PropertySlider images={property.images} altBase={property.title} />
        </div>
      </motion.div>

      {/* Property Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-12"
      >
        {/* Title and Price */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{property.title}</h1>
              <span className="badge bg-yellow-400/90 text-gray-900">
                {property.status.toUpperCase()}
              </span>
            </div>
            <p className="text-lg text-gray-600">
              {property.location} • {property.type}
            </p>
          </div>
          <div className="text-right">
            <p className="text-3xl md:text-4xl font-extrabold text-blue-800">
              ${property.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Property Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="rounded-lg bg-gray-50 p-4 border border-gray-200">
            <p className="text-sm text-gray-500 mb-2">Bedrooms</p>
            <div className="text-3xl font-bold text-gray-900">{property.bedrooms}</div>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 border border-gray-200">
            <p className="text-sm text-gray-500 mb-2">Bathrooms</p>
            <div className="text-3xl font-bold text-gray-900">{property.bathrooms}</div>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 border border-gray-200">
            <p className="text-sm text-gray-500 mb-2">Type</p>
            <div className="text-xl font-bold text-gray-900">{property.type}</div>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 border border-gray-200">
            <p className="text-sm text-gray-500 mb-2">Status</p>
            <div className="text-xl font-bold text-gray-900 capitalize">{property.status}</div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About this property</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{property.description}</p>
        </div>

        {/* Amenities Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <svg width="24" height="24" fill="currentColor" className="text-blue-800 flex-shrink-0">
                <path d="M8 2a3 3 0 00-3 3v1H4a2 2 0 00-2 2v5h2v-2h8v2h2V8a2 2 0 00-2-2h-1V5a3 3 0 00-3-3zM6 6V5a2 2 0 114 0v1H6z"/>
              </svg>
              <span className="text-gray-700">{property.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <svg width="24" height="24" fill="currentColor" className="text-blue-800 flex-shrink-0">
                <path d="M3 2h10a1 1 0 011 1v9H2V3a1 1 0 011-1zm0 11h10v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z"/>
              </svg>
              <span className="text-gray-700">{property.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <svg width="24" height="24" fill="currentColor" className="text-blue-800 flex-shrink-0">
                <path d="M3 2h18a1 1 0 011 1v18a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm1 2v16h16V4H4z"/>
              </svg>
              <span className="text-gray-700">{property.type}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <svg width="24" height="24" fill="currentColor" className="text-blue-800 flex-shrink-0">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
              </svg>
              <span className="text-gray-700 capitalize">{property.status} Listing</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="btn-primary py-3 text-lg font-semibold flex-1">
            Request Info
          </button>
          <button className="rounded-lg border-2 border-blue-800 text-blue-800 px-6 py-3 text-lg font-semibold hover:bg-blue-50 transition flex-1">
            Schedule Tour
          </button>
        </div>
      </motion.div>

      {/* Property Map */}
      {/* <PropertyMap /> */}

      {/* Additional Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-12 bg-gray-50 rounded-xl mb-12"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to make a move?</h2>
        <p className="text-gray-700 mb-6 text-lg">
          Contact our team today to schedule a viewing or get more information about this property.
        </p>
        <button className="btn-primary py-3 px-8 text-lg">
          Get in Touch
        </button>
      </motion.div>
    </div>
  );
};

export default PropertySingle;
