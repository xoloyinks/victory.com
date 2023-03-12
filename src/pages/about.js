import React from 'react'

export default function About() {
  return (
    <>
        <section className=' px-5 w-screen h-screen text-black'>
        
            <div className='z-50 text-5xl font-semibold pt-28 leading-[60px]'>
                <pre>
                    Hi! <br />
                    I'm Kolawole
                </pre>
            </div>
            <br />
            <div className='text-lg'>
                <p>I build Fast, Generic, and Responsive Websites.</p>
            </div>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='absolute z-20'>
                <path fill="#CBD5E1" d="M30.9,-46.6C42.1,-41,54.4,-35.7,59.7,-26.6C64.9,-17.4,63.1,-4.3,58.5,6.5C54,17.3,46.8,25.8,40.2,36.6C33.6,47.5,27.6,60.7,17.4,67.4C7.1,74.2,-7.5,74.6,-19.5,69.6C-31.5,64.6,-41,54.2,-49.5,43.4C-58,32.7,-65.5,21.6,-68.7,9C-71.9,-3.6,-70.9,-17.8,-67,-32.4C-63.2,-47.1,-56.5,-62.3,-44.8,-67.7C-33.2,-73,-16.6,-68.6,-3.3,-63.4C9.9,-58.2,19.8,-52.2,30.9,-46.6Z" transform="translate(100 100)" />
            </svg>
        </section>
    </>
  )
}
