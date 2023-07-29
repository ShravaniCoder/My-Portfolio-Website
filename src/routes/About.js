import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Heroimg2 from '../components/Heroimg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return <div>
    <Navbar />
    <Heroimg2 heading="ABOUT." text="I am a friendly Front-End-Developer." />
    <AboutContent />
    <Footer />
  </div>;
};

export default About;
