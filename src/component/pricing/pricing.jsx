import React from 'react'
import { CgDollar } from "react-icons/cg";
const Pricing = () => {
  const PricingData = [
    {
      plan: "BASIC PLAN",
      price: " 49K",
      about: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      start: "GET STARTED",
    },
    {
      plan: "BEGINNER PLAN",
      price: " 79K",
      about: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      start: "GET STARTED",
    },
    {
      plan: "PREMIUM PLAN",
      price: " 109K",
      about: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      start: "GET STARTED",
    },
    {
      plan: "ULTIMATE PLAN",
      price: " 149K",
      about: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      start: "GET STARTED",
    },

  ]

  return (
    <div className='bg-white text-center h-screen mx-auto  p-16 '>
      <div className=''>
        <h3 className='font-semibold text-customgreen'>OUR PRICING</h3>
        <h1 className='text-5xl font-semibold mt-5'>Pricing & Packages</h1>
      </div>
      <div className='grid grid-cols-4  px-10 mt-32  '>
        {PricingData.map((val, i) => {
          return (
            <div className='border shadow-lg w-10/12 mx-auto px-9' >
              <div className=' gap-4 mt-14'>
                <div>
                  <h1 className=' font-bold text-sm mt-8'>
                    {val.plan}
                  </h1>
                </div>
                <div className='flex items-center justify-center text-5xl font-bold text-customgreen mt-4' >
                  <CgDollar />
                  {val.price}
                </div>
                <div className='text-gray-400 mt-5'>
                  {val.about}
                </div>
                <div className=' mt-5  pb-5 group '>
                  <button className='border border-customgreen text-customgreen font-semibold text-sm py-2 px-6 rounded hover:text-white hover:bg-customgreen'>
                    {val.start}
                  </button>
                </div>
              </div>
            </div>

          )


        })

        }
      </div>
    </div>

  )


}

export default Pricing
