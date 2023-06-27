import React from 'react'

export const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen flex justify-center items-center p-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black' >
            <form action="" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300'>Contact</p>
                    <p className='py-4 text-gray-300'>Want to contact me? Shoot me an email by submitting this form!</p>
                </div>
                <input className='p-2 bg-[#bac4e5]' type='text' placeholder='Full Name' name='name' />
                <input className='my-4 p-2 bg-[#bac4e5]' type='email' placeholder='Email' name='email' />
                <textarea className='bg-[#bac4e5]' name="message" rows='10' placeholder='Write Your Message Here!'></textarea>
                <button className='px-3 py-3 rounded-lg my-8 mx-auto flex items-center text-white border-2 hover:bg-[#137315] hover:border-[#137315] duration-300'>Let's Network!</button>
            </form>
        </div>
    )
}