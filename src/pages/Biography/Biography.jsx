import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import Biographyimage from "../../assets/Home/Biography.jpg";
import Biographymobile from "../../assets/Home/Biographymobile.png";
import { Typography } from "../../components/Typography";

const Biography = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <section className="relative flex flex-col lg:flex-row items-center bg-black text-white h-screen md:p-8 3xl:px-96 2xl:px-72 xl:px-52 lg:px-40 sm:px-14 ">
        {/* Image Section */}
        <div className="relative lg:w-1/2 w-full flex justify-center mb-8 lg:mb-0">
          {/* Image for large screens (Desktop and Laptop) */}
          <img
            src={Biographyimage}
            alt="Biography Image for Desktop"
            className="hidden lg:block w-full lg:w-3/4 h-auto object-cover"
          />

          {/* Image for mobile screens */}
          <img
            src={Biographymobile}
            alt="Biography Mobile Image"
            className="top-0 w-full lg:hidden h-screen object-cover"
          />

          {/* Text Overlay for mobile screens */}
          <div className="bottom-32 absolute sm:bottom-20  w-full p-4 lg:hidden bg-gradient-to-t from-black via-transparent to-transparent">
            <Typography
              variant="h2"
              className="font-bold mb-2 text-center text-white"
            >
              Biography
            </Typography>
            <Typography
              variant="body"
              className="font-extralight text-gray-300 xs:leading-none md:leading-relaxed text-center"
            >
              Krishna, popularly known by his stage name Srinagara Kitty, is a
              talented Indian actor born on July 8, 1977. He initially captured
              audiences' hearts on a small screen, showcasing his skills in
              numerous television serials and dramas. His journey in the film
              industry began in 2003, where he made his debut in small
              supporting roles, gradually establishing himself as a prominent
              figure in Kannada television series and films.
            </Typography>
            {/* <Typography
              variant="body"
              className="font-thin text-gray-300 leading-relaxed mt-2 text-center"
            >
              Notably, he also ventured into Tamil cinema, where he was credited
              as Ashby. With his versatile performance and charming screen
              presence, Srinagara Kitty continues to be a beloved personality in
              the Indian entertainment landscape.
            </Typography> */}
          </div>
        </div>

        {/* Text Section (only for larger screens) */}
        <div className="lg:w-1/2 xs:w-[85%] w-full lg:pl-12 hidden lg:block">
          <Typography variant="h2" className="font-bold mb-4">
            Biography
          </Typography>
          <Typography
            variant="body"
            className="font-extralight text-gray-400 leading-relaxed"
          >
            Krishna, popularly known by his stage name Srinagara Kitty, is a
            talented Indian actor born on July 8, 1977. He initially captured
            audiences' hearts on a small screen, showcasing his skills in
            numerous television serials and dramas. His journey in the film
            industry began in 2003, where he made his debut in small supporting
            roles, gradually establishing himself as a prominent figure in
            Kannada television series and films.
          </Typography>
          {/* <Typography
            variant="body"
            className="font-thin text-gray-400 leading-relaxed mt-4"
          >
            Notably, he also ventured into Tamil cinema, where he was credited
            as Ashby. With his versatile performance and charming screen
            presence, Srinagara Kitty continues to be a beloved personality in
            the Indian entertainment landscape.
          </Typography> */}

          {/* Read More Button for Larger Screens */}
          <div className="flex justify-start mt-6">
            <button
              className="bg-[#CF000F] text-white text-[12px] font-medium px-4 py-2 rounded  duration-300 hover:bg-white hover:text-[#CF000F]"
              onClick={() => navigate("/readmore")}
            >
              <Typography variant="body" className="">
                Read More
              </Typography>
            </button>
          </div>
        </div>

        {/* Read More Button for Mobile Screens */}
        <div className="flex justify-center lg:hidden absolute bottom-16 w-full">
          <button
            className="bg-[#CF000F] text-white text-[12px] font-medium px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-[#CF000F]"
            onClick={() => navigate("/readmore")}
          >
            <Typography variant="body" className="">
              Read More
            </Typography>
          </button>
        </div>
      </section>
    </PageContainer>
  );
};

export default Biography;
