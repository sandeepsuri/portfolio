/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Profile from '../assets/profile.png'
import Image from 'next/image'
import { Link } from 'react-scroll'

//Icons and Logos
import { 
    FaBars, 
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaLink,
    FaGit
} from 'react-icons/fa'
import { 
    BiDetail,
    BiHomeAlt, 
    BiUser
} from 'react-icons/bi'
import { GiGamepadCross } from 'react-icons/gi'
import { HiOutlineMailOpen } from 'react-icons/hi'
import PSLogo from '../assets/logos/playstation.svg'
import XboxLogo from '../assets/logos/xbox.svg'
import NintendoLogo from '../assets/logos/nintendo.svg'

export const Navbar = () => {
    const [menuClick, setMenuClick] = useState(false)
    const [logoCycle, setLogoCycle] = useState(0)
    const logos = [PSLogo, XboxLogo, NintendoLogo]
    const logoColour = ['#0172D0', '#2ca243', '#dd2020']
    const [logoColourCycle, setLogoColourCycle] = useState(logoColour[0])
    const currentLogo = logoCycle % logos.length

    const toggleMenu = () => {
        setMenuClick(!menuClick)
        if(!menuClick) {
            const nextLogo = (logoCycle + 1) % logos.length
            setLogoCycle(nextLogo)
            setLogoColourCycle(logoColour[currentLogo])
        }
    }

    const [navbar, setNavbar] = useState(false)
    const hamburgerClick = () => setNavbar(!navbar)

    return(
        <div className="flex justify-center">
            <div className={`fixed flex justify-between items-center px-4 my-10 transition-all duration-500 
                ${ menuClick ? 'w-[400px] h-[80px]' : 'w-[80px] h-[80px]' }
                text-gray-300 rounded-full cursor-pointer`}
                onClick={toggleMenu}
                style={{
                    ...(menuClick ? {} : { 
                        backgroundImage: `url(${logos[logoCycle].src})`, 
                        backgroundSize: 'contain', 
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: logoColourCycle
                    }),
                    backgroundColor: logoColourCycle
                }}
            >
                {/* Nav Menu - Desktop */}
                {menuClick ? (
                <ul className='hidden md:flex items-center flex-grow justify-center'>
                    <li className=''>
                        <Link to='home' smooth={true} duration={300}><BiHomeAlt size={30} /></Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={300}><BiUser size={30} /></Link>
                    </li>
                    <li>
                        <Link to='skills' smooth={true} duration={300}><BiDetail size={30} /></Link>
                    </li>
                    <li>
                        <Link to='project' smooth={true} duration={300}><GiGamepadCross size={30} /></Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={300}><HiOutlineMailOpen size={30} /></Link>
                    </li>
                </ul>
                ) : null}

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

    <div className="flex justify-center">
            <div className='fixed w-max[400px] h-[80px] flex justify-between items-center px-4 my-10 bg-[#0a192f] text-gray-300 rounded-full' data-te-ripple-init data-te-ripple-color="light">
                {/* Nav Menu - Desktop */}
                <ul className='hidden md:flex items-center flex-grow justify-center'>
                    <li className=''>
                        <Link to='home' smooth={true} duration={300}><BiHomeAlt size={30} /></Link>
                    </li>

                    <li>
                        <Link to='about' smooth={true} duration={300}><BiUser size={30} /></Link>
                    </li>
                    <li>
                        <Link to='skills' smooth={true} duration={300}><BiDetail size={30} /></Link>
                    </li>
                    <li>
                        <Link to='project' smooth={true} duration={300}><GiGamepadCross size={30} /></Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={300}><HiOutlineMailOpen size={30} /></Link>
                    </li>
                </ul>
            </div>
        </div>