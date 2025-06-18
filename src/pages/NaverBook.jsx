const NaverBook = () => {
  // 첫번쨰 페이지
  return (
    <div className="NaverBook">
      <div className="naverbook-header">
        <img src="#" className="logo" />
        <div className="clinic-info">
          <h2>시청하늘정신건강의학과의원</h2>
          <p className="sub">정신건강의학과</p>
          <p>방문자 리뷰 49 · 블로그 리뷰 170</p>
        </div>
      </div>

      <div className="naverbook-actions">
        <p>전화</p>
        <p>저장</p>
        <p>길찾기</p>
        <p>공유</p>
        <button className="reserve">예약</button>
        <p>문의</p>
      </div>

      <div className="naverbook-details">
        <p>📍 서울 중구 무교로 13 6층</p>
        <p>🚇 시청역 1,2호선 4번 출구에서 192m</p>
        <p>🕑 진료 중 · 14:00에 휴게시간</p>
        <p>📞 02-756-6322</p>
        <p>👨‍⚕️ 정신건강의학과 전문의 2명</p>
        <p>http://skymentalhealth.com</p>
      </div>
    </div>
  );
};

export default NaverBook;
