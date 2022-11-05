import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MasterPrechecklist from './Checklist/MasterPrechecklist';
import Inpectionreport from './Inpectionreport';
import HydrostaticTestReport from './HydrostaticTestReport';
import ListMasterData from './ListMasterData';


const MasterDataPage = () => {
  return (
    <Router>
    <div>
      <nav>
        <ul>     
          <li>
            <Link to="/master">Master</Link>
          </li>              
          <li>
            <Link to="/newmaster">New Master Data</Link>
          </li>
          <li>
            <Link to="/inpection">Inpection Report</Link>
          </li>
          <li>
            <Link to="/hydrostatic">Hydrostatic Test Report</Link>
          </li>
        </ul>
      </nav>
      <ListMasterData />
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>       
        <Route path="/newmaster">
          <MasterPrechecklist />
        </Route>
        <Route path="/inpection">
          <Inpectionreport />
        </Route>
        <Route path="/hydrostatic">
          <HydrostaticTestReport />
        </Route>        
      </Switch>
    </div>
  </Router>
  )
}

export default MasterDataPage;

function Home() {
    return <h2>Home</h2>;
  }