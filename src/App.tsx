import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LoadingScreen from "react-loading-screen";

import { domestic } from "./api/domesticData";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home";
import Clinic from "./Pages/Clinic";
import Vaccine from "./Pages/Vaccine";
import DomesticState from "./Pages/DomesticState";

import "./App.css";

function App(): JSX.Element {
  const [domesticTotalData, setDomesticTotalData] = useState([]);
  const [localTotalData, setLocalTotalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function importDomesticData() {
    setIsLoading(true);
    domestic().then((data: any) => {
      setDomesticTotalData(data.domestic);
      setLocalTotalData(data.local);
      setIsLoading(false);
    });
  }
  useEffect(importDomesticData, []);

  return (
    <>
      {isLoading ? (
        <>
          <LoadingScreen
            loading={true}
            bgColor="#ffffff"
            spinnerColor="#676767"
            textColor="#676767"
            text="언제나 손을 자주 씻으세요!"
          >
            <div>Loadable content</div>
          </LoadingScreen>
        </>
      ) : (
        <>
          <Nav domestic={domesticTotalData} local={localTotalData} />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/domestic">
              <DomesticState
                domestic={domesticTotalData}
                local={localTotalData}
              />
            </Route>
            <Route path="/clinic" component={Clinic} />
            <Route path="/vaccine" component={Vaccine} />
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
