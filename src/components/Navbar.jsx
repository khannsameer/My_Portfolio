import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import myPhoto from "../assets/myPhoto.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // scroll blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-lg bg-opacity-50" : "bg-opacity-100"
        } bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={myPhoto} alt="s" className="w-15 h-15 object-contain" />
            <p className="text-white text-2xl font-bold cursor-pointer flex">
              Sameer &nbsp;
              <span className="sm:block hidden text-2xl">
                | Frontend Developer
              </span>
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((Link) => (
              <li
                key={Link.id}
                className={`${
                  active === Link.title
                    ? "text-white font-bold"
                    : "text-gray-400"
                } hover:text-white text-[16.5px] hover:scale-105 font-medium cursor-pointer transition-colors duration-300 ease-in-out`}
                onClick={() => setActive(Link.title)}
              >
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] min-h-[160px] z-10 rounded-xl flex flex-col items-center justify-center shadow-lg`}
            >
              <ul className="list-none flex justify-center items-center flex-col gap-4 w-full text-center">
                {navLinks.map((Link) => (
                  <li
                    key={Link.id}
                    className={`${
                      active === Link.title ? "text-white" : "text-gray-400"
                    } font-poppins font-semibold text-lg cursor-pointer tracking-wide leading-relaxed text-[16px] w-full text-center transition-all duration-300 ease-in-out 
                  hover:text-white hover:scale-110`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(Link.title);
                    }}
                  >
                    <a href={`#${Link.id}`}>{Link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
