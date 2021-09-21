import React, { useState } from "react";
import { clinic } from "../api/clinicData";
import ClinicList from "../Components/Clinic/ClinicList";
import ClinicMap from "../Components/Clinic/ClinicMap";
import "./Style/Clinic.css";

interface ClinicValue {
  LAT: string;
  LOGT: string;
  MEDCARE_INST_NM: string;
}

function Clinic() {
  const [clinicData, setClinicData] = useState<string>("검색어를 입력하세요!");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [LatLng, setLatLng] = useState([]) as any;

  function handleLatLng(
    LAT: string,
    LOGT: string,
    MEDCARE_INST_NM: ClinicValue
  ) {
    setLatLng([LAT, LOGT, MEDCARE_INST_NM]);
  }

  function handleSearch(value: string) {
    setSearch(value);
  }

  function importClinicData(search: string) {
    console.log("###", search);
    setIsLoading(true);
    clinic(search)
      .then((data: any) => {
        console.log("###", data);
        if (!data.EmgMedInfo) {
          console.log("데이터없음");
          setClinicData("");
        } else {
          setClinicData(data.EmgMedInfo[1].row);
        }
        setIsLoading(false);
      })
      .catch((err) => {
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
