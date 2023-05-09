import React, { useState, useEffect } from "react";
import JoblyApi from './api';
import NavBar from "./NavBar";
import Routes from "./routes/Routes"; 
import { BrowserRouter, Route, Navigation, Switch } from "react-router-dom";
import UserContext from "./auth/UserContext";
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    async function getItem() {
      setIsLoading(false);
    }
    getItem();
  }, []);

 if (isLoading) {
    return <p className="loading">Loading &hellip;</p>;
  }

  return (
      <BrowserRouter>
        <UserContext.Provider>
          <div className="App">
            <NavBar />
            <Routes />
          </div>
        </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
