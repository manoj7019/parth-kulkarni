import React, { useEffect, useRef } from 'react'
import HomeServices from '../Components/HomeServices'
import bgm2 from '/bg2.mp3'

const ServicesPage = () => {

  let audio = useRef();
  useEffect(() => {
    audio.current = new Audio(bgm2);
    audio.current.volume = 0.05;
    audio.current.play()
  }, [])

  useEffect(() => {
    return () => {
      audio.current.pause()
    }
  }, [])

  return (
    <div className='laptop:mt-28 mobile:mt-20'>
      <HomeServices />
    </div>
  )
}

export default ServicesPage
