import React, { useContext } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";

const NavBar = ({ logout }) => {
  const { currentUser } = useContext(UserContext);

  if (currentUser && currentUser.username !== "testuser") {
    return (
      <div>
        <nav className="Navigation navbar navbar-expand-md">
          <Link className="navbar-brand" to="/">
            Jobly
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/companies">
                Companies
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/jobs">
                Jobs
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={logout}>
                Logout, {currentUser.firstName}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav className="Navigation navbar navbar-expand-md">
          <Link className="navbar-brand" to="/">
            Jobly
          </Link>
          <ul className="navbar-nav ml-auto">
            <li>
              <NavLink to="/companies">Companies</NavLink>
            </li>
            <li>
              <NavLink to="/jobs">Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};

export default NavBar;
