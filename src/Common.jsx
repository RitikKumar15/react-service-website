import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <div className="container">
        <div clas className="row my-5 main_div">
          <div className="col-md-6 col-10 order-md-2">
            <img src={props.logo} className="img" width="100%" height="auto" alt="..." />
          </div>
          <pre />
          <div className="col-md-6 col-10 order-md-1">
            <h2>Welcome To {props.text}</h2>
            <h5>enhance your skill with our awesome content</h5>
            <NavLink to={props.to} className="btn btn-outline-success rounded-pill my-2">{props.btntext}</NavLink>
          </div>
        </div>
      </div>
    </>
    )
};

export default Common;