import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SectionBlock = ({ title, items, id }) => {
  const displayItems = items.slice(0, 6);

  const [swiper, setSwiper] = useState(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(displayItems.length > 1);

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 }
    })
  };

  return (
    <motion.section
      className="mt-10"
      aria-labelledby={`${id}-heading`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="flex items-end justify-between" variants={titleVariants}>
        <h2 id={`${id}-heading`} className="section-title">{title}</h2>
        <motion.a
          href="#"
          className="text-sm font-semibold text-blue-800 hover:underline"
          whileHover={{ x: 5 }}
        >
          View all
        </motion.a>
      </motion.div>

      {/* Mobile: Swiper Carousel with controls */}
      <div className="md:hidden mt-4">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          className="pb-4"
          onSwiper={(s) => {
            setSwiper(s);
            setCanPrev(!s.isBeginning);
            setCanNext(!s.isEnd);
          }}
          onSlideChange={(s) => {
            setCanPrev(!s.isBeginning);
            setCanNext(!s.isEnd);
          }}
        >
          {displayItems.map((p) => (
            <SwiperSlide key={p.id}>
              <PropertyCard property={p} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-between mt-2">
          <motion.button
            type="button"
            aria-label="Previous"
            onClick={() => swiper?.slidePrev()}
            disabled={!canPrev}
            className={`rounded-md border px-4 py-2 font-semibold transition ${
              canPrev ? 'bg-white hover:bg-gray-50' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            whileHover={canPrev ? { scale: 1.05 } : {}}
            whileTap={canPrev ? { scale: 0.95 } : {}}
          >
            Prev
          </motion.button>
          <motion.button
            type="button"
            aria-label="Next"
            onClick={() => swiper?.slideNext()}
            disabled={!canNext}
            className={`rounded-md border px-4 py-2 font-semibold transition ${
              canNext ? 'bg-white hover:bg-gray-50' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            whileHover={canNext ? { scale: 1.05 } : {}}
            whileTap={canNext ? { scale: 0.95 } : {}}
          >
            Next
          </motion.button>
        </div>
      </div>

      {/* Desktop/Tablet: Grid 3x2 */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {displayItems.map((p, i) => (
          <motion.div key={p.id} custom={i} variants={cardVariants}>
            <PropertyCard property={p} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const PropertySections = ({ hot = [], newest = [], sold = [] }) => {
  return (
    <div>
      <SectionBlock title="Hot Properties" items={hot} id="hot-section" />
      <SectionBlock title="New Listings" items={newest} id="new-section" />
      <SectionBlock title="Recently Sold" items={sold} id="sold-section" />
    </div>
  );
};

export default PropertySections;