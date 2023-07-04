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
                Hi, I'm Khursand, nice to meet you. Please have a look around.
              </p>
            </div>
            <div>
              <p>
                I am passionate about building excellent software that improves the lives of those around me.
                I am eager to learn new technologies and frameworks along with new languages reaching out in market.
                What would you do if you had such a software expert available at your fingerprints? 
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

