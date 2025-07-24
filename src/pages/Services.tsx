import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, GraduationCap, Briefcase, Plane, Building } from 'lucide-react';

const Services = () => {
  const countries = [
    {
      name: 'Canada',
      flag: '🇨🇦',
      path: '/canada-immigration',
      image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Express Entry, Provincial Nominee Programs, Family Sponsorship',
      programs: ['Express Entry', 'PNP', 'Family Class', 'Student Visa']
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      path: '/australia-immigration',
      image: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Skilled Migration, Student Visas, Business Innovation',
      programs: ['Skilled Independent', 'Student Visa', 'Business Visa', 'Partner Visa']
    },
    {
      name: 'United States',
      flag: '🇺🇸',
      path: '/usa-immigration',
      image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Green Card, Work Visas, Investment Programs',
      programs: ['Green Card', 'H-1B Visa', 'EB-5 Investment', 'Student Visa']
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      path: '/uk-immigration',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Skilled Worker Visa, Student Routes, Business Visas',
      programs: ['Skilled Worker', 'Student Visa', 'Innovator Visa', 'Family Visa']
    },
    {
      name: 'Germany',
      flag: '🇩🇪',
      path: '/germany-immigration',
      image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'EU Blue Card, Job Seeker Visa, Student Programs',
      programs: ['EU Blue Card', 'Job Seeker', 'Student Visa', 'Family Reunion']
    }
  ];

  const visaTypes = [
    {
      icon: Users,
      title: 'Permanent Residency',
      description: 'Long-term settlement solutions for skilled professionals and their families.'
    },
    {
      icon: GraduationCap,
      title: 'Student Visas',
      description: 'Educational pathways to study at top universities and colleges worldwide.'
    },
    {
      icon: Briefcase,
      title: 'Work Permits',
      description: 'Employment-based visas for skilled workers and professionals.'
    },
    {
      icon: Plane,
      title: 'Tourist Visas',
      description: 'Visitor visas for tourism, business meetings, and family visits.'
    },
    {
      icon: Building,
      title: 'Business Visas',
      description: 'Investment and entrepreneur visas for business owners and investors.'
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">Immigration Services</h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Comprehensive immigration solutions tailored to your specific needs and goals. 
              We specialize in five major destinations with proven success rates.
            </p>
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Our Visa Categories</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Specialized services across all major visa categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {visaTypes.map((type, index) => (
              <div
                key={index}
                className="text-center group animate-slide-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                  <type.icon className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Choose Your Destination</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Explore detailed immigration pathways for each country
            </p>
          </div>

          <div className="space-y-8">
            {countries.map((country, index) => (
              <div
                key={country.name}
                className={`flex flex-col lg:flex-row items-center gap-8 animate-slide-in-up ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-xl shadow-xl group">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-4xl mb-2">{country.flag}</div>
                      <h3 className="text-3xl font-bold">{country.name}</h3>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold">{country.name} Immigration</h3>
                  <p className="text-lg text-gray-600">{country.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {country.programs.map((program, programIndex) => (
                      <div
                        key={programIndex}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <span className="text-sm font-medium text-gray-800">{program}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={country.path}
                    className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Explore {country.name}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Our Process</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Simple, transparent steps to your immigration success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Free eligibility evaluation and consultation' },
              { step: '02', title: 'Strategy', description: 'Personalized immigration plan development' },
              { step: '03', title: 'Application', description: 'Document preparation and submission' },
              { step: '04', title: 'Success', description: 'Visa approval and post-landing support' }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-black">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full border-t-2 border-dashed border-gray-300 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black mb-6 animate-slide-in-up">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-800 mb-8 animate-slide-in-up animation-delay-200">
            Schedule a free consultation with our immigration experts today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-up animation-delay-400"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;