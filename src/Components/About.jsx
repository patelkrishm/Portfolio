import React from 'react'
import Profile from '../Assets/profile.jpg'
const About = () => {
    const handleDownload=()=>{
        const link="https://drive.google.com/file/d/1R56Yi_4IdMBtAtNnOdqZHJBvoDsRlty0/view?usp=drivesdk"
        window.open(link,"_blank")

    }
  return (
    <>
        <div className='text-white flex flex-col-reverse  md:flex-row justify-center items-center gap-10 w-full h-auto mt-20'>
            <div className='text-center w-auto md:w-1/2'>
                <h1 className='font-semibold text-4xl md:text-5xl'>Hi, I am  Kris Patel I am a Front End developer.</h1>
                <p className='mt-5 text-lg md:text-xl text-gray-500'>I'm a passionate Front-End Developer skilled in building responsive and user-friendly web applications using React. I focus on creating clean, modern designs and bringing ideas to life through efficient and reusable code.</p>
                <button onClick={handleDownload} className='p-3 pr-4 pl-4 mt-3 bg-purple-600 rounded-full cursor-pointer shadow-[0_0_15px_4px_rgba(268,85,247,0.5)] '>Download Resume</button>
            </div>
            <div className=' w-1/2 md:w-1/5 '>
                <img src={Profile} alt="" className='rounded-full border ' />
            </div>
        </div>
    </>
  )
}

export default About