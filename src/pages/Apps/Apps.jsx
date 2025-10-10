import React, { Suspense, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import HeroApp from "../HeroApp/HeroApp";

const Apps = () => {
  const [search, setSearch] = useState("");
  const data = useLoaderData();
  const [allApps, setAllApps] = useState([]);
  useEffect(() => {
    if (search === "") {
      setAllApps(data);
    } else {
      const filterApp = data.filter((a) =>
        a.title.toLowerCase().includes(search.toLowerCase())
      );
      setAllApps(filterApp);
    }
  }, [data, search]);

  const handleButton = () => {
    setSearch("");
  };

  return (
    <div className="p-6 lg:px-12">
      <h1 className="text-center font-bold text-5xl pt-8">
        Our All Applications
      </h1>
      <p className="text-center text-[#627382] pt-3">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="py-10 flex justify-between">
        <div>
          <h1 className=" font-semibold text-2xl">
            {allApps.length} Apps Found
          </h1>
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
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:gap-10 md:grid-cols-3 lg:grid-cols-4 p-4 lg:p-0">
        {allApps?.map((singleApp) => (
          <HeroApp key={singleApp.id} singleApp={singleApp}></HeroApp>
        ))}
      </div>
      {allApps?.length === 0 && (
        <div className="flex justify-center flex-col items-center py-5">
          <div className="flex flex-col justify-center items-center">
            <img src="/assets/OBJECTS.png" alt="" />
            <h1 className="font-semibold text-5xl">OPPS!! APP NOT FOUND</h1>
            <p className="mt-5">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
          </div>

          <button
            onClick={handleButton}
            className="p-3 mt-10 text-lg font-semibold rounded-md text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
};

export default Apps;
