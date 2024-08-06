import React from 'react'
import Onlinecourse from '../onlinecourse/onlinecourse'
import Homepage from '../homebanner/homepage';
import { FaStar } from "react-icons/fa6";
const coursesData = [
  {
    id: 1,
    title: "Basic Fundamentals for Software Engineering",
    rating: '(5.0)',
    author: "John Smith",
    lectures: 50,
    hours: 190,
    price: "$100 All Course / $15 per month",
    logo: "web.png",
  },
]
const Allcourse = () => {
  return (
    <div>
      <div className='bg-gray-300 h-full w-fll'>

        <div className='h-full w-full flex justify-center'>
          <img src="/about.png" className='max-h-[80vh]' alt="" />
        </div>
      </div>
      <div className='bg-white h-full grid grid-cols-4'>
        {coursesData.map((val, i) => {
          return (
         
          
        <></>
          )
        })
        }
      </div>

      <div>
        <Onlinecourse />
      </div>
    </div>
  )
}

export default Allcourse
