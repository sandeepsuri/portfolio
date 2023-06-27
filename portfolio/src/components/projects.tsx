"use client"
import React, { useState } from 'react'
import GameSite from '../assets/work/gameSite.jpg'
import AmazonLogo from '../assets/work/amazon.png'
import GameController from '../assets/work/game.png'
import Image from 'next/image'

export const Projects = () => {
    return (
       <div name='project' className='w-full md:h-screen text-gray-300 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4'>Work and Projects</p>
                    <p className='py-6'>Here are some of the personal projects I have worked on along with my previous work experience</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4' >
                    {/* Game Site Card */}
                    <div 
                    style={{ backgroundImage: `url(${GameSite.src})`}}
                    className='shadow-lg shadow-[#67696b] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Web Scraper Card */}
                    <div 
                    style={{ backgroundImage: `url(${AmazonLogo.src})`}}
                    className='shadow-lg shadow-[#67696b] bg-white group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Python Web Scraper
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Udemey Game Card */}
                    <div 
                    style={{ backgroundImage: `url(${GameController.src})`}}
                    className='shadow-lg shadow-[#67696b] bg-white group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Block Breacker using Unity 3D
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div> 
    )
}