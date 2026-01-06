import { useEffect, useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SocailMedia from "./components/SocailMedia";
import VerticalProgressBar from "./components/VerticalScrool";
import NavBar from "./components/NavBar";
import IndexScroll from "./pages/IndexScroll/IndexScroll";
import ReadMore from "./pages/Readmore/readmore.jsx";
import ViewMore from "./pages/ViewMore/viewmore.jsx";
function App() {
  const totalNumberOfPages = 7;
  const percentageIncreasePerPage = 100 / totalNumberOfPages;
  console.log("percentageIncreasePerPage", percentageIncreasePerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const [progessPercentage, setProgressPercentage] = useState(1);

  useEffect(() => {
    if (currentPage === totalNumberOfPages) {
      setProgressPercentage(() => 100);
    } else if (currentPage) {
      setProgressPercentage(() => percentageIncreasePerPage * currentPage);
    } else {
      setProgressPercentage(() => 1);
    }
    console.log(
      "currentPage",
      currentPage,
      percentageIncreasePerPage * currentPage
    );
  }, [currentPage]);

  return (
    <>
      <Router>
        <div>
          <NavBar setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
        <div>
          <SocailMedia />
        </div>
        <div>
          <VerticalProgressBar progress={progessPercentage} />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <IndexScroll
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            }
          />
          <Route path="/readmore" element={<ReadMore />} />
          <Route path="/viewmore" element={<ViewMore />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
