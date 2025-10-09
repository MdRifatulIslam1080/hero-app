import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledApp } from "../../utility/addToDB";
import HeroApp from "../HeroApp/HeroApp";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const data = useLoaderData();
  console.log(data);

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
      <h1 className="py-5 font-semibold text-2xl">
        {installation.length} Apps Found
      </h1>
      {installation.map((a) => (
        <HeroApp key={a.id} singleApp={a}></HeroApp>
      ))}
    </div>
  );
};

export default Installation;
