import React from 'react';
import skill from "./styles/images/icons8-skills.png"

export default function Skill() {
  return (
    <>
        <section className='w-screen h-screen bg-slate-400 px-5 py-5'>
            <h1 className='text-3xl text-white flex items-center  gap-4'>
                My Skills <span className='font-bold'> <img src={skill} alt="" className='w-[40px] animate-bounce'/></span>
            </h1>
        </section>
    </>
  )
}
