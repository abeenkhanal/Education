import React from 'react'
import Blog from '../blog/blog';
import { BsFillPersonFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FaComment } from "react-icons/fa";
const BlogData = [
  {
      id: 1,
      image: 'blog1.jpg',
      icon: <BsFillPersonFill />,
      text: "Admin",
      calender: <SlCalender />,
      date: "JAN. 18 2002",
      icon2: <FaComment />,
      comment: "3 comment",
      heading:"Build your Dream Software & Engineering Career",
      about:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
  },
  {
      id: 1,
      image: 'blog1.jpg',
      icon: <BsFillPersonFill />,
      text: "Admin",
      calender: <SlCalender />,
      date: "JAN. 18 2002",
      icon2: <FaComment />,
      comment: "3 comment",
      heading:"Build your Dream Software & Engineering Career",
      about:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
  },
  {
      id: 1,
      image: 'blog1.jpg',
      icon: <BsFillPersonFill />,
      text: "Admin",
      calender: <SlCalender />,
      date: "JAN. 18 2002",
      icon2: <FaComment />,
      comment: "3 comment",
      heading:"Build your Dream Software & Engineering Career",
      about:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
  },
  {
    id: 1,
    image: 'blog1.jpg',
    icon: <BsFillPersonFill />,
    text: "Admin",
    calender: <SlCalender />,
    date: "JAN. 18 2002",
    icon2: <FaComment />,
    comment: "3 comment",
    heading:"Build your Dream Software & Engineering Career",
    about:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
},
{
    id: 1,
    image: 'blog1.jpg',
    icon: <BsFillPersonFill />,
    text: "Admin",
    calender: <SlCalender />,
    date: "JAN. 18 2002",
    icon2: <FaComment />,
    comment: "3 comment",
    heading:"Build your Dream Software & Engineering Career",
    about:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
},
{
    id: 1,
    image: 'blog1.jpg',
    icon: <BsFillPersonFill />,
    text: "Admin",
    calender: <SlCalender />,
    date: "JAN. 18 2002",
    icon2: <FaComment />,
    comment: "3 comment",
    heading:"Build your Dream Software & Engineering Career",
    about:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
},
]

const Journal = () => {
  return (
    <div className='bg-white'>
      <div className='h-full w-full flex bg-gray-300 justify-center'>
          <img src="/about.png" className='max-h-[80vh]' alt="" />
        </div>
        <div className='grid grid-cols-3 gap-10 bg-white  mx-auto p-24'>
                {BlogData.map((val, i) => {
                    return (
                            <div key={i} className='border group overflow-clip w-11/12 pb-8 '>
                                <div className='h-60 w-full overflow-clip '>
                                    <img src={val.image} alt="" className='h-60 w-full transition-all  delay-75 ease-in-out group-hover:scale-110 duration-500 object-cover'></img>
                                </div> 
                              <div className='flex flex-col gap-2 p-3'>
                              <div className='flex gap-2 '>
                                    <div className='flex items-center gap-3'>
                                        <div>
                                            {val.icon}
                                        </div>
                                        <div>
                                            {val.text}
                                        </div>
                                    </div>
                                 <div className='flex items-center gap-3'>
                                 <div>
                                        {val.calender}
                                    </div>
                                    <div className='text-sm'>
                                        {val.date}
                                    </div>
                                 </div>
                                  <div className='flex gap-2 items-center'>
                                  <div>
                                        {val.icon2}
                                    </div>
                                    <div className='text-sm'>
                                        {val.comment}
                                    </div>
                                  </div>
                                </div>
                                <div className='font-semibold text-2xl mt-8'>
                                    {val.heading}
                                </div>
                                <div className='text-left mt-3 text-customgreen font-serif'>
                                    {val.about}
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

export default Journal
