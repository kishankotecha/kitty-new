import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import first from "../../assets/Home/first.jpg";
import two from "../../assets/Home/two.jpg";
import three from "../../assets/Home/three.jpg";
import four from "../../assets/Home/four.jpg";
import fifth from "../../assets/Home/fifth.jpg";
import sixth from "../../assets/Home/sixth.jpg";
import seventh from "../../assets/Home/seventh.jpg";
import eight from "../../assets/Home/eight.jpg";
import nine from "../../assets/Home/nine.jpg";
import ten from "../../assets/Home/ten.jpg";
import eleven from "../../assets/Home/eleven.jpg";
import twelve from "../../assets/Home/twelve.jpg";
import { Typography } from '../../components/Typography';
import './Filmography.css';

const Filmography = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const films = [
    { title: "Sanju Weds Geetha 2", image: first },
    { title: "Terror", image: two },
    { title: "Rosy", image: three },
    { title: "Gowli", image: four },
    { title: "Gowli", image: fifth },
    { title: "Gowli", image: sixth },
    { title: "Gowli", image: seventh },
    { title: "Gowli", image: eight },
    { title: "Gowli", image: nine },
    { title: "Gowli", image: ten },
    { title: "Gowli", image: eleven },
    { title: "Gowli", image: twelve },
  ];

  const description = `Kitty made his film debut in 2003 with the Kannada movie Chandra Chakori, where he portrayed a negative role. He continued to take on antagonist roles in films like Gowdru, Love Story, Aadhi, Ayya, and Vishnusene, many of which were released in 2005.`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % films.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [films.length]);

  return (
    <PageContainer>
      <div className="relative bg-black text-white flex items-center justify-center translate-y-16 lg:h-screen">
        {/* Film Card */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-8">
          {/* Left section for Filmography and title */}
          <div className="flex flex-col sm:space-y-7 lg:space-y-14 items-center lg:items-start 3xl:w-3/5 2xl:w-[50%] xl:w-[40%] lg:w-[35%] xs:w-[15%] sm:w-[20%] md:w-[30%]">
            <Typography variant="h1" className="font-normal tracking-wider">
              Filmography<span className="text-red-600">.</span>
            </Typography>

            <Typography
              variant="body"
              className="text-left mt-4 text-lg text-gray-400"
            >
              {description}
            </Typography>

            {/* View More Button placed here instead of dots */}
            <div className="lg:flex space-x-2 ">
              <button
                className="bg-[#CF000F] text-white text-[12px] font-medium px-6 py-3 rounded transition duration-300 hover:bg-white hover:text-[#CF000F] uppercase"
                onClick={() => navigate('/viewmore')}
              >
                View More
              </button>
            </div>
          </div>

          {/* Right section for the images in two columns */}
          <div className="hidden lg:block right-0">
            <div className="flex space-x-8 ">
              {/* First Column - moving top to bottom */}
              <div className="space-y-4 animation-slide-down">
                {films.map((film, index) => (
                  <div
                    key={index}
                    className={`xl:w-60 lg:w-40 h-auto ${index === currentIndex ? 'active' : ''}`}
                  >
                    <img
                      src={film.image}
                      alt={film.title}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Second Column - moving bottom to top */}
              <div className="space-y-4 animation-slide-up">
                {films.map((film, index) => (
                  <div
                    key={index}
                    className={`xl:w-60 lg:w-40 h-auto ${index === currentIndex ? 'active' : ''}`}
                  >
                    <img
                      src={film.image}
                      alt={film.title}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="block lg:hidden overflow-hidden">
            <div className="flex space-x-4 animate-scroll">
              {films.map((film, index) => (
                <div key={index} className="flex-shrink-0 w-40 h-auto">
                  <img
                    src={film.image}
                    alt={film.title}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Filmography;
