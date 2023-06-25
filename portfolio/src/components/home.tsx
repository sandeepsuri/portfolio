"use client"
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h1 className='text-4xl sm:text-7xl font-bold text-gray-300 py-4'>Welcome to my site!</h1>
                <p className='text-gray-400'>Hey, my name is Sandeep Suri and I'm a</p>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Full-Stack Developer</h2>
                <p className='text-gray-400 py-4 max-w-[700px]'>I’m also a Computer Engineer looking for an opportunity to apply my critical thinking skills 
                    to unique problems. I have excellent skills in web development and I’m passionate about 
                    developing innovative software. Currently, I have a desire for a career in software 
                    development.
                </p>

                <div>
                    <button className='text-white group border-2 rounded-lg px-6 py-3 my-2 flex items-center justify-center hover:bg-[#42546f] hover:border-[#42546f] duration-300'>
                        View Work
                        <span className='group-hover:rotate-90 group-hover:mt-[-10px] duration-300 inline-flex items-center'>
                        <HiArrowNarrowRight className='ml-2 transform origin-center'/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}