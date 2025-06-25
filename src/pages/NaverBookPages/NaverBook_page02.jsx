import { useNavigate } from "react-router-dom";
import "./NaverBook_page02.css";
import Header from "../../components/Header";
import Highlight from "../../components/highlight";
import { DataDispatchContext } from "../../App";
import { useContext } from "react";

const NaverBook_page02 = () => {
  const nav = useNavigate();
  const { getIsChallenged } = useContext(DataDispatchContext);

  const thirdPage = () => {
    nav("/NaverBook/page03");
  };

  return (
    <div className="bigContainer">
      <Header leftIcon="left1" rightIcon="right1" />
      <div className="bookWrapper">
        <img src="/phone.png" alt="스마트폰 프레임" />

        <div className="NaverBook_page02">
          {/* 상단 이미지 + 그라데이션 오버레이 */}
          <div className="topImageBox">
            <img src="/hospital.png" alt="병원 내부" />
            <div className="gradientOverlay">
              <h2>해봐YOU의원</h2>
              <p>★ 4.99 / 리뷰 1520</p>
              <div className="ratingBox">
                <span>★ 4.99</span>
                <span className="dividerDot">·</span>
                <span>리뷰 1520</span>
              </div>
            </div>
          </div>

          {/* 주소 및 연락처 */}
          <div className="contactBox">
            <div className="contactIconRow">
              <i className="fi fi-sr-marker"></i>
              <p>서울 관악구 봉천로 227 보라매샤르망 5층 한국정보교육원</p>
            </div>

            <div className="contactIconRow">
              <div className="iconItem">
                <i className="fi fi-sr-map-marker"></i>
                <span>지도</span>
              </div>
              <div className="iconItem">
                <i className="fi fi-sr-comment-alt"></i>
                <span>톡톡</span>
              </div>
              <div className="iconItem">
                <i className="fi fi-sr-home"></i>
                <span>홈페이지</span>
              </div>
              <div className="iconItem">
                <i className="fi fi-sr-phone-call"></i>
                <span>전화</span>
              </div>
            </div>
          </div>

          {/* 예약 영역 */}
          <div className="reservationSection">
            <h3>예약</h3>

            {getIsChallenged() ? (
              <div className="reservationCard" onClick={thirdPage}>
                <h4>더해봐YOU의원 _ 네이버예약</h4>
                <p>
                  해봐YOU의원 네이버 예약입니다. 간편하게 예약하고 문의해주세요.
                  감사합니다.
                </p>
                <div className="reviewAndBtnRow">
                  <span className="reviewSmall">★ 4.99 / 리뷰 1520</span>
                  <button className="greenBtn">예약하기</button>
                </div>
              </div>
            ) : (
              <Highlight
                tooltip="병원을 선택해 예약을 시작해보세요!"
                color="green"
              >
                <div className="reservationCard" onClick={thirdPage}>
                  <h4>더해봐YOU의원 _ 네이버예약</h4>
                  <p>
                    해봐YOU의원 네이버 예약입니다. 간편하게 예약하고
                    문의해주세요. 감사합니다.
                  </p>
                  <div className="reviewAndBtnRow">
                    <span className="reviewSmall">★ 4.99 / 리뷰 1520</span>
                    <button className="greenBtn">예약하기</button>
                  </div>
                </div>
              </Highlight>
            )}
          </div>

          {/* 소개 영역 */}
          <div className="sectionWrapper">
            <h3 className="sectionTitle">소개</h3>
            <div className="introSection">
              <p>
                행신동 치과 일대 최대 규모 상상플란트치과
                <br />
                - 구강악안면외과, 보철과, 교정과 전문의 협진
                <br />
                - 대학병원급 장비 및 감염방지 시스템 구축
                <br />- 1:1 맞춤 진료와 전문 상담 제공
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaverBook_page02;
