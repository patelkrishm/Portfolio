import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
const Navbar = () => {
  const menuItems =[
    {id:"about",label:"About"},
    {id:"skill",label:"Skill"},
    {id:"experience",label:"Experience"},
    {id:"education",label:"Education"},
    {id:"project",label:"Project"},
    {id:"contact",label:"Contact"},

  ]
  return (
    <>
      <nav className='bg-transperent text-white flex justify-center  items-center gap-10'>
        <div className='md:flex justify-between items-center py-5 gap-20'>
          <div className='text-lg'>&lt;Kris / Patel&gt;</div>
          <ul className='flex gap-8 items-center'>
            {menuItems.map((items)=>(
              <li key={items.id} className=''>
                <button>
                  {items.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex gap-4'>
          <FaGithub className='w-full h-auto'/>
          <FaLinkedin className='w-full h-auto'/>
        </div>
      </nav>
    </>
  )
}

export default Navbar