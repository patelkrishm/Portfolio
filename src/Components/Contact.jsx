import React from 'react'

const Contact = () => {
  return (
    <div className='text-white mt-15 flex flex-col justify-center items-center'>
        <div className='text-center'>
          <h1 className='underline underline-offset-10 decoration-4 decoration-sky-400 text-2xl md:text-4xl'>Contact</h1>
          <p className='mt-5 text-gray-500 text-xl'>I'd love to hear from you—reach out for any opportunities or questions!</p>
        </div>
        <div className='flex justify-between gap-10 mt-10 text-xl'>
          <h1 >Email id:krispatel074@gmail.com</h1>
          <h1>Mobile No: +917863089605</h1>
          <h1>Address: Chikhli, Gujrat</h1>
        </div>
      </div>
  )
}

export default Contact