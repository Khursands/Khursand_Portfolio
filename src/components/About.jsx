import React from 'react'

export default function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols gap-8'>
          <div className='sm:text-right pb-8 pl-4'> 
            <p className='text-4xl font-bold inline border-b-4 border-pink-600' >About
            </p>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>
                Welcome to my digital realm. I'm Khursand, and I'm thrilled you're here exploring my journey.
              </p>
            </div>
            <div>
              <p>
                I'm driven by an unwavering passion for creating exceptional software solutions that make a meaningful impact on people's lives. From conceptualization to deployment, I approach every project with meticulous attention to detail, ensuring that each line of code serves a purpose. My expertise spans the entire development spectrum - crafting intuitive user interfaces, architecting scalable backends, and optimizing performance for seamless user experiences.
                <br/><br/>
                What sets me apart is that I'm more than just a developer - I'm a complete software craftsman. I don't just write code; I rigorously test it too. With extensive experience in Jest and test-driven development, I ensure every feature is bulletproof before it reaches production. Ready to turn your vision into reality? Let's collaborate and build something extraordinary together.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

