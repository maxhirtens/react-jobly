import React, { useState, useEffect } from "react";
import JoblyApi from './api';
import NavBar from './navbar/NavBar';
import RoutesList from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
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
          <div className="App">
            <NavBar />
            <RoutesList />
          </div>
      </BrowserRouter>
  );
}

export default App;
