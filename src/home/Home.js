import React, { useContext } from "react";
import UserContext from "../auth/UserContext";
import { Link } from "react-router-dom";
import JobCard from "../jobs/JobCard";

function Home() {
  const { currentUser } = useContext(UserContext);

  if (currentUser && currentUser.username !== "testuser") {
    return (
      <div className="container text-center">
        <h3>Welcome to Jobly, {currentUser.firstName}!</h3>
        <br></br>
        <h6>Jobs You've Applied To:</h6>
        <p>{currentUser.jobs ?? "No job applications yet"}</p>
      </div>
    );
  }

  return (
    <div className="container text-center">
      <h3>Welcome to Jobly!</h3>
      <h6>
        <Link to="/signup">Signup</Link> or <Link to="/login">Login</Link> to
        continue.
      </h6>
    </div>
  );
}

export default Home;
