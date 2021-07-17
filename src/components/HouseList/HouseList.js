import "./HouseList.css";
import useFetch from "../../utils/useFetch";
import House from "../House/House";

const HouseList = () => {
  const { houseList, isPending, error } = useFetch(
    "https://anapioficeandfire.com/api/houses/"
  );

  return (
    <div className="houseContainer">
      {error && <div className="errorMessage">{error}</div>}
      {isPending && <div className="loading">Loading ... </div>}
      <h1>Houses</h1>
      <div className="houseWrapper">
        {houseList.map((house, index) => (
          <House house={house} key={house.id} />
        ))}
      </div>
    </div>
  );
};

export default HouseList;
