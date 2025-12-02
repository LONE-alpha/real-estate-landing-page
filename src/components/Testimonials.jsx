// src/components/Testimonials.jsx
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Buyer",
    avatar: "img/testimonials/team2.png",
    review: "Found my dream home in just 2 weeks! The team was incredibly professional.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor", 
    avatar: "img/testimonials/team2.png",
    review: "Great ROI on my last purchase! Excellent market insights.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "First-time Buyer",
    avatar: "img/testimonials/team2.png",
    review: "They guided me through every step as a first-time buyer. Amazing experience!",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Commercial Client",
    avatar: "img/testimonials/team2.png",
    review: "Professional service from start to finish. Highly recommended!",
    rating: 5
  }
];

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">
            Happy Clients
          </h2>
          <p className="text-x text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-soft p-6 h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <FaQuoteLeft className="w-8 h-8 text-primary/20 mb-4" />
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.review}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-neutral-dark">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;