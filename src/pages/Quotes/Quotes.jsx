import React, { useEffect, useState } from 'react';
import PageContainer from "../../components/PageContainer";
import quotesbg from "../../assets/Home/Quotes.jpg"; // Background for larger screens
import quotesbgMobile from "../../assets/Home/QuotesMobile.png"; // Background for mobile screens
import { Typography } from '../../components/Typography';
import quotesicon from '../../assets/Home/quoteicon.png'; // Path to your quote icon

const QuoteSection = () => {
  // Updated quotes array
  const quotes = [
    "“Every character I portray is a part of my journey, a reflection of the emotions and stories I want to share with the world.”",
    "“Cinema has the power to inspire, to heal, and to connect—it's the language of my soul, and through it, I speak to every one of my fans.”",
    "“Acting isn't just about playing a role; it's about living a moment, feeling the depth of every emotion, and leaving a lasting impression on the hearts of the audience.”"
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000); // Change quote every 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <PageContainer>
      {/* Background image for mobile */}
      <div
        className="md:hidden flex items-center justify-center min-h-screen object-contain bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${quotesbgMobile})`,
        }}
      >
        <div className="flex flex-col md:flex-row items-center text-white py-8 px-6 lg:max-w-7xl mx-auto">
          {/* Left Text Section */}
          <div className="md:w-1/2 flex flex-col justify-center text-left md:px-12 px-6 2x:ml-0 xl:ml-10 lg:ml-10 md:ml-10 xs:mb-96 md:mb-0 md:mx-36">
            {/* Quote icon centered above the text */}
            <div className="flex justify-start mb-4">
              <img 
                src={quotesicon} 
                alt="Quote icon" 
                className="w-12 h-12"
              />
            </div>
            <Typography variant='h6' className="font-light mb-6">
              {quotes[currentQuoteIndex]}
            </Typography>
          </div>
        </div>
      </div>

      {/* Background image for desktop (hidden on mobile) */}
      <div
        className="hidden md:flex items-center justify-center min-h-screen object-contain bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${quotesbg})`,
        }}
      >
        <div className="flex flex-col md:flex-row items-center text-white py-8 px-6 lg:max-w-7xl mx-auto">
          {/* Left Text Section */}
          <div className="md:w-1/2 flex flex-col justify-center text-left md:px-12 px-6 2x:ml-0 xl:ml-10 lg:ml-10 md:ml-10">
            {/* Quote icon centered above the text */}
            <div className="flex justify-start mb-4">
              <img 
                src={quotesicon} 
                alt="Quote icon" 
                className="w-12 h-12"
              />
            </div>
            <Typography variant='h3' className="font-light mb-6">
              {quotes[currentQuoteIndex]}
            </Typography>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default QuoteSection;
