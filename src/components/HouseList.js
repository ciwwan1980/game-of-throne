import { useEffect, useState } from "react";

function HouseList() {
  const [houseList, setHouseList] = useState([]);

  useEffect(() => {
    fetch("https://anapioficeandfire.com/api/houses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        setHouseList(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {houseList.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HouseList;
