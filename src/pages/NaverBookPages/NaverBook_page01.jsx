import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import "./NaverBook_page01.css";
import Header from "../../components/Header";
import Button from "../../components/Button";
import MissionPopup from "../../components/MissionPopup";
import Highlight from "../../components/highlight"; // 수정된 컴포넌트 import
import { DataDispatchContext } from "../../App";

const NaverBook_page01 = () => {
  const nav = useNavigate();
  const [showPopup, setShowPopup] = useState(true);
  const { getIsChallenged } = useContext(DataDispatchContext);

  const secondPage = () => {
    sessionStorage.setItem("missionStart", new Date().toISOString());
    nav("/NaverBook/page02");
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bigContainer">
      {showPopup && getIsChallenged() && (
        <MissionPopup
          message={
            <span>
              <span className="noticeHighlight">제한 시간 1분</span>
              <br />
              <span className="redHighlight">6월 30일</span>,{" "}
              <span className="redHighlight">14시 30분</span>에<br />
              진료 목적은 <span className="redHighlight">보건증 발급</span>으로,
              <br />
              요청사항에는{" "}
              <span className="redHighlight">빠른 진료를 원해요</span>로,
              <br />
              병원 예약 부탁해~
            </span>
          }
          onClose={handleClosePopup}
        />
      )}

      <Header />
      <div className="bookWrapper">
        <img src="/phone.png" alt="phone" className="phone-frame" />

        <div className="NaverBook_page01">
          {/* 사진 영역 */}
          <div className="photo-section">
            <div className="main-photo">
              <img src="/logo_1.png" alt="메인" />
            </div>
            <div className="sub-photo-grid">
              <img src="/logo_1.png" alt="sub1" />
              <img src="/logo_1.png" alt="sub2" />
              <img src="/logo_1.png" alt="sub3" />
              <img src="/logo_1.png" alt="sub4" />
            </div>
          </div>

          {/* 병원명 */}
          <h2 className="clinic-title">
            해봐YOU의원 <span>건강의학과</span>
          </h2>
          <p className="reviews">방문자 리뷰 49 · 블록 리뷰 170</p>

          {/* 아이콘 그룹 + 예약 버튼 */}
          <div className="icon-group">
            <div className="icon-bar">
              <div className="icon-item">
                <i className="fi fi-sr-star"></i>
                <p>저장</p>
              </div>
              <div className="divider" />
              <div className="icon-item">
                <i className="fi fi-sr-marker"></i>
                <p>거리뷰</p>
              </div>
              <div className="divider" />
              <div className="icon-item">
                <i className="fi fi-sr-share"></i>
                <p>공유</p>
              </div>
            </div>

            {getIsChallenged() ? (
              <div className="reservation_button">
                <Button text={"예약"} onClick={secondPage} />
              </div>
            ) : (
              <Highlight tooltip="예약하기 버튼을 눌러주세요">
                <div className="reservation_button">
                  <Button text={"예약"} onClick={secondPage} />
                </div>
              </Highlight>
            )}
          </div>

          {/* 탭바 */}
          <div className="tab-bar">
            <div className="tab active">홈</div>
            <div className="tab">리뷰</div>
            <div className="tab">사진</div>
            <div className="tab">지도</div>
            <div className="tab">주변</div>
            <div className="tab">정보</div>
          </div>

          {/* 병원 정보 */}
          <div className="info-section">
            <div className="info-line">
              <i className="fi fi-sr-marker"></i>
              <p>서울 관악구 봉천로 227 보라매샤르망 5층 한국정보교육원</p>
            </div>
            <div className="info-line">
              <i className="fi fi-sr-navigation"></i>
              <p>신림선 단곡역 2번출구, 2호선 신림역 6번출구 (환승)</p>
            </div>
            <div className="info-line">
              <i className="fi fi-sr-clock"></i>
              <p>24시간 운영</p>
            </div>
            <div className="info-line">
              <i className="fi fi-sr-phone-call"></i>
              <p>
                0507-1318-9611 <span className="copy">복사</span>
              </p>
            </div>
            <div className="info-line">
              <i className="fi fi-sr-user-md"></i>
              <p>정신건강의학과 전문의 4명</p>
            </div>
            <div className="info-line">
              <i className="fi fi-sr-globe"></i>
              <p className="naverlink">http://www.keduit.com</p>
            </div>
            <div className="info-line">
              <i className="fi fi-sr-wheelchair"></i>
              <p>예약, 남/녀 화장실 구분, 대기공간</p>
            </div>
          </div>

          <button className="more-info">정보 더보기</button>
        </div>
      </div>
    </div>
  );
};

export default NaverBook_page01;
