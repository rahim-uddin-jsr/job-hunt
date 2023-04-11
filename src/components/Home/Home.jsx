import React from "react";
import FeaturedJobs from "./FeaturedJobs";
import Header from "./Header";
import JobCategorys from "./JobCategorys";

const Home = () => {
  return (
    <>
      <Header></Header>
      <JobCategorys />
      <FeaturedJobs />
    </>
  );
};

export default Home;
