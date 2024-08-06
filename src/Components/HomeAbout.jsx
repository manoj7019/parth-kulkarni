import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import AboutImage from '/about4.png';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-between bg-gray-50 gap-4 laptop:px-28 mobile:px-6 py-16'>
        {/* <h1 className='text-black text-5xl font-semibold'>About me</h1>
        <h2 className='text-black text-2xl font-light'>A Photographer. A Videographer. A Editor.</h2> */}
        <div className="flex laptop:flex-row mobile:flex-col laptop:gap-16 mobile:gap-6">
          <img src={AboutImage} 
          className='laptop:flex-1'
          alt="" />
          <div className="flex flex-col justify-center laptop:gap-8 mobile:gap-4 laptop:flex-1">
            <h1 className='text-black laptop:text-5xl mobile:text-3xl font-semibold'>Hey! I'm Parth Kulkarni</h1>
            <h2 className='text-black laptop:text-2xl mobile:text-xl font-light'>A Photographer. A Videographer. A Editor.</h2>
            <p className='text-xl leading-8'>
              A passionate photographer who captures everything which catches my mind and make that capture breathe.
              A passionate photographer who captures everything which catches my mind and make that capture breathe.
              A passionate photographer who captures everything which catches my mind and make that capture breathe.
            </p>
            <Link to='/about'>
              <button className='laptop:w-1/2 mobile:w-3/4 flex justify-center items-center gap-2 bg-red-500 text-white p-2 rounded-xl hover:bg-white hover:text-red-500'>More about me  <ArrowCircleRightIcon/> </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
