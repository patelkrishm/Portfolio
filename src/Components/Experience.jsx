import React from 'react'

const Experience = () => {
  return (
    <>
      <div className='text-white mt-15 flex flex-col justify-center items-center'>
        <div className='text-center'>
          <h1 className='underline underline-offset-10 decoration-4 decoration-sky-400 text-2xl md:text-4xl'>Experience</h1>
          <p className='mt-5 text-gray-500 text-xl'>As a fresher, I'm building my professional experience through hands-on projects and continuous learning in front-end development.</p>
        </div>
        <div className='border mt-10 p-4 rounded-2xl w-[80%] md:w-[40%] sm:[60%] shadow-[0_0_15px_4px_rgba(268,85,247,0.5)] flex flex-col'>
            <div>
              <h1 className='text-xl'>Frontend developer</h1>
            <p className='text-md'>Company-techreal</p>
            <p className='text-sm mt-2 text-gray-500'>Jan 2025-May 2025</p>
            </div>
            <div className='mt-5'>
              <p className='text-gray-500 text-base'>During my internship, I developed responsive and user-friendly interfaces using React.js and Tailwind CSS.
                I focused on creating reusable components, integrating APIs, and improving UI performance.
                Worked closely with mentors and team members to deliver clean, maintainable, and scalable front-end code.</p>
                <div className='mt-4'>
              <h5 className='font-medium text-white'>Skills:</h5>
              <ul className='flex flex-wrap text-white mt-2'>
                <li className='bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400'>Html</li>
                <li className='bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400'>CSS</li>
                <li className='bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400'>JavaScript</li>
                <li className='bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400'>React</li>
              </ul>
                </div>
              {/* <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 p-2'>
                <p className='p-1 rounded-full items-center justify-center flex bg-purple-500'>Html</p>
                <p className='p-1 rounded-full items-center justify-center flex bg-purple-500'>CSS</p>
                <p className='p-2 rounded-full items-center justify-center flex bg-purple-500'>JavaScript</p>
                <p className='p-1 rounded-full items-center justify-center flex bg-purple-500'>React</p>
              </div> */}
            </div>
          </div>
        </div>
      


    </>
  )
}

export default Experience