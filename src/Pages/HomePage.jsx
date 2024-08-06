import React from 'react'
import Hero from '../Components/Hero';
import HomeGallery from '../Components/HomeGallery';
import HomeAbout from '../Components/HomeAbout';
import HomeServices from '../Components/HomeServices';
import Contact from '../Components/Contact';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HomeGallery />
      <HomeServices />
      <HomeAbout />
      <Contact />
    </div>
  )
}

export default HomePage
