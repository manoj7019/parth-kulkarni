import React, { useEffect, useRef } from 'react'
import Contact from '../Components/Contact'
import bgm3 from '/bg3.mp3'

const ContactPage = () => {

  let audio = useRef();
  
  useEffect(() => {
    audio.current = new Audio(bgm3);
    audio.current.volume = 0.05;
    audio.current.play()
  }, [])

  useEffect(() => {
    return () => {
      audio.current.pause()
    }
  }, [])

  return (
    <div className='laptop:mt-24 mobile:mt-20'>
      <Contact />
    </div>
  )
}

export default ContactPage
