import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import useFetch from "../useFetch";

const HouseList = () => {
  const { houseList, isPending } = useFetch("https://anapioficeandfire.com/api/houses/");

  return (
    <div className="houseContainer">
     { isPending && <h1 className="loading">Loading ... </h1> }
      <h1>Houses</h1>
      <div className="houseWrapper">
        {houseList.map((house, index) => (
          <div className="house" key={house.id}>
            <Link
              to={{
                pathname: `/house/${house.id}`,
                state: { house },
              }}
            >
              <h2>{house.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseList;
