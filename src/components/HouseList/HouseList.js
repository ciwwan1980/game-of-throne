import "./index.css";
import useFetch from "../useFetch";
import House from "../House/House";

const HouseList = () => {
  const { houseList, isPending } = useFetch(
    "https://anapioficeandfire.com/api/houses/"
  );

  return (
    <div className="houseContainer">
      {isPending && <h1 className="loading">Loading ... </h1>}
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
