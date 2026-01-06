import React from "react";
import award1 from "../../assets/Home/award1.png";
import award2 from "../../assets/Home/award2.png";
import award3 from "../../assets/Home/award3.png";
import award4 from "../../assets/Home/award4.png";
import award5 from "../../assets/Home/award5.png";
import award6 from "../../assets/Home/award6.png";
import award7 from "../../assets/Home/award7.png";
import { Typography } from '../../components/Typography';
import "./Achievements.css";

const Award = () => {
  const images = [
    { image: award1, name: "WCRC International (2019)", owoner: "Mr. Bhaskar N Raju" },
    { image: award2, name: "WCRC International (2019)", owoner: "" },
    { image: award3, name: "ET Now (2019)", owoner: "Orion" },
    { image: award4, name: "ET Now (2019)", owoner: "Orion" },
    { image: award5, name: "ET Now (2019)", owoner: "Orion" },
    { image: award6, name: "Real Estate Leadership Awards (2019)", owoner: "Avance" },
    { image: award7, name: "The Economic Times (2022)", owoner: "" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-black overflow-hidden">
      <Typography variant="h2" className="mb-28 font-argesta font-normal text-50px tracking-tightests text-white text-center xsm:text-[29px]">
        Awards & Recognitions
      </Typography>

      <div className="marquee">
        <div className="marquee-content">
          {images.concat(images).map((image, index) => ( // Duplicate images array for continuous scroll
            <div key={index} className="marquee-item">
              <img src={image.image} alt={`Award ${index}`} className="marquee-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Award;
