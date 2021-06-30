import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HouseList from "./components/HouseList/HouseList";
import HouseDetails from "./components/HouseDetails/HouseDetails";


function App() {
  return (
    <Router>
      <div className="App">
      
        <Switch>
          <Route exact path="/">
            <HouseList />
          </Route>

          <Route path="/house/:id">
            <HouseDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
