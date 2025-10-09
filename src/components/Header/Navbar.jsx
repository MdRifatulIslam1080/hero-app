import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to={"/"}>
        <li className="text-[#627382]">Home</li>
      </Link>
      <Link to={"/apps"}>
        <li className="lg:mx-10 text-[#627382]">Apps</li>
      </Link>
      <Link to={"/installation"}>
        <li className="text-[#627382]">Installation</li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl  font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
          <img className="w-12 h-12" src="/src/assets/logo.png" alt="" />{" "}
          HERO.IO
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn text-lg font-semibold rounded-md text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          <img src="/src/assets/Vector (16).png" alt="" /> Contribute
        </button>
      </div>
    </div>
  );
};

export default Navbar;