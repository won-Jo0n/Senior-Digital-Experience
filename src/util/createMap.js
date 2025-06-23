export default function createMap(
  containerID,
  options = {},
  markerPosition = []
) {
  var mapContainer = document.getElementById(containerID); // 지도를 표시할 div
  const map = new window.kakao.maps.Map(mapContainer, options);

  const zoomControl = new window.kakao.maps.ZoomControl();
  map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

  // 모든 커스텀 오버레이를 관리할 배열
  let activeCustomOverlays = [];

  for (let i = 0; i < markerPosition.length; i++) {
    const markerInfo = markerPosition[i];
    const marker = new window.kakao.maps.Marker({
      position: markerInfo.Latlng,
      clickable: true,
    });
    marker.setMap(map);

    const customOverlay = new window.kakao.maps.CustomOverlay({
      map: map, // 지도에 표시
      position: markerInfo.Latlng, // 마커와 동일한 위치
      content: markerInfo.content, // HTML 문자열
      yAnchor: 1.4,
      zIndex: 3,
    });
    // 초기에 모든 커스텀 오버레이를 숨김
    customOverlay.setMap(null);

    // 배열에 현재 커스텀 오버레이를 추가하여 관리
    activeCustomOverlays.push(customOverlay);
    // 마커 클릭 시 커스텀 오버레이 표시/숨김 처리
    window.kakao.maps.event.addListener(marker, "click", function () {
      // ⚠️ 중요: 다른 열려있는 오버레이를 모두 닫기
      activeCustomOverlays.forEach((overlay) => {
        overlay.setMap(null); // 모든 오버레이를 숨김
      });

      // 클릭된 마커의 오버레이만 보이게 함
      customOverlay.setMap(map);
    });
    // 맵을 클릭했을 때 모든 열려있는 오버레이를 닫는 이벤트 추가
    // 이렇게 하면 마커 외의 지도 영역을 클릭해도 정보창이 닫힙니다.
    window.kakao.maps.event.addListener(map, "click", function () {
      customOverlay.setMap(null);
    });
  }

  return map; // 생성된 지도 객체를 반환하여 외부에서 활용 할 수 있도록 처리
}
