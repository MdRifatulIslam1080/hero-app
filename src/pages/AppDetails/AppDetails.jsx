import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToInstalledDB } from "../../utility/addToDB";
import { toast } from "react-toastify";

const AppDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const appId = parseInt(id);

  const singleApp = Array.isArray(data)
    ? data.find((app) => app.id === appId)
    : null;

  if (!singleApp) {
    return (
      <div className="p-10 text-center text-red-500">
        <h1>App with ID: {id} Not Found!</h1>
      </div>
    );
  }

  const {
    image,
    title,
    description,

    reviews,
    ratingAvg,
    downloads,
    companyName,
    size,
  } = singleApp;

  return (
    <div className="p-7 py-15 bg-[#d2d2d236]">
      <div className="lg:flex lg:gap-40">
        <div>
          <img className="rounded-lg shadow-xl" src={image} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold pt-7 ">{title}</h1>
          <h5 className="text-xl pt-3">
            Developed by{" "}
            <span className="font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {companyName}
            </span>
          </h5>
          <p className="border-b-2 border-[#0019311e] pb-5"></p>
          <div className="flex justify-between p-5 lg:gap-8 md:gap-5">
            <div className="flex gap-2 justify-center items-center ">
              <div>
                <p>Downloads</p>
                <h1 className="font-extrabold text-4xl text-center">
                  {downloads}M
                </h1>
              </div>
              <div>
                <img src="/src/assets/icon-downloads.png" alt="" />
              </div>
            </div>

            <div className="flex gap-2 justify-center items-center ">
              <div>
                <p>Average Ratings </p>
                <h1 className="font-extrabold text-4xl text-center">
                  {ratingAvg}
                </h1>
              </div>
              <div>
                <img src="/src/assets/icon-ratings.png" alt="" />
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center ">
              <div>
                <p>Total Reviews</p>
                <h1 className="font-extrabold text-4xl text-center">
                  {reviews}K
                </h1>
              </div>
              <div>
                <img src="/src/assets/icon-review.png" alt="" />
              </div>
            </div>
          </div>
          <div className="py-3">
            <button
              onClick={() => addToInstalledDB(id, title)}
              className="text-white bg-[#00D390] p-3 rounded-lg text-2xl font-semibold"
            >
              Install Now ({size}MB)
            </button>
          </div>
        </div>
      </div>
      <p className="border-b-2 py-2 border-[#0019311e]"></p>
      <h1 className="py-5 font-bold text-3xl">Ratings</h1>
      <p className="border-b-2 py-2 border-[#0019311e]"></p>
      <h1 className="py-5 font-bold text-3xl">Description</h1>
      <p>{description}</p>
    </div>
  );
};

export default AppDetails;
