import "./App.css";
import HouseList from "./components/HouseList"
import HouseDetails from "./components/HouseDetails"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <h1>Game of Throne</h1>
      <HouseList/>
      <HouseDetails/>
    </div>
  );
}

export default App;
