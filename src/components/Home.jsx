import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
export default function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl text-[#ccd6f6]'> Khursand Sohail Iqbal</h1>
            <h2 className= 'text-4xl sm:text-7xl fond-bold text-[#8892b0]'> I am a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack developer specializing in building (and occasionally designing).
             Currently focusing on building responsive full-stack web applications.
             </p>
             <div>
                <button className='text-white border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Details
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'></HiArrowNarrowRight>
                    </span>
                </button>
             </div>
        </div>
    </div>
  )
}
