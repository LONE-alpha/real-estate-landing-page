import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PropertySlider = ({ images = [], altBase = 'Property image' }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={8}
      slidesPerView={1}
      nested={true}
      grabCursor={true}
      className="rounded-lg overflow-hidden"
      style={{ '--swiper-navigation-color': '#fff' }}
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={`/${img}`} // <-- public folder path
            alt={`${altBase} ${idx + 1}`}
            className="h-x w-full object-cover"
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PropertySlider;
