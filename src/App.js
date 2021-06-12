import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { domestic } from './api/domesticData';
import Nav from './components/Nav';
import Home from './Pages/Home';
import Country from './Pages/Country';
import Maps from './Pages/Map';
import Clinic from './Pages/Clinic';

function App() {
  const [totalData, setTotalData] = useState([]);

  const domesticData = () => {
    domestic().then((data) => {
      setTotalData(data);
    });
  };

  useEffect(domesticData, []);

  return (
    <>
      <Router>
        <Nav totalData={totalData} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/map">
            <Maps totalData={totalData} />
          </Route>
          <Route path="/country">
            <Country />
          </Route>
          <Route>
            <Clinic />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
