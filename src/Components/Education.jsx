import React from 'react'

const Education = () => {
  return (
    <>
      <div className='text-white flex flex-col justify-center items-center mt-15'>
        <div className='text-center'>
          <h1 className='underline underline-offset-10 decoration-4 decoration-sky-400 text-2xl md:text-4xl'>Education</h1>
          <p className='mt-5 text-gray-500 text-xl'>My education has been a journey of learning and development. Here are the details of my academic background.</p>
        </div>
        <div className='border mt-10 p-4 rounded-2xl w-[80%] sm:w-[60%] md:w-[40%] shadow-[0_0_15px_4px_rgba(268,85,247,0.5)] flex flex-col'>
          <div >
            <h1 className='text-xl'>Bachelor of Enginnering-BE(Information Technology)</h1>
            <p className='text-md'>GTU Univercity, GEC Modasa</p>
            <p className='text-sm mt-2'>Sept 2021 - May 2025</p>
            <p className=' font-semibold text-gray-500 mt-4'>Grade:7.45 CGPA</p>
          </div>
          <div className='mt-5'>
            <p className='text-gray-500 text-base'>I have Complate my Bachelor degree (BE) in Information Technology from GTU Univercity in GEC Modasa. During my time at Modasa, I gained a strong foundation in programming, software development, and information technology principles. I studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. My experience at Modasa has been instrumental in shaping my technical abilities and professional growth.</p>
          </div>
        </div>
        <div className='border mt-10 p-4 rounded-2xl w-[80%] sm:w-[60%] md:w-[40%] shadow-[0_0_15px_4px_rgba(268,85,247,0.5)] flex flex-col'>
          <div >
            <h1 className='text-xl'>GSEB(XII)-PCM with Computer</h1>
            <p className='text-md'>NS, Vidhyalaya Chikhli</p>
            <p className='text-sm mt-2'>Sept 2019 - April-2021</p>
            <p className=' font-semibold text-gray-500 mt-4'>Grade:83%</p>
          </div>
          <div className='mt-5'>
            <p className='text-gray-500 text-base'>I Complated my class 12 education from NS Vidhyalaya, Chikhli, under the GSEB board, where i studied Physices, Chemistry and Mathematics(PCM) with Computer.</p>
          </div>
        </div>
        <div className='border mt-10 p-4 rounded-2xl w-[80%] sm:w-[60%] md:w-[40%] shadow-[0_0_15px_4px_rgba(268,85,247,0.5)] flex flex-col'>
          <div >
            <h1 className='text-xl'>GSEB(X)</h1>
            <p className='text-md'>NS, Vidhyalaya Chikhli</p>
            <p className='text-sm mt-2'>Jun 2017 - April-2019</p>
            <p className=' font-semibold text-gray-500 mt-4'>Grade:80%</p>
          </div>
          <div className='mt-5'>
            <p className='text-gray-500 text-base'>I Complated my class 10 education from NS Vidhyalaya, Chikhli, under the GSEB board, where i studied Science,Mathematics with Computer.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education