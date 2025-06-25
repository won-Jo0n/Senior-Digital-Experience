// Map.js
import "./Map.css";
import createMap from "../util/createMap";
import { useEffect, useState, useRef } from "react"; // useRef 추가

import { useNavigate } from "react-router-dom";

const Map = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [levelNumber, setLevelNumber] = useState(10);
  const mapRef = useRef(null); // 지도 인스턴스를 저장할 ref
  const nav = useNavigate();

  // 최초 데이터 fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://openapi.gg.go.kr/OldPersonRecuperationFacility?KEY=83687bd36d8c4a8ba8017df7d37ec930&Type=json&pIndex=1&pSize=100`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("API 호출 실패");

        const json = await response.json();
        const rows = json.OldPersonRecuperationFacility[1].row;
        setApiData(rows);

        navigator.geolocation.getCurrentPosition(function (position) {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        });
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔍 검색 필터
  const searchOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = apiData.filter((item) => {
    const keyword = searchTerm.toLowerCase();
    return (
      item.BIZPLC_NM?.toLowerCase().includes(keyword) ||
      item.REFINE_ROADNM_ADDR?.toLowerCase().includes(keyword) ||
      item.REFINE_LOTNO_ADDR?.toLowerCase().includes(keyword)
    );
  });

  // 검색 결과에 따라 마커 다시 표시 및 지도 생성/업데이트
  useEffect(() => {
    if (!userLocation) return;

    const markerPosition = filteredData.map((item) => ({
      content: `
        <div class="map-info-content">
          <div class="info-title">${item.BIZPLC_NM}</div>
          ${
            item.REFINE_ROADNM_ADDR
              ? `<p class="info-address">${item.REFINE_ROADNM_ADDR}</p>`
              : ""
          }
          ${
            item.REFINE_LOTNO_ADDR
              ? `<p class="info-address">${item.REFINE_LOTNO_ADDR}</p>`
              : ""
          }
        </div>`,
      Latlng: new window.kakao.maps.LatLng(
        item.REFINE_WGS84_LAT,
        item.REFINE_WGS84_LOGT
      ),
    }));

    const locPosition = new window.kakao.maps.LatLng(
      userLocation.lat,
      userLocation.lon
    );

    const options = {
      center: locPosition,
      level: levelNumber,
    };

    // createMap 함수에서 반환된 지도 인스턴스를 ref에 저장합니다.
    mapRef.current = createMap("maps", options, markerPosition);
  }, [userLocation]);

  // 화면 크기 변경 시 지도 relayout
  useEffect(() => {
    const handleResize = () => {
      if (mapRef.current && window.kakao) {
        mapRef.current.relayout(); // 지도를 다시 그립니다.
        // 필요에 따라 중심점을 다시 설정할 수도 있습니다.
        // mapRef.current.setCenter(mapRef.current.getCenter());
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 의존성 배열을 비워 한 번만 등록되도록 합니다. mapRef.current는 변경되지 않습니다.

  const handdleFocusPosition = (item) => {
    setUserLocation({
      lat: item.REFINE_WGS84_LAT,
      lon: item.REFINE_WGS84_LOGT,
    });
    setLevelNumber(3);
  };
  const handdleResetBtn = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
    setSearchTerm(""); // 검색어 초기화 추가
    setLevelNumber(10);
  };

  return (
    <div className="map-page">
      <div className="map-container">
        <aside className="map-sidebar">
          <div className="Map-header-button-group">
            <button
              className="Map-navHome"
              onClick={() => {
                nav("/");
              }}
            >
              홈으로 돌아가기
            </button>
            <button className="Map-reset-map" onClick={handdleResetBtn}>
              지도 초기화
            </button>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="검색"
              onChange={searchOnChange}
              value={searchTerm}
            />
            <button className="search-btn"></button>
          </div>

          {filteredData.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                handdleFocusPosition(item);
              }}
              className="location-09card"
            >
              <h3>{item.BIZPLC_NM}</h3>
              <p>
                {item.REFINE_ROADNM_ADDR}
                <br />
                {item.REFINE_LOTNO_ADDR}
                <br />
                개업일 : {item.LICENSG_DE.slice(0, 4)}년{" "}
                {item.LICENSG_DE.slice(4, 6)}월 {item.LICENSG_DE.slice(6, 8)}일
              </p>
              <p className="open-status">{item.BSN_STATE_NM}</p>
            </div>
          ))}
        </aside>
        <section className="map-section">
          <div id="maps"></div>
        </section>
      </div>
    </div>
  );
};

export default Map;
