import { useEffect, useRef, useState } from "react";
import Header from "../../sheared/Header";
import { getAppliedJobs } from "../../utilities/fakeDB";
import SingleAppliedJObs from "./SingleAppliedJObs";

const AppliedJobs = () => {
  const [sortBy, setSortBy] = useState(false);
  const [sortByRemote, setSortByRemote] = useState(false);
  const [sortByOnsite, setSortByOnsite] = useState([]);
  const appliesJobsId = getAppliedJobs();
  const [allJobs, setAllJobs] = useState([]);
  const [allSortedJobs, setSortedAllJobs] = useState([]);
  const selectRef = useRef("");
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

  const handleSort = () => {
    setSortBy(true);
    const selectedValue = selectRef.current.value;
    if (selectedValue == "Remote" || selectedValue == "Onsite") {
      if (selectedValue == "Remote") {
        const fs = allJobs.sort((a, b) => {
          const nameA = a.remote_or_onsite.toUpperCase(); // ignore upper and lowercase
          const nameB = b.remote_or_onsite.toUpperCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
        });
        setSortByOnsite(false);
        setSortByRemote(fs);
      } else {
        setSortByOnsite(true);
        const fs = allJobs.sort((a, b) => {
          const nameA = a.remote_or_onsite.toUpperCase(); // ignore upper and lowercase
          const nameB = b.remote_or_onsite.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        });
        setSortByRemote(false);
        setSortByOnsite(fs);
      }
    }
  };
  return (
    <>
      <Header>Applied Jobs</Header>

      <div className="flex justify-end">
        <select
          defaultValue={"Filter By"}
          onChange={handleSort}
          ref={selectRef}
          className="mb-4 rounded-none select select-bordered select-sm w-full max-w-[150px]"
        >
          <option value={"Filter By"} disabled>
            Filter By
          </option>
          <option>Remote</option>
          <option>Onsite</option>
        </select>
      </div>
      {!sortBy &&
        allJobs.map((job) => <SingleAppliedJObs key={job.id} job={job} />)}
      {sortByRemote &&
        sortByRemote.map((job) => <SingleAppliedJObs key={job.id} job={job} />)}
      {sortByOnsite &&
        sortByOnsite.map((job) => <SingleAppliedJObs key={job.id} job={job} />)}
    </>
  );
};

export default AppliedJobs;
