// src/App.js
import { useState, useEffect } from "react";
import Banner from "../../assets/Home/Contact_banner.jpg";
import MobileBanner from "../../assets/Home/Kittyfilmology.jpg";
import { Typography } from "../../components/Typography";
import PageContainer from "../../components/PageContainer";
function App() {
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
      <div className="min-h-screen bg-[#161616] text-white">
        <div className="relative h-screen md:flex md:items-start md:justify-start">
          {/* Background Image */}
          <div className="w-full h-full relative">
            <img
              src={isMobile ? MobileBanner : Banner} // Conditionally set the image source
              alt="Background"
              className="w-full h-full object-cover"
            />
            {isMobile && (
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-70"></div> // Black shadow effect at the top for mobile view
            )}
          </div>

          {/* Right-side content */}
          {/* First div for desktop only */}
          <div className="hidden md:block absolute right-0 top-28 px:left-0 xs:top-10 3xl:top-[22rem] sm:top-[13rem] md:top-[15rem] 3xl:right-96 2xl:right-72 xl:right-40 md:right-28 px:text-center text-white sm:max-w-sm text-left">
            {/* Social Media Links */}
            <div className="2xl:space-y-3 px:mt-10 px:space-y-6">
              <Typography variant="h1" className="font-normal">
                Biography<span className="text-red-600">.</span>
              </Typography>
            </div>
          </div>

          {/* Second div for mobile only */}
          <div className="block md:hidden absolute inset-0 flex items-start justify-center">
            <div className="px:left-0 top-10 text-center text-white sm:max-w-sm">
              {/* Social Media Links */}
              <div className="space-y-3 mt-10">
                <Typography variant="h1" className="font-normal">
                  Biography<span className="text-red-600">.</span>
                </Typography>
              </div>
            </div>
          </div>

        </div>
        {/* Biography sections */}
        <div className="py-16 px-6 lg:px-32">
          <div className="mb-12">
            <Typography variant='h5' className=" font-medium mb-4">Journey</Typography>
            <Typography variant='body' className="text-[#FFFFFF99] font-light">
              Krishna, born on July 8, 1977, and popularly known by his stage name Srinagara Kitty (credited as Abhay in a Tamil film), is an Indian actor who predominantly works in Kannada television and films. He began his career as a child artist, appearing in numerous television serials, before transitioning to films in 2003, initially taking on small supporting roles.
              His breakthrough as a lead actor came with the film Inthi Ninna Preethiya (2008), which received positive reviews, and his performance was well-appreciated. He went on to star in several notable films, including Savari (2009), Mathe Mungaru (2010), Hudugaru (2011), and Sanju Weds Geetha (2011). The success of these films helped establish him as one of the leading actors in Kannada cinema.
            </Typography>
          </div>

          <div className="mb-12">
            <Typography variant='h5' className=" font-medium mb-4">Family</Typography>
            <Typography variant='body' className="text-[#FFFFFF99] font-light">
              Kitty hails from a joint family and is the youngest of his parents' children. He is married to television producer Bhavana Belagere and is the son-in-law of renowned writer, journalist, and TV presenter Ravi Belagere.
            </Typography>
          </div>

          <div className="mb-12">
            <Typography variant='h5' className=" font-medium mb-4">Television Career</Typography>
            <Typography variant='body' className="text-[#FFFFFF99] font-light">
              Kitty began his career as a child artist, appearing in popular TV serials such as Malanadina Chitragalu, Doddamane, and Kandana Kavya, among others. During this time, he was also active in theater, performing in plays like Kaadu, Kappe Bhavi Nakshatra, Akka, Namma Nimmagalobba, and Sanje Mallige.
              After completing his education, Kitty continued his television journey, starring in serials for ETV, Udaya, and Suvarna channels. Some of his notable works include Chandrika, Preethigagi, Ananda Sagara, Mane Mane Kathe, and Bhoomi.
            </Typography>
          </div>

          <div className="mb-12">
            <Typography variant='h5' className=" font-medium mb-4">Film Career</Typography>
            <Typography variant='body' className="text-[#FFFFFF99] font-light">
              Kitty made his film debut in the 2003 Kannada movie Chandra Chakori, where he played a negative role. He followed this with other negative roles in films such as Gowdru, Love Story, Aadhi, Ayya, and Vishnusene, most of which were released in 2005.
              His breakthrough as a lead actor came with the film Giri, and his stardom was cemented with Inthi Ninna Preethiya. He went on to appear in a string of successful films, including Olave Jeevana Lekkachaara, Janumada Gelathi, Mathe Mungaru, Savari, Male Barali Manju Irali, Swayamvara, Sanju Weds Geetha, and Hudugaru. Both Sanju Weds Geetha and Hudugaru were box office hits, while his performance in Savari earned him the Filmfare Special Jury Award.
            </Typography>
          </div>

          <div className="mb-12">
            <Typography variant='h5' className=" font-medium mb-4">Additional Work and Talents</Typography>
            <Typography variant='body' className="text-[#FFFFFF99] font-light">
              Blessed with a deep baritone voice, Kitty lent his voice to the character of Lord Ram in the radio show Radio Ramayana, aired on Fever 104 FM in Bangalore. In 2014, he showcased his versatility by playing a triple role in the film Bahuparak, and he also sang the song "Simple Preethige" for the same movie.
            </Typography>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black text-white text-center py-4">
          <Typography variant="body">
            © 2024 Srinagara Kitty. All Rights Reserved.
          </Typography>
        </footer>
      </div>
    </PageContainer>
  );
}

export default App;
