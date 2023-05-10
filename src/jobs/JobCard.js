import React from "react";
import "./JobCard.css";

const JobCard = ({id, companyName, title, salary, equity}) => {
    return (
        <div className="JobCard" key={id}>
            <div>
                <h5>{title} @ {companyName}</h5>
            </div>
            <div>
                <p>Salary: {salary ?? "N/A"}</p>
                <p>Equity: {equity ?? "0"}</p>
            </div>
        </div>
  );
}

export default JobCard;