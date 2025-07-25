import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, ArrowRight, Clock, Users, DollarSign } from 'lucide-react';

const USAImmigration = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const visaCategories = [
    {
      title: 'EB-1 (Priority Workers)',
      description: 'For individuals with extraordinary abilities',
      icon: '🌟',
      features: ['No labor certification required', 'Fastest processing', 'Self-petition allowed'],
      processing: '8-15 months',
      requirement: 'Extraordinary ability'
    },
    {
      title: 'EB-2 (Advanced Degree)',
      description: 'For professionals with advanced degrees',
      icon: '🎓',
      features: ['Advanced degree required', 'Labor certification needed', 'National Interest Waiver option'],
      processing: '12-24 months',
      requirement: 'Advanced degree'
    },
    {
      title: 'H-1B (Specialty Occupation)',  
      description: 'Temporary work visa for skilled professionals',
      icon: '💼',
      features: ['3-year validity', 'Renewable once', 'Dual intent allowed'],
      processing: '3-6 months',
      requirement: 'Bachelor\'s degree'
    },
    {
      title: 'F-1 (Student Visa)',
      description: 'Study at US colleges and universities',
      icon: '📚',
      features: ['Full-time study required', 'OPT work authorization', 'STEM extension available'],
      processing: '2-8 weeks',
      requirement: 'I-20 from school'
    }
  ];

  const benefits = [
    'World\'s largest economy',
    'Leading universities and research',
    'Diverse job opportunities',
    'Innovation and technology hub',
    'Cultural diversity',
    'Path to citizenship',
    'Social security benefits',
    'Healthcare options'
  ];

  const faqs = [
    {
      question: 'What is the H-1B lottery and when does it occur?',
      answer: 'The H-1B lottery is held annually in March for positions starting in October. USCIS randomly selects 85,000 applications (65,000 regular cap + 20,000 advanced degree exemption) from all submissions.'
    },
    {
      question: 'How long does the Green Card process take?',
      answer: 'Processing times vary significantly by category and country of birth. EB-1 can take 8-15 months, while EB-2/EB-3 for certain countries may take several years due to per-country limits.'
    },
    {
      question: 'Can I work while on a student visa?',
      answer: 'F-1 students can work on-campus for up to 20 hours/week during studies and full-time during breaks. Off-campus work requires authorization through CPT or OPT programs.'
    },
    {
      question: 'What is the EB-5 investment program?',
      answer: 'EB-5 allows foreign investors to obtain Green Cards by investing $800,000-$1.05 million in US businesses that create at least 10 full-time jobs for US workers.'
    },
    {
      question: 'Do I need a job offer for a Green Card?',
      answer: 'Most employment-based Green Cards require a job offer and labor certification, except for EB-1A (extraordinary ability) and some EB-2 National Interest Waiver cases.'
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6 animate-fade-in-up">🇺🇸</div>
            <h1 className="text-5xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              Immigrate to the United States
            </h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Pursue the American Dream with opportunities in the world's largest economy and most innovative society.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-8">Why Choose America?</h2>
              <p className="text-lg text-gray-600 mb-8">
                The United States offers unparalleled opportunities for career growth, education, and innovation in a diverse and dynamic society.
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
                src="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="USA New York skyline"
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
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">US Immigration Options</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Multiple pathways to live and work in the United States
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
                  <div className="text-3xl mr-4">{category.icon}</div>
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

      {/* Green Card Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Employment-Based Green Cards</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Permanent residence pathways for skilled professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'EB-1',
                title: 'Priority Workers',
                description: 'Extraordinary ability, outstanding researchers, multinational executives',
                priority: 'Current',
                color: 'green'
              },
              {
                category: 'EB-2',
                title: 'Advanced Degrees',
                description: 'Master\'s degree or higher, exceptional ability professionals',
                priority: 'Varies by country',
                color: 'yellow'
              },
              {
                category: 'EB-3',
                title: 'Skilled Workers',
                description: 'Bachelor\'s degree professionals, skilled workers (2+ years experience)',
                priority: 'Long wait times',
                color: 'red'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center mb-4">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                    item.color === 'green' ? 'bg-green-100 text-green-800' :
                    item.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {item.category}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center mb-4">{item.description}</p>
                <div className="text-center">
                  <span className="text-sm font-medium text-gray-500">Priority Dates: </span>
                  <span className={`text-sm font-bold ${
                    item.color === 'green' ? 'text-green-600' :
                    item.color === 'yellow' ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {item.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Investment-Based Immigration</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              EB-5 Immigrant Investor Program options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-in-up">
              <div className="flex items-center mb-6">
                <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold">Targeted Employment Area</h3>
              </div>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-green-600">$800,000</div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Rural or high unemployment areas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Create 10 full-time jobs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Conditional Green Card</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 animate-slide-in-up animation-delay-200">
              <div className="flex items-center mb-6">
                <DollarSign className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold">Standard Investment</h3>
              </div>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-blue-600">$1,050,000</div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Non-targeted areas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Create 10 full-time jobs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Conditional Green Card</span>
                  </li>
                </ul>
              </div>
            </div>
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
          <h2 className="text-4xl font-bold mb-6 animate-slide-in-up">Ready to Pursue the American Dream?</h2>
          <p className="text-xl mb-8 animate-slide-in-up animation-delay-200">
            Get expert guidance from our experienced US immigration attorneys and consultants.
          </p>
          <button className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-up animation-delay-400">
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default USAImmigration;