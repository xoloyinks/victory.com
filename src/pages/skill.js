import React from 'react';
import skill from "./styles/images/icons8-skills.png";
import img from "./styles/images/icons8-skills.png"

const data = [
    {
        image: img,
        language: 'HTML',
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        image: img,
        language: 'CSS',
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        image: img,
        language: 'JavaScript',
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        image: img,
        language: 'React',
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        image: img,
        language: 'Tailwind CSS',
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        image: img,
        language: 'Git',
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
];

const Skills = ({image, language, about}) => {
    return(
        <>
            <section className='p-5 bg-slate-400 drop-shadow-lg shadow-slate-300 text-center rounded'>
                <div className='py-3'>
                    <img src={image} alt={language} className="mx-auto" />
                </div>
                <div className='text-2xl py-3'>
                    {language}
                </div>
                <div>
                    {about}
                </div>
            </section>
            <br />
        </>
    )
}
export default function Skill() {
  return (
    <>
        <section className='w-screen h-auto bg-slate-400 px-5 py-10'>
            <h1 className='text-3xl text-white flex items-center  gap-4'>
                My Skills <span className='font-bold'> <img src={skill} alt="" className='w-[40px] animate-bounce'/></span>
            </h1><br />
            <div className='py-5'>
                {
                   data.map((skill , i) => <Skills key={i} image={skill.image} language={skill.language} about={skill.about}/>)
                }
            </div>
        </section>
    </>
  )
}
