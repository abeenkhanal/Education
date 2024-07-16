import React from 'react'



const Homepage = () => {
    return (

        <div className='absolute top-0 left-0 bg-primary right-0 bottom-0 flex items-start justify-center h-screen   w-full '>
            <div className=' h-full w-10/12 flex flex-col gap-6 justify-center '>
                <h2 className='font-bold text-gray-00'>WELCOME TO ACADEMIA</h2>
                <h1 className='font-bold text-4xl w-4/12 text-white '>Best Online Education Expertise </h1>
                <p className='w-5/12'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                <div className='gap-4 flex'>
                    <button className='bg-customgreen px-7 py-4 text-sm font-semibold text-white rounded'>GET STARTED NOW!</button>
                    <button className='bg-white px-7 py-4 text-sm font-semibold text-customgreen  rounded'>VIEW COURSE!</button>

                </div>
            </div>


        </div>
    )
}

export default Homepage
