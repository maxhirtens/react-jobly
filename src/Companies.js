import React from "react";

function Home({companies}) {
  return (
    <section className="col-md-8">
          <div>{companies}</div>
    </section>
  );
}

export default Home;