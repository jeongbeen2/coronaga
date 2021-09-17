import React from "react";
import "./Style/MainCardGroup.css";
import CountUp from "react-countup";

function CardGroup({ domestic, local }: any): JSX.Element {
  const {
    TotalCase,
    TotalCaseBefore,
    TotalRecovered,
    TodayRecovered,
    TotalDeath,
    TodayDeath,
    NowCase,
  } = domestic;

  const {
    korea: { newCase },
  } = local;

  // ? ###########  string number -> number #########
  // ex) 143,733 -> 143733
  const changeNumber = (num: any) => {
    let result = "";
    for (let i = 0; i < num.length; i++) {
      if (num[i] !== ",") {
        result += num[i];
      }
    }
    return Number(result);
  };

  return (
    <>
      <div className="row">
        <h1>국내 현황판</h1>
      </div>
      <div className="main_card-group">
        <div className="card">
          <div className="domestic_total">
            국내 총 확진자 :{" "}
            <CountUp end={changeNumber(TotalCase)} separator={","} /> 명
          </div>
          <div className="domestic_today">+ {newCase}명 확진 </div>
        </div>
        <div className="card">
          <div className="domestic_total">
            국내완치자 :{" "}
            <CountUp end={changeNumber(TotalRecovered)} separator={","} /> 명
          </div>
          <div className="domestic_today">+ {TodayRecovered}명 치료 </div>
        </div>
        <div className="card">
          <div className="domestic_total">
            국내사망자 :{" "}
            <CountUp end={changeNumber(TotalDeath)} separator={","} /> 명
          </div>
          <div className="domestic_today">+ {TodayDeath}명 사망 </div>
        </div>
        <div className="card">
          <div className="domestic_total">
            국내격리자 수 :{" "}
            <CountUp end={changeNumber(NowCase)} separator={","} /> 명
          </div>
          <div className="domestic_today">
            + {Math.abs(Number(TotalCaseBefore))}명 격리해제
          </div>
        </div>
      </div>
    </>
  );
}

export default CardGroup;
