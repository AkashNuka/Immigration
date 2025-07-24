import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, ArrowRight, MapPin, Clock, Users } from 'lucide-react';

const AustraliaImmigration = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const visaCategories = [
    {
      title: 'Skilled Independent Visa (189)',
      description: 'Points-based permanent residence without sponsorship',
      icon: Users,
      features: ['No employer sponsorship required', 'Live anywhere in Australia', 'Pathway to citizenship'],
      processing: '8-12 months',
      minPoints: '65 points'
    },
    {
      title: 'Skilled Nominated Visa (190)',
      description: 'State nominated skilled migration program',
      icon: MapPin,
      features: ['State government nomination', 'Additional 5 points', 'Live in nominating state'],
      processing: '8-12 months',
      minPoints: '65 points + nomination'
    },
    {
      title: 'Student Visa (500)',
      description: 'Study at Australian educational institutions',
      icon: '🎓',
      features: ['Full-time study rights', 'Limited work rights', 'Post-study work options'],
      processing: '4-12 weeks',
      minPoints: 'GTE requirement'
    },
    {
      title: 'Temporary Skill Shortage (482)',
      description: 'Employer-sponsored work visa',
      icon: '💼',
      features: ['2-4 year validity', 'Pathway to PR', 'Include family members'],
      processing: '3-5 months',
      minPoints: 'Employer sponsorship'
    }
  ];

  const benefits = [
    'High standard of living',
    'Strong economy and job market',
    'Universal healthcare (Medicare)',
    'Excellent education system',
    'Beautiful beaches and landscapes',
    'Multicultural society',
    'Work-life balance culture',
    'Pathway to citizenship'
  ];

  const faqs = [
    {
      question: 'What is the minimum points score for skilled migration?',
      answer: 'The minimum points score is 65 points, but recent invitations typically require 70-90+ points depending on the occupation and visa subclass.'
    },
    {
      question: 'Do I need a job offer to apply for skilled migration?',
      answer: 'For visa subclass 189 (Skilled Independent), no job offer is required. However, some state nominations and employer-sponsored visas do require job offers.'
    },
    {
      question: 'How long can I stay on a student visa?',
      answer: 'Student visas are granted for the duration of your course plus additional time for course completion. You can apply for extensions if continuing studies.'
    },
    {
      question: 'Can I include my family in my visa application?',
      answer: 'Yes, you can include your spouse/de facto partner and dependent children under 23 years (or under 18 for student visas) in most visa applications.'
    },
    {
      question: 'What English language tests are accepted?',
      answer: 'IELTS, TOEFL iBT, PTE Academic, OET, and Cambridge C1 Advanced/C2 Proficiency are accepted for most visa applications.'
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-yellow-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6 animate-fade-in-up">🇦🇺</div>
            <h1 className="text-5xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              Immigrate to Australia
            </h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Experience life in the land down under with excellent career opportunities, beautiful landscapes, and a high quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-8">Why Choose Australia?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Australia offers exceptional opportunities for skilled professionals, students, and families seeking a new start in one of the world's most liveable countries.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Australia Sydney Opera House"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visa Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Australian Visa Options</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Find the right pathway to make Australia your new home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visaCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  {typeof category.icon === 'string' ? (
                    <div className="text-3xl mr-4">{category.icon}</div>
                  ) : (
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <category.icon className="h-6 w-6 text-green-600" />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <div className="space-y-3 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{category.processing}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    <span>{category.minPoints}</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Assessment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Skills Assessment Process</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Get your qualifications and experience assessed by relevant Australian authorities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Assessing Authority',
                description: 'Select the appropriate assessing authority for your occupation from the skilled occupation list.'
              },
              {
                step: '2',
                title: 'Prepare Documentation',
                description: 'Gather qualifications, employment references, and other required documents for assessment.'
              },
              {
                step: '3',
                title: 'Submit Application',
                description: 'Apply online and pay fees. Processing times vary by authority (6-20 weeks typically).'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State Nomination */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">State Nomination Programs</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Each Australian state offers unique nomination opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { state: 'New South Wales', capital: 'Sydney', specialties: ['ICT', 'Engineering', 'Healthcare'] },
              { state: 'Victoria', capital: 'Melbourne', specialties: ['Finance', 'Education', 'Manufacturing'] },
              { state: 'Queensland', capital: 'Brisbane', specialties: ['Mining', 'Tourism', 'Agriculture'] },
              { state: 'Western Australia', capital: 'Perth', specialties: ['Resources', 'Construction', 'Maritime'] },
              { state: 'South Australia', capital: 'Adelaide', specialties: ['Wine', 'Defense', 'Renewable Energy'] },
              { state: 'Tasmania', capital: 'Hobart', specialties: ['Agriculture', 'Tourism', 'Aquaculture'] }
            ].map((state, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-2">{state.state}</h3>
                <p className="text-gray-600 mb-4">Capital: {state.capital}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Key Industries:</p>
                  {state.specialties.map((specialty, i) => (
                    <span key={i} className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-green-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-600" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 animate-slide-in-up">Ready for Your Australian Adventure?</h2>
          <p className="text-xl mb-8 animate-slide-in-up animation-delay-200">
            Get expert guidance on your Australian immigration journey from our qualified migration agents.
          </p>
          <button className="inline-flex items-center bg-white hover:bg-gray-100 text-green-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-up animation-delay-400">
            Start Your Application
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AustraliaImmigration;