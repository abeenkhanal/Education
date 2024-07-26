import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
       <div className='bg-white w-full'>
        <div className='w-10/12 mx-auto'>
            <div className='w-1/5'>
                <h1 className='font-extrabold text-4xl'>ACADEMIA</h1>
                <h3 className='font-medium text-gray-600'>ONLINE EDUCATION & LEARNING</h3>
                <p className=''>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <div className='flex space-x-3 mt-3 '>
                <FaTwitter className='rounded-fullcursor-pointer text-2xl hover:text-gray-500' / >
                <FaFacebook className='rounded-fullcursor-pointer text-2xl hover:text-gray-500'/>
                <FaInstagram className='rounded-fullcursor-pointer text-2xl hover:text-gray-500'/>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Footer
