import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HouseList() {
  const [houseList, setHouseList] = useState([]);

  useEffect(() => {
    fetch("https://anapioficeandfire.com/api/houses")
      .then((res) => res.json())
      .then((data) => {
        let array = [];

        data.forEach((item) => {
          let id = item.url.split("/").pop();
          array.push({ id, ...item });
          console.log(array, "array");
        });
        setHouseList(array);
      });
  }, []);

  return (
    <div>
      <ul>
        {houseList.map((house, index) => (
          <li key={index}>
            <h3>{house.name}</h3>
            <Link to={`/house/${house.name}`}>
              <button key={house.name}>more details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HouseList;
