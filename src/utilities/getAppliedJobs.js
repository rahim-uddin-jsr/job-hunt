


useEffect(() => {
  const appliedJobs = [];

  for (const key in appliesJobsId) {
    if (Object.hasOwnProperty.call(appliesJobsId, key)) {
      const element = key;
      const inArray = allJobs?.find((jobs) => jobs.id == element);
      appliedJobs.push(inArray);
    }

    setD(appliedJobs);
  }
}, [allJobs, appliesJobsId]);
