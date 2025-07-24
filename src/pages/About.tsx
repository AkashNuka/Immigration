import React from 'react';
import { Award, Users, Globe, Target, CheckCircle } from 'lucide-react';

const About = () => {
  const timeline = [
    { year: '2009', event: 'GlobalVisa founded with a vision to simplify immigration' },
    { year: '2012', event: 'Expanded services to include Australia and Canada' },
    { year: '2015', event: 'Reached 1,000 successful immigration cases' },
    { year: '2018', event: 'Added USA and UK immigration services' },
    { year: '2020', event: 'Launched digital consultation platform' },
    { year: '2023', event: 'Celebrated 10,000+ successful cases' },
    { year: '2025', event: 'Leading immigration consultancy with global reach' }
  ];

  const team = [
    {
      name: 'Sarah Williams',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Immigration lawyer with 15+ years experience in global migration law.'
    },
    {
      name: 'Michael Zhang',
      role: 'Senior Immigration Consultant',
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specialist in skilled worker programs and business immigration.'
    },
    {
      name: 'Emma Thompson',
      role: 'Client Relations Manager',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dedicated to ensuring exceptional client experience throughout the journey.'
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">About GlobalVisa</h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              For over 15 years, we've been helping individuals and families achieve their dreams of living and working abroad through expert immigration guidance and personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To make global immigration accessible, transparent, and successful for everyone. We believe that geographical boundaries shouldn't limit your potential or dreams.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Transparent and honest guidance</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Personalized immigration strategies</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Support from start to settlement</span>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our mission"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Our Impact in Numbers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group animate-slide-in-up">
              <div className="bg-yellow-400 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-12 w-12 text-black" />
              </div>
              <h3 className="text-3xl font-bold mb-2">10,000+</h3>
              <p className="text-gray-600">Successful Cases</p>
            </div>
            <div className="text-center group animate-slide-in-up animation-delay-200">
              <div className="bg-yellow-400 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-12 w-12 text-black" />
              </div>
              <h3 className="text-3xl font-bold mb-2">5</h3>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div className="text-center group animate-slide-in-up animation-delay-400">
              <div className="bg-yellow-400 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-12 w-12 text-black" />
              </div>
              <h3 className="text-3xl font-bold mb-2">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center group animate-slide-in-up animation-delay-600">
              <div className="bg-yellow-400 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-12 w-12 text-black" />
              </div>
              <h3 className="text-3xl font-bold mb-2">98%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Our Journey</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              A timeline of growth, innovation, and success
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-yellow-400"></div>
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-between w-full mb-8 animate-slide-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'order-2 text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">{item.year}</h3>
                    <p className="text-gray-600">{item.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Meet Our Team</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-yellow-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 animate-slide-in-up">A Message from Our Founder</h2>
          <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-2xl animate-slide-in-up animation-delay-200">
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-8 mb-4 mx-auto w-24 h-24 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg">Welcome Message from Sarah Williams</p>
                  <p className="text-sm text-gray-300 mt-2">Click to play video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;