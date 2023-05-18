import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

// check for valid user and block others.
// some help from https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou

function PrivateRoute(Component) {
  const { currentUser } = useContext(UserContext);
  return currentUser ? <Component /> : <Navigate to="/login" />;
}

export default PrivateRoute;
