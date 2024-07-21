import React from 'react'
const Onlinecourse = () => {
  const OnlinecoursseData = [
    {
      icon: 'book.png',
      title: 'UI/UX Design Courses',
      course: '25 course'
    },
    {
      icon: 'book.png',
      title: 'UI/UX Design Courses',
      course: '25 course'
    },
    {
      icon: 'book.png',
      title: 'UI/UX Design Courses',
      course: '25 course'
    },
    {
      icon: 'book.png',
      title: 'UI/UX Design Courses',
      course: '25 course'
    },
    {
      icon: 'book.png',
      title: 'UI/UX Design Courses',
      course: '25 course'
    },
    {
      icon: 'book.png',
      title: 'UI/UX Design Courses',
      course: '25 course'
    },
    {
      icon: 'book.png',
      title: 'UI/UX Design Courses',
      course: '25 course'
    },
    {
      icon: 'book.png',
      title: 'UI/UX Design Courses',
      course: '25 course'
    },
    {
      icon: 'book.png',
      title: 'UI/UX Design Courses',
      course: '25 course'
    },



  ]


  return (
    <div className='bg-primary text-center h-fit grid gap-10 '>
      <div className=' '>
        <h3 className='text-xl text-customgreen font-semibold'>COURSES</h3>
        <h1 className='text-4xl text-black font-semibold'>Browse Our Online Courses</h1>

      </div>
      {OnlinecoursseData.map((val, i) => {
        return (
          <div className="grid grid-cols-6 border gap-2   ">
            <div className=' bg-white hover:bg-customgreen cursor-pointer group flex py-8 px-6 flex-col gap-5 items-center justify-center  duration-500 shadow-md'>
              <div className='h-16 w-16 bg-mainbg'>
                <img src={val.icon} alt="" ></img>
              </div>
              <div className='text-md group-hover:text-white font-semibold text-black "'>
                {val.title}
              </div>
              <div className="text-customgreen group-hover:text-white">
                {val.course}
              </div>
            </div>
          </div>
        )
      })

      }
    </div>
  )
}

export default Onlinecourse
