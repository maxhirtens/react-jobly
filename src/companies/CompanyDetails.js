import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobCard from "../jobs/JobCard";
import Loading from "../helpers/Loading";

const CompanyDetails = () => {
  const { name } = useParams();

  const [company, setCompany] = useState(null);

  useEffect(function getCompanyAndJobsForUser() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(name));
    }

    getCompany();
  }, [name]);

  if (!company) return <Loading />;

  return (
    <section className="CompanyJobCards col-md-8">
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      <ul><i>Jobs</i>
        {company.jobs.map(j => <li><JobCard
          companyName={company.name}
          title={j.title}
          equity={j.equity}
          salary={j.salary}
        /></li>)}
      </ul>
      
    </section>
  );
}

export default CompanyDetails;