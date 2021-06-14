import React from 'react';
import CardGroup from '../Components/DomesticStates/CardGroup';
import LocalStates from '../Components/DomesticStates/LocalStates';

function DomesticState({ domestic, local }) {
  return (
    <>
      <CardGroup domestic={domestic} local={local} />
      <LocalStates local={local} />
    </>
  );
}

export default DomesticState;
