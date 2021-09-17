import React, { useState } from "react";
import { clinic } from "../api/clinicData";
import ClinicList from "../Components/Clinic/ClinicList";
import ClinicMap from "../Components/Clinic/ClinicMap";
import "./Style/Clinic.css";

function Clinic() {
  const [clinicData, setClinicData] = useState<string>("검색어를 입력하세요!");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [LatLng, setLatLng] = useState([]) as any;

  function handleLatLng(LAT: any, LOGT: any, MEDCARE_INST_NM: any) {
    setLatLng([LAT, LOGT, MEDCARE_INST_NM]);
  }

  function handleSearch(value: any) {
    setSearch(value);
  }

  function importClinicData(search: any) {
    setIsLoading(true);
    clinic(search).then((data: any) => {
      if (!data.EmgMedInfo) {
        console.log("데이터없음");
        setClinicData("");
      } else {
        setClinicData(data.EmgMedInfo[1].row);
      }
      setIsLoading(false);
    });
  }

  return (
    <>
      <div className="clinic_body">
        <div className="clinic_list">
          <ClinicList
            search={search}
            isLoading={isLoading}
            clinicData={clinicData}
            handleSearch={handleSearch}
            handleLatLng={handleLatLng}
            importClinicData={importClinicData}
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
