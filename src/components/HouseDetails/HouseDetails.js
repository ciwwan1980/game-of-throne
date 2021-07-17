import { useHistory, useParams } from "react-router-dom";
import "./HouseDetails.css";
import { useState, useEffect } from "react";
import sword from "../../assets/icons/swords.png";
import useFetch from "../../utils/useFetch";

function HouseDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  const { houseList, isPending, error } = useFetch(
    `https://anapioficeandfire.com/api/houses/`
  );

  let history = useHistory();
  const handleBack = () => {
    history.push("/");
  };

  useEffect(() => {
    setDetails(
      houseList.filter((item) => {
        return item.id === id;
      })
    );
  }, [houseList, id]);
  return (
    <div className="detailsContainer">
      {error && <div className="errorMessage">{error}</div>}
      {isPending && <h1 className="loading">Loading ... </h1>}
      <div className="detailsCard">
        {details &&
          details.map((house, index, id) => {
            console.log(house, "house");
            return (
              <div key={house.id}>
                <h3>
                  House Name: <span>{house.name}</span>
                </h3>
                <p>
                  Region: <span>{house.region}</span>
                </p>
                <p>
                  Coat of Arms: <span>{house.coatOfArms}</span>
                </p>
                <p>
                  currentLord: <span>{house.currentLord}</span>
                </p>

                <div className="icon" onClick={() => handleBack()}>
                  <img src={sword} alt="" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HouseDetails;
