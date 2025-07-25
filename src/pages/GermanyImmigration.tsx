import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, ArrowRight, Clock, Users, Euro } from 'lucide-react';

const GermanyImmigration = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const visaCategories = [
    {
      title: 'EU Blue Card',
      description: 'For highly qualified professionals with university degrees',
      icon: '💼',
      features: ['4-year validity', 'Permanent residence after 2-3 years', 'Family reunification'],
      processing: '2-3 months',
      requirement: 'University degree + job offer'
    },
    {
      title: 'Job Seeker Visa',
      description: 'Search for employment in Germany for up to 6 months',
      icon: '🔍',
      features: ['6 months validity', 'No work allowed', 'Convert to work permit'],
      processing: '4-6 weeks',
      requirement: 'Qualifications recognized'
    },
    {
      title: 'Student Visa',
      description: 'Study at German universities and institutions',
      icon: '🎓',
      features: ['Duration of studies', 'Part-time work allowed', '18-month job search after graduation'],
      processing: '4-8 weeks',
      requirement: 'University admission'
    },
    {
      title: 'Family Reunification',
      description: 'Join family members already living in Germany',
      icon: '👨‍👩‍👧‍👦',
      features: ['Residence permit', 'Work authorization', 'Path to permanent residence'],
      processing: '3-6 months',
      requirement: 'Family member in Germany'
    }
  ];

  const benefits = [
    'Strong economy and job market',
    'Free or low-cost education',
    'Universal healthcare system',
    'Central location in Europe',
    'Rich cultural heritage',
    'Work-life balance',
    'Social security system',
    'Path to EU citizenship'
  ];

  const faqs = [
    {
      question: 'What is the EU Blue Card and who is eligible?',
      answer: 'The EU Blue Card is for highly qualified non-EU professionals with a university degree and a job offer with a salary at least 1.5 times the average German salary (about €58,400 annually for 2024).'
    },
    {
      question: 'Do I need to speak German to work in Germany?',
      answer: 'While many international companies use English, German language skills significantly improve job prospects. For the EU Blue Card, basic German (A1 level) may be required depending on the job.'
    },
    {
      question: 'How long does it take to get permanent residence?',
      answer: 'EU Blue Card holders can apply for permanent residence after 2 years (with B1 German) or 3 years (with A1 German). Other permit holders typically need 5 years.'
    },
    {
      question: 'Can I bring my family to Germany?',
      answer: 'Yes, you can bring your spouse and children under 18. Your spouse will also receive a work permit. For some visas, basic German knowledge may be required for spouses.'
    },
    {
      question: 'What are the job prospects for skilled workers?',
      answer: 'Germany has high demand for skilled workers, especially in IT, engineering, healthcare, and skilled trades. The official skilled worker shortage list (Fachkräftemangel) identifies priority occupations.'
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600 via-yellow-500 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6 animate-fade-in-up">🇩🇪</div>
            <h1 className="text-5xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              Immigrate to Germany
            </h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Discover opportunities in Europe's economic powerhouse with excellent career prospects and quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-8">Why Choose Germany?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Germany offers exceptional opportunities for skilled professionals with its robust economy, excellent social benefits, and central European location.
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
                src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Germany cityscape"
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
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">German Immigration Options</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Multiple pathways to live and work in Germany
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
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EU Blue Card Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">EU Blue Card Requirements</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Germany's premier visa for skilled professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 animate-slide-in-up">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-blue-900">Education</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• University degree (Bachelor's or higher)</li>
                <li>• Foreign degrees must be recognized</li>
                <li>• 5+ years professional experience may substitute</li>
                <li>• Degree relevant to job position</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 animate-slide-in-up animation-delay-200">
              <div className="flex items-center mb-4">
                <Euro className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-xl font-bold text-green-900">Salary</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Minimum €58,400 annually (2024)</li>
                <li>• €45,552 for shortage occupations</li>
                <li>• IT professionals: €43,992 for under 35s</li>
                <li>• Must be comparable to German standards</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 animate-slide-in-up animation-delay-400">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-yellow-600 mr-2" />
                <h3 className="text-xl font-bold text-yellow-900">Additional</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Valid job offer or contract</li>
                <li>• No German language requirement initially</li>
                <li>• Health insurance coverage</li>
                <li>• Clean criminal record</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skilled Worker Shortage List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">In-Demand Professions</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Priority occupations with simplified requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: 'IT & Technology', jobs: ['Software Developer', 'Data Scientist', 'Cybersecurity', 'AI Specialist'] },
              { category: 'Engineering', jobs: ['Mechanical Engineer', 'Electrical Engineer', 'Civil Engineer', 'Industrial Engineer'] },
              { category: 'Healthcare', jobs: ['Doctors', 'Nurses', 'Pharmacists', 'Physiotherapists'] },
              { category: 'Skilled Trades', jobs: ['Electricians', 'Plumbers', 'Carpenters', 'HVAC Technicians'] }
            ].map((field, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-bold mb-4 text-gray-900">{field.category}</h3>
                <ul className="space-y-2">
                  {field.jobs.map((job, jobIndex) => (
                    <li key={jobIndex} className="text-sm text-gray-600 flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      {job}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">German Language Levels</h2>
            <p className="text-xl text-gray-600 animate-slide-in-up animation-delay-200">
              Understanding German proficiency requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                level: 'A1 - Beginner',
                description: 'Basic phrases and simple interactions',
                uses: ['EU Blue Card (for permanent residence)', 'Family reunification'],
                color: 'green'
              },
              {
                level: 'B1 - Intermediate',
                description: 'Can handle most everyday situations',
                uses: ['Faster permanent residence', 'Most job opportunities', 'Naturalization'],
                color: 'blue'
              },
              {
                level: 'C1 - Advanced',
                description: 'Fluent in complex situations',
                uses: ['Professional careers', 'Academic positions', 'Full integration'],
                color: 'purple'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 animate-slide-in-up ${
                  item.color === 'green' ? 'bg-green-50 border-2 border-green-200' :
                  item.color === 'blue' ? 'bg-blue-50 border-2 border-blue-200' :
                  'bg-purple-50 border-2 border-purple-200'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className={`text-xl font-bold mb-3 ${
                  item.color === 'green' ? 'text-green-900' :
                  item.color === 'blue' ? 'text-blue-900' :
                  'text-purple-900'
                }`}>{item.level}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Required for:</p>
                  {item.uses.map((use, useIndex) => (
                    <div key={useIndex} className="flex items-center">
                      <CheckCircle className={`h-3 w-3 mr-2 ${
                        item.color === 'green' ? 'text-green-500' :
                        item.color === 'blue' ? 'text-blue-500' :
                        'text-purple-500'
                      }`} />
                      <span className="text-sm text-gray-600">{use}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-in-up">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg bg-white animate-slide-in-up"
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
          <h2 className="text-4xl font-bold mb-6 animate-slide-in-up">Ready to Start Your German Journey?</h2>
          <p className="text-xl mb-8 animate-slide-in-up animation-delay-200">
            Get expert guidance on German immigration from our qualified consultants with local expertise.
          </p>
          <button className="inline-flex items-center bg-white hover:bg-gray-100 text-red-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-up animation-delay-400">
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default GermanyImmigration;