// import "./App.css";
import React, { Suspense} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MasterDataPage from "./components/Masterdata/MasterDataPage";

import Layout from "./components/Layout/Layout";

function App() {
  return (
      <Router>
    <Layout>
      <Suspense fallback={<p>loading..</p>} >
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
            <MasterDataPage />
          </Route>          
          <Route path="/">
            <Home />
          </Route>
        </Switch>        

      </Suspense>
    
    </Layout>
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
