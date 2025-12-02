import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PropertyModal = ({ property, isOpen, onClose }) => {
  const closeBtnRef = useRef(null);
  const headingId = property ? `property-modal-title-${property.id}` : 'property-modal-title';

  // Close on Escape + lock body scroll when open
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose?.();
    if (isOpen) {
      document.addEventListener('keydown', onKey);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // focus close button on open (basic focus management)
      setTimeout(() => closeBtnRef.current?.focus(), 0);
      return () => {
        document.removeEventListener('keydown', onKey);
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen, onClose]);

  if (!property) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[80] overflow-y-auto">
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Centering wrapper - Improved for mobile */}
          <div className="relative z-10 flex min-h-full items-center justify-center p-3 sm:p-4 md:p-6 pointer-events-none">
            {/* Modal Card - Better mobile sizing */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={headingId}
              tabIndex={-1}
              className="pointer-events-auto w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden flex flex-col max-h-[95vh] sm:max-h-[90vh]"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {/* Close button - Better mobile positioning */}
              <button
                ref={closeBtnRef}
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-2 right-2 sm:top-3 sm:right-3 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/95 shadow-md ring-1 ring-gray-200 flex items-center justify-center hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400 z-20"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-700 sm:w-22 sm:h-22">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              {/* Media Section - Better mobile sizing */}
              <div className="w-full shrink-0">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  pagination={{ 
                    clickable: true,
                    dynamicBullets: true 
                  }}
                  spaceBetween={0}
                  slidesPerView={1}
                  className="w-full property-modal-swiper"
                >
                  {property.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={`${property.title} image ${idx + 1}`}
                        className="w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Content Section - Improved mobile spacing */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1">
                {/* Header Section */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h2 id={headingId} className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                      {property.title}
                    </h2>
                    <p className="text-blue-800 font-extrabold text-lg sm:text-xl">
                      ${property.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">
                    {property.location} • {property.type}
                  </p>
                </div>

                {/* Property Features Grid - Better mobile layout */}
                <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-4">
                  <div className="rounded-lg bg-gray-50 p-2 sm:p-3 text-center">
                    <span className="text-xs sm:text-sm text-gray-500 block">Bedrooms</span>
                    <div className="font-semibold text-sm sm:text-base">{property.bedrooms}</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-2 sm:p-3 text-center">
                    <span className="text-xs sm:text-sm text-gray-500 block">Bathrooms</span>
                    <div className="font-semibold text-sm sm:text-base">{property.bathrooms}</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-2 sm:p-3 text-center">
                    <span className="text-xs sm:text-sm text-gray-500 block">Status</span>
                    <div className="font-semibold text-sm sm:text-base capitalize">{property.status}</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-2 sm:p-3 text-center">
                    <span className="text-xs sm:text-sm text-gray-500 block">Type</span>
                    <div className="font-semibold text-sm sm:text-base">{property.type}</div>
                  </div>
                </div>

                {/* Description - Better mobile typography */}
                <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                  {property.description}
                </p>

                {/* Action Buttons - Stacked on mobile */}
                <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button className="btn-primary flex-1 py-3 sm:py-2 text-sm sm:text-base">
                    Request Info
                  </button>
                  <button className="rounded-md border border-gray-300 px-4 py-3 sm:py-2 font-semibold hover:bg-gray-50 flex-1 text-sm sm:text-base">
                    Schedule Tour
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Custom Swiper Navigation Styles for Mobile */}
          <style jsx>{`
            .property-modal-swiper .swiper-button-next,
            .property-modal-swiper .swiper-button-prev {
              width: 40px;
              height: 40px;
              background: rgba(255, 255, 255, 0.9);
              border-radius: 50%;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            }
            
            .property-modal-swiper .swiper-button-next:after,
            .property-modal-swiper .swiper-button-prev:after {
              font-size: 16px;
              color: #374151;
              font-weight: bold;
            }
            
            .property-modal-swiper .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background: rgba(255, 255, 255, 0.6);
              opacity: 1;
            }
            
            .property-modal-swiper .swiper-pagination-bullet-active {
              background: #fff;
              width: 20px;
              border-radius: 4px;
            }

            /* Mobile-first responsive breakpoints */
            @media (max-width: 480px) {
              .property-modal-swiper .swiper-button-next,
              .property-modal-swiper .swiper-button-prev {
                width: 32px;
                height: 32px;
                display: none; /* Hide on very small screens */
              }
              
              .property-modal-swiper .swiper-button-next:after,
              .property-modal-swiper .swiper-button-prev:after {
                font-size: 14px;
              }
            }

            @media (min-width: 481px) {
              .property-modal-swiper .swiper-button-next,
              .property-modal-swiper .swiper-button-prev {
                display: flex;
              }
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PropertyModal;