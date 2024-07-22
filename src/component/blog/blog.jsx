import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FaComment } from "react-icons/fa";
const Blog = () => {
    const BlogData = [
        {
            id: 1,
            image: '',
            icon: <BsFillPersonFill />,
            text: "Admin",
            calender: <SlCalender />,
            date: "JAN. 18 2002",
            icon2: <FaComment />,
            comment: "3 comment"
        }
    ]
    return (
        <div className='p-16 h-screen text-center bg-white mx-auto'>
            <div className='  '>
                <h3 className='text-xl text-customgreen font-semibold'>OUR BLOG</h3>
                <h1 className='text-5xl text-black font-semibold'>Recent From Blog</h1>

            </div>
            <div>
                {BlogData.map((val, i) => {
                    return (
                        <div>
                            <div className=''>
                                <div>
                                    <img src={val.image} alt=""></img>
                                </div>
                                <div className=''>
                                    <div className='flex'>
                                        <div>
                                            {val.icon}
                                        </div>
                                        <div>
                                            {val.text}
                                        </div>
                                    </div>
                                    <div>
                                        {val.calender}
                                    </div>
                                    <div>
                                        {val.date}
                                    </div>
                                    <div>
                                        {val.icon2}
                                    </div>
                                    <div>
                                        {val.comment}
                                    </div>
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
