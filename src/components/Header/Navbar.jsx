import React from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";

const Navbar = () => {
  const linkBaseStyle =
    "px-4 py-2 text-lg font-semibold transition-colors duration-200";

  const getNavLinkClass = ({ isActive }) =>
    `${linkBaseStyle} ${
      isActive
        ? "text-[#632EE3] border-b-2 border-[#632EE3]"
        : "text-gray-600 hover:text-[#632EE3]"
    }`;

  const navLinksList = (
    <>
      <li>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/apps" className={getNavLinkClass}>
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink to="/installation" className={getNavLinkClass}>
          Installation
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinksList}
          </ul>
        </div>

        <a
          href="/"
          className="btn btn-ghost text-xl  font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent "
        >
          <img className="w-12 h-12" src="/assets/logo.png" alt="" /> HERO.IO
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinksList}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/MdRifatulIslam1080"
          className="btn text-lg font-semibold rounded-md text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
        >
          <img src="/assets/Vector (16).png" alt="" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
