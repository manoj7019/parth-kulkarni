import React, { useEffect, useRef } from 'react'
import HomeAbout from '../Components/HomeAbout'
import bgm4 from '/bg4.mp3'

const AboutPage = () => {

  let audio = useRef();
  useEffect(() => {
    audio.current = new Audio(bgm4);
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
        <HomeAbout />
    </div>
  )
}

export default AboutPage
