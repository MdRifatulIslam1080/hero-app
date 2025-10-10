// import React, { use } from "react";
import { Link } from "react-router";

const HeroApp = ({ singleApp }) => {
  //   const data = use(appPromise);
  //   console.log(data);
  const { title, image, companyName, downloads, ratingAvg, id } = singleApp;
  return (
    <Link to={`/appDetails/${id}`}>
      <div className="card  w-96 shadow-lg cursor-pointer bg-white hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
        <figure className="">
          <img
            className="rounded-lg  w-full h-full object-cover "
            src={image}
            alt={companyName}
          />
        </figure>
        <div className="card-body px-0">
          <h2 className="card-title font-bold pb-5 ">{title}</h2>

          <div className="card-actions justify-between">
            <div className="badge bg-green-100 p-5 ">
              <span>
                <img
                  className="h-5 w-5"
                  src="./assets/icon-downloads.png"
                  alt=""
                />
              </span>
              <span className="text-green-500 font-semibold">{downloads}M</span>
            </div>
            <div className="badge bg-amber-100 p-5">
              <span>
                <img
                  className="h-5 w-5"
                  src="./assets/icon-ratings.png"
                  alt=""
                />
              </span>
              <span className="text-orange-500 font-semibold ">
                {ratingAvg}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeroApp;

