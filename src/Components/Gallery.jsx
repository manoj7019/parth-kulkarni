import React from 'react'
import GalleryImages from '../galleryImages.json'
import { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const Gallery = () => {
  // const [images, setImages] = useState([]);
  // const [wildImages, setWildImages] = useState([]);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const fetchImages = async () => {
  //     const res = await fetch('http://localhost:8000/wedding')
  //     const data = await res.json();
  //     setImages(data);
  //     setLoading(false);
  //   }
  //   fetchImages() 
  // }, [])

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     const res = await fetch('http://localhost:8000/wildlife')
  //     const data = await res.json();
  //     setWildImages(data);
  //     setLoading(false);
  //   }
  //   fetchImages()
  // }, [])

    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    }, [])

  return (
    <div className='bg-black text-white'>
      {/* <div className='flex flex-col items-center laptop:gap-4 mobile:gap-2 bg-gray-50 laptop:p-20 mobile:p-4 mobile:py-10'> */}
      <div className='flex flex-col items-center laptop:gap-4 mobile:gap-2 bg-black laptop:p-20 mobile:p-4 mobile:py-10'>
        <h1 className='text-white laptop:text-5xl mobile:text-3xl font-semibold'>My Gallery</h1>
        <h2 className='text-white laptop:text-2xl mobile:text-xl font-light text-center'>Elegant. Vivacious. Unforgettable.</h2>
      </div>

      {loading ? (
        <div className='flex justify-center items-center laptop:min-h-[50vh] mobile:min-h-[70vh]'>
          <ColorRing/>
        </div>) 
        : 
        <>
        <div className='grid laptop:grid-cols-3 laptop:grid-row-5 laptop:gap-5 mobile:gap-3 laptop:p-20 mobile:p-4'>
          <div className='flex flex-col laptop:gap-5 mobile:gap-3'>
            {GalleryImages.wedding.map(weddingImage =>
              <img key={weddingImage.id}
                src={weddingImage.img} className=''/>
            )}
          </div>
          <div className='flex flex-col laptop:gap-5 mobile:gap-3'>
            {GalleryImages.wildlife.map(wildlifeImage =>
            // <Link to={`/${wildlifeImage.id}`} >
              <img key={wildlifeImage.id}
                src={wildlifeImage.img} className='' />
            // </Link>
            )}
          </div>
          <div className='flex flex-col laptop:gap-5 mobile:gap-3'>
            {GalleryImages.wedding.map(weddingImage =>
              <img key={weddingImage.id}
                src={weddingImage.img} className=''/>
            )}
          </div>
        </div>
      </>}
    </div>
  )
}

export default Gallery
