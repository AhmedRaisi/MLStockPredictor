import React from 'react';
import HeroSection from '../components/homepage/HeroSection';
import FeaturesOverview from '../components/homepage/FeaturesOverview';
import ModelShowcase from '../components/homepage/ModelShowcase';
import HowItWorks from '../components/homepage/HowItWorks';
import FAQ from '../components/homepage/FAQ';
import '../styles/HomePage.css'; // Import the CSS file for HomePage
import ModelStories from '../components/homepage/ModelStories';

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturesOverview />
      <ModelShowcase />
      <HowItWorks />
      <ModelStories />
      <FAQ />
    </div>
  );
}

export default HomePage;
