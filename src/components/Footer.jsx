import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 text-2xl font-bold">
              <span className="text-orange-500">Estate</span>Pro
            </div>
            <p className="mb-6 text-gray-400">
              Your trusted partner in finding the perfect home. We connect dreams with reality.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-orange-500 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {['Buy a Home', 'Rent a Home', 'Sell a Home', 'Mortgage Calculator', 'Neighborhoods'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 transition-colors hover:text-orange-500">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Resources</h3>
            <ul className="space-y-3">
              {['Blog', 'Guides', 'FAQ', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 transition-colors hover:text-orange-500">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <MapPin className="mr-3 h-5 w-5" />
                123 Main Street, New York, NY 10001
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="mr-3 h-5 w-5" />
                (123) 456-7890
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="mr-3 h-5 w-5" />
                info@estatepro.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EstatePro. All rights reserved.</p> Made by <a href="https://igbins-portfolio.vercel.app/">IGBINS MODEL</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;