import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import AboutImage from '/about4.png';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
  return (
    <div>
      {/* <div className='flex flex-col items-center justify-between bg-gray-50 gap-4 laptop:px-28 mobile:px-6 py-16'> */}
      <div className='flex flex-col items-center justify-between bg-black text-white gap-4 laptop:px-28 mobile:px-6 py-16'>
        {/* <h1 className='text-black text-5xl font-semibold'>About me</h1>
        <h2 className='text-black text-2xl font-light'>A Photographer. A Videographer. A Editor.</h2> */}
        <div className="flex laptop:flex-row mobile:flex-col laptop:gap-16 mobile:gap-6">
          <img src={AboutImage} 
          className='laptop:flex-1'
          alt="" />
          <div className="flex flex-col justify-center laptop:gap-8 mobile:gap-4 laptop:flex-1">
            <h1 className='text-white laptop:text-5xl mobile:text-3xl font-semibold'>Hey! I'm Parth Kulkarni</h1>
            <h2 className='text-white laptop:text-2xl mobile:text-xl font-light'>A Photographer. A Videographer. A Editor.</h2>
            <p className='text-xl leading-8'>
              Just a normal passionate photographer who takes camera wherever I go and captures everything that catches my attention. Love to do all kinds of photoshoots ranging between two different polar ends. One is wedding and other one is wildlife. Not a big magician, but can do little magic with my capturing tool.
            </p>
            <Link to='/about'>
              <button className='laptop:w-1/2 mobile:w-3/4 flex justify-center items-center gap-2 bg-zinc-400 text-white p-2 rounded-xl hover:bg-white hover:text-zinc-400 mobile:mt-2'>More about me  <ArrowCircleRightIcon/> </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
