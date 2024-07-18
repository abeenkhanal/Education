import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className='absolute top-28 w-10/12 flex z-10 bg-opacity-10 bg-red-500 justify-between h-16 text-white'>
                <ul className='m-3 flex gap-16 justify-center items-center font-bold  cursor-pointer'>
                    <li className='cursor-pointer  hover:text-gray-500'>Home</li>
                    <li className='cursor-pointer  hover:text-gray-500'>All Course</li>
                    <li className='cursor-pointer  hover:text-gray-500'>About</li>
                    <li className='cursor-pointer  hover:text-gray-500'>Team</li>
                    <li className='cursor-pointer  hover:text-gray-500'>Pricing</li>
                    <li className='cursor-pointer  hover:text-gray-500'>Journal</li>
                    <li className='cursor-pointer  hover:text-gray-500'>Contact</li>
                </ul>

                <div className='flex justify-center items-center bg-opacity-50 bg-gray-600  font-bold w-[240px]'>
                    <h1>GET CERTIFICATE</h1>
                </div>
            </div>
        </>
    )
}

export default Nav
