import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api";
import SearchForm from "../helpers/SearchForm";
import Loading from "../helpers/Loading";

// show list of all companies with jobs.
const Companies = () => {
  const [companies, setCompanies] = useState(null);

  // get companies from API.
  async function searchCompanies(name) {
        console.log(`searching API for: ${name ?? 'all companies'}`)
        let companies = await JoblyApi.getCompanies(name)
        setCompanies(companies);
  }

  // get companies from API on mount.
  useEffect(() => {
    console.log('usEffect on Companies Page');
    searchCompanies();
  }, []);

  // i'm not sure why app is broken if i don't return this...
  if (!companies) return <Loading />;
  
  // Response if search turns up empty.
  if(!companies.length) return <p>No companies found. <Link to="/">Try Again</Link></p>

  // map through list and create cards for each company.
  return (
    <section className="col-md-8">
      <div>
        <SearchForm searchFor={searchCompanies} />
        {companies.map(c => (
          <CompanyCard
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Companies;