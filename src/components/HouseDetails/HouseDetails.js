import { useLocation, useHistory } from "react-router-dom";
import "./index.css";
import sword from "../../utils/icons/swords.png";
import game from "../../utils/icons/game.jpg";

function HouseDetails() {
  const location = useLocation();
  const { region, name, coatOfArms } = location.state.house;

  let history = useHistory();

  const handleBack = () => {
    history.push("/");
  };

  return (
    <div className="detailsContainer"
     style={{ margin:"0", padding:"0",background: `url(${game})`,  backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto' }}
    >
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
