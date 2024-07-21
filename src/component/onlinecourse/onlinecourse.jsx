import React from 'react'
const Onlinecourse = () => {
  const OnlinecoursseData = [
    {
      id:1,
      icon: 'book.png',
      title: 'UI/UX Design Courses',
      course: '25 course'
    },
    {
      id:2,
      icon: 'book.png',
      title: 'Art & Design',
      course: '25 course'
    },
    {
      id:3,
      icon: 'book.png',
      title: 'Computer Science',
      course: '10 course'
    },
    {
      id:4,
      icon: 'book.png',
      title: 'History & Archeologic',
      course: '25 course'
    },
    {
      id:5,
      icon: 'book.png',
      title: 'Software Engineering',
      course: '25 course'
    },
    {
      id:6,
      icon: 'book.png',
      title: 'Information Software',
      course: '25 course'
    },
    {
      id:7,
      icon: 'book.png',
      title: 'Health & Fitness',
      course: '25 course'
    },
    {
      id:8,
      icon: 'book.png',
      title: 'Marketing',
      course: '25 course'
    },
    {
      id:9,
      icon: 'book.png',
      title: 'Graphic Design',
      course: '25 course'
    },
    {
      id:10,
      icon: 'book.png',
      title: 'Music',
      course: '25 course'
    },
    {
      id:11,
      icon: 'book.png',
      title: 'Business Administration',
      course: '25 course'
    },
    {
      id:12,
      icon: 'book.png',
      title: 'Web Management',
      course: '25 course'
    },
    

  ]


  return (
    <div className='bg-white text-center h-screen  w-10/12 mx-auto gap-10 '>
      <div className=' p-32'>
        <h3 className='text-xl text-customgreen font-semibold'>COURSES</h3>
        <h1 className='text-4xl text-black font-semibold'>Browse Our Online Courses</h1>

      </div>
      <div className='grid grid-cols-6 gap-2'>
      {OnlinecoursseData.map((val, i) => {
        return (
          <div className="  border-black  gap-2   ">
            <div className=' bg-white hover:bg-customgreen cursor-pointer group flex py-8 px-6 flex-col gap-5 items-center justify-center  duration-500 shadow-md'>
              <div className='h-16 w-16 '>
                <img src={val.icon} alt="" ></img>
              </div>
              <div className='text-md group-hover:text-white font-semibold text-black "'>
                {val.title}
              </div>
              <button className="text-customgreen group-hover:text-white">
                {val.course}
              </button>
            </div>
          </div>
        )
      })

      }</div>
    </div>
  )
}

export default Onlinecourse
