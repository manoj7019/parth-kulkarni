import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import HeroImage from '/hero.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id='hero'>
      <div className='flex laptop:flex-row mobile:flex-col mobile:gap-8 justify-between laptop:mx-16 mobile:mx-4 laptop:mt-36 mobile:mt-28'>
        <div className='flex flex-col justify-center items-start laptop:gap-4 mobile:gap-2 laptop:w-1/2 mobile:w-full'>
          <h1 className='laptop:text-8xl mobile:text-5xl font-semibold'>Capturing the moments</h1>
          <h2 className='laptop:text-4xl mobile:text-2xl font-medium'>that captivate your heart.</h2>
          <div className='flex items-center gap-5 mt-6'>
            <AnchorLink href='#homeGallery'>
              <button className='flex items-center gap-2 bg-red-500 text-white p-2 px-10 rounded-xl hover:bg-white hover:text-red-500'>Explore <ArrowCircleRightIcon/> </button>
            </AnchorLink>
            <AnchorLink href='#contact'>
              <button className='border-2 px-10 p-2 rounded-xl hover:bg-gray-200 hover:border-gray-200'>Hire me</button>
            </AnchorLink>
          </div>
        </div>
        <div className='laptop:w-1/2 mobile:w-full'>
          <img src={HeroImage} 
          className='w-full h-auto -mb-12'
          alt="" />
        </div>
      </div>
      <p id='homeGallery'></p>
    </div>
  )
}

export default Hero
