import React from 'react';
import { GraduationCap } from 'lucide-react';

const UniversityPartners = () => {
  const universities = [
    { name: 'Massachusetts Institute of Technology', short: 'MIT', color: 'bg-red-600' },
    { name: 'Stanford University', short: 'Stanford', color: 'bg-red-700' },
    { name: 'Harvard University', short: 'Harvard', color: 'bg-red-800' },
    { name: 'University of California Berkeley', short: 'UC Berkeley', color: 'bg-blue-600' },
    { name: 'Carnegie Mellon University', short: 'CMU', color: 'bg-red-600' },
    { name: 'University of Oxford', short: 'Oxford', color: 'bg-blue-800' },
    { name: 'University of Cambridge', short: 'Cambridge', color: 'bg-blue-700' },
    { name: 'California Institute of Technology', short: 'Caltech', color: 'bg-orange-600' },
    { name: 'Princeton University', short: 'Princeton', color: 'bg-orange-700' },
    { name: 'University of Tokyo', short: 'UTokyo', color: 'bg-blue-600' },
    { name: 'ETH Zurich', short: 'ETH Zurich', color: 'bg-blue-800' },
    { name: 'National University of Singapore', short: 'NUS', color: 'bg-blue-700' },
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">University Partners</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We proudly collaborate with leading educational institutions worldwide, 
            providing technology solutions that enhance student experiences and academic outcomes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {universities.map((university, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 text-center hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`${university.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">{university.short}</h3>
              <p className="text-xs text-gray-600">{university.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3">
            <span className="text-blue-800 font-semibold">Trusted by 500+ Educational Institutions Globally</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityPartners;