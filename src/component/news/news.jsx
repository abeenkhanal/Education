import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";

const News = () => {
  return (
    <div className='bg-customgreen grid grid-cols-3 place-items-center px-24 py-16 '>
      <div className=' text-white w-full col-span-2'>
        <h1 className='font-bold text-4xl w-10/12'>Newsletter - Stay tune and get the latest update</h1>
        <h2 className='text-gray-300'>Far far away, behind the word mountains</h2>
      </div>
      <div className='bg-customgreen flex items-center w-full justify-between h-fit border-b text-white '>
            <input className='border-none bg-transparent text-lg placeholder-white focus:outline-none  w-52' type="email" placeholder='Enter Your Email '/>
           <button className='text-3xl'><FaTelegramPlane /></button>
      </div>
    </div>
  )
}

export default News
