import React from 'react'
import GalleryImages from '../galleryImages.json'
import Gallery1Image from '/gallery1.png';
import Gallery2Image from '/gallery2.png';
import Gallery3Image from '/gallery3.png';
import Gallery4Image from '/1.webp';
import Gallery5Image from '/2.jpg';
import Gallery6Image from '/3.webp';
import Gallery7Image from '/4.jpeg';
import Gallery8Image from '/5.jpg';
import Gallery9Image from '/6.webp';
import Gallery10Image from '/7.jpg';
import Gallery11Image from '/8.jpg';
import Gallery12Image from '/9.jpg';
import Gallery13Image from '/10.jpg';

const Gallery = () => {
  return (
    <div className=''>
      <div className='flex flex-col items-center laptop:gap-4 mobile:gap-2 bg-gray-50 laptop:p-20 mobile:p-4 mobile:py-10'>
        <h1 className='text-black laptop:text-5xl mobile:text-3xl font-semibold'>My Gallery</h1>
        <h2 className='text-black laptop:text-2xl mobile:text-xl font-light text-center'>Elegant. Vivacious. Unforgettable.</h2>
      </div>
      <div className='grid laptop:grid-cols-3 laptop:gap-5 mobile:gap-3 laptop:p-20 mobile:p-4'>
        <div className='flex flex-col laptop:gap-5 mobile:gap-3'>
          {GalleryImages.wedding.map(weddingImage =>
            <img key={weddingImage.id}
              src={weddingImage.img} className=''/>
          )}
        </div>
        <div className='flex flex-col laptop:gap-5 mobile:gap-3'>
          {GalleryImages.wildlife.map(wildlifeImage =>
            <img key={wildlifeImage.id}
              src={wildlifeImage.img} className=''/>
          )}
        </div>
        <div className='flex flex-col laptop:gap-5 mobile:gap-3'>
          {GalleryImages.wedding.map(weddingImage =>
            <img key={weddingImage.id}
              src={weddingImage.img} className=''/>
          )}
        </div>
      </div>
    </div>
  )
}

export default Gallery
