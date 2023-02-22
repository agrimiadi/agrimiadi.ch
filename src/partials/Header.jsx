import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import Whatsapp from "../images/whatsapp.png";
import Substack from "../images/substack.png";

function Header() {
  const [top, setTop] = useState(true);
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        console.log("id", id);
        const element = document.getElementById(id);
        console.log(element);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            {/* <Link to="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
              </svg>
            </Link> */}
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center space-x-2">
              {/* <li>
                <Link
                  to="/signin"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Bestellformular
                </Link>
              </li> */}
              <li>
                <Link
                  to="/"
                  className="font-medium text-lg text-gray-600 hover:text-gray-900 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  DER HOF
                </Link>
              </li>
              <li className="hidden md:block">
                <Link
                  to="/#products"
                  className="font-medium text-lg text-gray-600 hover:text-gray-900 px-3 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  PRODUKTE
                </Link>
              </li>
              <li className="hidden md:block">
                <Link
                  to="/#story"
                  className="font-medium text-lg text-gray-600 hover:text-gray-900 px-3 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  UNSERE GESCHICHTE
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-medium text-lg text-gray-600 hover:text-gray-900 px-3 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  KONTAKT
                </Link>
              </li>
              <li>
                <a href="https://www.instagram.com/agri.miadi" target="_blank">
                  <img
                    className="h-6 w-auto ml-2"
                    src={Instagram}
                    alt="Instagram"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/agrimiadi" target="_blank">
                  <img className="h-6 w-auto" src={Facebook} alt="Facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/FG8ccsdBPtYCortlZ5mKAf"
                  target="_blank"
                >
                  <img className="h-6 w-auto" src={Whatsapp} alt="Whatsapp" />
                </a>
              </li>
              <li>
                <a href="https://agrimiadi.substack.com/" target="_blank">
                  <img className="h-6 w-auto" src={Substack} alt="Substack" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
