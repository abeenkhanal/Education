import React from 'react'
import Carousel from "react-multi-carousel";

const SliderData = [
  {
    name: "Roger Scott",
    position: "Marketing Manager",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Roger Scott",
    position: "Marketing Manager",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Roger Scott",
    position: "Marketing Manager",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "https://via.placeholder.com/150"
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
    <div className='bg-red-500 '>
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
          <div key={i} className="p-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                className="w-24 h-24 rounded-full mx-auto"
                src={value.image}
                alt={value.name}
              />
              <h3 className="text-xl font-semibold mt-4">{value.name}</h3>
              <p className="text-sm text-gray-600">{value.position}</p>
              <p className="mt-4 text-gray-600">{value.text}</p>
            </div>
          </div>
        ))}

        </Carousel>
    </div>
  )
}

export default Slider
