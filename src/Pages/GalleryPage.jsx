import React, { useEffect, useRef } from 'react'
import Gallery from '../Components/Gallery'
import bgm from '/bg1.mp3'

const GalleryPage = () => {

  let audio = useRef();
  useEffect(() => {
    audio.current = new Audio(bgm);
    audio.current.volume = 0.05;
    audio.current.play()
  }, [])

  useEffect(() => {
    return () => {
      audio.current.pause()
    }
  }, [])

  return (
    <div className='laptop:pt-28 mobile:pt-20'>
    {/* <div className='laptop:mt-28 mobile:mt-20'> */}
        <Gallery />
    </div>
  )
}

export default GalleryPage
