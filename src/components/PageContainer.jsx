import React from "react";

const PageContainer = ({ backgroundImage, children }) => {
  return (
    <div
      className={`h-screen justify-center bg-center overflow-auto ${backgroundImage ? "bg-cover" : "bg-black"
        }`}
      style={
        backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
      }
    >
      {children}
    </div>
  );
};

export default PageContainer;
