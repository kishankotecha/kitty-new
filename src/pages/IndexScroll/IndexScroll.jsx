import React, { useState } from "react";
import ReactPageScroller from "../../components/Scroll";
import Home from "../Home/Home";
import News from "../News/News";
import Biography from "../Biography/Biography";
import Filmography from "../Filmography/Filmography";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import Achievements from "../Achievements/Achievements";
import Quotes from "../Quotes/Quotes";

const IndexScroll = ({ currentPage, setCurrentPage }) => {
  const handlePageChange = (number) => {
    console.log("page changes to ", number);
    setCurrentPage(number);
  };
  const handleBeforePageChange = (number) => {
    console.log(number);
  };
  return (
    <div className="top-0">
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <Home />
        <Biography />
        <Filmography />
        <Gallery />
        <News />
        <Achievements />
        <Quotes />
        <Contact />
      </ReactPageScroller>
    </div>
  );
};

export default IndexScroll;
