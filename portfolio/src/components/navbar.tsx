"use client"
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const hamburgerClick = () => setNavbar(!navbar)

    return(
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                Logo
            </div>

            {/* Nav Menu - Desktop */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills & Experience</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

            {/* Nav Menu - Hamburger, Hide for now*/}
            <div onClick={hamburgerClick} className='md:hidden z-10'>
                {!navbar ? <FaBars /> : <FaTimes />}
            </div>
            {/* Nav Menu - Mobile, Hide for now*/}
            <ul className={!navbar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'} >
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills and Experience</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
            {/* Social Icons */}
        </div>
    )
}