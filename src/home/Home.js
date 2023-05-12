import React, { useContext } from "react";
import UserContext from "../auth/UserContext";

function Home() {
  const { currentUser } = useContext(UserContext);

  if (currentUser && currentUser.username !== "testuser") {
    return (
      <section className="col-md-8">
        <h3>Welcome to Jobly, {currentUser.username}!</h3>
      </section>
    );
  }

  return (
    <section className="col-md-8">
      <h3>Welcome to Jobly!</h3>
    </section>
  );
}

export default Home;
