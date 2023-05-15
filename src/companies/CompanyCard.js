import React from "react";
import "./CompanyCard.css";
import { Link } from "react-router-dom";

const CompanyCard = ({ handle, name, description, logoUrl }) => {
  return (
    <div className="CompanyCard">
      <Link className="link" to={`/companies/${handle}`}>
        <h5>{name}</h5>
      </Link>
      <div>
        <img alt={name} src={logoUrl ? logoUrl : "/logos/logo2.png"} />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
