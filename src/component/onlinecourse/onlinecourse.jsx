import React from 'react'
const Onlinecourse = () => {
  const OnlinecoursseData = [
    {
      id:1,
      icon: 'uiux.png',
      title: 'UI/UX Design Courses',
      course: '25 course'
    },
    {
      id:2,
      icon: 'art.png',
      title: 'Art & Design',
      course: '25 course'
    },
    {
      id:3,
      icon: 'computer.png',
      title: 'Computer Science',
      course: '10 course'
    },
    {
      id:4,
      icon: 'history.png',
      title: 'History & Archeologic',
      course: '25 course'
    },
    {
      id:5,
      icon: 'software.png',
      title: 'Software Engineering',
      course: '25 course'
    },
    {
      id:6,
      icon: 'information.png',
      title: 'Information Software',
      course: '25 course'
    },
    {
      id:7,
      icon: 'health.png',
      title: 'Health & Fitness',
      course: '25 course'
    },
    {
      id:8,
      icon: 'marketing.png',
      title: 'Marketing',
      course: '25 course'
    },
    {
      id:9,
      icon: 'graphic.png',
      title: 'Graphic Design',
      course: '25 course'
    },
    {
      id:10,
      icon: 'music.png',
      title: 'Music',
      course: '25 course'
    },
    {
      id:11,
      icon: 'business.png',
      title: 'Business Administration',
      course: '25 course'
    },
    {
      id:12,
      icon: 'web.png',
      title: 'Web Management',
      course: '25 course'
    },
    

  ]


  return (
    <div className='bg-white text-center h-screen mx-auto gap-10 p-16'>
      <div className=' p-16 '>
        <h3 className='text-xl text-customgreen font-semibold'>COURSES</h3>
        <h1 className='text-5xl text-black font-semibold'>Browse Our Online Courses</h1>

      </div>
      <div className='grid grid-cols-6 gap-3 '>
      {OnlinecoursseData.map((val, i) => {
        return (
          <div className="  border-black   ">
            <div className=' bg-slate-100 hover:bg-customgreen cursor-pointer group flex py-8 px-6 flex-col gap-5 items-center justify-center  duration-500 shadow-md'>
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
