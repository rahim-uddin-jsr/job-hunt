import React, { useEffect, useState } from "react";
import FeaturedSingleJobs from "./FeaturedSingleJobs";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [length, setLength] = useState(4);
  useEffect(() => {
    fetch("featuredJobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  const handleShowAll = () => {
    setLength(jobs.length);
  };
  return (
    <div className="text-center">
      <h2 className="text-5xl">Featured Jobs</h2>
      <p className="my-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {jobs.slice(0, length).map((job) => (
          <FeaturedSingleJobs key={job.id} job={job} />
        ))}
      </div>
      {length == 4 && (
        <button
          onClick={handleShowAll}
          className=" btn btn-bg-gradient border-0"
        >
          See All Jobs
        </button>
      )}
    </div>
  );
};

export default FeaturedJobs;
