import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import './Nav.css';

export const NavBar = styled.div`
  z-index: 999;
  margin: 0;
  top: 0;
  position: fixed;
  background-color: #ffffff;
  border-bottom: 2px solid rgba(2, 7, 21, 0.2);
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;

  .header__left-content,
  .header__right-content {
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 100%;
  }
  .header__left-content {
    justify-content: flex-start;
  }
  .header__right-content {
    justify-content: flex-end;
  }
  .blue {
    background-color: #2b66ff;
    color: white;
  }
`;

function Nav({ domestic, local }) {
  return (
    <div>
      <NavBar>
        <div className="header__left-content">
          <Link to="/">
            <h1>
              Coro<span style={{ color: '#2B66FF' }}>naga!</span>
            </h1>
          </Link>
          <Link to="/domestic">
            <button>국내 현황</button>
          </Link>
          <Link to="/clinic">
            <button>선별 진료소</button>
          </Link>
          <Link to="/vaccine">
            <button>백신 예방접종 통계</button>
          </Link>
        </div>
        <div className="header__right-content">
          <Link to="/domestic">
            <button>국내 총 확진자 수 : {domestic.TotalCase}</button>
          </Link>
          <Link to="/domestic">
            <button className="blue">
              일일 확진자 수 : {local.korea.newCase}
            </button>
          </Link>
        </div>
      </NavBar>
    </div>
  );
}

export default Nav;
