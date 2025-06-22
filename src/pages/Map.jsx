import "./Map.css";
import createMap from "../util/createMap";
import { useEffect, useState } from "react";

const Map = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [userLocation, setUserLocation] = useState(null);

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
        console.log("안됨");
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

  // 📍 검색 결과에 따라 마커 다시 표시
  useEffect(() => {
    if (!userLocation) return;

    const markerPosition = filteredData.map((item) => ({
      content: `<div>${item.BIZPLC_NM}</br>${item.REFINE_ROADNM_ADDR}</div>`,
      Latlng: new window.kakao.maps.LatLng(
        item.REFINE_WGS84_LAT,
        item.REFINE_WGS84_LOGT
      ),
    }));

    const locPosition = new kakao.maps.LatLng(
      userLocation.lat,
      userLocation.lon
    );

    const options = {
      center: locPosition,
      level: 10,
    };

    createMap("maps", options, markerPosition);
  }, [filteredData, userLocation]); // 필터 결과나 위치가 바뀌면 지도 리렌더

  return (
    <div className="map-page">
      <header className="map-header">맵</header>
      <div className="map-container">
        <aside className="map-sidebar">
          <div className="search-bar">
            <input
              type="text"
              placeholder="검색"
              onChange={searchOnChange}
              value={searchTerm}
            />
            <button className="search-btn">🔍</button>
          </div>

          {filteredData.map((item, idx) => (
            <div key={idx} className="location-09card">
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
          <button className="back-btn">돌아가기</button>
          <div id="maps"></div>
        </section>
      </div>
    </div>
  );
};

export default Map;
