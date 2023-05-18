import React, { useContext, useState } from "react";
import UserContext from "../auth/UserContext";
import "./JobCard.css";

const JobCard = ({ id, companyName, title, salary, equity, appliedFor }) => {
  const { currentUser } = useContext(UserContext);
  const { applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  // apply to a job.
  async function handleApply() {
    applyToJob(id);
    setApplied(true);
  }

  return (
    <div className="JobCard card" key={id}>
      <div className="card-body">
        <h5 className="card-title">
          {title} @ {companyName}
        </h5>
        <div>Salary: ${salary ?? 0}</div>
        <div>Equity: {equity ?? "0"}%</div>
        <button
          onClick={handleApply}
          disabled={applied}
          className="btn font-weight-bold text-uppercase float-right"
        >
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
