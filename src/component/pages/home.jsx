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
import { BsFillGridFill } from 'react-icons/bs';
import { TfiMenuAlt } from 'react-icons/tfi';
import Productcard from '../UI/Productcard';
import { DarazcardData } from '../Data/Productdata';
import { useState } from 'react';



const Home = () => {
    const [changeview, setchangeview] = useState("grid");

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
          {/* <div className='bg-white'>
          <div className="flex justify-end w-full max-w-7xl mx-auto gap-4 text-xl">
                <button
                    onClick={() => {
                        setchangeview("grid");
                    }}
                    className={`p-2 rounded ${changeview === "grid" ? "bg-gray-200" : ""}`}
                >
                    <BsFillGridFill />
                </button>
                <button
                    onClick={() => {
                        setchangeview("flex");
                    }}
                    className={`p-2 rounded ${changeview === "flex" ? "bg-gray-200" : ""}`}
                >
                    <TfiMenuAlt />
                </button>
            </div>


            <div className={`grid gap-6 max-w-7xl mx-auto mt-8 ${changeview === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                {DarazcardData.map((value) => (
                  <Productcard
                  id={value.id}
                  title={value.title}
                  rating={value.rating}
                  image={value.image}
                  changeview={changeview}
                  price={value.price}
                  originalPrice={value.originalPrice}
                  promotion={value.promotion}
                discount={value.discount}
                  />
                ))}
            </div>

          </div> */}

        </div>
    )
}

export default Home
