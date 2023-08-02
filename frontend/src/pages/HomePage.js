import React from 'react';
import HeroSection from '../components/homepage/HeroSection';
import FeaturesOverview from '../components/homepage/FeaturesOverview';
import ModelShowcase from '../components/homepage/ModelShowcase';
import HowItWorks from '../components/homepage/HowItWorks';
import SuccessStories from '../components/homepage/SuccessStories';
import FAQ from '../components/homepage/FAQ';
import '../styles/HomePage.css'; // Import the CSS file for HomePage

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturesOverview />
      <ModelShowcase />
      <HowItWorks />
      <SuccessStories />
      <FAQ />
    </div>
  );
}

export default HomePage;
