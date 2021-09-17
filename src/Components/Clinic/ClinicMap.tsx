import React, { useEffect } from "react";
import "./Style/ClinicMap.css";
const { kakao } = window;

function ClinicMap({ LatLng }: any): JSX.Element {
  const [Lat, Lng, MEDCARE_INST_NM] = LatLng;

  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(Lat, Lng),
      draggable: false,
      level: 3,
    };
    let map = new kakao.maps.Map(container, options); // 지도를 생성합니다
    function setDraggable(draggable: any) {
      // 마우스 드래그로 지도 이동 가능여부를 설정합니다
      map.setDraggable(draggable);
    }
    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(Lat, Lng);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    var iwContent = `<a class='go-to-link' href='https://map.kakao.com/link/search/${MEDCARE_INST_NM}' target='_blank'><div>바로 가기</div></a>`;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "mouseover", function () {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);
    });
  }, [LatLng]);

  return (
    <div className="map">
      <div id="map"></div>
    </div>
  );
}
export default ClinicMap;
