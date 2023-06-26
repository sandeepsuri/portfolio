"use client"
import React, { useState } from 'react'
import Image from 'next/image'

//Logos
import Adobe from '../assets/adobe.png'
import Github from '../assets/github-1.png'
import Google from '../assets/google.png'
import HTML5 from '../assets/html.png'
import NodeJS from '../assets/java-script.png'
import ReactJS from '../assets/react.png'
import Tailwind from '../assets/tailwind-css.png'

export const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4'>My Full-Stack Experience</p>
                    <p className='py-4'>+ other tools I'm experienced in</p>
                </div>
   
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md rounded-lg shadow-[#67696b] hover:scale-110 duration-500'>
                        <Image className='w-20 mx-auto' src={HTML5} alt='HTML5 Logo' />
                        <p className='py-4'>HTML 5</p>
                    </div>
                    <div className='shadow-md rounded-lg shadow-[#67696b] hover:scale-110 duration-500'>
                        <Image className='w-20 mx-auto' src={NodeJS} alt='Node.js Logo' />
                        <p className='py-4'>Node JS</p>
                    </div>
                    <div className='shadow-md rounded-lg shadow-[#67696b] hover:scale-110 duration-500'>
                        <Image className='w-20 mx-auto' src={ReactJS} alt='React Logo' />
                        <p className='py-4'>React JS + React Native</p>
                    </div>
                    <div className='shadow-md rounded-lg shadow-[#67696b] hover:scale-110 duration-500'>
                        <Image className='w-20 mx-auto color-white' src={Tailwind} alt='Tailwind Logo' />
                        <p className='py-4'>Tailwind CSS</p>
                    </div>
                    <div className='shadow-md rounded-lg shadow-[#67696b] hover:scale-110 duration-500'>
                        <Image className='w-20 mx-auto color-white' src={Google} alt='Google Logo' />
                        <p className='py-4'>Google Cloud Platform</p>
                    </div>
                    <div className='shadow-md rounded-lg shadow-[#67696b] hover:scale-110 duration-500'>
                        <Image className='w-20 mx-auto color-white' src={Github} alt='Github Logo' />
                        <p className='py-4'>Github</p>
                    </div>
                    <div className='shadow-md rounded-lg shadow-[#67696b] hover:scale-110 duration-500'>
                        <Image className='w-20 mx-auto color-white' src={Adobe} alt='Github Logo' />
                        <p className='py-4'>Adobe Experience Platform</p>
                    </div>
                </div>
            </div>
        </div>
    )
}