import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({snacksAmount, drinksAmount}) {
  return (
    <div>
      <Navbar className="navbar">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            {/* using nullish coalescing in case there is a db issue */}
            <NavLink to="/snacks">Snacks: {snacksAmount ?? "N/A"}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/drinks">Drinks: {drinksAmount ?? "N/A"}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/additem">Add Item</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
