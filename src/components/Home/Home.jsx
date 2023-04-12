import React from "react";
import FeaturedJobs from "./FeaturedJobs";
import Header from "./Header";
import JobCategorys from "./JobCategorys";

const Home = () => {
  return (
    <>
      <Header></Header>

      <div className="max-w-[1280px] mx-auto">
        <JobCategorys />
        <FeaturedJobs />
      </div>
    </>
  );
};

export default Home;
