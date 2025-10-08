import React from "react";
import { useLoaderData, useParams } from "react-router";

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
    ratings,
    reviews,
    ratingAvg,
    downloads,
    companyName,
  } = singleApp;
  return (
    <div>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h5>{companyName}</h5>
    </div>
  );
};

export default AppDetails;
