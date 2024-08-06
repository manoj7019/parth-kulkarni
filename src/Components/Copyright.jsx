import React from 'react'
import MancodesIcon from '/mancodes.png'

const Copyright = () => {
    const date = new Date().getFullYear()
  return (
    <div className=''>
      <div className='border-t-2 laptop:text-xl mobile:text-sm p-2 bg-gray-50'>
          <p className='text-center'>&copy; {date} Parth Kulkarni, all rights reserved. Developed by <span className=''><a className='text-blue-400 hover:underline' href='https://man-codes.vercel.app/'> mancodes.in{' </> '} </a></span></p>
      </div>
    </div>
  )
}

export default Copyright
