import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/testimonials.js';

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Trusted by thousands of homeowners and investors
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={70}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            className="!pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="testimonial-prev absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-50 md:left-4 lg:flex">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="testimonial-next absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-50 md:right-4 lg:flex">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {[
            { value: '10K+', label: 'Properties Sold' },
            { value: '4.9', label: 'Average Rating' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 text-center shadow-lg"
            >
              <div className="text-3xl font-bold text-orange-500 md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;