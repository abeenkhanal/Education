import React from 'react'
const 
Onlinecourse = () => {
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
    <div className='bg-white text-center min-h-screen mx-auto p-4 md:p-8 lg:p-16'>
      <div className='py-8 md:py-12 lg:py-16'>
        <h3 className='text-lg md:text-xl lg:text-2xl text-customgreen font-semibold'>COURSES</h3>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-black font-semibold'>Browse Our Online Courses</h1>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 lg:gap-10'>
        {OnlinecoursseData.map((val, i) => {
          return (
            <div key={i} className="border-black shadow-2xl">
              <div className='bg-slate-100 rounded-md h-full hover:bg-customgreen cursor-pointer group flex py-4 px-4 md:py-6 md:px-6 lg:py-8 lg:px-8 flex-col gap-3 md:gap-4 lg:gap-5 items-center justify-center duration-500 shadow-md'>
                <div className='h-12 w-12 md:h-16 md:w-16'>
                  <img src={val.icon} alt="" />
                </div>
                <div className='text-md md:text-lg lg:text-xl group-hover:text-white font-semibold text-black'>
                  {val.title}
                </div>
                <button className="font-semibold text-customgreen group-hover:bg-white rounded-md w-7/12">
                  {val.course}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Onlinecourse
