import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At MITS, we believe technology should bridge the gap between students and their academic aspirations, 
            creating seamless digital experiences that enhance learning and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To democratize access to cutting-edge technology solutions for educational institutions, 
              empowering students and educators with tools that foster innovation, collaboration, and academic excellence.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-teal-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Eye className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the leading global technology partner for educational institutions, 
              creating a world where every student has access to transformative digital learning experiences.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Innovation, Accessibility, Excellence, and Student Success drive everything we do. 
              We are committed to ethical technology practices and sustainable educational growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;