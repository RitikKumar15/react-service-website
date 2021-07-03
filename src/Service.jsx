import React from "react";
import Cards from "./Cards";

const Service = () => {
  return (
    <>
      <div className="container">
        <Cards title="Python Course" photo="https://source.unsplash.com/286x180/?python, programming" />
        <Cards title="Web Development" photo="https://source.unsplash.com/286x180/?webdevelopment" />
        <Cards title="Learn React.js" photo="https://source.unsplash.com/286x180/?reactjs" />
        <Cards title="Bootstrap In One Video" photo="https://source.unsplash.com/286x180/? bootstrap" />
      </div>
    </>
    )
};

export default Service;