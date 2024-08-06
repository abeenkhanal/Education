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
    
    <div className='bg-white text-center h-fit mx-auto flex flex-col gap-10    '>
      <div className='h-full w-full flex bg-gray-300 justify-center'>
          <img src="/about.png" className='max-h-[80vh] md:max-h-[60vh]  lg:max-h-[80vh]' alt="" />
        </div>
      <div className=''>
        <h3 className='font-semibold text-customgreen'>OUR PRICING</h3>
        <h1 className='text-5xl font-semibold mt-5'>Pricing & Packages</h1>
      </div>
      <div className='grid grid-cols-1  gap-8 p-8 md:grid-cols-2 lg:grid-cols-3 md:p-12 lg:p-24'>
        {PricingData.map((val, i) => {
          return (
            <div className='border shadow-lg mx-auto px-9 py-6 hover:shadow-2xl bg-zinc-200' >
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
