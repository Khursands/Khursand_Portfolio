import React from 'react'
import JAVASCRIPT from '../assets/javascript.png'
import CSS from '../assets/css.png'
import REACT from '../assets/react.png'
import TAILWIND from '../assets/tailwind.png'
import HTML from '../assets/html.png'
import Github from '../assets/github.png'
import BOOTSTRAP from '../assets/bootstrap.png'

const Skills = () => {
  return (
    <div name='skills' className=' bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
            <p className='py-4'>These are the cutting-edge technologies and tools I've mastered to craft exceptional digital experiences</p>            
        </div>
        <div className='max-w-[1000px] mx-auto grid grid-cols-3 sm:grid-cols-6 gap-6 text-center py-8 px-4'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                <img className='w-12 mx-auto' src={HTML} alt='HTML ICON'/>
                <p className='my-2 text-sm'>HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                <img className='w-12 mx-auto' src={CSS} alt='CSS ICON'/>
                <p className='my-2 text-sm'>CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                <img className='w-12 mx-auto' src={JAVASCRIPT} alt='JavaScript ICON'/>
                <p className='my-2 text-sm'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                <img className='w-12 mx-auto' src={REACT} alt='React ICON'/>
                <p className='my-2 text-sm'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                <img className='w-12 mx-auto' src={TAILWIND} alt='Tailwind ICON'/>
                <p className='my-2 text-sm'>Tailwind</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                <img className='w-12 mx-auto' src={Github} alt='Github ICON'/>
                <p className='my-2 text-sm'>Github</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                <img className='w-12 mx-auto' src={BOOTSTRAP} alt='Bootstrap ICON'/>
                <p className='my-2 text-sm'>Bootstrap</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                <div className='w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-xs font-bold mx-auto'>
                    Next
                </div>
                <p className='my-2 text-sm'>Next.js</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                <div className='w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-bold mx-auto'>
                    JIRA
                </div>
                <p className='my-2 text-sm'>Jira</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
                <div className='w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center text-xs font-bold mx-auto'>
                    Jest
                </div>
                <p className='my-2 text-sm'>Jest</p>
            </div>
        </div>
    </div>
  )
}

export default Skills