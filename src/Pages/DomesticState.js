import React from 'react';
import './DomesticState.css';

function DomesticState({ domestic, local }) {
  const {
    city1n,
    city2n,
    city3n,
    city4n,
    city5n,
    city1p,
    city2p,
    city3p,
    city4p,
    city5p,
    TotalCase,
    TotalCaseBefore,
    TotalRecovered,
    TodayRecovered,
    TotalDeath,
    TodayDeath,
    NowCase,
  } = domestic;
  const { newCase } = local.korea;
  return (
    <>
      <div className="row">
        <h1>국내 현황판</h1>
      </div>
      <div className="card-group">
        <div className="card">
          <div className="domestic_total">국내 총 확진자 : {TotalCase} 명</div>
          <div className="domestic_today">전일보다 {newCase} 명</div>
        </div>
        <div className="card">
          <div className="domestic_total">국내완치자 : {TotalRecovered} 명</div>
          <div className="domestic_today">오늘 {TodayRecovered}명 치료됐음</div>
        </div>
        <div className="card">
          <div className="domestic_total">국내사망자 : {TotalDeath} 명</div>
          <div className="domestic_today">{TodayDeath} 명 사망 ㅠ</div>
        </div>
        <div className="card">
          <div className="domestic_total">국내격리자 수 : {NowCase} 명</div>
        </div>
      </div>
    </>
  );
}

export default DomesticState;
