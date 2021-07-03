import React from "react";
import { NavLink } from "react-router-dom";

const Cards = (props) => {
  return (
    <>
      <div class="card" style={{width: "18rem"}}>
        <img src={props.photo} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title fw-bold text-primary">{props.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <NavLink to="#" class="btn btn-outline-primary">Click Now</NavLink>
        </div>
      </div>
    </>
    )
};

export default Cards;