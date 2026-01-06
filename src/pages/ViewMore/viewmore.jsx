import { useState, useEffect } from "react";
import Banner from "../../assets/Home/Contact_banner.jpg";
import MobileBanner from "../../assets/Home/Kittyfilmology.jpg";
import { Typography } from "../../components/Typography";
import PageContainer from "../../components/PageContainer";
import papu from "../../assets/filmography/papu.jpg";
import apaya from "../../assets/filmography/apaya.jpg";
import bahuparak from "../../assets/filmography/bahuparak.jpg";
import ballpen from "../../assets/filmography/ballpen.jpg";
import coco from "../../assets/filmography/coco.jpg";
import hudugaru from "../../assets/filmography/hudugaru.jpg";
import intininapreethiya from "../../assets/filmography/intininapreethiya.jpg";
import janumadagelathi from "../../assets/filmography/janumadagelathi.jpg";
import kiladikitty from "../../assets/filmography/kiladikitty.jpg";
import mallebarali from "../../assets/filmography/mallebarali.jpg";
import mungaru from "../../assets/filmography/mungaru.jpg";
import namastemadam from "../../assets/filmography/namastemadam.jpg";
import olavejeevana from "../../assets/filmography/olavejeevana.jpg";
import panchamrutha from "../../assets/filmography/panchamrutha.jpg";
import sanjugeetha from "../../assets/filmography/sanjugeetha.jpg";
import savari from "../../assets/filmography/savari.jpg";
import siliconcity from "../../assets/filmography/siliconcity.jpg";
import swayamvara from "../../assets/filmography/swayamvara.jpg";
import toni from "../../assets/filmography/toni.jpg";
import wodevdas from "../../assets/filmography/wodevdas.jpg";

function App() {
    const [isMobile, setIsMobile] = useState(false);
    const [displayCount, setDisplayCount] = useState(12); // Default to show 12 movies

    const movies = [
        { id: 1, src: papu, title: 'Paapu (2016)' },
        { id: 2, src: wodevdas, title: 'Paru Wife Of Devdas' },
        { id: 3, src: namastemadam, title: 'Namaste Madam' },
        { id: 4, src: panchamrutha, title: 'Panchamrutha' },
        { id: 5, src: bahuparak, title: 'Bahuparak' },
        { id: 6, src: apaya, title: 'Apaya' },
        { id: 7, src: toni, title: 'Toni' },
        { id: 8, src: coco, title: 'Coco' },
        { id: 9, src: sanjugeetha, title: 'Sanju WEDS Geetha' },
        { id: 10, src: ballpen, title: 'Ballpen' },
        { id: 11, src: kiladikitty, title: 'Kiladi Kitty' },
        { id: 12, src: hudugaru, title: 'Hudugaru' },
        { id: 13, src: mallebarali, title: 'Mallebarali Manju Irali' },
        { id: 14, src: mungaru, title: 'Mathe Mungaru' },
        { id: 15, src: swayamvara, title: 'Swayamvara' },
        { id: 16, src: savari, title: 'Savari' },
        { id: 17, src: siliconcity, title: 'Silicon City' },
        { id: 18, src: olavejeevana, title: 'Olave Jeevana Lekkachara' },
        { id: 19, src: intininapreethiya, title: 'Inti Nina Preethiya' },
        { id: 20, src: janumadagelathi, title: 'Janumada Gelathi' },
    ];

    // Check window size to toggle between mobile and desktop view
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // For screen widths < 640px, set mobile view
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Function to show more movies when "View More" is clicked
    const handleViewMore = () => {
        setDisplayCount(movies.length); // Show all movies
    };

    return (
        <PageContainer>
            <div className="min-h-screen bg-[#161616] text-white">
                {/* Banner Section */}
                <div className="relative h-[60vh] md:h-screen">
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

                    <div className="hidden md:block absolute right-0 top-28 px:left-0 xs:top-10 3xl:top-[22rem] sm:top-[13rem] md:top-[15rem] 3xl:right-96 2xl:right-72 xl:right-40 md:right-28 px:text-center text-white sm:max-w-sm text-left">
                        {/* Social Media Links */}
                        <div className="2xl:space-y-3 px:mt-10 px:space-y-6">
                            <Typography variant="h1" className="font-normal">
                                Filmography<span className="text-red-600">.</span>
                            </Typography>
                        </div>
                    </div>

                    {/* Second div for mobile only */}
                    <div className="block md:hidden absolute inset-0 flex items-start justify-center">
                        <div className="px:left-0 top-10 text-center text-white sm:max-w-sm">
                            {/* Social Media Links */}
                            <div className="space-y-3 mt-10">
                                <Typography variant="h1" className="font-normal">
                                    Filmography<span className="text-red-600">.</span>
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Movie Posters Section */}
                <div className="p-4 grid grid-cols-1 xl:gap-8 xs:gap-4 md:grid-cols-2 lg:grid-cols-4 xl:mx-28 md:mx-16 sm:mx-16 py-10">
                    {movies.slice(0, displayCount).map((movie) => ( // Only show 'displayCount' number of movies
                        <div
                            key={movie.id}
                            className="relative bg-[#2F2F2F] rounded-lg shadow-lg overflow-hidden w-full xs:w-[80%] h-full flex flex-col justify-center p-6 mx-auto"
                            style={{ paddingBottom: '50px' }}
                        >
                            <div className="flex items-start justify-center w-full">
                                <img
                                    src={movie.src}
                                    alt={movie.title}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                            <div className="absolute bottom-4 left-4">
                                <Typography variant='body' className="text-white font-thin">{movie.title}</Typography>
                            </div>
                        </div>
                    ))}
                </div>

                {/* "View More" Button */}
                {displayCount < movies.length && ( // Only show the button if there are more movies to display
                    <div className="flex justify-center py-8">
                        <button
                            onClick={handleViewMore}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-white hover:text-red-700 transition duration-300"
                        >
                            View More
                        </button>
                    </div>
                )}

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
