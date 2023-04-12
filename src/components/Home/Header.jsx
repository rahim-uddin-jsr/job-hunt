import React from "react";

const Header = () => {
  return (
    <div className="w-full header-bg-gradient">
      <div className="hero mx-50 py-36">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <img
            loading="lazy"
            src="https://i.ibb.co/zbhLJpp/P3-OLGJ1-copy-1.png"
            className="object-cover lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div className="lg:w-1/2 ">
            <h1 className="text-2xl mt-8 lg:mt-0 md:text-5xl font-bold">
              One Step Closer To Your Dream Job
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn btn-bg-gradient border-0">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
