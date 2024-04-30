import React from "react";

const Navbar = () => {
  return (
    <div className="px-9">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">HdHub4U</a>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end flex justify-end">
          {" "}
          {/* Added flex and justify-end */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  z-[1] p-2 shadow bg-base-100 rounded-box w-auto min-w-max absolute right-0"
            >
              <li>
                <a>Disclaimer</a>
              </li>
              <li>
                <a>How To Download?</a>
              </li>
              <li>
                <a>Join Our Group</a>
              </li>
              <li>
                <a>Movie Request Page</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
