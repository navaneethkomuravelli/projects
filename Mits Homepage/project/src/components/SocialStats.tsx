import React from 'react';
import { Users, MessageCircle, Share2, Heart, TrendingUp, Globe } from 'lucide-react';

const SocialStats = () => {
  const stats = [
    {
      icon: Users,
      label: 'Active Students',
      value: '2.5M+',
      growth: '+15%',
      color: 'bg-blue-500',
      description: 'Students using our platforms'
    },
    {
      icon: MessageCircle,
      label: 'Community Interactions',
      value: '850K',
      growth: '+22%',
      color: 'bg-teal-500',
      description: 'Monthly community engagements'
    },
    {
      icon: Share2,
      label: 'Content Shares',
      value: '420K',
      growth: '+18%',
      color: 'bg-orange-500',
      description: 'Educational content shared'
    },
    {
      icon: Heart,
      label: 'Satisfaction Rate',
      value: '98.5%',
      growth: '+2%',
      color: 'bg-red-500',
      description: 'Student satisfaction score'
    },
    {
      icon: TrendingUp,
      label: 'Course Completions',
      value: '1.8M',
      growth: '+35%',
      color: 'bg-green-500',
      description: 'Successful course completions'
    },
    {
      icon: Globe,
      label: 'Global Reach',
      value: '150+',
      growth: '+12%',
      color: 'bg-purple-500',
      description: 'Countries served worldwide'
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact in Numbers</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            See how MITS is transforming education through technology, 
            connecting students worldwide and driving academic success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} rounded-full w-12 h-12 flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-green-400 text-sm font-semibold bg-green-400 bg-opacity-20 px-2 py-1 rounded-full">
                  {stat.growth}
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
              <h4 className="text-xl font-semibold text-blue-200 mb-2">{stat.label}</h4>
              <p className="text-gray-300 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
            <p className="text-blue-200 mb-6">
              Be part of a global network of students, educators, and institutions 
              committed to excellence in education through technology.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Connect With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialStats;