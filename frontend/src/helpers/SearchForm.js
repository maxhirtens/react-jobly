import React, { useState } from "react";

const SearchForm = ({ searchFor }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchFor(searchTerm);
    setSearchTerm(searchTerm);
  };

  return (
    <div className="input-group mb-3">
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          className="form-control form-control-lg flex-grow-1"
          name="searchTerm"
          placeholder="Enter search term."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-lg btn-primary search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
