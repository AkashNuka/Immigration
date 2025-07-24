import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, ArrowRight, MapPin, DollarSign, Clock, Users } from 'lucide-react';

const CanadaImmigration = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    age: '',
    education: '',
    experience: '',
    language: ''
  });

  const visaCategories = [
    {
      title: 'Express Entry System',
      description: 'Federal skilled worker program for permanent residence',
      icon: Users,
      features: ['Federal Skilled Worker', 'Canadian Experience Class', 'Federal Skilled Trades'],
      processing: '6 months',
      minPoints: '67 points'
    },
    {
      title: 'Provincial Nominee Program',
      description: 'Province-specific immigration streams',
      icon: MapPin,
      features: ['Ontario PNP', 'British Columbia PNP', 'Alberta PNP'],
      processing: '12-18 months',
      minPoints: 'Varies by province'
    },
    {
      title: 'Student Visa',
      description: 'Study at Canadian institutions',
      icon: '🎓',
      features: ['University Programs', 'College Diplomas', 'Post-graduation Work Permit'],
      processing: '4-12 weeks',
      minPoints: 'Letter of Acceptance'
    },
    {
      title: 'Work Permit',
      description: 'Temporary work authorization',
      icon: '💼',
      features: ['LMIA-based', 'LMIA-exempt', 'International Mobility Program'],
      processing: '2-12 weeks',
      minPoints: 'Job Offer Required'
    }
  ];

  const processSteps = [
    { title: 'Eligibility Assessment', description: 'Evaluate your profile against Canadian immigration requirements' },
    { title: 'Document Preparation', description: 'Gather and prepare all necessary documents and certifications' },
    { title: 'Language Testing', description: 'Complete IELTS/CELPIP for English or TEF for French' },
    { title: 'Educational Assessment', description: 'Get your foreign credentials assessed by designated organizations' },
    { title: 'Profile Creation', description: 'Create Express Entry profile or apply through PNP' },
    { title: 'Invitation to Apply', description: 'Receive ITA and submit complete application within 60 days' }
  ];

  const faqs = [
    {
      question: 'What is the minimum score required for Express Entry?',
      answer: 'There is no minimum CRS score, but recent draws have typically invited candidates with scores above 480. However, scores can vary based on program demand.'
    },
    {
      question: 'How long does the Canada immigration process take?',
      answer: 'Express Entry applications are processed within 6 months after receiving an Invitation to Apply (ITA). PNP applications may take 12-18 months total.'
    },
    {
      question: 'Can I include my family in my application?',
      answer: 'Yes, you can include your spouse/partner and dependent children under 22 years of age in your application.'
    },
    {
      question: 'Do I need a job offer to immigrate to Canada?',
      answer: 'A job offer is not required for most Express Entry programs, but it can significantly boost your CRS score and chances of receiving an ITA.'
    },
    {
      question: 'What are the language requirements?',
      answer: 'You must demonstrate proficiency in English and/or French through approved tests (IELTS, CELPIP for English; TEF, TCF for French).'
    }
  ];

  const benefits = [
    'Universal healthcare system',
    'High quality of life',
    'Excellent education system',
    'Strong economy and job market',
    'Multicultural society',
    'Path to citizenship',
    'Social security benefits',
    'Beautiful natural landscapes'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateScore = () => {
    // Simplified scoring logic
    let score = 0;
    if (formData.age === '25-35') score += 100;
    if (formData.education === 'masters') score += 135;
    if (formData.experience === '3-5') score += 80;
    if (formData.language === 'advanced') score += 124;
    return score;
  };

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6 animate-fade-in-up">🇨🇦</div>
            <h1 className="text-5xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              Immigrate to Canada
            </h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Discover opportunities for permanent residence, work, and study in one of the world's most welcoming countries.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-8">Why Choose Canada?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Canada offers an exceptional quality of life, diverse opportunities, and a welcoming environment for immigrants from around the world.
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
                src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Canada cityscape"
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
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Immigration Programs</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Multiple pathways to make Canada your new home
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
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <category.icon className="h-6 w-6 text-red-600" />
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
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Quick Eligibility Check</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Get an estimate of your Express Entry CRS score
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 animate-slide-in-up animation-delay-400">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select your age</option>
                  <option value="18-24">18-24 years</option>
                  <option value="25-35">25-35 years</option>
                  <option value="36-45">36-45 years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select education level</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Work Experience</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select experience</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6+">6+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">English Level</label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select language level</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="native">Native/Near Native</option>
                </select>
              </div>
            </div>

            {Object.values(formData).every(value => value) && (
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">Estimated CRS Score</h3>
                <div className="text-4xl font-bold text-red-600 mb-4">{calculateScore()}</div>
                <p className="text-gray-600 mb-4">
                  {calculateScore() >= 450 ? 
                    "Great! You have a competitive score for Express Entry." :
                    "Consider improving your profile to increase your chances."
                  }
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Get Detailed Assessment
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Immigration Process</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Step-by-step guide to your Canadian immigration journey
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-600"></div>
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start mb-8 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute left-6 w-4 h-4 bg-red-600 rounded-full"></div>
                <div className="ml-16 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
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
                    <ChevronUp className="h-5 w-5 text-red-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-red-600" />
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
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 animate-slide-in-up">Ready to Start Your Canadian Journey?</h2>
          <p className="text-xl mb-8 animate-slide-in-up animation-delay-200">
            Get personalized guidance from our certified Canadian immigration consultants.
          </p>
          <button className="inline-flex items-center bg-white hover:bg-gray-100 text-red-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-up animation-delay-400">
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CanadaImmigration;