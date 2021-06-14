import React from 'react';
import LocalState from './LocalState';
import './Style/LocalStates.css';

function LocalStates({ local }) {
  const {
    korea,
    seoul,
    busan,
    daegu,
    incheon,
    gwangju,
    daejeon,
    ulsan,
    sejong,
    gyeonggi,
    gangwon,
    chungbuk,
    chungnam,
    jeonbuk,
    jeonnam,
    gyeongbuk,
    gyeongnam,
    jeju,
  } = local;
  return (
    <>
      <div className="localState_Group">
        <div className="localState_row">
          <LocalState city={korea} />
          <LocalState city={seoul} />
          <LocalState city={gyeonggi} />
          <LocalState city={daegu} />
          <LocalState city={incheon} />
          <LocalState city={busan} />
        </div>
        <div className="localState_row">
          <LocalState city={gyeongnam} />
          <LocalState city={gyeongbuk} />
          <LocalState city={chungnam} />
          <LocalState city={gangwon} />
          <LocalState city={chungbuk} />
          <LocalState city={gwangju} />
        </div>
        <div className="localState_row">
          <LocalState city={ulsan} />
          <LocalState city={daejeon} />
          <LocalState city={jeonbuk} />
          <LocalState city={jeonnam} />
          <LocalState city={jeju} />
          <LocalState city={sejong} />
        </div>
      </div>
    </>
  );
}

export default LocalStates;
