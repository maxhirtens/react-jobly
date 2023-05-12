import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import NavBar from "./navbar/NavBar";
import RoutesList from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./auth/UserContext";
import Loading from "./helpers/Loading";
import { decodeToken } from "react-jwt";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

// key for localStorage.
// why do i need export here?
export const TOKEN_KEY = "jobly-token";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_KEY);

  // signup method.
  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  // login method.
  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  // logout method.
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  // load user info from API.
  useEffect(
    function loadUser() {
      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = decodeToken(token);
            // console.log("username: " + username);
            // put the token on the Api class so it can use it to call the API.
            JoblyApi.token = token;
            let currentUser = await JoblyApi.getCurrentUser(username);
            setCurrentUser(currentUser);
          } catch (err) {
            console.error("problem loading", err);
            setCurrentUser(null);
          }
        }
        setIsLoading(false);
      }

      // set infoLoaded to false while async getCurrentUser runs; once the
      // data is fetched (or even if an error happens!), this will be set back
      // to false to control the spinner.
      setIsLoading(true);
      getCurrentUser();
    },
    [token]
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="App">
          <NavBar logout={logout} />
          <RoutesList login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
