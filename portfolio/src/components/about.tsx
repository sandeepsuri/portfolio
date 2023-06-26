"use client"
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const About = () => {
    return (
        <div name='about' className='w-full h-screen text-gray-300 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className="sm:text-right pb-8 pl-4">
                        <p className='text-4xl font-bold inline border-b-4'>About</p>
                    </div>
                    <div>
                    </div>
                </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Please feel free to take a look around my site.</p>
                    </div>
                    <div>
                        <p>
                        Experienced and accomplished Full Stack Developer skilled in JavaScript, TypeScript, and React. 
                        Proven track record of delivering exceptional web application solutions. 
                        Strong problem-solving abilities and focus on scalability. Proficient in implementing innovative 
                        solutions and developing automated QA programs. Achieved cost savings and provided seamless user 
                        experiences through analytics platforms. Excellent communication skills and collaborative mindset. 
                        Committed to delivering projects on-time and within budget. Ready to drive transformative innovation 
                        and achieve strategic objectives.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}