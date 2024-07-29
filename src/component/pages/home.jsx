import React from 'react'
import Learning from '../learn/learning'
import Onlinecourse from '../onlinecourse/onlinecourse'
import Homepage from '../homebanner/homepage';
import { FaArrowRight } from "react-icons/fa6";
import Pricing from '../pricing/pricing';
import Blog from '../blog/blog';

const Home = () => {
    return (
        <div>
        
            
            <div className='h-screen w-full bg-transparent flex items-center'>
            <div className='flex w-10/12 mx-auto flex-col gap-6'>
                <h2 className='font-bold text-gray-00'>WELCOME TO ACADEMIA</h2>
                <h1 className='font-bold text-4xl w-5/12 text-white '>Best Online Education Expertise </h1>
                <p className='w-6/12'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                <div className='gap-4 flex' >
                    <button className='bg-customgreen px-7 py-4 text-sm font-semibold flex gap-3 text-white rounded hover:bg-white hover:text-customgreen shadow-xl'>GET STARTED NOW <FaArrowRight />  </button>
                    <button className='bg-white px-7 py-4 text-sm font-semibold flex gap-3 text-customgreen  rounded  hover:bg-customgreen hover:text-white shadow-xl'>VIEW COURSE <FaArrowRight /></button>

                </div>
            </div>
        </div>
            <div className=' bg-white '>
                <Learning />
            </div>
            
            <div><Onlinecourse /></div>
            <Blog />
            <Pricing/>
            

        </div>
    )
}

export default Home
