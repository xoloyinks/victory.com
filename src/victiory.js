import React from 'react'
import {FaBars} from 'react-icons/fa';
import {BsFillMoonFill} from 'react-icons/bs'
import About from './pages/about';
export default function Porfolio() {
  return (
    <>
      <section className='w-screen'>
          <nav className='flex items-center justify-between fixed w-full font-semibold px-5 py-5 text-xl'>
            <div className='logo text-2xl'>Kolawole</div>
            <div className='flex justify-between w-2/12'><span><BsFillMoonFill /></span><span><FaBars /></span></div>
          </nav>
          <About />
      </section>
    </>
  )
}
