import React from "react";

const Banner = () => {
  return (
    <div className="text-center py-15">
      <h1 className="text-7xl font-bold ">
        We Build <br />
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive{" "}
        </span>
        Apps
      </h1>
      <p className="my-7 text-[#627382]">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="gap-5 block md:flex justify-center text-2xl font-semibold">
        <div className="border-1 border-[#D2D2D2] rounded-md p-3 justify-center flex gap-2">
          <img src="./assets/playstore.png" alt="" /> Google Play
        </div>
        <div className="border-1 border-[#D2D2D2] px-5 justify-center rounded-md p-3 flex gap-2">
          <img src="./assets/appstore.png" alt="" /> App Store
        </div>
      </div>
      <div className="flex justify-center items-center mt-15">
        <img src="/src/assets/hero.png" alt="" />
      </div>
      <div className="py-10 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
        <h3 className="text-4xl font-semibold pb-4">
          Trusted by Millions, Built for You
        </h3>
        <div className="flex pt-5 justify-center  gap-15">
          <div className="flex justify-center items-center gap-5">
            <div className="">
              <p>Total Downloads</p>
              <h1 className="font-bold text-6xl py-2">29.6M</h1>
              <p>21% more than last month</p>
            </div>
            <div>
              <img
                className="filter brightness-0 invert"
                src="/src/assets/icon-downloads.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div>
              <p>Total Reviews</p>
              <h1 className="font-bold text-6xl py-2  ">906K</h1>
              <p>46% more than last month</p>
            </div>
            <div>
              <img
                className="filter brightness-0 invert"
                src="/src/assets/icon-review.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div>
              {" "}
              <p>Active Apps</p>
              <h1 className="font-bold text-6xl py-2">132+</h1>
              <p>31 more will Launch</p>
            </div>
            <div>
              <img
                className="filter brightness-0 invert"
                src="/src/assets/icon-ratings.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
