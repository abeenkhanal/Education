import React from 'react'
import { CgDollar } from "react-icons/cg";
const Rate = () => {
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
    
    <div className='bg-white text-center h-screen mx-auto flex flex-col gap-10   p-16 '>
      <div className=''>
        <h3 className='font-semibold text-customgreen'>OUR PRICING</h3>
        <h1 className='text-5xl font-semibold mt-5'>Pricing & Packages</h1>
      </div>
      <div className='grid grid-cols-4  gap-8 '>
        {PricingData.map((val, i) => {
          return (
            <div className='border shadow-lg mx-auto px-9 py-6 hover:shadow-2xl' >
              <div className='gap-10 flex flex-col '>
                <div className='font-bold'>
                    {val.plan}
                </div>
                <div className='flex items-center justify-center text-5xl font-bold text-customgreen mt-4' >
                  <CgDollar />
                  {val.price}
                </div>
                <div className='text-gray-400 '>
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

export default Rate
