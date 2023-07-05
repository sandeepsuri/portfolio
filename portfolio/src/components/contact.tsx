/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState } from 'react'

export const Contact = () => {
    const[isLoading, setLoading] = useState(false)
    const[isSuccess, setSuccess] = useState(false)
    const[isError, setError] = useState(false)

    async function handleSubmit(event: any) {
        setLoading(true)
        event.preventDefault()

        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value)
        }

        try{ 
            const response = await fetch("/api/contact", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            if(response.ok) {
                setSuccess(true)
            }
            else {
                setError(true)
            }
        } catch(error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div id="contact" className='w-full h-screen flex justify-center items-center p-4' >
            <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 '>Contact</p>
                    <p className='py-4'>Want to contact me? Shoot me an email by submitting this form!</p>
                </div>
                <input className='p-2 bg-[#bac4e5]' type='text' placeholder='Full Name' id='name' required />
                <input className='my-4 p-2 bg-[#bac4e5]' type='email' placeholder='Email' id='email' required />
                <textarea className='bg-[#bac4e5]' id="message" rows={10} placeholder='Write Your Message Here!' maxLength={400} required ></textarea>

                {isLoading ? (

                    <button disabled type="button" className="px-3 py-3 rounded-lg my-8 mx-auto text-white bg-[#137315] hover:bg-[#0f5910] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#137315] dark:hover:bg-[#0f5910] dark:focus:ring-[#137315] inline-flex items-center">
                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                        </svg>
                        Sending...
                    </button>

                ): isSuccess ? (
                    <div className="px-3 py-3 my-8 mx-auto flex items-center text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                        <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium">Success alert!</span> Your email has been sent, looking forward to it!
                        </div>
                    </div>
                ): isError? (
                    <div className="px-3 py-3 my-8 mx-auto flex items-center text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium">Error!</span> Email was unable to send.
                        </div>
                    </div>
                ): (
                    <button className='px-3 py-3 rounded-lg my-8 mx-auto flex items-center border-2 hover:bg-[#137315] hover:border-[#137315] hover:text-white duration-300'>Let's Network!</button>
                )}
            </form>
        </div>
    )
}