import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
const Footer = () => {
    return (
       <div className='bg-white w-full'>
        <div className='w-10/12 mx-auto grid grid-cols-5 gap-6'>
            <div className=''>
                <h1 className='font-extrabold text-4xl'>ACADEMIA</h1>
                <h3 className=' font-medium text-sm text-gray-600'>ONLINE EDUCATION & LEARNING</h3>
                <p className='mt-10'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <div className='flex space-x-3 mt-7 '>
                <FaTwitter className='  rounded-full  h-9 w-9 hover:text-gray-500 cursor-pointer text-2xl ' / >
                <FaFacebook className=' rounded-full  h-9 w-9 hover:text-gray-500 cursor-pointer text-2xl '/>
                <FaInstagram className=' rounded-full  h-9 w-9 hover:text-gray-500 cursor-pointer text-2xl '/>
                </div>
            </div>
            <div className='ml-4'>
                <h2>Explore</h2>
                <ul className='mt-7 bg-slate-300 w-fit '>
                    <li> <a href=""className='flex items-center text-gray-500 hover:text-gray-700 '><IoIosArrowRoundForward />About Us</a></li>
                    <li> <a href=""className='flex items-center text-gray-500 hover:text-gray-700 '><IoIosArrowRoundForward />Services</a></li>
                    <li> <a href=""className='flex items-center text-gray-500 hover:text-gray-700 '><IoIosArrowRoundForward />Courses</a></li>
                    <li> <a href=""className='flex items-center text-gray-500 hover:text-gray-700 '><IoIosArrowRoundForward />Blog</a></li>
                    <li> <a href=""className='flex items-center text-gray-500 hover:text-gray-700 '><IoIosArrowRoundForward />Contact Us</a></li>
                </ul>
            </div>
            <div>
            Quick Links

            </div>
            <div>
            Recent Posts
            </div>
            <div>
            Have a Questions?
            </div>
        </div>
       </div>
    )
}

export default Footer
