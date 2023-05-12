import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import { Navbar, Nav, NavItem } from "reactstrap";

const NavBar = ({ logout }) => {
  const { currentUser } = useContext(UserContext);

  if (currentUser && currentUser.username !== "testuser") {
    return (
      <div>
        <Navbar className="navbar">
          <NavLink to="/" className="navbar-brand">
            Jobly
          </NavLink>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/companies">Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/jobs">Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" onClick={logout}>
                Logout, {currentUser.username}
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar className="navbar">
          <NavLink to="/" className="navbar-brand">
            Jobly
          </NavLink>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/companies">Companies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/jobs">Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login">Login</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
};

export default NavBar;
