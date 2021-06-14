import React, { useEffect } from 'react';
import './Style/ClinicMap.css';
const { kakao } = window;

function ClinicMap({ LatLng }) {
  const [Lat, Lng] = LatLng;

  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(Lat, Lng),
      level: 3,
    };
    let map = new kakao.maps.Map(container, options); // 지도를 생성합니다
    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(Lat, Lng);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, [LatLng]);

  return (
    <div className="map">
      <div id="map"></div>
    </div>
  );
}
export default ClinicMap;
