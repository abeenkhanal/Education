import React from 'react'
import Carousel from "react-multi-carousel";

const SliderData = [
  {
    name: "Roger Scott",
    position: "Marketing Manager",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "study.png"
  },
  {
    name: "Roger Scott",
    position: "Marketing Manager",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "sliderprofile.jpg"
  },
  {
    name: "Roger Scott",
    position: "Marketing Manager",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "recent1.jpg"
  },
  {
    name: "Roger Scott",
    position: "Marketing Manager",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "recent1.jpg"
  }
];



const Slider = () => {
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
  return (
    
    <div className=" bg-white" >
      <div className='p-32'>
        <h2 className='text-center font-semibold text-customgreen'>Testimonial</h2>
      <h2 className="text-center text-4xl font-bold  ">Our Successful Students</h2>
      </div>
       <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}  // Set autoPlaySpeed to 3000 milliseconds (3 seconds)
        transitionDuration={500}
        >

{SliderData.map((value, i) => (
          <div key={i} className=" items-start w-9/12 mx-auto">
            <div className="bg-gray-200 rounded-lg shadow-lg p-6 items-start text-center">
            <div className='flex items-start gap-7 '>
              <img
                className="w-24 h-24  rounded-full "
                src={value.image}
      
              />
              <div className=''>
              <h3 className="text-xl font-semibold text-start mt-4">{value.name}</h3>
              <p className="text-sm text-gray-600">{value.position}</p>
              </div>
             </div>
             <div className='items-start text-start'>
              <p className="mt-4 text-gray-600 ">{value.text}</p>
              </div>
            </div>
          </div>
        ))}

        </Carousel>
    </div>
    
  )
}

export default Slider
