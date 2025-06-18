import "./Map.css";
import createMap from "../util/createMap";
import { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도 중심 좌표
      level: 3, // 지도 확대 레벨
    };
    const markerPosition = [
      {
        content: "<div>카카오</div>",
        lating: new window.kakao.maps.LatLng(33.450701, 126.570667),
      },
      {
        content: "<div>생태연못</div>",
        lating: new window.kakao.maps.LatLng(34.450701, 126.570667),
      },
      {
        content: "<div>텃밭</div>",
        lating: new window.kakao.maps.LatLng(35.450701, 126.570667),
      },
      {
        content: "<div>근린공원</div>",
        lating: new window.kakao.maps.LatLng(36.450701, 126.570667),
      },
    ];

    createMap("map", options, markerPosition);
  }, []);
  return <div id="map"></div>;
};

export default Map;
