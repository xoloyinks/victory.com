import React from 'react'
import {FaBars} from 'react-icons/fa';
import {BsFillMoonFill} from 'react-icons/bs'
import About from './pages/about';
import Skill from './pages/skill';
export default function Porfolio() {
  return (
    <>
      <section className='w-screen relative'>
      
          <nav className='z-50 flex items-center text-black justify-between fixed backdrop-blur-xl bg-white/30 w-full px-5 py-5'>
            <div className='logo text-2xl'>Kolawole</div>
            <div className='flex justify-between w-2/12 text-xl'><span><BsFillMoonFill /></span><span><FaBars /></span></div>
          </nav>
          <About />
          <Skill />
      </section>
    </>
  )
}
