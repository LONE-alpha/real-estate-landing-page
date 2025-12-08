import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }) => {
  if (!testimonial) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="h-full rounded-xl bg-white p-6 shadow-lg">
        {/* Quote Icon */}
        <div className="mb-4">
          <Quote className="h-8 w-8 text-orange-500/20" />
        </div>

        {/* Rating */}
        <div className="mb-4 flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < (testimonial.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>

        {/* Comment */}
        <p className="mb-6 text-gray-600 line-clamp-4">
          {testimonial.comment || 'No comment available.'}
        </p>

        {/* User Info */}
        <div className="flex items-center">
          <img
            src={testimonial.avatar || `https://ui-avatars.com/api/?name=${testimonial.name || 'User'}&background=random`}
            alt={testimonial.name || 'User'}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="font-semibold text-gray-900">{testimonial.name || 'Anonymous'}</h4>
            <p className="text-sm text-gray-600">{testimonial.role || 'Client'}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;