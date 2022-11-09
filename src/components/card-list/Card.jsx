import React from "react";
import "./Card.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monsters"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2>Robot id - {props.monster.id}</h2>
    <h3>Controller - {props.monster.email}</h3>
    <p>Work - {props.monster.name}</p>
  </div>
);
