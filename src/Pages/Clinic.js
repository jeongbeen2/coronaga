import React, { useState } from 'react';
import { clinic } from '../api/clinicData';
import ClinicList from '../Components/Clinic/ClinicList';
import ClinicMap from '../Components/Clinic/ClinicMap';
import './Style/Clinic.css';

function Clinic() {
  const [clinicData, setClinicData] = useState('검색어를 입력하세요!');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [LatLng, setLatLng] = useState([]);

  const handleLatLng = (LAT, LOGT, MEDCARE_INST_NM) => {
    setLatLng([LAT, LOGT, MEDCARE_INST_NM]);
  };

  function importClinicData(search) {
    setIsLoading(true);
    clinic(search).then((data) => {
      if (!data.EmgMedInfo) {
        console.log('데이터없음');
        setClinicData([]);
      } else {
        setClinicData(data.EmgMedInfo[1].row);
      }
      setIsLoading(false);
    });
  }

  function handleSearch(value) {
    setSearch(value);
  }

  return (
    <>
      <div className="clinic_body">
        <div className="clinic_list">
          <ClinicList
            search={search}
            clinicData={clinicData}
            isLoading={isLoading}
            importClinicData={importClinicData}
            handleSearch={handleSearch}
            handleLatLng={handleLatLng}
          />
        </div>
        <div className="clinic_map">
          {!LatLng[0] ? null : (
            <ClinicMap
              search={search}
              LatLng={LatLng}
              clinicData={clinicData}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Clinic;
