import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MasterPrechecklist from "./components/Masterdata/MasterPrechecklist";
import Inpectionreport from "./components/Masterdata/Inpectionreport";
import HydrostaticTestReport from "./components/Masterdata/HydrostaticTestReport";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/master">New Master Data</Link>
            </li>
            <li>
              <Link to="/inpection">Inpection Report</Link>
            </li>
            <li>
              <Link to="/hydrostatic">Hydrostatic Test Report</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/master">
            <MasterPrechecklist />
          </Route>
          <Route path="/inpection">
            <Inpectionreport />
          </Route>
          <Route path="/hydrostatic">
            <HydrostaticTestReport />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
