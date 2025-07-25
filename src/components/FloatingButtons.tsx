import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9133783959"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+91 9133783959"
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;