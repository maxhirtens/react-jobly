import React, { useEffect, useState } from "react";
import JoblyApi from "../api";
import Loading from "../helpers/Loading";

const Jobs = () => {

  const [jobs, setJobs] = useState(null);

  // get jobs from API.
  async function searchJobs(name) {
        console.log(`searching API for: ${name ?? 'all jobs'}`)
        let jobs = await JoblyApi.getJobs(name)
        setJobs(jobs);
  }

  // get jobs from API on mount.
  useEffect(() => {
    console.log('useEffect on Jobs Page');
    searchJobs();
  }, []);

  if (!jobs) return <Loading />;
  
  console.log(jobs)

  return (
    <section className="col-md-8">
      <div>{jobs.map(j => <p>{j.title}</p>)}</div>
    </section>
  );
}

export default Jobs;