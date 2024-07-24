import React from 'react'

const Pricing = () => {
  const PricingData = [
    {
      plan: "BASIC PLAN",
      price: "",
      about: "",
      start: "",
    }
  ]
  return (
    <div className='bg-white text-center h-screen mx-auto gap-10 p-16'>
      <div className=''>
        <h3 className='font-semibold text-customgreen'>OUR PRICING</h3>
        <h1 className='text-5xl font-semibold mt-5'>Pricing & Packages</h1>
      </div>
      <div>
        {PricingData.map((val, i) => {
          return (
            <div>
              <div>
                <h1>
                  {val.plan}
                </h1>
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
