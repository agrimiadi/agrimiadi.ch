import React from "react";
import { Link } from "react-router-dom";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import Whatsapp from "../images/whatsapp.png";
import Substack from "../images/substack.png";

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}

        {/* Bottom area */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social links */}
          <ul className="flex justify-center mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="ml-2">
              <a href="https://www.instagram.com/agri.miadi" target="_blank">
                <img className="h-7 w-auto" src={Instagram} alt="Instagram" />
              </a>
            </li>
            <li className="ml-2">
              <a href="https://www.facebook.com/agri.miadi" target="_blank">
                <img
                  className="h-7 pl-1 w-auto"
                  src={Facebook}
                  alt="Facebook"
                />
              </a>
            </li>
            <li className="ml-2">
              <a
                href="https://chat.whatsapp.com/FG8ccsdBPtYCortlZ5mKAf"
                target="_blank"
              >
                <img
                  className="h-7 pl-1 w-auto"
                  src={Whatsapp}
                  alt="Whatsapp"
                />
              </a>
            </li>
            <li className="ml-2">
              <a href="https://agrimiadi.substack.com/" target="_blank">
                <img className="h-7 w-auto" src={Substack} alt="Substack" />
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="flex justify-center text-sm text-gray-600 mr-4">
            Made with
            <div className="ml-1 mr-1">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            by Curdin & Sarah.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
