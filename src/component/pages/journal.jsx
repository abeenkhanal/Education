import React from 'react'
import Blog from '../blog/blog';



const Journal = () => {
  return (
    <div className='bg-white'>
      <div className='h-full w-full flex bg-gray-300 justify-center'>
              <img src="/about.png" className='max-h-[80vh] md:max-h-[60vh] p-2 lg:max-h-[80vh]' alt="" />
            </div>
        <Blog />
    </div>
  )
}

export default Journal
