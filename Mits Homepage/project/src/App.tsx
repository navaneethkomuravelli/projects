import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import UniversityPartners from './components/UniversityPartners';
import SocialStats from './components/SocialStats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <UniversityPartners />
      <SocialStats />
      <Footer />
    </div>
  );
}

export default App;