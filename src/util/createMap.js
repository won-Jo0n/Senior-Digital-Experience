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
  // 현재 열려있는 오버레이를 추적할 변수
  let currentOpenedOverlay = null;

  for (let i = 0; i < markerPosition.length; i++) {
    const markerInfo = markerPosition[i];
    const marker = new window.kakao.maps.Marker({
      position: markerInfo.Latlng,
      clickable: true,
    });
    marker.setMap(map);

    // 각 마커에 해당하는 커스텀 오버레이를 생성
    const customOverlay = new window.kakao.maps.CustomOverlay({
      map: null, // 초기에 지도에 표시하지 않음
      position: markerInfo.Latlng,
      content: markerInfo.content,
      yAnchor: 1.1,
      zIndex: 3,
    });

    activeCustomOverlays.push(customOverlay); // 배열에 추가하여 관리

    // 마커 클릭 시 커스텀 오버레이 표시/숨김 처리
    window.kakao.maps.event.addListener(marker, "click", function () {
      // 이전에 열려있던 오버레이가 있다면 닫기
      if (currentOpenedOverlay && currentOpenedOverlay !== customOverlay) {
        currentOpenedOverlay.setMap(null);
      }

      // 클릭된 오버레이가 현재 열려있는 오버레이와 같다면 닫기 (토글)
      // 그렇지 않다면 클릭된 오버레이 열기
      if (currentOpenedOverlay === customOverlay) {
        customOverlay.setMap(null);
        currentOpenedOverlay = null;
      } else {
        customOverlay.setMap(map);
        currentOpenedOverlay = customOverlay;
      }
    });
  }

  // 맵을 클릭했을 때 모든 열려있는 오버레이를 닫는 이벤트 추가 (루프 밖으로 이동)
  // 이 리스너는 한 번만 등록됩니다.
  window.kakao.maps.event.addListener(map, "click", function (mouseEvent) {
    if (currentOpenedOverlay) {
      currentOpenedOverlay.setMap(null);
      currentOpenedOverlay = null;
    }
  });

  return map; // 생성된 지도 객체를 반환하여 외부에서 활용 할 수 있도록 처리
}
