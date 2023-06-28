import React from 'react'
import {  FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="w-full  py-20 h-auto border-b-[1px] border-b-black gap-8">

     
        <div className="flex justify-center gap-4">
        <span className="bannerIcon">
                    <a href="https://github.com/maria1387/">
                    <BsGithub />
                    </a>
                  </span>
                  <span className="bannerIcon">
                    <a href="https://www.linkedin.com/in/maria-pilar-abarca-astorga/">
                    <FaLinkedinIn />
                    </a>
                  </span>
        </div>
      </div>
    
  );
}

export default Footer