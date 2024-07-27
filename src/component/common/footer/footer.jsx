import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-white w-full gap-3'>
            <div className='w-11/12 mx-auto grid grid-cols-5   p-20'>
                <div className=''>
                    <h1 className='font-extrabold text-4xl'>ACADEMIA</h1>
                    <h3 className=' font-medium text-sm text-gray-600'>ONLINE EDUCATION & LEARNING</h3>
                    <p className='mt-10'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div className='flex space-x-3 mt-7 '>
                        <FaTwitter className='  rounded-full  h-9 w-9 hover:text-gray-500 cursor-pointer text-2xl ' />
                        <FaFacebook className=' rounded-full  h-9 w-9 hover:text-gray-500 cursor-pointer text-2xl ' />
                        <FaInstagram className=' rounded-full  h-9 w-9 hover:text-gray-500 cursor-pointer text-2xl ' />
                    </div>
                </div>
                <div className='ml-4 mb-6 '>
                    <h2>Explore</h2>
                    <ul className='mt-7 gap-4 w-fit '>
                        <li className=''> <a href="" className='flex items-center text-gray-500 hover:text-gray-700 '><IoIosArrowRoundForward />About Us</a></li>
                        <li> <a href="" className='flex items-center text-gray-500 hover:text-gray-700 '><IoIosArrowRoundForward />Services</a></li>
                        <li> <a href="" className='flex items-center text-gray-500 hover:text-gray-700 '><IoIosArrowRoundForward />Courses</a></li>
                        <li> <a href="" className='flex items-center text-gray-500 hover:text-gray-700 '><IoIosArrowRoundForward />Blog</a></li>
                        <li> <a href="" className='flex items-center text-gray-500 hover:text-gray-700 '><IoIosArrowRoundForward />Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Quick Links</h2>
                    <ul className='mt-7 gap-4 w-fit '>
                        <li className=''> <a href="" className='flex items-center text-gray-500 hover:text-gray-700 '><IoIosArrowRoundForward />Contact Us</a></li>
                        <li> <a href="" className='flex items-center text-gray-500 hover:text-gray-700 '><IoIosArrowRoundForward />Pricing</a></li>
                        <li> <a href="" className='flex items-center text-gray-500 hover:text-gray-700 '><IoIosArrowRoundForward />Terms & Conditions</a></li>
                        <li> <a href="" className='flex items-center text-gray-500 hover:text-gray-700 '><IoIosArrowRoundForward />Privacy</a></li>
                        <li> <a href="" className='flex items-center text-gray-500 hover:text-gray-700 '><IoIosArrowRoundForward />Feedbacks Us</a></li>
                    </ul>
                </div>
                <div className=''>
                    <h2>Recent Posts</h2>
                    <ul className='mt-7'>
                        <li className="mb-3">
                            <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                                <img src="./public/recent1.jpg" alt="post" className="w-14 h-14 rounded  mr-3" />
                                <div className=' '>
                                    <span className="text-xs text-gray-500 flex gap-1"> <BsCalendarDate />Jan. 18, 2021 <FaUser /> Admin</span>
                                    <p className="text-sm">Creativity and Inspiration</p>

                                </div>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                                <img src="./public/recent2.jpg" alt="post" className="w-14 h-14 rounded mr-3" />
                                <div>
                                    <span className="text-xs text-gray-500 flex gap-1"> <BsCalendarDate />Jan. 18, 2021 <FaUser />Admin</span>
                                    <p className="text-sm">Creativity and Inspiration</p>

                                </div>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="" className="flex items-center text-gray-600 hover:text-gray-900">
                                <img src="./public/recent3.jpg" alt="post" className="w-14 h-14 rounded mr-3" />
                                <div>
                                    <span className="text-xs text-gray-500">Jan. 18, 2021 - Admin</span>
                                    <p className="text-sm">Creativity and Inspiration</p>

                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='mr '>
                    <h3>Have a Questions?</h3>
                    <ul className='mt-7'>
                      
                        <li className="text-gray-600 mb-2 flex place-items-start ">   <FaMap className='h-14 w-14 mr-3'/> 203 Fake St. Mountain View, San Francisco, California, USA</li>
                        <li className="text-gray-600 mb-2 flex place-items-start">< FaPhoneAlt className='h-7 w-7 mr-3'/> +2 392 3929 210</li>
                        <li className="text-gray-600 mb-2 flex place-items-start"> <FaTelegramPlane className='h-9 w-9 mr-3' />info@yourdomain.com</li>
                    </ul>
                </div>
            </div>
            <div className=''>
                <h2 className='mx-auto w-10/12 flex justify-center'>Copyright ©2024 All rights reserved | This template is made with  by Abeen</h2>
            
            </div>
        </div>
    )
}

export default Footer
