import React from 'react';
import Marquee from 'react-fast-marquee';
import first from "../../assets/Home/first.jpg";
import two from "../../assets/Home/two.jpg";
import three from "../../assets/Home/three.jpg";
import four from "../../assets/Home/four.jpg";

const Imageslider = () => {
    const clientSectiOne = [
        { id: 'client1', img: first },
        { id: 'client2', img: two },
        { id: 'client3', img: three },
        { id: 'client4', img: four },
        { id: 'client5', img: first },
        { id: 'client6', img: three },
        { id: 'client7', img: three },
        { id: 'client8', img: four },
    ];

    const clientSectiTwo = [
        { id: 'client1', img: first },
        { id: 'client2', img: two },
        { id: 'client3', img: three },
        { id: 'client4', img: four },
        { id: 'client5', img: first },
        { id: 'client6', img: three },
        { id: 'client7', img: three },
        { id: 'client8', img: four },
    ];

    return (
        <div className="flex px-4"> {/* Added justify-end to align to the right */}
            {/* Added flex to wrap both sliders in a single row */}
            <div className="xl:w-[50%]"> {/* Removed margin right to eliminate gap */}
                <Marquee direction="up">
                    {clientSectiOne?.map(({ id, img }) => (
                        <img
                            key={id}
                            src={img}
                            alt={`Client ${id}`}
                            className="mb-96 h-[80%] w-[80%]" // Added margin bottom for better spacing between images
                        />
                    ))}
                </Marquee>
            </div>
            <div className=""> {/* Removed margin left to eliminate gap */}
                <Marquee direction="down">
                    {clientSectiTwo?.map(({ id, img }) => (
                        <img
                            key={id}
                            src={img}
                            alt={`Client ${id}`}
                            className="mb-96 h-[80%] w-[80%] " // Added margin bottom for better spacing between images
                        />
                    ))}
                </Marquee>
            </div>

        </div>
    );
}

export default Imageslider;
