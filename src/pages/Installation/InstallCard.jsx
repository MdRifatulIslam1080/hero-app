// src/pages/Installation/InstallCard.jsx

import React from "react";
import { Link } from "react-router";

const InstallCard = ({ singleApp, handleUninstall }) => {
  const { title, image, downloads, ratingAvg, id, size } = singleApp;

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4 border border-[#0019311e]">
      <Link
        to={`/appDetails/${id}`}
        className="flex items-center gap-4 flex-grow cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
      >
        <img
          className="rounded-lg w-16 h-16 object-cover"
          src={image}
          alt={title}
        />
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
            <span className="flex items-center gap-1">
              <img
                className="h-4 w-4"
                src="./assets/icon-downloads.png"
                alt=""
              />
              {downloads}M
            </span>
            <span className="flex items-center gap-1">
              <img className="h-4 w-4" src="./assets/icon-ratings.png" alt="" />
              {ratingAvg}
            </span>
            <span className="font-semibold text-xs">{size}MB</span>
          </div>
        </div>
      </Link>

      {/* Uninstall Button (Right side) */}
      <button
        onClick={() => handleUninstall(id.toString(), title)}
        className="btn text-lg font-semibold rounded-md text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-red-600"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallCard;
