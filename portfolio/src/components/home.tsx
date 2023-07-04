/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

export const Home = () => {
    return (
        <div id='home' className='w-full h-screen'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h1 className='text-4xl sm:text-7xl font-bold py-4'>Welcome to my site!</h1>
                <p className=''>Hey, my name is Sandeep Suri and I'm a</p>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Full-Stack Developer</h2>
                <p className=' py-4 max-w-[700px]'>I’m also a Computer Engineer looking for an opportunity to apply my critical thinking skills 
                    to unique problems. I have excellent skills in web development and I’m passionate about 
                    developing innovative software. Currently, I have a desire for a career in software 
                    development.
                </p>

                <div>
                    <Link to='about' smooth={true} duration={300}>
                        <button className='group border-2 rounded-lg px-6 py-3 my-2 flex items-center justify-center hover:bg-[#42546f] hover:border-[#42546f] hover:text-white duration-300'>
                            View Work
                            <span className='group-hover:rotate-90 group-hover:mt-[-10px] duration-300 inline-flex items-center'>
                            <HiArrowNarrowRight className='ml-2 transform origin-center'/>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}