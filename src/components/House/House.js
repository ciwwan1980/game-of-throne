import { Link } from "react-router-dom";
import "./House.css";
import dragon from "../../assets/icons/dragon.png";
import React, { useState } from "react";
const House = ({ house }) => {
  const [isActive, setIsActive] = useState(false);

  const changeHoverState = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };
  return (
    <div>
      <div
        className={`house ${isActive ? "active" : ""}`}
        key={house.id}
        onMouseEnter={changeHoverState}
        onMouseLeave={changeHoverState}
      >
        <Link
          to={{
            pathname: `/house/${house.id}`,
            state: { house },
          }}
        >
          <h2>{house.name}</h2>
        </Link>
        <div className="dragonContainer">
          <img src={dragon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default House;
