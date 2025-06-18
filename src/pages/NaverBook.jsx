import { useNavigate } from "react-router-dom";
import "./NaverBook.css";

const NaverBook = () => {
  const nav = useNavigate();

  const secondPage = () => {
    nav("/page01");
  };

  return (
    <div className="NaverBook">
      <div className="image-section">
        <img src="/img1.png" alt="logo" className="logoImg" />
        <div className="image2">
          <img src="/img2.png" alt="sewin" />
          <img src="/img2.png" alt="jinsung" />
        </div>
        <div className="image3">
          <img src="/img3.png" alt="wonJoon" />
          <img src="/img4.png" alt="jiwon" />
        </div>
      </div>

      <h2 className="clinic-title">
        해봐YOU의원 <span>건강의학과</span>
      </h2>
      <p className="reviews">방문자 리뷰 49 · 블로그 리뷰 170</p>

      <div className="div-group">
        <img src="/naverCall.jpg"></img>
      </div>
      {/* <div className="div-group">
        <div>전화</div>
        <div>저장</div>
        <div>길찾기</div>
        <div>공유</div>
      </div> */}

      <div className="action-buttons">
        <button className="green" onClick={secondPage} type="secondPage">
          예약
        </button>
        <button className="gray">문의</button>
      </div>

      <div className="info-section">
        <img src="/naverContent.png"></img>
      </div>

      {/* <div className="info-section">
        <p>서울 중구 무교로 13 6층</p>
        <p>시청역 1,2호선 4번 출구에서 192m</p>
        <p>진료 중 · 14:00에 휴게시간</p>
        <p>02-756-6322</p>
        <p>정신건강의학과 전문의 2명</p>
        <p className="naverlink">http://skymentalhealth.com/</p>
        <p>예약, 남/녀 화장실 구분, 대기공간</p>
      </div> */}
    </div>
  );
};

export default NaverBook;
