import React, { useState, useEffect } from "react";
import Banner from "../../assets/Home/Contact_banner.jpg";
import MobileBanner from "../../assets/Home/Contact-bannerMobile.jpg"; // Import mobile banner
import PageContainer from "../../components/PageContainer";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Typography } from "../../components/Typography";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  // This effect listens for window resize and updates the state accordingly
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Setting mobile view for screen widths less than 768px
    };

    handleResize(); // Call the function initially to set the correct banner
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener on unmount
    };
  }, []);

  return (
    <PageContainer>
      <div className="relative h-screen md:flex md:items-start md:justify-start">
        {/* Background Image */}
        <img
          src={isMobile ? MobileBanner : Banner} // Conditionally set the image source
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Right-side content */}
        <div className="absolute right-0 px:left-0 xs:top-10 3xl:top-[18rem] sm:top-[13rem] md:top-[15rem] 3xl:right-96 2xl:right-72 xl:right-40 md:right-28 px:text-center text-white sm:max-w-sm text-left">
          <div className="">
            <Typography variant="h2" className="text-4xl font-normal sm:mb-10 xs:mb-5">
              Contact
            </Typography>
            <Typography variant="p" className="text-white">
            Get in touch with Srinagara Kitty's official team here.
            </Typography>
          </div>
          {/* Social Media Links */}
          <div className="2xl:space-y-3 px:mt-5 px:space-y-2">
            <div className="flex items-center px:justify-center">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-white sm:my-4 xs:my-2 hover:text-blue-600 px:h-5" size={30} />
              </a>
              <span className="ml-2 text-gray-300">Srinagar Kitty</span>
            </div>
            <div className="flex items-center px:justify-center">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-white sm:my-4 px:my-2 hover:text-blue-400 px:h-5" size={30} />
              </a>
              <span className="ml-2 text-gray-300">Srinagara Kitty</span>
            </div>
            <div className="flex items-center px:justify-center">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white sm:my-4 px:my-2 hover:text-pink-600 px:h-5" size={30} />
              </a>
              <span className="ml-2 text-gray-300">srinagarkittyofficial</span>
            </div>
            <div className="flex items-center px:justify-center">
              <a
                href="mailto:kittyforkaranataka@gmail.com" // Changed to mailto protocol
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMail className="text-white sm:my-4 px:my-2 hover:text-blue-300 px:h-5" size={30} />
              </a>
              <span className="ml-2 text-gray-300">kittyforkaranataka@gmail.com</span>
            </div>

          </div>
        </div>
      </div>
      <footer className="bg-black text-white text-center py-4">
        <Typography variant="p">
          © 2024 Srinagara Kitty. All Rights Reserved.
        </Typography>
      </footer>
    </PageContainer>
  );
};

export default Contact;