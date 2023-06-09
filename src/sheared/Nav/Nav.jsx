import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="absolute w-full">
      <div className="navbar bg-opacity-0 max-w-[1280px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link
                to="/"
                className="btn md:hidden btn-ghost normal-case text-3xl font-[800px]"
              >
                JobHunt
              </Link>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-purple-400" : "text-black"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    isActive ? "text-purple-400" : "text-black"
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li tabIndex={0}>
                <NavLink
                  to="/applied-jobs"
                  className={({ isActive }) =>
                    isActive ? "text-purple-400" : "text-black"
                  }
                >
                  Applied Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-purple-400" : "text-black"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn hidden md:block btn-ghost normal-case text-3xl font-[800px]"
          >
            JobHunt
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-bold px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-purple-400" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive ? "text-purple-400" : "text-black"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink
                to="/applied-jobs"
                className={({ isActive }) =>
                  isActive ? "text-purple-400" : "text-black"
                }
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-purple-400" : "text-black"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-bg-gradient border-0">Star Applying</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
