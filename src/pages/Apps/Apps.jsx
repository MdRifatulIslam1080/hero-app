import React from "react";

const Apps = () => {
  return (
    <div className="bg-[#d2d2d236] p-6">
      <h1 className="text-center font-bold text-5xl pt-8">
        Your Installed Apps
      </h1>
      <p className="text-center text-[#627382] pt-3">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="py-10 flex justify-between">
        <div>
          <h1 className=" font-semibold text-2xl">Apps Found</h1>
        </div>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Apps;
