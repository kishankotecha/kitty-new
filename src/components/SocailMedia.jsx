import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; 
import { IoMail } from "react-icons/io5";

const SocialMedia = () => {
  return (
    <div className=" xs:left-2 sm:left-10 top-0 absolute z-50">
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center px:hidden">
          <div className="w-[1px] xl:h-64 lg:h-28 sm:h-32 bg-gray-300"></div>
          {/* Facebook Icon */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white my-4 hover:text-blue-600" size={30} />
          </a>
          {/* Twitter Icon */}
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white my-4 hover:text-blue-400" size={30} />
          </a>
          {/* Instagram Icon */}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white my-4 hover:text-pink-500" size={30} />
          </a>
          <a href="mailto:kittyforkaranataka@gmail.com" target="_blank" rel="noopener noreferrer">
            <IoMail className="text-white my-4 hover:text-blue-300" size={30} />
          </a>
          <div className="w-[1px] xl:h-64 lg:h-28 sm:h-32 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
