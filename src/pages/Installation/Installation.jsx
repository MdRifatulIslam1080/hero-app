import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  getInstalledApp,
  removeAppFromInstalledDB,
} from "../../utility/addToDB";
import InstallCard from "./InstallCard";

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
      const sortedByDownloads = [...installation].sort(
        (a, b) => a.downloads - b.downloads
      );
      setInstallation(sortedByDownloads);
    }

    if (type === "High-Low") {
      const sortedByDownloads = [...installation].sort(
        (a, b) => b.downloads - a.downloads
      );
      setInstallation(sortedByDownloads);
    }
  };

  return (
    <div className="p-6 min-h-screen">
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
          <div className="dropdown dropdown-hover dropdown-bottom  dropdown-center  rounded-xl">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By Downloads: {sort ? sort : ""}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content mr-10 menu bg-base-100 rounded-box z-1 w-52  p-2 shadow-sm"
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
