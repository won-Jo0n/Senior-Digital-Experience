import "./Map.css";
import createMap from "../util/createMap";
import { useEffect, useState } from "react";

const Map = () => {
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  useEffect(() => {
    var markerPosition = [
      {
        content: "<div>1</div>",
        Latlng: new window.kakao.maps.LatLng(33.451701, 126.570667),
      },
    ];

    const fetchData = async () => {
      try {
        const url = `https://openapi.gg.go.kr/OldPersonRecuperationFacility?KEY=83687bd36d8c4a8ba8017df7d37ec930&Type=json&pIndex=1&pSize=100`;
        const response = await fetch(url);

        if (!response.ok) throw new Error("API 호출 실패");

        const json = await response.json();

        // 데이터 구조 확인 후 setData
        console.log(json.OldPersonRecuperationFacility[1].row);
        json.OldPersonRecuperationFacility[1].row.map((item) => {
          markerPosition = [
            {
              content: "<div>" + item.BIZPLC_NM + "</div>",
              Latlng: new window.kakao.maps.LatLng(
                item.REFINE_WGS84_LAT,
                item.REFINE_WGS84_LOGT
              ),
            },
            ...markerPosition,
          ];
        });
        navigator.geolocation.getCurrentPosition(function (position) {
          var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도

          var locPosition = new kakao.maps.LatLng(lat, lon);
          var options = {
            center: locPosition, // 지도 중심 좌표
            level: 1, // 지도 확대 레벨
          };

          createMap("map", options, markerPosition);
        });
      } catch (err) {
        console.log("안됨");
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return <div id="map"></div>;
};

export default Map;
