import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

const NavBar = ({ currentPage, setCurrentPage }) => {
  const [sideBar, setSideBar] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navigate = useNavigate();

  const handleNavClick = (number) => {
    setCurrentPage(() => number);
    setSideBar(false); // Close the sidebar when clicking a nav item
    navigate("/");
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollTop]);

  const navItems = [
    { id: 0, text: "HOME", path: "/" },
    { id: 1, text: "BIOGRAPHY", path: "/brandstory" },
    { id: 2, text: "FILMOGRAPHY", path: "/business" },
    { id: 3, text: "GALLERY", path: "/ourethos" },
    { id: 4, text: "NEWS", path: "/investors" },
    { id: 5, text: "AWARDS", path: "/awards" },
    { id: 6, text: "QUOTES", path: "/quotes" },
    { id: 7, text: "CONTACT", path: "/contactus" },
  ];

  const handleMenuClick = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      {" "}
      <div
        className={`w-full   z-50 mx-auto py-2  px-6 absolute top-0  transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <section className="flex  justify-between items-center">
          <span className="flex-row gap-4 z-10 tracking-wider hidden lg:flex items-center font-semibold"></span>
          <div className="flex-row 2xl:gap-20 xl:gap-14 lg:gap-10 z-10 tracking-wider hidden text-22px lg:flex items-center font-medium font-montserrat">
            {navItems.map(({ text, path }, index) => (
              <div
                className="relative group cursor-pointer flex items-center font-semibold"
                key={index}
                onClick={() => handleNavClick(index)}
              >
                <div
                  to={path}
                  className={`${
                    currentPage == index
                      ? "font-bold text-red-800"
                      : "text-white"
                  }`}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>

          <section className="lg:flex flex-row items-center gap-10 ml-4 hidden">
            {/* Add additional elements here if needed */}
          </section>

          <button
            onClick={() => setSideBar(!sideBar)}
            className="lg:hidden text-2xl flex w-full justify-between items-center"
          >
            <FiMenu className="text-3xl" />
            <div className="flex flex-row gap-3 items-center">
              <a
                href="/"
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = "/";
                }}
              ></a>
            </div>
          </button>
        </section>
      </div>
      <div
        className={`w-full z-50 py-2 px-6 fixed top-0 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } lg:hidden`} // Mobile only view
      >
        <section className="flex justify-between items-center">
          <button
            onClick={handleMenuClick}
            className="text-2xl flex w-full justify-between items-center"
          >
            <FiMenu className="text-3xl text-white" />
            <div className="flex flex-row gap-3 items-center">
              <a
                href="/"
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = "/";
                }}
              ></a>
            </div>
          </button>
        </section>

        <nav
          className={`fixed inset-0 h-screen z-50 bg-black transition-all transform ease-in-out duration-500 ${
            sideBar
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`} // Sidebar transition effect
        >
          <div className="flex justify-between items-center py-2 px-5 text-black text-xl">
            <div className="flex flex-row gap-3 items-center">
              <a
                href="/"
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = "/";
                }}
              ></a>
            </div>
            <button onClick={handleMenuClick} className="text-xl">
              <AiOutlineClose className="text-white" />
            </button>
          </div>
          <section className="flex flex-col items-center gap-10 bg-black">
            <ul className="flex flex-col items-center gap-8">
              {navItems.map(({ text, path }, index) => (
                <li
                  className={`relative group nav-item cursor-pointer flex items-center transition-opacity duration-500 ${
                    sideBar
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  key={index}
                  onClick={() => handleNavClick(index)}
                >
                  <div
                    to={path}
                    className={`${
                      currentPage === index
                        ? "font-bold text-red-800"
                        : "text-white"
                    }`}
                  >
                    {text}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
