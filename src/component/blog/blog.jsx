import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FaComment } from "react-icons/fa";
const Blog = () => {
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
    return (
        <div className='bg-white'>
          <div className='h-full w-full flex bg-gray-300 justify-center'>
              <img src="/about.png" className='max-h-[80vh] md:max-h-[60vh] p-2 lg:max-h-[80vh]' alt="" />
            </div>
            <div>
            <div className='p-8 md:p-16 lag:p-32'>
        <h2 className='text-center font-semibold text-customgreen text-lg md:text-xl lg:text-2xl'>Testimonial</h2>
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold  ">Our Successful Students</h2>
      </div>
            </div>
            <div className='grid grid-cols-1 gap-10 bg-white  mx-auto p-6 md:grid-cols-2 lg:grid-cols-3 md:p-12 lg:p-24'>
                    {BlogData.map((val, i) => {
                        return (
                                <div key={i} className='border group overflow-clip    pb-8 '>
                                    <div className='h-60 w-full overflow-clip  '>
                                        <img src={val.image} alt="" className='h-60 w-full transition-all  delay-75 ease-in-out group-hover:scale-110 duration-500 object-cover'></img>
                                    </div> 
                                  <div className='flex flex-col gap-2 p-3'>
                                  <div className='flex  gap-2 md:flex-row text-xs md:text-sm md:justify-between'>
                                        <div className='flex items-center gap-3'> 
                                            <div>
                                                {val.icon}
                                            </div>
                                            <div>
                                                {val.text}
                                            </div>
                                        </div>
                                     <div className='flex items-center gap-3 '>
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

export default Blog
