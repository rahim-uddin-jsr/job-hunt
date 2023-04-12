import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../sheared/Header";
import { addToDb } from "../../utilities/fakeDB";

const JobDetails = () => {
  const [details, setDetails] = useState({});
  const id = useLoaderData();
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/rahim-uddin-jsr/demo-api/main/featuredJobs.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const d = data?.find((dD) => dD.id == id);
        setDetails(d);
      });
  }, []);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = details;

  const handleApplyJob = () => {
    addToDb(id);
    alert("success");
  };
  return (
    <>
      <Header>Job Details</Header>
      <div className="flex gap-5 justify-center items-center">
        <div className="w-[70%]">
          <p>
            <span className="font-[800]">Job Description: </span>
            <span className="opacity-50">{job_description}</span>
          </p>
          <p className="my-6 text-justify ">
            <span className="font-[800] ">Job Responsibility: </span>
            <span className="opacity-50">{job_responsibility}</span>
          </p>
          <h2 className="font-[800]">Educational_requirements:</h2>
          <p className="opacity-50">{educational_requirements}</p>
          <h2 className="font-[800] mt-6">Experiences:</h2>
          <p className="opacity-50">{experiences}</p>
        </div>
        <div className="w-[30%] header-bg-gradient card p-8 bg-opacity-50">
          <h2 className=" font-bold text-xl">Job Details</h2>
          <hr className="my-6" />
          <p className="mb-4 flex">
            <CurrencyDollarIcon
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
              className="mr-2 h-6 w-6 text-blue-500"
            />
            <span>Salary : </span>
            <span className="opacity-50">{salary}</span>
          </p>
          <p className="mb-6 flex">
            <CalendarDaysIcon
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
              className="mr-2 h-6 w-6 text-blue-500"
            />
            <span>Job Title : </span>
            <span className="opacity-50">{job_title}</span>
          </p>
          <h2 className="font-[800] text-xl">Contact Information</h2>
          <hr className="my-6" />
          <p className="mb-4 flex ">
            <PhoneIcon
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
              className="mr-2 h-6 w-6 text-blue-500"
            />
            Phone : <span></span>
            <span className="opacity-50">{contact_information?.phone}</span>
          </p>
          <p className="flex">
            <EnvelopeIcon
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
              className="h-6 w-6 text-blue-500 mr-2"
            />
            <span className="mb-4">Email : </span>
            <span className="opacity-50">{contact_information?.email}</span>
          </p>
          <p className="flex">
            <MapPinIcon
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
              className="h-10 w-10 text-blue-500 mr-2"
            />
            <span className="mb-4">Address : </span>
            <span className="opacity-50">{contact_information?.address}</span>
          </p>
          <button
            onClick={handleApplyJob}
            className="btn btn-bg-gradient  border-0 mt-6"
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
