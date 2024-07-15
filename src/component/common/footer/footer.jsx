import React from 'react'
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div>
                <div>
                    <h1 className='font-bold text-3xl'>ACADEMIA</h1>
                    <h3 className='text-gray-500'>ONLINE EDUCATION & LEARNING</h3>
                    <p>A small river named Tirsuli have been very dangerous to nepali people.</p>
                    <div className='flex gap-4 '>
                        <SiFacebook className='cursor-pointer text-3xl hover:text-gray-500' />
                        <RiInstagramFill className='cursor-pointer text-3xl hover:text-gray-500' />
                        <FaTwitter className='cursor-pointer text-3xl hover:text-gray-500' />
                    </div>
                </div>

                <div>
                    <h2 className='font-semibold'>Explore</h2>
                </div>
            </div>
        </>
    )
}

export default Footer
