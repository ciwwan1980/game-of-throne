import { Link } from "react-router-dom";
import "./index.css";
import dragon from "../../utils/icons/dragon.png";

const House = ({ house }) => {
  console.log(house, "house");
  return (
    <div>
      <div className="house" key={house.id}>
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
