import React, { useState, useEffect } from "react";
import PageContainer from "../../components/PageContainer";
import gallery1 from "../../assets/Home/gallery1.jpg";
import gallery2 from "../../assets/Home/gallery2.jpg";
import gallery3 from "../../assets/Home/gallery3.jpg";
import gallery4 from "../../assets/Home/gallery4.jpg";
import gallery5 from "../../assets/Home/gallery5.jpg";
import "./Gallery.css";
const ImageCarousel = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

  const [numImages, setNumImages] = useState(5);

  const [currentImages, setCurrentImages] = useState(images.slice(0, numImages));
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumImages(3);
      } else {
        setNumImages(5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    setCurrentImages(images.slice(0, numImages));
  }, [numImages]);
  const updateImages = (newImages) => {
    setFade(true); // Trigger fade-out
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentImages(newImages); // Update to new images
      setFade(false); // Trigger fade-in
      setIsTransitioning(false);
    }, 500); // Match this timeout to CSS transition duration
  };
  const shiftLeft = () => {
    const newImages = [...currentImages];
    const fifthImage = newImages[0];
    newImages[0] = newImages[1];
    newImages[1] = newImages[2];
    newImages[2] = newImages[3];
    newImages[3] = newImages[4];
    newImages[4] = fifthImage;

    const nextImageIndex = (startIndex + 1) % images.length;
    setStartIndex(nextImageIndex);
    updateImages(newImages);
  };

  const MobileShiftLeft = () => {
    const newImages = [...images]; // Keep a copy of the original image array

    // Calculate new start index to get the next batch of images
    const nextStartIndex = (startIndex + 1) % images.length;

    // Slice out the required number of images starting from the next start index
    const updatedImages = newImages
      .slice(nextStartIndex, nextStartIndex + numImages)
      .concat(newImages.slice(0, Math.max(0, nextStartIndex + numImages - images.length)));

    setStartIndex(nextStartIndex);
    updateImages(updatedImages);
  };

  const MobileShiftRight = () => {
    const newImages = [...images]; // Use the original array of images

    // Calculate the previous start index by moving backward and wrapping around
    const prevStartIndex = (startIndex - 1 + images.length) % images.length;

    // Slice out the required number of images starting from the previous start index
    const updatedImages = newImages
      .slice(prevStartIndex, prevStartIndex + numImages)
      .concat(newImages.slice(0, Math.max(0, prevStartIndex + numImages - images.length)));

    setStartIndex(prevStartIndex);
    updateImages(updatedImages);
  };


  const shiftRight = () => {
    const newImages = [...currentImages];
    const firstImage = newImages[4];
    newImages[4] = newImages[3];
    newImages[3] = newImages[2];
    newImages[2] = newImages[1];
    newImages[1] = newImages[0];
    newImages[0] = firstImage;

    const prevImageIndex = (startIndex - 1 + images.length) % images.length;
    setStartIndex(prevImageIndex);
    updateImages(newImages);
  };

  const shiftFromLast = () => {
    const newImages = [...currentImages];

    const fifthImage = newImages[1];
    const forthImage = newImages[0];
    newImages[0] = newImages[2];
    newImages[1] = newImages[3];
    newImages[2] = newImages[4];
    newImages[3] = forthImage;
    newImages[4] = fifthImage;

    const nextImageIndex = (startIndex + 1) % images.length;
    setStartIndex(nextImageIndex);
    updateImages(newImages);
  };

  const shiftFromStart = () => {
    const newImages = [...currentImages];

    const secondImage = newImages[1];
    const thirdImage = newImages[2];
    const centerImage = newImages[0]
    const fifthImage = newImages[4];
    const forthImage = newImages[3];
    newImages[0] = forthImage;
    newImages[1] = fifthImage;
    newImages[2] = centerImage;
    newImages[3] = secondImage;
    newImages[4] = thirdImage;

    const nextImageIndex = (startIndex + 1) % images.length;
    setStartIndex(nextImageIndex);
    updateImages(newImages);
  };

  const handleClick = (index) => {
    if (isTransitioning) return;
    if (numImages === 3) {
      if (index === 0) {
        MobileShiftLeft();
      } else if (index === 2) {
        MobileShiftRight();
      }
    } else {
      if (index === 3) {
        shiftLeft();
      } else if (index === 1) {
        shiftRight();
      } else if (index === 4) {
        shiftFromLast();
      } else if (index === 0) {
        shiftFromStart();
      }
    }

  };


  return (
    <PageContainer >
      <div className="h-screen flex items-center justify-center">
        <div className="relative flex items-center justify-center sm:px-128px xsm:-mx-24">
          <div className="flex items-center justify-center">
            {currentImages.slice(0, numImages).map((image, index) => {
              let imageSizeClass = '';
              let zIndexClass = '';
              let opacityClass = '';

              if (index === 0 || index === 1 || index === 3 || index === 4) {
                // Apply background with 60% opacity for 1st, 2nd, 4th, and 5th images
                opacityClass = 'bg-opacity-60 bg-black';
              }

              if (numImages === 3) {
                // Handle styles for smaller screens (3 images)
                if (index === 0) {
                  imageSizeClass = 'w-1/6'; // Smaller side image
                  zIndexClass = 'z-10';
                } else if (index === 1) {
                  imageSizeClass = 'w-1/3'; // Larger center image
                  zIndexClass = 'z-20';
                } else if (index === 2) {
                  imageSizeClass = 'w-1/6'; // Smaller side image
                  zIndexClass = 'z-10';
                }
              } else {
                // Default styles for 5 images
                if (index === 0) {
                  imageSizeClass = 'w-1/6';
                  zIndexClass = 'z-10';
                } else if (index === 1) {
                  imageSizeClass = 'w-1/5';
                  zIndexClass = 'z-20';
                } else if (index === 2) {
                  imageSizeClass = 'w-1/4';
                  zIndexClass = 'z-30';
                } else if (index === 3) {
                  imageSizeClass = 'w-1/5';
                  zIndexClass = 'z-20';
                } else if (index === 4) {
                  imageSizeClass = 'w-1/6';
                  zIndexClass = 'z-10';
                }
              }

              return (
                <div
                  key={index}
                  className={`${imageSizeClass} ${zIndexClass} relative transition-transform transform scale-125`}
                >
                  <div className={`${opacityClass}`}>
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className={`object-cover rounded-3xl shadow-lg ${fade ? 'fade-out' : 'fade-in'}`}
                      onClick={() => handleClick(index)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </PageContainer>
  );
};

export default ImageCarousel;
