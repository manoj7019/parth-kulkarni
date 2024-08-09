import React from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import CollectionsIcon from '@mui/icons-material/Collections';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import MenuIcon from '/menuIcon.png'
// import CloseIcon from '/closeIcon.png'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        if(window.innerWidth > 1100) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    

    const updateMedia = () => {
        if(window.innerWidth > 1100) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        } 
    }

        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia)
    }, [])

    function handleSetShowDropdown() {
        setShowDropdown(!showDropdown);
    }

  return (
    <div className=''>
      <div className='fixed inset-x-0 z-50 top-0 flex justify-between items-center laptop:py-6 mobile:py-4 laptop:px-16 mobile:px-6 backdrop-blur-3xl bg-white/70'>
      <NavLink to='/'>
        <div className='flex flex-col'>
          <h1 className='laptop:text-3xl mobile:text-xl font-bold'>PARTH KULKARN<span className='text-red-500'>!</span></h1>
          <div className='flex items-center gap-1'>
            <CameraAltIcon className='text-red-500'/>
            <h2 className='laptop:text-xl mobile:text-base text-red-500 font-semibold'>A SHOOTER</h2>
          </div>
        </div>
      </NavLink>

        {/* <div className='mobile:hidden laptop:flex laptop:gap-16'>
          <NavLink to='/gallery' className='flex items-center gap-1 hover:text-red-500 hover:bg-gray-50 rounded-xl px-4'>
            <button className='flex items-center gap-2'><CollectionsIcon/> My Gallery</button>
          </NavLink>
          <NavLink to='/services' className='flex items-center gap-1 hover:text-red-500 hover:bg-gray-50 rounded-xl px-4'>
            <button className='flex items-center gap-2'><LinkedCameraIcon/> My services</button>
          </NavLink>
          <NavLink to='/about' className='flex items-center gap-1 hover:text-red-500 hover:bg-gray-50 rounded-xl px-4'>
            <button className='flex items-center gap-2'><InfoIcon/> About me</button>
          </NavLink>
          <NavLink to='/contact' className='bg-red-500 text-white p-2 px-10 rounded-xl hover:text-red-500 hover:bg-white hover:border-red-500'>
            <button>Contact me</button>
          </NavLink>
        </div> */}

        <div className='flex items-center'>              
            {isDesktop ?
            <div className='mobile:hidden laptop:flex laptop:gap-16'>
                <NavLink to='/gallery' className='flex items-center gap-1 hover:text-red-500 hover:bg-gray-50 rounded-xl px-4'>
                  <button className='flex items-center gap-2'><CollectionsIcon/> My Gallery</button>
                </NavLink>
                <NavLink to='/services' className='flex items-center gap-1 hover:text-red-500 hover:bg-gray-50 rounded-xl px-4'>
                  <button className='flex items-center gap-2'><LinkedCameraIcon/> My services</button>
                </NavLink>
                <NavLink to='/about' className='flex items-center gap-1 hover:text-red-500 hover:bg-gray-50 rounded-xl px-4'>
                  <button className='flex items-center gap-2'><InfoIcon/> About me</button>
                </NavLink>
                <NavLink to='/contact' className='bg-red-500 text-white p-2 px-10 rounded-xl hover:text-red-500 hover:bg-white hover:border-red-500'>
                  <button>Contact me</button>
                </NavLink>
              </div>
                    :
                // <img 
                //     className='h-6 w-auto cursor-pointer laptop:hidden' 
                //     src={showDropdown ? `${CloseIcon}` : `${MenuIcon}`} 
                //     onClick={handleSetShowDropdown}
                // />
                <h1 className='text-red-500 p-1'
                 onClick={handleSetShowDropdown}>
                    {showDropdown? <CloseIcon fontSize='large'/> : <MenuIcon fontSize='large'/>}
                </h1>
                }               
            </div>

        {showDropdown && 
            <div className='laptop:hidden mobile:absolute min-h-[100vh] left-0 top-[100%] w-full px-1'>
                <div className='flex flex-col flex-8 justify-between items-center bg-gray-50 gap-10 px-5 py-8 rounded-b-lg mx-2 z-50'>
                    <NavLink to='/gallery' onClick={handleSetShowDropdown} className='flex items-center gap-1 hover:text-red-500 hover:bg-gray-50 rounded-xl px-4'>
                        <button className='flex items-center gap-2'><CollectionsIcon/> My Gallery</button>
                    </NavLink>
                    <NavLink to='/services' onClick={handleSetShowDropdown} className='flex items-center gap-1 hover:text-red-500 hover:bg-gray-50 rounded-xl px-4'>
                        <button className='flex items-center gap-2'><LinkedCameraIcon/> My services</button>
                    </NavLink>
                    <NavLink to='/about' onClick={handleSetShowDropdown} className='flex items-center gap-1 hover:text-red-500 hover:bg-gray-50 rounded-xl px-4'>
                        <button className='flex items-center gap-2'><InfoIcon/> About me</button>
                    </NavLink>
                    <NavLink to='/contact' onClick={handleSetShowDropdown} className='bg-red-500 text-white p-2 px-10 rounded-xl hover:text-red-500 hover:bg-white hover:border-red-500'>
                        <button>Contact me</button>
                    </NavLink>
                </div>
            </div>
            }
      </div>
    </div>
  )
}

export default Navbar
