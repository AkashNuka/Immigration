import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Globe, CheckCircle, Star } from 'lucide-react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const countries = [
    {
      name: 'Canada',
      flag: '🇨🇦',
      path: '/canada-immigration',
      image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Express Entry, Provincial Nominee Programs'
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      path: '/australia-immigration',
      image: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Skilled Migration, Student Visas'
    },
    {
      name: 'United States',
      flag: '🇺🇸',
      path: '/usa-immigration',
      image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Green Card, Work Visas, Student Visas'
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧', 
      path: '/uk-immigration',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Skilled Worker Visa, Student Routes'
    },
    {
      name: 'Germany',
      flag: '🇩🇪',
      path: '/germany-immigration',
      image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'EU Blue Card, Job Seeker Visa'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'Canada',
      text: 'GlobalVisa made my Canadian dream come true! Their expert guidance through the Express Entry process was invaluable.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      country: 'Australia',
      text: 'Professional service from start to finish. Now living my best life in Sydney thanks to their skilled migration expertise.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez', 
      country: 'Germany',
      text: 'The team handled my EU Blue Card application flawlessly. Highly recommend their services!',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Turn Your Dreams Into
            <span className="text-yellow-400 block animate-fade-in-up animation-delay-200">Destinations</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up animation-delay-400">
            Expert immigration services for Canada, Australia, USA, UK, and Germany
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600"
          >
            Start Free Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Floating Animation */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float animation-delay-1000">
          <div className="w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
        </div>
      </section>

      {/* Country Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-up">Choose Your Destination</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">Explore immigration opportunities in top destinations worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {countries.map((country, index) => (
              <Link
                key={country.name}
                to={country.path}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-w-4 aspect-h-5">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-3xl mb-2">{country.flag}</div>
                  <h3 className="text-2xl font-bold mb-2">{country.name}</h3>
                  <p className="text-sm opacity-90">{country.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-up">Why Choose GlobalVisa?</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">Your success is our priority</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group animate-slide-in-up">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">10,000+</h3>
              <p className="text-gray-600">Successful Cases</p>
            </div>
            <div className="text-center group animate-slide-in-up animation-delay-200">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">15+ Years</h3>
              <p className="text-gray-600">Experience</p>
            </div>
            <div className="text-center group animate-slide-in-up animation-delay-400">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">5 Countries</h3>
              <p className="text-gray-600">Specialized Services</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold mb-6">Expert Guidance Every Step</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Personalized immigration strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Document preparation and review</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Application tracking and updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Post-landing support services</span>
                </li>
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Immigration consultation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-16 animate-slide-in-up">What Our Clients Say</h2>
          
          <div className="relative h-64 flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentTestimonial 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-0 transform translate-x-full'
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-yellow-400">Immigrated to {testimonial.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-yellow-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black mb-6 animate-slide-in-up">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-800 mb-8 animate-slide-in-up animation-delay-200">
            Get your free immigration assessment today and take the first step towards your new life abroad.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-up animation-delay-400"
          >
            Get Free Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;