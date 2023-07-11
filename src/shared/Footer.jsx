import React from 'react';
import logo from '../assets/sistlogo.jpg'
// import foorlogo from "../assets/sistlogologin.png"
import footerlogo from '../assets/footerlogo.jfif'
import Email from "../assets/email.png"
import Linkedin from "../assets/linkedin.png"
import Insta from "../assets/instagram.png"
const Footer = () => {
  return (
    <footer className="border-t-4 border-[#9e1c3f] bg-[#f8f8ff]">
      <div className="container mx-auto py-4 px-8 flex items-center justify-between">
        <div className="flex flex-col gap-4 items-center font-medium text-lg">
          <img src={footerlogo} alt="University Logo" className="h-14" />
          <p>Guide Selection Portal</p>
        </div>
        <div >
          <div>
            <p class="text-lg font-semibold pb-3.5">INFO:</p>
          </div>
          <div class='flex py-1'>
            <img src={Email} alt="" className='h-6' /> &nbsp;
            <p> Mail</p>
          </div>
          <div class='flex py-1'>
            <img src={Linkedin} alt="" /> &nbsp;
            <p> Linkedin</p>
          </div><div class='flex py-1'>
            <img src={Insta} alt="" /> &nbsp;
            <p> Instagram</p>
          </div>
        </div>
      </div>
      <div className='border-t border-[#9e1c3f] mx-14'></div>
      <div className="container mx-auto py-2 px-8 text-center text-sm">
        &copy; {new Date().getFullYear()} Sathyabama University. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
