import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const FeaturedSingleJobs = ({ job }) => {
  console.log(job);
  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
    id,
  } = job;
  return (
    <div className="card card-compact items-start rounded-md border ">
      <div className="card-body text-left">
        <img className="h-[40px] w-[150px]" src={company_logo} alt="Shoes" />

        <h2 className="card-title text-2xl font-[800]">{job_title}</h2>
        <p className="text-xl opacity-70">{company_name}</p>
        <div className="my-4">
          <span className="p-3 border text-purple-400 rounded-md mr-2 ">
            {remote_or_onsite}
          </span>
          <span className="p-3 border text-purple-400 rounded-md">
            {fulltime_or_parttime}
          </span>
        </div>
        <div className="flex items-center">
          <MapPinIcon
            className="h-6 me-2 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          />
          {location}
          <CurrencyDollarIcon
            className="h-6 me-2 ms-4 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          />
          {salary}
        </div>
        <div className="card-actions mt-2">
          <Link to={`/job-details/${id}`}>
            <button className=" btn btn-bg-gradient border-0">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSingleJobs;
