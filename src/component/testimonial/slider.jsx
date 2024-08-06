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
      <div className='p-8 md:p-16 lag:p-32'>
        <h2 className='text-center font-semibold text-customgreen text-lg md:text-xl lg:text-2xl'>Testimonial</h2>
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold  ">Our Successful Students</h2>
      </div>
       <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}  // Set autoPlaySpeed to 3000 milliseconds (3 seconds)
        transitionDuration={500}
        className='w-11/12 mx-auto'
        >

{SliderData.map((value, i) => (
          <div key={i} className=" items-start w-full md:w-10/12 lg:w-11/12 mx-auto">
            <div className="bg-gray-200 rounded-lg shadow-lg p-6 md:p-8 lg:p-10  items-start text-center">
            <div className='flex flex-col md:flex-row items-center  md:items-start gap-4 md:gap-7 '>
              <img
                className="w-24 h-24  rounded-full "
                src={value.image}
      
              />
              <div className='text-center md:text-left'>
              <h3 className="text-lg md:text-xl lg:tex-2xl font-semibold text-start mt-4">{value.name}</h3>
              <p className="text-sm  text-gray-600">{value.position}</p>
              </div>
             </div>
             <div className='items-start text-start'>
              <p className="mt-4text-sm md:text-base text-gray-600 ">{value.text}</p>
              </div>
            </div>
          </div>
        ))}

        </Carousel>
    </div>
    
  )
}

export default Slider
