import React, { useEffect, useState } from "react";
import FeaturedSingleJobs from "./FeaturedSingleJobs";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("featuredJobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="text-center">
      <h2 className="text-5xl">Featured Jobs</h2>
      <p className="my-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {jobs.map((job) => (
          <FeaturedSingleJobs key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
