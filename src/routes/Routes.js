import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../home/Home";
import Companies from "../companies/Companies";
import CompanyDetails from "../companies/CompanyDetails";
import Jobs from "../jobs/Jobs";
import ProfileForm from "../profiles/ProfileForm";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";

const RoutesList = ({ signup, login }) => {
  return (
    <div className="pt-5">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginForm login={login} />}></Route>
        <Route path="/signup" element={<SignupForm signup={signup} />}></Route>
        <Route path="/companies" element={<Companies />}></Route>
        <Route path="/companies/:name" element={<CompanyDetails />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
        <Route path="/profile" element={<ProfileForm />}></Route>
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default RoutesList;
