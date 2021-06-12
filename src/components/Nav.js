import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import './Nav.css';

export const NavBar = styled.div`
  border-bottom: 2px solid rgba(2, 7, 21, 0.2);
  width: 100%;
  height: 60px;
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

function Nav({ domestic }) {
  console.log(domestic);
  return (
    <div>
      <NavBar>
        <div className="header__left-content">
          <Link to="/">
            <img src="https://cdn4.iconfinder.com/data/icons/stop-virus-outline-iconset/128/ic_distancing-512.png" />
          </Link>

          <Link to="/domestic">
            <button>국내 현황</button>
          </Link>
          <Link to="/clinic">
            <button>선별 진료소</button>
          </Link>
        </div>
        <div className="header__right-content">
          <button>국내 확진자 수: {domestic.TotalCase}</button>
          <button className="blue">
            국내 완치자 수: {domestic.TotalRecovered}
          </button>
        </div>
      </NavBar>
    </div>
  );
}

export default Nav;
