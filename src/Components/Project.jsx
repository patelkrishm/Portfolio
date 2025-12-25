import React from 'react'

const Project = () => {
  const data=[{
    title:"Movie App",
    description:"A movie app built using ReactJS that allows users to search for movies...",
    sourceCode:"https://github.com/patelkrishm/Movie-App",
    Live:""
  },
{
    title:"Bookify",
    description:"A Book Store web application built using React and Firebase that allows users to browse...",
    sourceCode:"https://github.com/patelkrishm/Bookify",
    Live:"https://bookify-neon.vercel.app/"
  },
{
    title:"Recipe App",
    description:"A recipe app built using ReactJS that allows users to search for and view recipes...",
    sourceCode:"https://github.com/patelkrishm/Bookify",
    Live:""
  },
{
    title:"Backround Remover",
    description:"A background remover app built using ReactJS that allows users to remove backgrounds from images...",
    sourceCode:"https://github.com/patelkrishm/Backround-Remover",
    Live:"https://backround-remover.vercel.app/"
  },]
  return (
    <>
      <div className='text-white mt-15 flex flex-col justify-center items-center'>
        <div className='text-center'>
          <h1 className='underline underline-offset-10 decoration-4 decoration-sky-400 text-2xl md:text-4xl'>Projects</h1>
          <p className='mt-5 text-gray-500 text-xl'>A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
        </div>
        <div className='flex flex-col justify-center items-center ml-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 w-auto mt-10 px-8 py-4 justify-center '>
          {data.map((project,index)=>{
            return (
              <div key={index} className='flex flex-col gap-5 w-[70%] justify-center items-center '>
                <div>
                  <h2 className='text-xl mt-5'>{project.title}</h2>
                <p className='text-gray-500'>{project.description}</p>
                </div>
                <div className='flex gap-5'>
                  <a href={project.sourceCode}  rel="noopener noreferrer" target='_blank'><button className='text-sky-900 p-2 border rounded-xl bg-white cursor-pointer'>Source Code</button></a>
                <a href={project.Live}  rel="noopener noreferrer" target='_blank' ><button className='text-sky-900 p-2 rounded-xl bg-white cursor-pointer'>Live demo</button></a>
                </div>
              </div>
            )
          })}
        </div>
        </div>
      </div>
    </>
  )
}

export default Project