import React from 'react'
import { useState, useEffect } from 'react';
import Hero from '../Components/Hero';
import HomeGallery from '../Components/HomeGallery';
import HomeAbout from '../Components/HomeAbout';
import HomeServices from '../Components/HomeServices';
import Contact from '../Components/Contact';
import Loader from '../Components/Loader';

const HomePage = () => {
  // const [loading, setLoading] = useState(true);
  
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 1500)
  //   }, [])

  //   if(loading) {
  //     return <Loader />
  //   }

  return (
    // <div className='bg-black'>
    <div className=''>
      <Hero />
      <HomeGallery />
      <HomeServices />
      <HomeAbout />
      <Contact />
    </div>
  )
}

export default HomePage
