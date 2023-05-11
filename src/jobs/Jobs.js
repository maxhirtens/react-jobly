import React, { useEffect, useState } from "react";
import JoblyApi from "../api";
import Loading from "../helpers/Loading";
import JobCard from "./JobCard";

const Jobs = () => {
  const [jobs, setJobs] = useState(null);

  // get jobs from API.
  async function searchJobs(name) {
    console.log(`searching API for: ${name ?? "all jobs"}`);
    let jobs = await JoblyApi.getJobs(name);
    setJobs(jobs);
  }

  // get jobs from API on mount.
  useEffect(() => {
    console.log("useEffect on Jobs Page");
    searchJobs();
  }, []);

  if (!jobs) return <Loading />;

  return (
    <section className="col-md-8">
      <div>
        {jobs.map((j) => (
          <JobCard
            key={j.id}
            companyName={j.companyName}
            title={j.title}
            salary={j.salary}
            equity={j.equity}
          />
        ))}
      </div>
    </section>
  );
};

export default Jobs;
