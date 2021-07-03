import React from "react";
import Common from "./Common";
import logo from "./aboutlogo.jpg";

const About = () => {
  return (
    <>
      <Common to="/contact" text="About Page" btntext="Contact Us" logo={logo} />
    </>
    )
};

export default About;