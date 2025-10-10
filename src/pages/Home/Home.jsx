import React from "react";
import Banner from "../../components/Banner/Banner";
import HeroApps from "../HeroApps/HeroApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Banner></Banner>
      <HeroApps data={data}></HeroApps>
    </>
  );
};

export default Home;
