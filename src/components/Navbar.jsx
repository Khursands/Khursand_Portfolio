import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin, FaFacebook, FaTwitter} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import k_icon from '../assets/k_icon.jpg'
import {Link} from 'react-scroll'
const Navbar = () => {
  const [nav,setNav] =useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src= {k_icon} alt = 'Logo Image' style= {{width:'50px'}}/>
        </div>
      <ul className='hidden md:flex'>
        <li><Link to="home" spy={true} offset={5} smooth={true} duration={500} >
          Home
        </Link></li>
        <li><Link to="about" spy={true}  offset={10} smooth={true} duration={500} >
          About
        </Link></li>
        <li><Link to="skills" spy={true} offset={-120} smooth={true} duration={500} >
          Skills
        </Link></li>
        <li><Link to="contact" spy={true} offset={-100} smooth={true} duration={500} >
          Contact
        </Link></li>
      </ul>
    <div onClick={handleClick} className='md:hidden z-10'> 
        {!nav ? <FaBars/>: <FaTimes/>} 
    </div>
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center item-center'}>
        <li className='py-6 text-4xl'>
          <li><Link onClick={handleClick} to="home" spy={true} offset={5} smooth={true} duration={500} >
          Home
        </Link></li>
        </li>
        <li className='py-6 text-4xl'>
          <li><Link onClick={handleClick} to="about" spy={true} offset={10} smooth={true} duration={500} >
          About
        </Link></li>
        </li>
        <li className='py-6 text-4xl'>
          <li><Link onClick={handleClick} to="skills" spy={true} offset={-120} smooth={true} duration={500} >
          Skills
        </Link></li>
        </li>
        <li className='py-6 text-4xl'>
          <li><Link onClick={handleClick} to="contact" spy={true} offset={-100} smooth={true} duration={500} >
          Contact
        </Link></li>
        </li>
    </ul>
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
    <ul>
      <li onClick={handleClick} className='w-[160px] h-[60px] flex justfy-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
        <a  className='flex justify-between items-center w-full text-gray-300'href="https://www.linkedin.com/in/khursand-sohail-76a80a23a">
          LinkedIn<FaLinkedin size={30}/>
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justfy-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/Khursands">
          Github<FaGithub size={30}/>
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justfy-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#223a93]'>
        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.facebook.com/khursand.sohail.18">
          Facebook<FaFacebook size={30}/>
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justfy-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6f82c2]'>
        <a className='flex justify-between items-center w-full text-gray-300' href="https://twitter.com/khursand_sohail">
          Twitter<FaTwitter size={30}/>
        </a>
      </li>
    </ul>
    </div>
    </div>
  )
}
export default Navbar