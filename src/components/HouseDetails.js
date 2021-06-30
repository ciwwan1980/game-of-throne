import { useLocation } from "react-router-dom";

function HouseDetails() {
  const location = useLocation();
  const { region, name, coatOfArms } = location.state.house;
  console.log(location.state.house, "location.state.house");

  return (
    <div className="detailsContainer">
      <h2>More About {name} </h2>

      <div className="detailsCard">
        <div>
          <img src={""} alt="" />
        </div>

        <h3>
          House Name: <span>{name}</span>
        </h3>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Coat of Arms: <span>{coatOfArms}</span>
        </p>
        
      </div>
    </div>
  );
}

export default HouseDetails;
