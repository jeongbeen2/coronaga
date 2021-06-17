import React from 'react';
import MainCardGroup from '../Components/DomesticStates/MainCardGroup';
import LocalStates from '../Components/DomesticStates/LocalStates';

function DomesticState({ domestic, local }) {
  return (
    <>
      <MainCardGroup domestic={domestic} local={local} />
      <LocalStates local={local} />
    </>
  );
}

export default DomesticState;
