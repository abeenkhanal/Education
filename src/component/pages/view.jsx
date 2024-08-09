import React, { useState } from 'react'
import image from "../../../public/sliderprofile.jpg"
import image1 from "../../../public/recent1.jpg"
import image2 from "../../../public/hello.jpg"
import image3 from "../../../public/contact.jpg"
import image4 from "../../../public/blog1.jpg"
import image5 from "../../../public/recent2.jpg"
const ViewData = [

    {
        image: image,
        name: "img1"

    },
    {
        image: image2,
        name: "img2"

    },
    {
        image: image3,
        name: "img3"

    },

    {
        image: image4,
        name: "img4"


    },
    {
        image: image5,
        name: "img5"

    },
    {
        image: image,
        name: "img6"

    },
    {
        image: image2,
        name: "img7"

    },
    {
        image: image3,
        name: "img8"

    },

    {
        image: image4,
        name: "img9"

    },
    {
        image: image5,
        name: "img10"

    },

]
const View = () => {
    const [lastindex, setlastindex]=useState(3)
    
    return (
        <div className='bg-white  pt-48 grid grid-cols-4 gap-6 px-44'>

            {ViewData.slice(0,lastindex).map((val, i) => {
                return (
                    <div className='bg-white mx-auto h-full w-full  border '>
                        <div className='h-96 '>
                            <img key={i} src={val.image} alt="" className='h-full object-cover  w-full'/>
                        </div>
                        <div className='justify-center flex bg-slate-300'>
                            <h1 key={i}>{val.name}</h1>
                        </div>
                       
                    </div>
                )
            })

            }
             <div className='pt-80'>
                            <button onClick={()=>{
                                setlastindex(lastindex+3)
                            }} className='bg-customgreen p-3  rounded'>viewmore</button>
                        </div>

        </div>
    )
}




export default View
