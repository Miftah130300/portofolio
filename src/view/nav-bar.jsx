import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Fade as Hamburger } from "hamburger-react";

export function NavBar() {
  const [color, setColor] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);

  // Handle mobile version
  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth < 950);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Change navbar's color
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  // Show text in navbar when scrolling down
  const changeText = () => {
    if (window.scrollY >= 90) {
      setShowText(true);
    } else {
      setShowText(false);
    }
  };

  window.addEventListener("scroll", changeText);

  return (
    <>
      {isMobile ? (
        // Mobile Version
        <>
          <nav className="flex flex-col items-center fixed w-full bg-white shadow-md text-blue-950 p-3" id="navbar">
            <div className="flex justify-between w-full px-4">
                <div className="my-auto text-blue-150 font-semibold">
                    <h1 className="font-emibold text-[20px]">CodeByOji</h1>
                </div>
                <div className="flex justify-end xl:hidden">
                  <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
                </div>
            </div>
            {isOpen && (
              <div className="bg-white h-full max-h-[25%] w-full px-4">
                <div className="flex flex-col gap-5 my-5">
                  <div className="text-blue-950 font-medium"><Link to="landingpage">Home</Link></div>
                  <div className="text-blue-950 font-medium"><Link to="projectpage">Project</Link></div>
                  <div className="text-blue-950 font-medium"><Link to="techstack">Stack</Link></div>
                  <div className="text-blue-950 font-medium"><Link to="about">About Me</Link></div>
                  <div className="text-blue-950 font-medium"><a href="https://drive.google.com/drive/folders/1plz1gPzxyVUmkuiGUj28QXPn7JF0qXCV?usp=sharing">My Certificate</a></div>
                </div>
              </div>
            )}
          </nav>
        </>
      ) : (
        // Desktop Version
        <>
          <nav className='flex flex-col items-center' id="navbar">
            <div className={`${
              color
                ? "flex justify-between items-center fixed w-full bg-white shadow-md text-blue-950 p-3"
                : "flex justify-end items-center fixed w-full bg-transparent text-white p-3"
            }`}>
                    {showText && (
                      <div className="mx-4 my-auto text-blue-150 font-semibold">
                        <h1 className="font-semibold text-[24px]">CodeByOji</h1>
                      </div>
                    )}
                    <div className="flex justify-end lg:hidden">
                      <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
                    </div>
                    <ul className="hidden lg:flex mx-4">
                      <li className="m-4 transform hover:scale-90 transition-transform duration-300 ease-in-out cursor-pointer">
                        <Link
                          className="text-[18px] font-semibold"
                          activeClass="active"
                          to="landingpage"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Home
                        </Link>
                      </li>
                      <li className="m-4 transform hover:scale-90 transition-transform duration-300 ease-in-out cursor-pointer">
                        <Link
                          className="text-[18px] font-semibold"
                          activeClass="active"
                          to="projectpage"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Project
                        </Link>
                      </li>
                      <li className="m-4 transform hover:scale-90 transition-transform duration-300 ease-in-out cursor-pointer">
                        <Link
                          className="text-[18px] font-semibold"
                          activeClass="active"
                          to="techstack"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Stack
                        </Link>
                      </li>
                      <li className="m-4 transform hover:scale-90 transition-transform duration-300 ease-in-out cursor-pointer">
                        <Link
                          className="text-[18px] font-semibold"
                          activeClass="active"
                          to="about"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          About Me
                        </Link>
                      </li>
                      <li className="m-4 transform hover:scale-90 transition-transform duration-300 ease-in-out cursor-pointer font-semibold text-[18px]"><a href="https://drive.google.com/drive/folders/1plz1gPzxyVUmkuiGUj28QXPn7JF0qXCV?usp=sharing">My Certificate</a></li>
                    </ul>
            </div>
            {isOpen && (
              <div className="bg-white h-full max-h-[25%] w-full px-4">
                <div className="flex flex-col gap-5 my-5">
                  <div className="text-blue-950 font-medium"><Link to="landingpage">Home</Link></div>
                  <div className="text-blue-950 font-medium"><Link to="projectpage">Project</Link></div>
                  <div className="text-blue-950 font-medium"><Link to="techstack">Stack</Link></div>
                  <div className="text-blue-950 font-medium"><Link to="about">About Me</Link></div>
                  <div className="text-blue-950 font-medium"><a href="https://drive.google.com/drive/folders/1plz1gPzxyVUmkuiGUj28QXPn7JF0qXCV?usp=sharing">My Certificate</a></div>
                </div>
              </div>
            )}
          </nav>
        </>
      )}
    </>
  );
}
