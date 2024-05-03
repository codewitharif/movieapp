import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-9">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to="/"
          >
            <span className="ml-3 text-xl" style={{ color: "#4b5563" }}>
              HdHub4U
            </span>
          </Link>
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:ml-auto flex-col md:flex-row items-center`}
          >
            <Link
              className="mr-5 hover:text-gray-900"
              to="/disclaimer"
              onClick={toggleMenu}
            >
              Disclaimer
            </Link>
            <Link
              className="mr-5 hover:text-gray-900"
              to="/howtodownload"
              onClick={toggleMenu}
            >
              How To Download?
            </Link>
            <Link
              className="mr-5 hover:text-gray-900"
              to="/joinourgroup"
              onClick={toggleMenu}
            >
              Join Our Group
            </Link>
            <Link
              className="mr-5 hover:text-gray-900"
              to="/movierequest"
              onClick={toggleMenu}
            >
              Movie Request Page
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
