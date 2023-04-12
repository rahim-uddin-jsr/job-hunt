import Lottie from "lottie-react";
import React from "react";
import { Link, useRouteError } from "react-router-dom";

import groovyWalkAnimation from "../../assets/3146-404page.json";
import Nav from "../../sheared/Nav/Nav";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  console.log(error);
  return (
    <>
      <Nav />
      <div className="flex items-center h-screen p-16 ">
        <div className="flex flex-col items-center justify-center px-5 mx-auto my-8">
          <Lottie animationData={groovyWalkAnimation} />
          <div className="max-w-md text-center">
            <p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
              {error?.message}
            </p>
            <Link to="/" className="btn">
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
