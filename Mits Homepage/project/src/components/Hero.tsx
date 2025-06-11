import React from 'react';
import { ArrowRight, Zap, Users, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Micro Information
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-orange-300">
              Technology Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
            Empowering students and educational institutions with cutting-edge technology solutions, 
            innovative IT services, and digital transformation expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center transition-all duration-200 transform hover:scale-105">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-teal-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
              <p className="text-blue-200">Cutting-edge technology tailored for educational excellence</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-teal-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Student-Focused</h3>
              <p className="text-blue-200">Dedicated to enhancing student learning experiences</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-teal-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-blue-200">Serving educational institutions worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;