import { useLocation, useHistory } from "react-router-dom";
import "./index.css";
import sword from "../../utils/icons/swords.png";

function HouseDetails() {
  const location = useLocation();
  const { region, name, coatOfArms } = location.state.house;

  let history = useHistory();

  const handleBack = () => {
    history.push("/");
  };
  return (
    <div className="detailsContainer">
      <h2>More About {name} </h2>

      <div className="detailsCard">
        <div className="icon" onClick={() => handleBack()}>
          <img src={sword} alt="" />
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
