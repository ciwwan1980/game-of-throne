import { useLocation, useHistory } from "react-router-dom";


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
        <div>
          <button className="icon" onClick={() => handleBack()}>
            go back
          </button>
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
