import React from 'react'
import Onlinecourse from '../onlinecourse/onlinecourse'
import Homepage from '../homebanner/homepage';

const Allcourse = () => {
  return (
    <div className='bg-gray-300 h-full w-fll'>
       
       <div className='h-full w-full flex justify-center'>
                    <img src="/study.png" className='' alt="" />
                </div>
       
      <div>
      <Onlinecourse/>
      </div>
    </div>
  )
}

export default Allcourse
