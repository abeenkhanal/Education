import React from 'react'

const Nav = () => {
    return (
        <>
            <div className='flex justify-between bg-gray-400 h-16 text-white'>
                <ul className='flex gap-16 justify-center items-center font-bold  cursor-pointer '>
                    <li className='cursor-pointer  hover:text-gray-500'>Home</li>
                    <li className='cursor-pointer  hover:text-gray-500'>All Course</li>
                    <li className='cursor-pointer  hover:text-gray-500'>About</li>
                    <li className='cursor-pointer  hover:text-gray-500'>Team</li>
                    <li className='cursor-pointer  hover:text-gray-500'>Pricing</li>
                    <li className='cursor-pointer  hover:text-gray-500'>Journal</li>
                    <li className='cursor-pointer  hover:text-gray-500'>Contact</li>
                </ul>
                <div className=' bg-green-300 items-center font-semibold flex justify-center clip-polygon w-[240px] '>
                    <h1>GET CERTIFICATE</h1>
                </div>
            </div>
        </>
    )
}

export default Nav
