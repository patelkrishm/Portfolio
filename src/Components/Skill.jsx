import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiVerdaccio } from "react-icons/si";

const Skill = () => {
  const skills = [
    { icon: <FaHtml5 size={30} style={{ color: "#E34F26" }} />, name: "HTML" },
    { icon: <FaCss3 size={30} style={{ color: "#1572B6" }} />, name: "CSS" },
    { icon: <IoLogoJavascript size={30} style={{ color: "#F7DF1E" }} />, name: "JavaScript" },
    { icon: <FaReact size={30} style={{ color: "#61DAFB" }} />, name: "React JS" },
    { icon: <RiTailwindCssFill size={30} style={{ color: "#38BDF8" }} />, name: "Tailwind CSS" },
    { icon: <FaBootstrap size={30} style={{ color: "#7952B3" }} />, name: "Bootstrap" },
  ];
  const Tools = [
    { icon: <FaGitAlt size={30} style={{ color: "#F1502F" }} />, name: "Git" },
    { icon: <FaGithub size={30} />, name: "GitHub" },
    { icon: <VscVscode size={30} style={{ color: "#0078D7" }}/>, name: "VS Code" },
    { icon: <SiVerdaccio size={30}/>, name: "Vercel" },
  ]
  return (
    <>
      <div className='text-white flex flex-col justify-center items-center mt-20'>
        <div className='text-center'>
          <h1 className='text-4xl md:5xl underline underline-offset-10 decoration-4 decoration-sky-400'>Skills</h1>
          <p className='mt-5 text-gray-500 text-xl'>A collection of my technical skills and expertise honed through various projects and experiences.</p>
        </div>
        <div className='border mt-10 p-4 rounded-2xl w-[70%] md:w-auto shadow-[0_0_15px_4px_rgba(268,85,247,0.5)] flex flex-col gap-10'>
          <h1 className='flex  justify-center text-3xl'>Frontend</h1>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-2'>
            {skills.map((skill, index) => (
              <div key={index} className='flex gap-5 border  border-gray-400 rounded-full p-2 text-lg'>
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='border mt-15 p-4 rounded-2xl w-[70%] md:w-auto shadow-[0_0_15px_4px_rgba(268,85,247,0.5)] flex flex-col gap-10'>
          <h1 className='flex  justify-center text-3xl'>Tools</h1>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-2'>
            {Tools.map((tools, index) => (
              <div key={index} className='flex gap-5 border  border-gray-400 rounded-full p-2 text-lg'>
                {tools.icon}
                <p>{tools.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Skill