import React, { useState } from 'react';
import Modal from 'react-modal';
import Youtube1 from "../../assets/Home/YouTube01.jpg";
import Youtube2 from "../../assets/Home/YouTube02.jpg";
import Youtube3 from "../../assets/Home/YouTube03.jpg";
import Youtube4 from "../../assets/Home/YouTube04.jpg";
import Youtube5 from "../../assets/Home/YouTube05.jpg";
import Youtube6 from "../../assets/Home/YouTube06.jpg";
import Youtube7 from "../../assets/Home/YouTube07.jpg";
import Youtube8 from "../../assets/Home/YouTube08.jpg";
import PageContainer from "../../components/PageContainer";
import { Typography } from '../../components/Typography';

// Set modal accessibility
Modal.setAppElement('#root');

const videos = [
  {
    thumbnail: Youtube1,
    videoUrl: "https://www.youtube.com/embed/PcZs_X11D24?si=jAMkxkCBLB4mL3Y6",
    title: "Sanju Weds Geetha 2",
    description: "Sanju Weds Geetha 2 Official Teaser | Srinagar Kitty | Rachita Ram.",
  },
  {
    thumbnail: Youtube2,
    videoUrl: "https://www.youtube.com/embed/q2LZ3KNdIp0?si=ruXwZ5rGc-OnwoER",
    title: "Sanju Weds Geetha 2",
    description: "Sanju Weds Geetha 2 Official Movie Update.",
  },
  {
    thumbnail: Youtube3,
    videoUrl: "https://www.youtube.com/embed/1Gc5koREfUY?si=LGFKsRRgKQuD3LsH",
    title: "Gowli Movie Public Review",
    description: "Gowli Movie Public Review | Srinagar Kitty | Pavana Gowda | Soora Shekar | Kannada Filmology",
  },
  {
    thumbnail: Youtube4,
    videoUrl: "https://www.youtube.com/embed/hpThvhX5Ic0?si=E3T4NcTs6W_3a9xa",
    title: "Sanju Weds Geetha 2 Look",
    description: "First look of Sanju Weds Geetha 2 revealed.",
  },
  {
    thumbnail: Youtube5,
    videoUrl: "https://www.youtube.com/embed/f7FaIsAJ1r8?si=cW6FErn7hyYIO0vp",
    title: "Srinagar Kitty |  Puneeth Rajkumar ",
    description: " ನಗುವಿನ ಶ್ರೀಮಂತ ಅಲ್ಲ ಅವ್ರು ನಗುವಿನ ಮಗು",
  },
  {
    thumbnail: Youtube6,
    videoUrl: "https://www.youtube.com/embed/AzxH_LDts4Q?si=JYcllHhaX3S7BnAZ",
    title: "Ravichandran / Kitty ",
    description: "Ravichandran & Srinagar Kitty event highlights. ",
  },
  {
    thumbnail: Youtube7,
    videoUrl: "https://www.youtube.com/embed/O9rkL76_G6w?si=huTZi5qve1Ive_Fy",
    title: "Srinagar Kitty Interview",
    description: "Exclusive interview with Srinagar Kitty about his latest movie.",
  },
  {
    thumbnail: Youtube8,
    videoUrl: "https://www.youtube.com/embed/WkA18ry-Kfs?si=GMXHbAG6gL4A-3Ew",
    title: "Srinagar Kitty Interview",
    description: "Exclusive interview with Srinagar Kitty about his latest movie.",
  },
];

const LatestNewsSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const handleThumbnailClick = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setCurrentVideoUrl("");
    setModalIsOpen(false);
  };

  return (
    <PageContainer>
      <div className="bg-black text-white py-10 flex justify-center items-center min-h-screen">
        <div className="container mx-auto hidden lg:block">
          <Typography variant='h3' className="mb-24 text-center">
            Latest News & Updates
          </Typography>
          <div className="flex flex-col items-center">
            {[0, 1].map(row => (
              <div
                key={row}
                className="flex flex-wrap justify-center gap-4 mb-8 md:flex-nowrap md:gap-6 lg:gap-10 2xl:gap-20"
              >
                {videos.slice(row * 4, row * 4 + 4).map((video, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer w-1/2 sm:w-1/2 md:w-1/5 max-w-xs"
                    onClick={() => handleThumbnailClick(video.videoUrl)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={`Thumbnail ${index}`}
                      className="w-full h-auto rounded-lg transition duration-500 transform group-hover:scale-95 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
                      <Typography variant="h6" className="font-medium text-center">{video.title}</Typography>
                      <Typography variant="body" className="mt-2 text-center text-gray-300">{video.description}</Typography>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto lg:hidden ">
          <Typography variant='h3' className=" text-center xsm:text-[29px]">
            Latest News & Updates
          </Typography>
          <div className="flex flex-col items-center">
            {[0, 1].map(row => (
              <div
                key={row}
                className="flex flex-wrap justify-center gap-0  md:gap-6 lg:gap-10 2xl:gap-20"
              >
                {videos.slice(row * 4, row * 4 + 4).map((video, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer w-1/2 max-w-xs mt-5 pl-2" // Fixed width to maintain two per row
                    onClick={() => handleThumbnailClick(video.videoUrl)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={`Thumbnail ${index}`}
                      className="w-full h-auto rounded-lg transition duration-500 transform group-hover:scale-95 object-cover"
                    />
                    {/* <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
                      <Typography variant="h6" className="font-medium text-center">{video.title}</Typography>
                      <Typography variant="body" className="mt-2 text-center text-gray-300">{video.description}</Typography>
                    </div> */}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            height: '80%',
            maxWidth: '800px',
            maxHeight: '600px',
            padding: 0,
            overflow: 'hidden',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
        contentLabel="Video Modal"
      >
        <div className="relative w-full h-full">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white bg-transparent font-bold"
          >
            Close
          </button>
          {currentVideoUrl && (
            <iframe
              src={currentVideoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
              className="w-full h-full"
            />
          )}
        </div>
      </Modal>
    </PageContainer>
  );
};

export default LatestNewsSection;
