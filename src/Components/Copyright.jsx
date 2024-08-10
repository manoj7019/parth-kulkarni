import React from 'react'
import MancodesIcon from '/mancodes.png'

const Copyright = () => {
    const date = new Date().getFullYear()
  return (
    // <div className='backdrop-blur-3xl bg-white/70' >
    <div className='backdrop-blur-3xl bg-black text-white' >
      <div className='border-t-2 opacity-50 laptop:text-xl mobile:text-sm p-2'>
          <p className='text-center'>&copy; {date} Parth Kulkarni, all rights reserved. Developed by <span className=''><a className='text-blue-400 hover:underline' href='https://man-codes.vercel.app/'> mancodes.in{' </> '} </a></span></p>
      </div>
    </div>
  )
}

export default Copyright
