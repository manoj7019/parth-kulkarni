import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import HeroImage from '/hero3.webp'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { useState, useEffect } from 'react';

const Hero = () => {
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
    // <div className='' id='hero'>
    <div className='bg-black text-white' id='hero'>
      {/* <div className='flex laptop:flex-row mobile:flex-col mobile:gap-8 justify-between laptop:mx-16 mobile:mx-4 laptop:mt-36 mobile:mt-28'> */}
      <div className='flex laptop:flex-row mobile:flex-col mobile:gap-8 justify-between laptop:mx-16 mobile:mx-4 laptop:pt-36 mobile:pt-28'>
        <div className='flex flex-col justify-center items-start laptop:gap-4 mobile:gap-2 laptop:w-1/2 mobile:w-full'>
          <h1 className='laptop:text-8xl mobile:text-5xl font-semibold'>Capturing the moments</h1>
          <h2 className='laptop:text-4xl mobile:text-2xl font-medium'>that captivate your heart and making them immortal.</h2>
          <div className='flex items-center gap-5 mt-6'>
            <AnchorLink href='#homeGallery'>
              <button className='flex items-center gap-2 bg-zinc-400 text-white p-2 px-10 rounded-xl hover:bg-white hover:text-zinc-400'>Explore <ArrowCircleRightIcon/> </button>
            </AnchorLink>
            <AnchorLink href='#contact'>
              <button className='border-2 px-10 p-2 rounded-xl hover:border-zinc-400'>Hire me</button>
            </AnchorLink>
          </div>
        </div>
        <div className='laptop:w-1/2 mobile:w-full'>
          <img src={HeroImage} 
          className='w-full h-auto'
          // className='w-full h-auto -mb-12'
          alt="" />
        </div>
      </div>
      <p id='homeGallery'></p>
    </div>
  )
}

export default Hero
