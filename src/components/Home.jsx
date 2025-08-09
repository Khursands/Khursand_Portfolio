import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
export default function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hello there! I'm </p>
            <h1 className='text-4xl sm:text-7xl text-[#ccd6f6]'> Khursand Sohail Iqbal</h1>
            <h2 className= 'text-4xl sm:text-7xl font-bold text-[#8892b0]'> I craft digital experiences that matter.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a passionate full-stack developer who transforms ideas into powerful, scalable web applications. With expertise spanning from elegant frontend interfaces to robust backend architectures, I create solutions that not only look exceptional but perform flawlessly. Currently diving deep into modern frameworks and emerging technologies to stay at the forefront of web development.
             </p>
             <div>
                <Link to="about" smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        View Details
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3'></HiArrowNarrowRight>
                        </span>
                    </button>
                </Link>
             </div>
        </div>
    </div>
  )
}
