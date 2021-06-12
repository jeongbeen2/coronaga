import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { domestic } from './api/domesticData';
import Nav from './components/Nav';
import Home from './Pages/Home';
import DomesticState from './Pages/DomesticState';
import Clinic from './Pages/Clinic';

function App() {
  const [domesticTotalData, setDomesticTotalData] = useState([]);
  console.log(domesticTotalData);

  const domesticData = () => {
    domestic().then((data) => {
      setDomesticTotalData(data);
    });
  };

  useEffect(domesticData, []);

  return (
    <>
      <Router>
        <Nav domestic={domesticTotalData.domestic} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/domestic">
            <DomesticState
              domestic={domesticTotalData.domestic}
              local={domesticTotalData.local}
            />
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
