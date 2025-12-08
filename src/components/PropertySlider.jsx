import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PropertyCard from './PropertyCard';

const PropertySlider = ({ properties }) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        navigation
        className="!pb-12"
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <PropertyCard property={property} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PropertySlider;