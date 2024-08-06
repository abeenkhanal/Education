import React from 'react'
import Carousel from 'react-multi-carousel';


const responsive = {
  
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Homepage = () => {
    return (

        <div className=' bg-primary fixed top-0 -z-10 right-0 lg:bottom-0 flex items-start justify-center lg:h-screen h-96   w-full '>
            <div className=' h-full w-10/12 grid grid-cols-2 gap-6 justify-between items-center '>
                
                <div className='h-full absolute lg:relative  md:w-11/12 '>
                    <img src="/study.png" className='h-full object-cover w-full  ' alt="" />
                </div>

            </div>
            
        </div>
    )
}

export default Homepage
