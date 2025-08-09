import React from 'react'

const Experience = () => {
  return (
    <div name='experience' className='w-full bg-[#0a192f] text-gray-300 py-16'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Professional Experience</p>
          <p className='py-4'>My journey at one of the Middle East's leading technology companies</p>
        </div>

        <div className='relative'>
          {/* Timeline Line */}
          <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-pink-600'></div>
          
          {/* Current Position */}
          <div className='relative flex items-start mb-12'>
            <div className='flex-shrink-0 w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center z-10 border-4 border-[#0a192f]'>
              <span className='text-white font-bold text-sm'>SE</span>
            </div>
            <div className='ml-8 bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg flex-grow hover:from-pink-800 hover:to-pink-900 transition-all duration-300'>
              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4'>
                <h3 className='text-2xl font-bold text-white'>Software Engineer</h3>
                <span className='inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>Current</span>
              </div>
              <div className='flex items-center mb-4'>
                <span className='text-pink-400 font-semibold mr-2'>Dubizzle Labs</span>
                <span className='text-gray-400'>•</span>
                <span className='text-gray-400 ml-2'>Feb 2025 - Present</span>
              </div>
              <p className='text-gray-300 leading-relaxed mb-4'>
                Currently contributing to Dubizzle Group's cutting-edge technology stack that serves 167+ million monthly users across 25 cities. 
                Working with a global team of 500+ engineers to build scalable solutions using React, Next, and microservices architecture.
              </p>
              <div className='flex flex-wrap gap-2'>
                <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-xs'>React</span>
                <span className='bg-yellow-600 text-white px-3 py-1 rounded-full text-xs'>Next</span>
                <span className='bg-green-600 text-white px-3 py-1 rounded-full text-xs'>Microservices</span>
                <span className='bg-purple-600 text-white px-3 py-1 rounded-full text-xs'>REST APIs</span>
              </div>
            </div>
          </div>

          {/* Previous Position */}
          <div className='relative flex items-start'>
            <div className='flex-shrink-0 w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center z-10 border-4 border-[#0a192f]'>
              <span className='text-white font-bold text-xs'>ASE</span>
            </div>
            <div className='ml-8 bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg flex-grow hover:from-blue-800 hover:to-blue-900 transition-all duration-300'>
              <h3 className='text-2xl font-bold text-white mb-4'>Associate Software Engineer</h3>
              <div className='flex items-center mb-4'>
                <span className='text-pink-400 font-semibold mr-2'>Dubizzle Labs</span>
                <span className='text-gray-400'>•</span>
                <span className='text-gray-400 ml-2'>Mar 2024 - Feb 2025</span>
              </div>
              <p className='text-gray-300 leading-relaxed mb-4'>
                Started my professional journey at the Arab World's only homegrown unicorn business. Contributed to building and maintaining 
                the globally unique single tech stack that powers classifieds platforms across 10 countries. Gained expertise in modern web 
                technologies while working in an environment certified as "Great Place to Work" across three countries.
              </p>
              <div className='flex flex-wrap gap-2'>
                <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-xs'>Frontend Development</span>
                <span className='bg-red-600 text-white px-3 py-1 rounded-full text-xs'>Testing</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience