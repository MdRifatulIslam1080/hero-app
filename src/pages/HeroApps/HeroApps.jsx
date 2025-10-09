import React, { Suspense } from "react";
import HeroApp from "../HeroApp/HeroApp";
import { useNavigate } from "react-router";

const HeroApps = ({ data }) => {
  const router = useNavigate();
  const handleButton = () => {
    router("/apps");
  };

  // useEffect(() => {
  //   fetch("appData.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setHeroApps(data);
  //     });
  // });

  // const appPromise = fetch("./appData.json").then((res) => res.json());

  return (
    <div>
      <h1 className="font-bold text-5xl text-center">Trending Apps</h1>
      <p className="text-center py-5 text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <Suspense fallback={<span>loading........</span>}>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 p-4 lg:p-0">
          {data.slice(0, 8).map((singleApp) => (
            <HeroApp key={singleApp.id} singleApp={singleApp}></HeroApp>
          ))}
        </div>

        <div className="flex justify-center py-5">
          <button onClick={handleButton} className="p-3 bg-amber-500">
            Show All
          </button>
        </div>
      </Suspense>
    </div>
  );
};

export default HeroApps;
