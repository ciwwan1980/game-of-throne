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
        //   console.log(array, "array");
        });
        setHouseList(array);
      });
  }, []);

  return (
    <div>
      <ul>
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
      </ul>
    </div>
  );
}

export default HouseList;
