import React from 'react';
import Layout from '../../components/layout';

import HeroSection from '../landingPage/sections/HeroSection';
import Why from '../landingPage/sections/WhyUs';

import ServiceSection from '../landingPage/sections/OurServiceSection';
import Testi from '../landingPage/sections/Testimonial';

const HelloPage = () => {
  return (
    <Layout>
      <div style={{ marginBottom: '100px' }}>
        <HeroSection />
      </div>
      <ServiceSection />
      <Why />
      <Testi />
    </Layout>
  );
};

export default HelloPage;
