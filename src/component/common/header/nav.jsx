import React from 'react'

const Nav = () => {
    return (
        <>
        <div className='flex justify-between bg-gray-400 h-16 text-white'>
            <ul className='flex gap-16 justify-center items-center font-bold cursor-pointer '>
                <li>Home</li>
                <li>All Course</li>
                <li>About</li>
                <li>Team</li>
                <li>Pricing</li>
                <li>Journal</li>
                <li>Contact</li>
            </ul>
            <div className='bg-green-300 items-center font-semibold flex '>
            <h1>GET CERTIFICATE</h1>
            </div>
            </div>
            </>
    )
}

export default Nav
