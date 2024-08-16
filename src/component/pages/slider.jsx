import React, { useEffect } from 'react'
import image from "../../../public/sliderprofile.jpg"
import image1 from "../../../public/recent1.jpg"
import image2 from "../../../public/hello.jpg"
import image3 from "../../../public/contact.jpg"
import image4 from "../../../public/blog1.jpg"
import image5 from "../../../public/recent2.jpg"
import { useState } from 'react'


const SliderData = [
    {
        image: image,

    },
    {
        image: image2,

    },
    {
        image: image3,

    },

    {
        image: image4,

    },
    {
        image: image5,

    },
    {
        image: image,

    },
    {
        image: image2,

    },
    {
        image: image3,

    },

    {
        image: image4,

    },
    {
        image: image5,

    },

]

const Slider = () => {
    const [index, setindex] = useState(0)
   useEffect(() => {
    let interval=setTimeout(() => {
        nextDa()
    }, 2000);
   
     return () => {
       clearTimeout(interval)
     }                                                 
   }, [index])
   

    const nextDa=()=>{
        if (index == SliderData.length - 1) {
            setindex(0)
        }
        else {
            setindex(index + 1)
        }

    }
    return (

        <div className=' relative  h-screen z-50 bg-white'>

            {SliderData.map((value, i) => {
                    return (
                        <div className={`${i==index?'translate-x-0':'-translate-x-full'} transition-all absolute top-0 z-50 duration-700 ease-in-out delay-75`}>
                            <img className='h-[90vh] w-[200vh] object-cover' key={i} src={value.image} alt="" />

                        </div>
                    )

            })}

            
            <div className='flex gap-32  absolute top-0 left-0 right-0 bottom-0 h-full w-full items-center   z-50 justify-between  '>
                <button  onClick={() => {
                    if (index == 0) {
                        setindex(SliderData.length -1)
                    }
                    else {
                        setindex(index -1)
                    }
                }} className='bg-red-300 w-fit h-fit p-4'>
                    PREVIOUS
                </button>
                <button onClick={() => {
                  nextDa()
                }} className='bg-red-300 w-fit h-fit p-4'>
                    NEXT
                </button>
            </div>
        </div>
    )
}

export default Slider
