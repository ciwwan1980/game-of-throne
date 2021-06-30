import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HouseList from "./components/HouseList";
import HouseDetails from "./components/HouseDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Game of Throne</h1>

        <Switch>
          <Route exact path="/">
            <HouseList />
          </Route>

          <Route path="/house/:name">
            <HouseDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
