import React from 'react'
import Rate from '../pricing/rate'




const Pricing = () => {
  return (
    <div className='bg-customgreen'>
       <div className='h-full w-full flex bg-gray-300 justify-center'>
          <img src="/about.png" className='max-h-[80vh]' alt="" />
        </div>
        <div>
          <Rate />
        </div>
    </div>
  )
}

export default Pricing
