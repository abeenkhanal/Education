import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Allcourse from '../../pages/allcourse';

const Nav = () => {
    return (
        <>
            <div className='absolute top-28 w-full hidden lg:flex z-10 bg-opacity-40  bg-gray-300  justify-between h-16 text-white '>
                <ul className='m-3 flex gap-16 justify-center items-center font-bold  cursor-pointer'>
                    <li className='cursor-pointer  hover:text-gray-500'><NavLink to={"/"}>Home</NavLink></li>
                    <li className='cursor-pointer  hover:text-gray-500'><NavLink to={"/Allcourse"}>All Course</NavLink></li>
                    <li className='cursor-pointer  hover:text-gray-500'><NavLink to={"/about"}>About</NavLink></li>
                    <li className='cursor-pointer  hover:text-gray-500'><NavLink to={"/team"}>Team</NavLink></li>
                    <li className='cursor-pointer  hover:text-gray-500'><NavLink to={"/pricing"}>Pricing</NavLink></li>
                    <li className='cursor-pointer  hover:text-gray-500'><NavLink to={"/journal"}>Journal</NavLink></li>
                    <li className='cursor-pointer  hover:text-gray-500'><NavLink to={"/contact"}>Contact</NavLink></li>
                </ul>

                <div className='flex justify-center items-center   bg-customgreen font-bold w-[240px]'>
                    <h1>GET CERTIFICATE</h1>
                </div>
            </div>
        </>
    )
}

export default Nav
