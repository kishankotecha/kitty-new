import React from "react";

const VerticalProgressBar = ({ progress }) => {
  console.log("progress", progress);

  return (
    <div className="xs:right-1 md:right-10 top-0 h-screen justify-center absolute z-50">
      <div className="flex items-center justify-end h-screen">
        <div className="w-1 px:w-0 h-96 bg-gray-200 rounded-full relative">
          <div
            className="bg-red-600 w-1 rounded-full absolute top-0 transition-all duration-500 ease-in-out"
            style={{ height: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default VerticalProgressBar;
