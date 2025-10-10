import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  const LoadingFallback = (
    <div className="flex justify-center items-center h-64 p-10">
      <span className="text-3xl font-semibold text-[#632EE3]">
        Loading data...
      </span>
    </div>
  );

  return (
    <div className="">
      <Navbar></Navbar>
      <Suspense fallback={LoadingFallback}>
        <div className="bg-[#d2d2d23a]">
          <Outlet></Outlet>
        </div>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default Root;
