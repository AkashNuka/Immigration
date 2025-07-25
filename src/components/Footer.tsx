import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-yellow-400 p-2 rounded-full">
                <Globe className="h-6 w-6 text-black" />
              </div>
              <span className="text-xl font-bold">GlobalVisa</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in global immigration. We help turn your dreams of living abroad into reality with our expert guidance and personalized service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Top Countries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Top Countries</h3>
            <ul className="space-y-2">
              <li><Link to="/canada-immigration" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">🇨🇦 Canada</Link></li>
              <li><Link to="/australia-immigration" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">🇦🇺 Australia</Link></li>
              <li><Link to="/usa-immigration" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">🇺🇸 United States</Link></li>
              <li><Link to="/uk-immigration" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">🇬🇧 United Kingdom</Link></li>
              <li><Link to="/germany-immigration" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">🇩🇪 Germany</Link></li>
            </ul>
          </div>

          {/* Contact & Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300 text-sm">1st Floor, Ramdev Apartments, Pantakaluva Road, Vijayawada, Krishna Dist.(AP), 520010</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300 text-sm">9133783959</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300 text-sm">vasudhaconsultingservices@gmail.com</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 h-32">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564756718!5m2!1sen!2s"
                className="w-full h-full rounded"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 GlobalVisa. All Rights Reserved.</p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <span className="text-gray-400 text-sm">Language:</span>
              <select className="bg-gray-800 text-white text-sm rounded px-2 py-1">
                <option>EN</option>
                <option>FR</option>
                <option>DE</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;