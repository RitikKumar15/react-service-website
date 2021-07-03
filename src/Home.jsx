import React from "react";
import Common from "./Common";
import logo from "./homelogo.jpg";

const Home = () => {
  return (
    <>
      <Common to="/service" text="TechIQ World" btntext="Get Started" logo={logo} />
    </>
    )
};

export default Home;