import React from "react";
import MainCardGroup from "../Components/DomesticStates/MainCardGroup";
import LocalStates from "../Components/DomesticStates/LocalStates";

interface ApiData {
  domestic: any;
  local: any;
}

function DomesticState({ domestic, local }: ApiData): JSX.Element {
  return (
    <>
      <MainCardGroup domestic={domestic} local={local} />
      <LocalStates local={local} />
    </>
  );
}

export default DomesticState;
