import React from 'react'
import { useState, useEffect } from 'react'

const CardProject = () => {

  const [level, setLevel] = useState();
  const [timeOnPremise, setTimeOnPremise] = useState();


  return (
    <div className='relative my-5 border-2'>
      <span className='absolute top-0 px-2 bg-green-500 text-white text-center text-base'>
        1
      </span>
      <div className=' rounded  p-7 '>
        <h2 className='font-bold text-xl'>Title</h2>
        <a href='gogle.com' className='text-blue-500 my-12 text-sm hover:underline'>google.com</a>
        <div className='rounded-full w-full h-3 bg-green-500 my-2'></div>
        <p className='py-2'>lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
    </div>
        <div className='border-collapse bg-gray-100 p-4 text-sm text-gray-600'>
          <p className='whitespace-pre-line'>Last updated 3 months ago</p>
        </div>
    </div>
    
    
  )
}

export default CardProject