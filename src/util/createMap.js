export default function createMap(
  containerID,
  options = {},
  markerPosition = {}
) {
  var mapContainer = document.getElementById(containerID); // 지도를 표시할 div
  const map = new window.kakao.maps.Map(mapContainer, options);

  for (let i = 0; i < markerPosition.length; i++) {
    var marker = new window.kakao.maps.Marker({
      position: markerPosition[i].lating,
    });
    const iwContent = "<div>hi</div>";
    const iwPosition = markerPosition[i].lating; //인포윈도우 표시 위치입니다

    var infowindow = new window.kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });
    marker.setMap(map);
    window.kakao.maps.event.addListener(marker, "mouseover", function () {
      // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);
    });
    // 마커에 마우스아웃 이벤트를 등록합니다
    window.kakao.maps.event.addListener(marker, "mouseout", function () {
      // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
      infowindow.close();
    });
  }
  // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다

  return map; // 생성된 지도 객체를 반환하여 외부에서 활용 할 수 있도록 처리
}
