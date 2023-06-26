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
        <div name='skills' className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
            <div>
                <div>
                    <p>My Full-Stack Experience</p>
                    <p>Along with other tools I'm experienced in</p>
                </div>
            </div>
            <div>
                <div>
                    <Image src={HTML5} alt='HTML5 Logo' />
                    <p>HTML 5</p>
                </div>
            </div>
        </div>
    )
}