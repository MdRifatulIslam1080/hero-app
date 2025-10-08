import React from "react";
import Banner from "../../components/Banner/Banner";
import HeroApps from "../HeroApps/HeroApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="bg-[#d2d2d23a]">
      <Banner></Banner>
      <HeroApps data={data}></HeroApps>
    </div>
  );
};

export default Home;
