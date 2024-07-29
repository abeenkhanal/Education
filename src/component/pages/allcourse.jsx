import React from 'react'
import Onlinecourse from '../onlinecourse/onlinecourse'
import Homepage from '../homebanner/homepage';
const coursesData = [
  {
    id:1,
    title: "Basic Fundamentals for Software Engineering",
    rating: 5.0,
    author: "John Smith",
    lectures: 50,
    hours: 190,
    price: "$100 All Course / $15 per month",
    logo: "fas fa-laptop-code",
  },
  {
    id:2,

    title: "Enhancing Adobe Photoshop CC 2020 Skills",
    rating: 5.0,
    author: "John Smith",
    lectures: 50,
    hours: 190,
    price: "$100 All Course / $15 per month",
    logo: "fas fa-paint-brush",
  },
  {
    id:3,
    title: "HTML, CSS, and Javascript for Web Developers",
    rating: 5.0,
    author: "John Smith",
    lectures: 50,
    hours: 190,
    price: "$100 All Course / $15 per month",
    logo: "fas fa-code",
  },
  {
    id:4,
    title: "Introducing to Programming with WordPress",
    rating: 5.0,
    author: "John Smith",
    lectures: 50,
    hours: 190,
    price: "$100 All Course / $15 per month",
    logo: "fab fa-wordpress",
  },
  {
    id:5,
    title: "Introducing to Programming with WordPress",
    rating: 5.0,
    author: "John Smith",
    lectures: 50,
    hours: 190,
    price: "$100 All Course / $15 per month",
    logo: "fab fa-wordpress",
  },
  {
    id:6,
    title: "Introducing to Programming with WordPress",
    rating: 5.0,
    author: "John Smith",
    lectures: 50,
    hours: 190,
    price: "$100 All Course / $15 per month",
    logo: "web.png",
  },
];
const Allcourse = () => {
  return (
    <div>
    <div className='bg-gray-300 h-full w-fll'>
       
       <div className='h-full w-full flex justify-center'>
                    <img src="/about.png" className='max-h-[80vh]' alt="" />
                </div>
                </div>
                
                <div>
                  {coursesData.map((val, i)=> {
                    return(
                      <div>
                        <div className=''>
                          <img src={val.logo} alt="" ></img>
                        </div>
                        <div>
                          {val.title}
                        </div>
                      </div>
                    )
                  })
                    
                  }
                </div>
       
      <div>
      <Onlinecourse/>
      </div>
    </div>
  )
}

export default Allcourse
