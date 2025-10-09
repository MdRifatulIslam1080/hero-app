import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledApp } from "../../utility/addToDB";
import HeroApp from "../HeroApp/HeroApp";
import InstallCard from "./InstallCard";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const data = useLoaderData();
  console.log(data);

  const handleUninstall = () => {};

  useEffect(() => {
    const installedAppData = getInstalledApp();
    const ConvertedInstalledApps = installedAppData.map((id) => parseInt(id));
    const myInstallation = data.filter((app) =>
      ConvertedInstalledApps.includes(app.id)
    );
    setInstallation(myInstallation);
  }, []);
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
              Sort By Size
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52  p-2 shadow-sm"
            >
              <li>
                <a>Low-High</a>
              </li>
              <li>
                <a>High-Low</a>
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
    </div>
  );
};

export default Installation;
