import React from 'react'
import { MdOutlineAccessTime } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Head = () => {
  return (

    <div className='flex gap-8 justify-between py-3 text-white font-bold'>
      <div>
        <h1 className='font-bold text-3xl  cursor-pointer hover:text-gray-500'>ACADEMIA</h1>
        <h2 >ONLINE EDUCATION & LEARNING</h2>
      </div>


      <div className='flex justify-center'>
        <div className='text-5xl'>
          <MdOutlineAccessTime />
        </div>
        <div>
          <h2>Monday-Friday</h2>
          <h2>8:00-5:00</h2>
        </div>
      </div>


      <div className='flex justify-center'>
        <div className='text-5xl'>
          <FiPhone />
        </div>
        <div>
          <h2>Call us</h2>
          <h2>97986758647</h2>
        </div>
      </div>

      <div className='flex gap-2 items-center text-3xl '>
        <SiFacebook className='cursor-pointer  hover:text-gray-500' />
        <RiInstagramFill className='cursor-pointer  hover:text-gray-500' />
        <FaTwitter className='cursor-pointer  hover:text-gray-500' />
        <FaLinkedin className='cursor-pointer  hover:text-gray-500' />
      </div>
    </div>
  )
}

export default Head
