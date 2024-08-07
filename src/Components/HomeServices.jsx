import React from 'react'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import { Link } from 'react-router-dom';

const HomeServices = () => {
  return (
    <div>
      <div className='flex flex-col items-center laptop:gap-4 mobile:gap-2 laptop:p-20 mobile:px-4 mobile:py-10'>
        <h1 className='text-black laptop:text-5xl mobile:text-3xl font-semibold'>My Services</h1>
        <h2 className='text-black laptop:text-2xl mobile:text-xl font-light'>Photography. Videography. Editing.</h2>

        <div className='grid laptop:grid-cols-3 mobile:grid-cols-1 laptop:gap-24 mobile:gap-6 laptop:px-16 mobile:px-4 laptop:pt-16 mobile:pt-10 pb-8'>

          <Link to='*'>
            <div className='flex flex-col items-center gap-8 rounded-2xl bg-gray-100 p-10 border-2 hover:bg-gray-200'>
              {/* <div className='text-red-500'> */}
              <div className='text-white bg-red-500 p-5 rounded-xl'>
                <CameraEnhanceIcon fontSize='large'/>
              </div>
                <div className='flex flex-col items-center gap-2'>
                  <h2 className='text-xl font-semibold'>Photography</h2>
                  <p className='text-center'>Have a look at them. They're cool!</p>
                </div>
            </div>
          </Link>
          <Link to='*'>
            <div className='flex flex-col items-center gap-8 rounded-2xl bg-gray-100 p-10 border-2 hover:bg-gray-200'>
              {/* <div className='text-red-500'> */}
              <div className='text-white bg-red-500 p-5 rounded-xl'>
                <VideoCameraBackIcon fontSize='large'/>
              </div>
                <div className='flex flex-col items-center gap-2'>
                  <h2 className='text-xl font-semibold'>Videography</h2>
                  <p className='text-center'>Have a look at them. They're cool!</p>
                </div>
            </div>
          </Link>
          <Link to='*'>
            <div className='flex flex-col items-center gap-8 rounded-2xl bg-gray-100 p-10 border-2 hover:bg-gray-200'>
              <div className='text-white bg-red-500 p-5 rounded-xl'>
                <AutoFixHighIcon fontSize='large'/>
              </div>
                <div className='flex flex-col items-center gap-2'>
                  <h2 className='text-xl font-semibold'>Video Editing</h2>
                  <p className='text-center'>Have a look at them. They're cool!</p>
                </div>
            </div>
          </Link>
        </div>
        <p id='homeAbout'></p>
        {/* <button className='flex items-center gap-2 bg-red-500 text-white p-2 px-10 rounded-xl hover:bg-white hover:text-red-500'>Know more<ArrowCircleRightIcon/> </button> */}
      </div>
    </div>
  )
}

export default HomeServices
