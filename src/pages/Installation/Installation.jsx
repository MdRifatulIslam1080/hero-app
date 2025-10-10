import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  getInstalledApp,
  removeAppFromInstalledDB,
} from "../../utility/addToDB";
import HeroApp from "../HeroApp/HeroApp";
import InstallCard from "./InstallCard";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toast } from "react-toastify";

const MySwal = withReactContent(Swal);

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  const handleUninstall = (id, title) => {
    removeAppFromInstalledDB(id, title);
    const updatedInstallation = installation.filter(
      (app) => app.id.toString() !== id
    );
    setInstallation(updatedInstallation);
  };

  useEffect(() => {
    const installedAppData = getInstalledApp();

    const ConvertedInstalledApps = installedAppData.map((id) => parseInt(id));
    const myInstallation = data.filter((app) =>
      ConvertedInstalledApps.includes(app.id)
    );
    setInstallation(myInstallation);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);

    if (type === "Low-High") {
      const sortedBySize = [...installation].sort((a, b) => a.size - b.size);
      setInstallation(sortedBySize);
    }

    if (type === "High-Low") {
      const sortedBySize = [...installation].sort((a, b) => b.size - a.size);
      setInstallation(sortedBySize);
    }
  };

  return (
    <div className="bg-[#d2d2d236] p-6">
      <h1 className="text-center font-bold text-5xl pt-8">
        Your Installed Apps
      </h1>
      <p className="text-center text-[#627382] pt-3">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="py-5 flex justify-between">
        <div>
          <h1 className=" font-semibold text-2xl">
            {installation.length} Apps Found
          </h1>
        </div>
        <div>
          <div className="dropdown dropdown-hover dropdown-bottom dropdown-center rounded-xl">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By Size: {sort ? sort : ""}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52  p-2 shadow-sm"
            >
              <li>
                <a onClick={() => handleSort("Low-High")}>Low-High</a>
              </li>
              <li>
                <a onClick={() => handleSort("High-Low")}>High-Low</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="border-b-2 border-[#0019311e] pb-5 mb-10"></p>

      {installation.map((a) => (
        // <HeroApp key={a.id} singleApp={a}></HeroApp>
        <InstallCard
          key={a.id}
          singleApp={a}
          handleUninstall={handleUninstall}
        ></InstallCard>
      ))}

      {installation.length === 0 && (
        <div className="text-center py-10">
          <h2 className="text-2xl text-gray-500">
            You have no installed apps.
          </h2>
        </div>
      )}
    </div>
  );
};

export default Installation;

// khgjgkjjlkjl.m
