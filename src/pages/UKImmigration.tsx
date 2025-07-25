import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, ArrowRight, Clock, Users, Briefcase } from 'lucide-react';

const UKImmigration = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const visaCategories = [
    {
      title: 'Skilled Worker Visa',
      description: 'Work-based visa for skilled professionals with job offers',
      icon: Briefcase,
      features: ['Up to 5 years validity', 'Path to settlement', 'Bring family members'],
      processing: '3-8 weeks',
      requirement: 'Job offer + sponsorship'
    },
    {
      title: 'Student Visa',
      description: 'Study at UK universities and institutions',
      icon: '🎓',
      features: ['Duration of course + extra time', 'Work rights during study', 'Graduate visa pathway'],
      processing: '3 weeks',
      requirement: 'CAS from sponsor'
    },
    {
      title: 'Global Talent Visa',
      description: 'For leaders and potential leaders in specific fields',
      icon: '🌟',
      features: ['No job offer required', '5-year validity', 'Fast-track to settlement'],
      processing: '3-8 weeks',
      requirement: 'Endorsement required'
    },
    {
      title: 'Innovator Founder Visa',
      description: 'For entrepreneurs with innovative business ideas',
      icon: '💡',
      features: ['3 years initially', 'No investment minimum', 'Settlement after 3 years'],
      processing: '3-8 weeks',
      requirement: 'Business endorsement'
    }
  ];

  const benefits = [
    'Access to NHS healthcare',
    'World-class education system',
    'Rich cultural heritage',
    'Gateway to Europe',
    'Strong legal system',
    'Diverse job market',
    'Path to British citizenship',
    'Social welfare system'
  ];

  const faqs = [
    {
      question: 'What is the points-based immigration system?',
      answer: 'The UK uses a points-based system where applicants must score 70 points. Mandatory requirements include job offer (20 points), skill level (20 points), and English language (10 points).'
    },
    {
      question: 'How long can I stay on a Skilled Worker visa?',
      answer: 'Skilled Worker visas are typically granted for up to 5 years or the length of your job plus 1 month, whichever is shorter. You can apply for settlement after 5 years.'
    },
    {
      question: 'Can I bring my family to the UK?',
      answer: 'Yes, you can bring your spouse/partner and children under 18 as dependents on most work and student visas. They will have similar rights to work and study.'
    },
    {
      question: 'What is the Graduate visa route?',
      answer: 'International students who complete a degree in the UK can apply for a Graduate visa allowing 2 years (3 years for PhD graduates) to work or look for work at any skill level.'
    },
    {
      question: 'Do I need a job offer for all work visas?',
      answer: 'Most work visas require a job offer from an approved sponsor, except for Global Talent visa holders who can work for any employer or be self-employed.'
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6 animate-fade-in-up">🇬🇧</div>
            <h1 className="text-5xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              Immigrate to the United Kingdom
            </h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Discover opportunities in the UK with its rich history, excellent education system, and gateway access to Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-8">Why Choose the UK?</h2>
              <p className="text-lg text-gray-600 mb-8">
                The United Kingdom offers exceptional opportunities for career advancement, world-class education, and access to European markets.
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
                src="https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="UK London landmarks"
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
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">UK Visa Routes</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Find the right pathway to live and work in the United Kingdom
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
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <category.icon className="h-6 w-6 text-blue-600" />
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
                    <span>{category.requirement}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points System */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Points-Based System</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              You need 70 points to qualify for a Skilled Worker visa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 animate-slide-in-up">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Mandatory (50 points)</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Job offer from approved sponsor</span>
                  <span className="font-bold text-blue-600">20</span>
                </div>
                <div className="flex justify-between">
                  <span>Job at appropriate skill level</span>
                  <span className="font-bold text-blue-600">20</span>
                </div>
                <div className="flex justify-between">
                  <span>English language at B1 level</span>
                  <span className="font-bold text-blue-600">10</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 animate-slide-in-up animation-delay-200">
              <h3 className="text-xl font-bold mb-4 text-green-900">Salary (20 points needed)</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>£20,480 - £23,039</span>
                  <span className="font-bold text-green-600">0</span>
                </div>
                <div className="flex justify-between">
                  <span>£23,040 - £25,599</span>
                  <span className="font-bold text-green-600">10</span>
                </div>
                <div className="flex justify-between">
                  <span>£25,600 or above</span>
                  <span className="font-bold text-green-600">20</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 animate-slide-in-up animation-delay-400">
              <h3 className="text-xl font-bold mb-4 text-yellow-900">Additional Points</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Job in shortage occupation</span>
                  <span className="font-bold text-yellow-600">20</span>
                </div>
                <div className="flex justify-between">
                  <span>PhD in subject relevant to job</span>
                  <span className="font-bold text-yellow-600">10</span>
                </div>
                <div className="flex justify-between">
                  <span>PhD in STEM subject</span>
                  <span className="font-bold text-yellow-600">20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Settlement Path */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Path to Settlement</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Your journey to permanent residence and British citizenship
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-600"></div>
            
            {[
              { year: 'Year 0', title: 'Initial Visa', description: 'Skilled Worker visa granted for up to 5 years' },
              { year: 'Year 5', title: 'Indefinite Leave to Remain', description: 'Apply for settlement after 5 continuous years' },
              { year: 'Year 6', title: 'British Citizenship', description: 'Apply for naturalization after 1 year with ILR' }
            ].map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-between w-full mb-8 animate-slide-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'order-2 text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">{step.year}</h3>
                    <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
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
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-600" />
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
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 animate-slide-in-up">Ready to Make the UK Your Home?</h2>
          <p className="text-xl mb-8 animate-slide-in-up animation-delay-200">
            Get expert guidance on UK immigration from our qualified advisors and solicitors.
          </p>
          <button className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-up animation-delay-400">
            Book Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default UKImmigration;