import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="card"
      src={`https://randomuser.me/api/portraits/women/41.jpg&size=180x180`}
    />
    <h1>{props.card.name}</h1>
  </div>
);
