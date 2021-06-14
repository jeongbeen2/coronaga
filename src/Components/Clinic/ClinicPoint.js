import React from 'react';
import './Style/ClinicPoint.css';

function ClinicPoint({ item, id, handleLatLng }) {
  const {
    SIGUN_NM,
    MEDCARE_INST_NM,
    EMGNCY_CENTER_TELNO,
    REFINE_LOTNO_ADDR,
    REFINE_WGS84_LAT,
    REFINE_WGS84_LOGT,
  } = item;

  return (
    <>
      <div
        key={id}
        onClick={() => handleLatLng(REFINE_WGS84_LAT, REFINE_WGS84_LOGT)}
        className="clinic_card"
      >
        <div className="clinic_title">
          <span>{MEDCARE_INST_NM}</span>
        </div>
        <div className="clinic_address">{REFINE_LOTNO_ADDR}</div>
        <div className="clinic_call">{EMGNCY_CENTER_TELNO}</div>
      </div>
    </>
  );
}
export default ClinicPoint;
