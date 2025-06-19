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
        content: "<div>1</div>",
        Latlng: new window.kakao.maps.LatLng(33.451701, 126.570667),
      },
      {
        content: "<div>2</div>",
        Latlng: new window.kakao.maps.LatLng(33.452701, 126.570667),
      },
      {
        content: "<div>3</div>",
        Latlng: new window.kakao.maps.LatLng(33.453701, 126.570667),
      },
      {
        content: "<div>4</div>",
        Latlng: new window.kakao.maps.LatLng(33.454701, 126.570667),
      },
    ];

    createMap("map", options, markerPosition);
  }, []);
  return <div id="map"></div>;
};

export default Map;
