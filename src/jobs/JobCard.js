import React from "react";
import "./JobCard.css";

const JobCard = ({ id, companyName, title, salary, equity }) => {
  return (
    <div className="JobCard card" key={id}>
      <div className="card-body">
        <h5 className="card-title">
          {title} @ {companyName}
        </h5>
        <div>Salary: ${salary ?? 0}</div>
        <div>Equity: {equity ?? "0"}%</div>
        <button className="btn font-weight-bold text-uppercase float-right">
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCard;
