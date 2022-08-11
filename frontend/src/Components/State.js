import React from "react";
import { states } from "../hotel_json";
import HotelCard from "./HotelCard";
import "./State.css";

const State = (props) => {
  return (
    <>
      <ul>
        {Array.from(Array(10), (e, i) => {
          return (
            <>
              <HotelCard
                name={states[props.stateName][i].name}
                image={states[props.stateName][i].image}
                location={states[props.stateName][i].location}
                rating={states[props.stateName][i].rating}
                description={states[props.stateName][i].description}
                price={states[props.stateName][i].price}
              />
            </>
          );
        })}
      </ul>
    </>
  );
};

export default State;
