import React from "react";
import "./State.css";

const HotelCard = (props) => {
  return (
    <>
      <div className="wrapper">
        <h1>{props.name}</h1>
        <img alt="image_hotel" src={props.image} className="image_hotel" />
        <div className="details">
          <h2>
            <em>{props.location}</em>
          </h2>
          <h1>Rating: {props.rating}/5</h1>
          <p>{props.description}</p>
        </div>
        <h1>Rs {props.price} per day</h1>
      </div>
    </>
  );
};

export default HotelCard;
