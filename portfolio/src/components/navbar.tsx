"use client"
import React, { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Profile from '../assets/profile.png'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { 
    FaBars, 
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaLink,
    FaGit
} from 'react-icons/fa'

export const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const hamburgerClick = () => setNavbar(!navbar)

    return(
        <div className="flex justify-center">
            <div className='fixed w-max[400px] h-[80px] flex justify-between items-center px-4 my-10 bg-[#0a192f] text-gray-300 border-b-4'>
                {/* Nav Menu - Desktop */}
                <ul className='hidden md:flex items-center flex-grow justify-center'>
                    <li>
                        <Link to='home' smooth={true} duration={300}>Home</Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={300}>About</Link>
                    </li>
                    <li>
                        <Link to='skills' smooth={true} duration={300}>Skills & Experience</Link>
                    </li>
                    <li>
                        <Link to='project' smooth={true} duration={300}>Projects</Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={300}>Contact</Link>
                    </li>
                </ul>

                {/* Nav Menu - Hamburger, Hide for now*/}
                <div onClick={hamburgerClick} className='md:hidden z-10'>
                    {!navbar ? <FaBars /> : <FaTimes />}
                </div>
                {/* Nav Menu - Mobile, Hide for now*/}
                <ul className={!navbar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'} >
                    <li className='py-6 text-4xl'>
                        <Link onClick={hamburgerClick} to='home' smooth={true} duration={300}>Home</Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={hamburgerClick} to='about' smooth={true} duration={300}>About</Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={hamburgerClick} to='skills' smooth={true} duration={300}>Skills & Experience</Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={hamburgerClick} to='project' smooth={true} duration={300}>Projects</Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={hamburgerClick} to='contact' smooth={true} duration={300}>Contact</Link>
                    </li>
                </ul>
                {/* Social Icons */}
                <div className='hidden lg:flex fixed flex-col justify-center items-center bottom-0 left-0 w-full' >
                    <ul className='flex'>
                        <div className='w-[160px] h-[70px]'>
                            <li className='rounded-tl-lg flex justify-center items-center mt-10 hover:mt-[20px] duration-300 bg-[#0077B5]'>
                                <a className='flex flex-col justify-between items-center w-full text-gray-300' href='/'>
                                    <FaLinkedin size={30} />
                                    LinkedIn
                                </a>
                            </li>
                        </div>
                        <div className='w-[160px] h-[70px]'>
                            <li className='flex justify-center items-center mt-10 hover:mt-[20px] duration-300 bg-[#171515]'>
                                <a className='flex flex-col justify-between items-center w-full text-gray-300' href='/'>
                                    <FaGithub size={30} />
                                    Github
                                </a>
                            </li>
                        </div>
                        <div className='w-[160px] h-[70px]'>
                            <li className='flex justify-center items-center mt-10 hover:mt-[20px] duration-300 bg-[#F4B400]'>
                                <a className='flex flex-col justify-between items-center w-full text-black' href='/'>
                                    <HiOutlineMail size={30} color='black' />
                                    Email
                                </a>
                            </li>
                        </div>
                        <div className='w-[160px] h-[70px]'>
                            <li className='rounded-tr-lg flex justify-center items-center mt-10 hover:mt-[20px] duration-300 bg-[#D6D2C7]'>
                                <a className='flex flex-col justify-between items-center w-full text-black' href='/'>
                                    <BsFillPersonLinesFill size={30} color='black' />
                                    Resumé
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}