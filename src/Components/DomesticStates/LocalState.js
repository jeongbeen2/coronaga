import React from 'react';
import './Style/LocalState.css';

function LocalState({ city }) {
  const { countryName, totalCase, newCase, recovered, death } = city;
  return (
    <>
      <div className="local_card">
        {countryName === '합계' ? (
          <div className="card_title" style={{ color: '#2b66ff' }}>
            대한민국
          </div>
        ) : (
          <div className="card_title" style={{ color: '#2b66ff' }}>
            {countryName}
          </div>
        )}
        <div>
          누적 확진자: <span style={{ color: '#ffa500' }}>{totalCase}</span> 명
        </div>
        <div>
          신규 확진자: <span style={{ color: '#ffa500' }}>{newCase}</span> 명
        </div>
        <div>
          완치자: <span style={{ color: '#2e912e' }}>{recovered}</span> 명
        </div>
        <div>
          사망자: <span style={{ color: '#ff4444' }}>{death}</span> 명
        </div>
      </div>
    </>
  );
}
export default LocalState;
