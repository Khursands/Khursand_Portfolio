import React from 'react'

const Projects = () => {
  return (
    <div name='projects' className='w-full bg-[#0a192f] text-gray-300 py-8'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
          <p className='py-4'>Showcasing my contributions to industry-leading platforms that serve millions of users</p>
        </div>

        <div className='grid sm:grid-cols-2 gap-8'>
          {/* Zameen CRM PropForce */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center text-center items-center mx-auto p-6 h-[350px] bg-gradient-to-r from-gray-800 to-gray-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-green-800 transition-all duration-300'>
            <div className='opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider mb-4 block'>
                Zameen CRM - PropForce
              </span>
              <div className='text-center'>
                <p className='text-sm text-gray-200 px-2 mb-4 leading-relaxed'>
                  Pakistan's #1 real estate management system with cloud-based CRM, affiliate network platform serving 8,000+ members, automated lead management, and comprehensive property lifecycle tracking.
                </p>
                <div className='flex flex-wrap justify-center gap-2'>
                  <span className='inline-block bg-green-600 group-hover:bg-white group-hover:text-green-600 text-white px-3 py-1 rounded-full text-xs transition-all duration-300'>React</span>
                  <span className='inline-block bg-green-600 group-hover:bg-white group-hover:text-green-600 text-white px-3 py-1 rounded-full text-xs transition-all duration-300'>Node.js</span>
                  <span className='inline-block bg-green-600 group-hover:bg-white group-hover:text-green-600 text-white px-3 py-1 rounded-full text-xs transition-all duration-300'>Web Platform</span>
                </div>
              </div>
            </div>
          </div>

          {/* OLX Pakistan */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center text-center items-center mx-auto p-6 h-[350px] bg-gradient-to-r from-gray-800 to-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300'>
            <div className='opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider mb-4 block'>
                OLX Pakistan Web Platform
              </span>
              <div className='text-center'>
                <p className='text-sm text-gray-200 px-2 mb-4 leading-relaxed'>
                  Pakistan's biggest online marketplace with 30M+ downloads, 3M+ listings, and 5M unique monthly visitors. Comprehensive e-commerce web platform covering real estate, fashion, electronics, and services.
                </p>
                <div className='flex flex-wrap justify-center gap-2'>
                  <span className='inline-block bg-blue-600 group-hover:bg-white group-hover:text-blue-600 text-white px-3 py-1 rounded-full text-xs transition-all duration-300'>React</span>
                  <span className='inline-block bg-blue-600 group-hover:bg-white group-hover:text-blue-600 text-white px-3 py-1 rounded-full text-xs transition-all duration-300'>Marketplace</span>
                  <span className='inline-block bg-blue-600 group-hover:bg-white group-hover:text-blue-600 text-white px-3 py-1 rounded-full text-xs transition-all duration-300'>Web App</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='pt-8 text-center'>
          <p className='text-lg text-[#8892b0]'>
            These platforms collectively serve millions of users across Pakistan, demonstrating my ability to work on large-scale applications with complex business logic, real-time data processing, and exceptional user experiences.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects