import React from 'react'
import Learning from '../learn/learning'
import Onlinecourse from '../onlinecourse/onlinecourse'
import Homepage from '../homebanner/homepage';
import { FaArrowRight } from "react-icons/fa6";
// import Pricing from '../pricing/rate';
import Blog from '../blog/blog';
import "react-multi-carousel/lib/styles.css";
import Slider from '../testimonial/slider';
import Rate from '../pricing/rate';



const Home = () => {
    return (
        <div>
        
            
            <div className='lg:h-screen h-96 w-full bg-transparent flex items-center'>
            <div className='flex md:w-10/12 w-11/12 lg:8/12 mx-auto flex-col gap-6'>
                <h2 className='font-bold text-gray-400 text-xl md:text-2xl lg:text-3xl'>WELCOME TO ACADEMIA</h2>
                <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl w-full md:w-8/12 lg:w-6/12  text-white '>Best Online Education Expertise </h1>
                <p className='w-full md:w-8/12 lg:w-6/12 text-sm md:text-base lg:text-lg'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                <div className='gap-4 flex' >
                    <button className='bg-customgreen md:px-6 lg:px-7 py-2 md:py-3 lg:py-4 text-sm font-semibold flex gap-3 text-white rounded hover:bg-white hover:text-customgreen shadow-xl'>GET STARTED NOW <FaArrowRight />  </button>
                    <button className='bg-white px-4 md:px-6 lg:px-7 py-2 md:py-3 lg:py-4 text-sm font-semibold flex gap-3 text-customgreen  rounded  hover:bg-customgreen hover:text-white shadow-xl'>VIEW COURSE <FaArrowRight /></button>

                </div>
            </div>
        </div>
            <div className=' bg-white '>
                <Learning />
            </div>
            <Slider />
            <div><Onlinecourse /></div>
            <Blog />
            <Rate/>

            

        </div>
    )
}

export default Home
