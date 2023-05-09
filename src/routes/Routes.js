import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from '../home/Home';
import Companies from "../companies/Companies"
import CompanyDetails from "../companies/CompanyDetails";
import Jobs from "../jobs/Jobs";
import ProfileForm from "../profiles/ProfileForm";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";

const RoutesList = () => {
    return (
      <div className="pt-5">
        
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<LoginForm />}></Route>
          <Route exact path="/signup" element={<SignupForm />}></Route>
          <Route exact path="/companies" element={<Companies />}></Route>
          <Route exact path="/companies/:name" element={<CompanyDetails />}></Route>
          <Route exact path="/jobs" element={<Jobs />}></Route>
          <Route exact path="/profile" element={<ProfileForm />}></Route>
          <Route path="/" element={<Navigate to="/" /> } />
        </Routes>
        
      </div>
  );
}

export default RoutesList;
