import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'


const Me = () => {
  return (
    <div className='md:flex'>
        <div className='p-2 my-10'>
            <h1 className='text-2xl uppercase my-2'>Firstname</h1>
            <p className='my-2 '>here is a public list of my projects and their advancement.</p>
            <p className='flex items-center'>
                <ArrowRightIcon className='w-5 h-5 mr-3 '/>
                <a href='#' className='text-blue-400 hover:underline'>Youtube Chanel</a>
            </p>
            <p className='flex items-center'>
                <ArrowRightIcon className='w-5 h-5 mr-3 '/>
                <a href = "mailto:calixmonnet@gmail.com" className='text-blue-400 hover:underline'>calixmonnet@gmail.com</a>
            </p>
        </div>
        <div className='w-full'>
            <img src='/user.jpeg' className='w-full h-auto rounded-2xl'/>
        </div>
    </div>
  )
}

export default Me