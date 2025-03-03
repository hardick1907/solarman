import { Mail, Phone } from 'lucide-react';
import icon from "../assets/whatsapp.png";
import React from 'react';

const Header = () => {
  return (
    <div className='bg-[#483285] text-white py-2 px-4 flex flex-wrap justify-end items-center gap-2 sm:gap-6 shadow-md z-10'>
      <div className='flex items-center gap-2 hover:text-red-400 cursor-pointer'>
        <Phone size={20} />
        <span className='font-medium text-sm sm:text-base'>+91 7428086779</span>
      </div>
      <div className='flex items-center gap-2 cursor-pointer hover:text-blue-400'>
        <Mail size={20} />
        <span className='font-medium text-sm sm:text-base'>info@solarmantech.in</span>
      </div>
      <div className='flex items-center cursor-pointer hover:text-green-400'>
        <img src={icon} alt="whatsapp" className='w-8 h-5 sm:w-10 sm:h-6' />
        <span className='font-medium text-sm sm:text-base'>+91 7428086779</span>
      </div>
    </div>
  );
};

export default Header;