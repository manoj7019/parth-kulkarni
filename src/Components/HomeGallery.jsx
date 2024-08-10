import React, { useState } from 'react'
import Gallery1Image from '/gallery1.png';
import Gallery2Image from '/gallery2.png';
import Gallery3Image from '/gallery3.png';
import Gallery4Image from '/gallery4.png';
import Gallery5Image from '/1.webp';
import Gallery6Image from '/2.jpg';
import Gallery7Image from '/7.jpg'
import Gallery8Image from '/8.jpg'
import Gallery9Image from '/9.jpg'
import Gallery10Image from '/10.jpg'
import { Link } from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const HomeGallery = () => {
    const [showMore, setShowMore] = useState(false)
    function handleSetShowMore() {
        setShowMore(!showMore);
    }
  return (
    <div className=''>
        {/* <div className='flex flex-col items-center laptop:gap-4 mobile:gap-2 bg-gray-50 laptop:p-20 mobile:p-4 mobile:py-16 mt-12'> */}
        <div className='flex flex-col items-center laptop:gap-4 mobile:gap-2 bg-black text-white laptop:p-20 mobile:p-4 mobile:py-12'>
        <h1 className='text-white laptop:text-5xl mobile:text-3xl font-semibold'>My Gallery</h1>
        <h2 className='text-white laptop:text-2xl mobile:text-xl font-light text-center'>Elegant. Vivacious. Unforgettable.</h2>

        <div className='grid laptop:grid-cols-2 mobile:grid-cols-1 laptop:gap-24 mobile:gap-10 laptop:p-16 mobile:p-4 mobile:mt-6'>
        <Link to='/gallery'>
          <div className='flex flex-col gap-6 hover:underline'>
            <div className='flex rounded-3xl h-300 w-300 gap-0.5'>
              <img src={Gallery1Image} className='object-cover h-100% flex-2 rounded-l-3xl w-1/2'/>
              <div className='flex flex-col flex-1 gap-0.5'>
                <img src={Gallery2Image} className='object-cover rounded-tr-3xl'/>
                <img src={Gallery3Image} className='object-cover rounded-br-3xl'/>
              </div>
            </div>
              <div className='flex items-center gap-3'>
                <img src={Gallery1Image} className='object-cover laptop:h-12 mobile:h-10 laptop:w-12 mobile:w-10 rounded-3xl' alt="" />
                <div className='flex flex-col'>
                  <h2 className='laptop:text-xl mobile:text-lg font-semibold'>Wedding collections</h2>
                  <p className='laptop:text-lg mobile:text-sm'>Have a look at them. They're cool!</p>
                </div>
              </div>
          </div>
        </Link>
        <Link to='/gallery'>
          <div className='flex flex-col gap-6 hover:underline'>
            <div className='flex rounded-3xl h-300 w-300 gap-0.5'>
              <img src={Gallery4Image} className='object-cover h-100% flex-2 rounded-l-3xl w-1/2'/>
              <div className='flex flex-col flex-1 gap-0.5'>
                <img src={Gallery5Image} className='object-cover rounded-tr-3xl'/>
                <img src={Gallery8Image} className='object-cover rounded-br-3xl'/>
              </div>
            </div>
              <div className='flex items-center gap-3'>
                <img src={Gallery5Image} className='object-cover laptop:h-12 mobile:h-10 laptop:w-12 mobile:w-10 rounded-3xl' alt="" />
                <div className='flex flex-col'>
                  <h2 className='laptop:text-xl mobile:text-lg font-semibold'>Party collections</h2>
                  <p className='laptop:text-lg mobile:text-sm'>Have a look at them. They're cool!</p>
                </div>
              </div>
          </div>
        </Link>
        </div>

        {showMore && 
        <div className='grid grid-cols-2 gap-24 laptop:grid-cols-2 mobile:grid-cols-1 laptop:gap-24 mobile:gap-10 laptop:px-16 mobile:p-4 pb-16 px-16'>
          <Link to='*'>
          <div className='flex flex-col gap-6'>
            <div className='flex rounded-3xl'>
              <img src={Gallery1Image} className='object-cover flex-2 rounded-l-3xl w-1/2'/>
              <div className='flex flex-col flex-1'>
                <img src={Gallery2Image} className='object-cover rounded-tr-3xl'/>
                <img src={Gallery3Image} className='object-cover rounded-br-3xl'/>
              </div>
            </div>
              <div className='flex items-center gap-3'>
                <img src={Gallery1Image} className='h-12 w-12 rounded-3xl' alt="" />
                <div className='flex flex-col'>
                  <h2 className='laptop:text-xl mobile:text-lg font-semibold'>Wildlife collections</h2>
                  <p className='laptop:text-lg mobile:text-sm'>Have a look at them. They're cool!</p>
                </div>
              </div>
           </div>
           </Link>
          <Link to='*'>
          <div className='flex flex-col gap-6'>
            <div className='flex rounded-3xl'>
              <img src={Gallery1Image} className='object-cover flex-2 rounded-l-3xl w-1/2'/>
              <div className='flex flex-col flex-1'>
                <img src={Gallery2Image} className='object-cover rounded-tr-3xl'/>
                <img src={Gallery3Image} className='object-cover rounded-br-3xl'/>
              </div>
            </div>
              <div className='flex items-center gap-3'>
                <img src={Gallery1Image} className='h-12 w-12 rounded-3xl' alt="" />
                <div className='flex flex-col'>
                  <h2 className='laptop:text-xl mobile:text-lg font-semibold'>Wildlife collections</h2>
                  <p className='laptop:text-lg mobile:text-sm'>Have a look at them. They're cool!</p>
                </div>
              </div>
           </div>
           </Link>
           <Link to='*'>
           <div className='flex flex-col gap-6'>
            <div className='flex rounded-3xl'>
              <img src={Gallery1Image} className='object-cover flex-2 rounded-l-3xl w-1/2'/>
              <div className='flex flex-col flex-1'>
                <img src={Gallery2Image} className='object-cover rounded-tr-3xl'/>
                <img src={Gallery3Image} className='object-cover rounded-br-3xl'/>
              </div>
            </div>
              <div className='flex items-center gap-3'>
                <img src={Gallery1Image} className='h-12 w-12 rounded-3xl' alt="" />
                <div className='flex flex-col'>
                  <h2 className='laptop:text-xl mobile:text-lg font-semibold'>Wedding collections</h2>
                  <p className='laptop:text-lg mobile:text-sm'>Have a look at them. They're cool!</p>
                </div>
              </div>
            </div>
            </Link>
            <Link to='*'>
            <div className='flex flex-col gap-6'>
            <div className='flex rounded-3xl'>
              <img src={Gallery1Image} className='object-cover flex-2 rounded-l-3xl w-1/2'/>
              <div className='flex flex-col flex-1'>
                <img src={Gallery2Image} className='object-cover rounded-tr-3xl'/>
                <img src={Gallery3Image} className='object-cover rounded-br-3xl'/>
              </div>
            </div>
              <div className='flex items-center gap-3'>
                <img src={Gallery1Image} className='h-12 w-12 rounded-3xl' alt="" />
                <div className='flex flex-col'>
                  <h2 className='laptop:text-xl mobile:text-lg font-semibold'>Wedding collections</h2>
                  <p className='laptop:text-lg mobile:text-sm'>Have a look at them. They're cool!</p>
                </div>
              </div>
            </div>
            </Link>
        </div>
        }
        {/* <Link to='/gallery'> */}
          <button id='homeServices'
          onClick={handleSetShowMore} 
          className='flex items-center gap-2 bg-red-500 text-white p-2 px-10 mobile:mt-6 rounded-xl hover:bg-white hover:text-red-500'>{showMore ? 'Less Collections' : 'More Collections'}  <ArrowCircleRightIcon/> </button>
        {/* </Link> */}
      </div>
      <p></p>
    </div>
  )
}

export default HomeGallery
