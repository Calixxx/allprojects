import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'


const Me = () => {
  return (
    <div className=' mt-7 md:flex items-center md:flex-row-reverse md:justify-center'>
        <div className='p-2 my-10'>
            <h1 className='Capitalize my-2 font-thin text-6xl'>Calix Monnet</h1>
            <p className='my-2 text-xl '>here is a public list of my projects and their advancement.</p>
            <p className='flex items-center'>
                <ArrowRightIcon className='w-5 h-5 mr-3 '/>
                <a href='#' className='text-blue-400 hover:underline'>My youtube chanel</a>
            </p>
            <p className='flex items-center'>
                <ArrowRightIcon className='w-5 h-5 mr-3 '/>
                <a href='#' className='text-blue-400 hover:underline'>My github</a>
            </p>
            <p className='flex items-center'>
                <ArrowRightIcon className='w-5 h-5 mr-3 '/>
                <a href = "mailto:calixmonnet@gmail.com" className='text-blue-400 hover:underline'>calixmonnet@gmail.com</a>
            </p>
        </div>
        <div className='w-full md:max-w-md  mr-4 my-4'>
            <img src='/img.jpeg' className='w-full h-auto rounded-2xl'/>
        </div>
    </div>
  )
}

export default Me