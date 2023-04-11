import { useEffect, useState } from "react";
import Header from "../../sheared/Header";
import { getShoppingCart } from "../../utilities/fakeDB";
import SingleAppliedJObs from "./SingleAppliedJObs";

const AppliedJobs = () => {
  // const allJobs = useLoaderData();
  const appliesJobsId = getShoppingCart();
  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    const appliedJobs = [];
    fetch(
      "https://raw.githubusercontent.com/rahim-uddin-jsr/demo-api/main/featuredJobs.json"
    )
      .then((res) => res.json())
      .then((data) => {
        for (const key in appliesJobsId) {
          const element = key;
          const inArray = data.find((jobs) => jobs.id == element);
          appliedJobs.push(inArray);
          setAllJobs(appliedJobs);
        }
      });
  }, []);
  console.log({ allJobs });
  // console.log(job);

  return (
    <>
      <Header>Applied Jobs</Header>
      {allJobs.map((job) => (
        <SingleAppliedJObs key={job.id} job={job} />
      ))}
    </>
  );
};

export default AppliedJobs;
