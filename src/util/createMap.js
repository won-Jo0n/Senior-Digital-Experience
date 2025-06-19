export default function createMap(
  containerID,
  options = {},
  markerPosition = []
) {
  var mapContainer = document.getElementById(containerID); // 지도를 표시할 div
  const map = new window.kakao.maps.Map(mapContainer, options);
  console.log(markerPosition);
  for (let i = 0; i < markerPosition.length; i++) {
    const marker = new window.kakao.maps.Marker({
      position: markerPosition[i].Latlng,
      clickable: true,
    });
    marker.setMap(map);
    const iwContent = markerPosition[i].content, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwRemoveable = true;
    const infowindow = new window.kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });
    window.kakao.maps.event.addListener(marker, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);
    });
  }
  // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다

  return map; // 생성된 지도 객체를 반환하여 외부에서 활용 할 수 있도록 처리
}
