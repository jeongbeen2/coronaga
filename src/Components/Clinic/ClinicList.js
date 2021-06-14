import React from 'react';
import ClinicPoint from './ClinicPoint';
import './Style/ClinicList.css';

function ClinicList({
  handleSearch,
  importClinicData,
  search,
  clinicData,
  isLoading,
  handleLatLng,
}) {
  return (
    <>
      <div className="clinic_list_body">
        <div className="clinic_header">
          <h1>경기도 선별 진료소 찾기</h1>
          <div>동네 이름으로 검색이 가능합니다.</div>
          <div>바로 검색버튼을 누를 시 전체 목록이 나옵니다.</div>
          <span>ex)안양시 : 안양 / 가평군 : 가평</span>
          <div className="search_box">
            <input
              className="clinic_input"
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button onClick={() => importClinicData(search)}>
              <img src="https://cdn1.iconfinder.com/data/icons/mixed-17/16/Icon_search-256.png" />
            </button>
          </div>
        </div>
        {isLoading ? (
          typeof clinicData === 'string' ? null : (
            <div>데이터를 불러오는 중입니다...</div>
          )
        ) : (
          <>
            {clinicData.map((item, id) => {
              return (
                <div>
                  <ClinicPoint
                    key={id}
                    item={item}
                    handleLatLng={handleLatLng}
                  />
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default ClinicList;
