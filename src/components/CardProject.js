import React from 'react'
import { useState, useEffect } from 'react'

const CardProject = () => {

  const [level, setLevel] = useState(90);
  const [timeOnPremise, setTimeOnPremise] = useState(90);
  const [projectStatus, setprojectStatus] = useState("live");

  const monthWithOrWithoutS = timeOnPremise >= 0 && timeOnPremise <= 1 ? "month" : "months"


  return (
    <div className='relative my-5 border-2'>
      <span className='absolute top-0 px-2 bg-green-500 text-white text-center text-base'>
        1
      </span>
      <div className=' rounded  p-7 '>
        <h2 className='font-bold text-xl'>Title</h2>
        <a href='www.google.com' className='text-blue-500 my-12 text-sm hover:underline'>google.com</a>
        <div className='relative rounded-full w-full h-3 p-2 bg-gray-200 my-2'>
          <span style={ { width : `${level}%`} } className='rounded-full h-3 bg-red-400 p-2 absolute left-0 top-0 max-w-full flex items-center justify-center text-xs text-white'>{projectStatus}</span>
        </div>
        <p className='py-2'>lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
    </div>
        <div className='border-collapse bg-gray-100 p-4 text-sm text-gray-600'>
        <p className='whitespace-pre-line'>Last updated {timeOnPremise} {monthWithOrWithoutS} ago</p>
        </div>
    </div>
    
    
  )
}

export default CardProject