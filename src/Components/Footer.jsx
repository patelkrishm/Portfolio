import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='className= text-white mt-15 flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center gap-10'>
          <a href="https://github.com/patelkrishm"  rel="noopener noreferrer" target='_blank'  className="text-xl transition-transform transform hover:scale-110"><FaGithub style={{ color: "white" }} size={30}/></a>
          <a href="https://www.instagram.com/krish_____?igsh=MWo2ZWJmcGw3NWFxag==" target='_blank' rel="noopener noreferrer" className="text-xl transition-transform transform hover:scale-110" ><FaInstagram style={{ color: "white" }} size={30}/></a>
          <a href="https://www.linkedin.com/in/krish-patel-12382229a" target='_blank' rel="noopener noreferrer" className="text-xl transition-transform transform hover:scale-110"><FaLinkedin style={{ color: "white" }} size={30}/></a>
          <a href=""  rel="noopener noreferrer" target='_blank' className="text-xl transition-transform transform hover:scale-110"><FaTwitter style={{ color: "white" }} size={30}/></a>
        </div>
        <div className='mt-5'>
          <p className='text-sm text-gray-500'>© 2025 Kris Patel. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer