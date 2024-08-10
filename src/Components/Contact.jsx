import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { useState } from 'react';

const Contact = () => {
    const [user, setUser] = useState(
        {
            FullName: '',
            Email: '',
            Phone: '',
            Message: '',
        }
      )
    
      let name, value;
    
        const data = (e) => {
            name = e.target.name;
            value = e.target.value;
            setUser({...user, [name]: value})
        }
        console.log(user);
    
        const getData = async (e) => {
          const {FullName, Email, Phone, Message
              } = user;
          e.preventDefault();
          const options = {
              method: 'POST',
              headers: {
                  'Content-Type' : 'application/json'
              },
              body: JSON.stringify({
                  FullName, Email, Phone, Message
              })
          }
          const res = await fetch(
              'https://upload-file-to-db-default-rtdb.firebaseio.com/GetInTouch.json',
              options
          )
          if(res) {
              alert('Message sent!')
          } else {
              alert('Error occured')
          }
      }

  return (
    <div id='contact' className='bg-black text-white'>
      {/* <div className='flex flex-col items-center gap-4 p-20'> */}
        <div className='flex laptop:flex-row mobile:flex-col justify-center items-center laptop:gap-20 mobile:gap-10 laptop:p-20 laptop:px-36 mobile:p-6'>

          <div className='flex flex-col laptop:gap-12 mobile:gap-6 laptop:w-1/2 mobile:w-full'>
            <div className='flex flex-col laptop:gap-4 mobile:gap-2'>
              <h1 className='text-white laptop:text-5xl mobile:text-3xl font-semibold'>Contact me</h1>
              <h2 className='text-white laptop:text-2xl mobile:text-xl font-light'>I'm just a text away.</h2>
            </div>
            <form action="POST">
              <div className='flex flex-col laptop:gap-8 mobile:gap-6'>
                <input required
                    className='border-b-2 h-10 p-2 bg-black hover:border-zinc-400'
                    placeholder='Name'
                    name='FullName' 
                    value={user.FullName}
                    type="text"
                    autoComplete='on'
                    onChange={data}/>
                <input required
                    className='border-b-2 h-10 p-2 bg-black hover:border-zinc-400'
                    placeholder='Email'
                    name='Email'
                    value={user.Email}
                    type="text"
                    autoComplete='on'
                    onChange={data}/>
                <input required
                    className='border-b-2 h-10 p-2 bg-black hover:border-zinc-400'
                    placeholder='Phone'
                    name='Phone'
                    value={user.Phone}
                    type="text"
                    autoComplete='on'
                    onChange={data}/>
                <textarea required
                    className='border-b-2 h-20 p-2 bg-black hover:border-zinc-400'
                    placeholder='Message'
                    name='Message' 
                    value={user.Message}
                    onChange={data}/>
                <button type='submit' className='flex items-center justify-center gap-2 bg-zinc-400 text-white p-2 px-10 rounded-xl hover:bg-white hover:text-zinc-400' 
                onClick={getData}>Send</button>
                </div>
              </form>
          </div>

          <div className='flex flex-col justify-between gap-6 laptop:p-16 mobile:p-6 laptop:mb-0 mobile:mb-12 border-2 rounded-xl laptop:w-1/2 mobile:w-full'>
            <h2 className='text-white text-3xl font-semibold pb-4'>Stay Connected.</h2>
            <a href='https://www.instagram.com/partofparth?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className='flex items-center gap-4 hover:underline hover:text-zinc-400'>
                <InstagramIcon fontSize='medium'/>
                <h2 className='text-xl font-normal'>partofparth</h2>
            </a>
            <a href='tel:+91-8830763647' className='flex items-center gap-4 hover:underline hover:text-zinc-400'>
                <LocalPhoneOutlinedIcon fontSize='medium'/>
                <h2 className='text-xl font-normal'>08830763647</h2>
            </a>
            <a href='https://wa.me/918830763647' className='flex items-center gap-4 hover:underline hover:text-zinc-400'>
                <WhatsAppIcon fontSize='medium'/>
                <h2 className='text-xl font-normal'>+91-8830763647</h2>
            </a>
            <a href='mailto: partofparth@gmail.com' className='flex items-center gap-4 hover:underline hover:text-zinc-400'>
                <MailOutlineIcon fontSize='medium'/>
                <h2 className='text-xl font-normal'>partofparth@gmail.com</h2>
            </a>
            <a href='https://maps.app.goo.gl/EwyQLRLqA9UxAied8' className='flex items-center gap-4 hover:underline hover:text-zinc-400'>
                <RoomOutlinedIcon fontSize='medium'/>
                <h2 className='text-xl font-normal'>Kamod Nagar, Indira Nagar, Nashik, Maharashtra 422009</h2>
            </a>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Contact
