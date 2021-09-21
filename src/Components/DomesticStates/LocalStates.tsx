import React from "react";
import LocalState from "./LocalState";
import "./Style/LocalStates.css";
import { CaseData } from "../../@types/caseData";

function LocalStates({ local }: CaseData): JSX.Element {
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
      <div className="localState_group">
        <div className="localState_row">
          <a
            href="http://ncov.mohw.go.kr/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={korea} />
          </a>
          <a
            href="https://www.seoul.go.kr/coronaV/coronaStatus.do"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={seoul} />
          </a>
          <a
            href="https://www.gg.go.kr/contents/contents.do?ciIdx=1150&menuId=2909"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={gyeonggi} />
          </a>
          <a
            href="http://covid19.daegu.go.kr/index.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={daegu} />
          </a>
          <a
            href="https://www.incheon.go.kr/health/HE020409"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={incheon} />
          </a>
          <a
            href="https://www.busan.go.kr/covid19/Corona19.do"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={busan} />
          </a>
        </div>
        <div className="localState_row">
          <a
            href="http://xn--19-q81ii1knc140d892b.kr/main/main.do"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={gyeongnam} />
          </a>
          <a
            href="https://gb.go.kr/Main/open_contents/section/wel/page.do?mnu_uid=5856&LARGE_CODE=360&MEDIUM_CODE=90"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={gyeongbuk} />
          </a>
          <a
            href="http://www.chungnam.go.kr/coronaStatus.do"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={chungnam} />
          </a>
          <a
            href="https://www.provin.gangwon.kr/covid-19.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={gangwon} />
          </a>
          <a
            href="https://www1.chungbuk.go.kr/covid-19/index.do"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={chungbuk} />
          </a>
          <a
            href="https://www.gjcity.go.kr/corona_index.jsp"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={gwangju} />
          </a>
        </div>
        <div className="localState_row">
          <a
            href="https://covid19.ulsan.go.kr/index.do"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={ulsan} />
          </a>
          <a
            href="https://www.daejeon.go.kr/corona19/index.do"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={daejeon} />
          </a>
          <a
            href="https://www.jeonbuk.go.kr/board/list.jeonbuk?boardId=BBS_0000105&menuCd=DOM_000000110001000000&contentsSid=1219&cpath="
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={jeonbuk} />
          </a>
          <a
            href="https://www.jeonnam.go.kr/coronaMainPage.do"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={jeonnam} />
          </a>
          <a
            href="https://covid19.jeju.go.kr/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={jeju} />
          </a>
          <a
            href="https://www.sejong.go.kr/bbs/R3620/list.do"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocalState city={sejong} />
          </a>
        </div>
      </div>
    </>
  );
}

export default LocalStates;
