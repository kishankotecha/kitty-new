import React from "react";
import Hero from "../../assets/Home/hero.png";
import PageContainer from "../../components/PageContainer";
import { Typography } from "../../components/Typography";
import Heromobile from "../../assets/Home/mobile.png";
const Home = () => {
  return (
    <PageContainer>
    <div className="relative h-screen md:flex md:items-start md:justify-start">
      <img
        src={Hero} // Desktop image
        alt="Background"
        className="hidden md:block w-full h-full object-cover" // Show on desktop
      />
      <img
        src={Heromobile} // Mobile image
        alt="Background"
        className="block md:hidden xs:w-[99%] xs:h-[100%] xsx:w-[99%] xsx:h-[100%] sm:w-[100%] sm:h-[100%] sm:mt-9 object-cover" // Show on mobile
      />
      <div className="absolute bottom-44 md:left-52 xs:left-20
      ">
        <Typography variant="body" className="text-white">
          Actor
        </Typography>
        <Typography variant="h1" className="text-white">
          Srinagara Kitty
        </Typography>
        <Typography variant="body" className="text-gray-400">
          From Child Star to Kannada Cinema's Beloved Hero!
        </Typography>
      </div>
    </div>
  </PageContainer>
  
  
  );
};

export default Home;
