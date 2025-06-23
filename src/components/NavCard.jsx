import "./NavCard.css";
import { getNavCardImage } from "../util/getNavCardImage";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataDispatchContext, DataStateContext } from "../App";

const NavCard = ({ title, explanation, cardImage, onClick }) => {
  const [showButtons, setShowButtons] = useState(false); // 버튼 표시 여부를 관리하는 상태
  const nav = useNavigate();
  const { setIsChallenged } = useContext(DataDispatchContext);
  const { isLogin } = useContext(DataStateContext);

  // 마우스 진입 시
  const handleMouseEnter = () => {
    setShowButtons(true); // 모든 카드에 대해 버튼 표시
  };

  // 마우스 이탈 시
  const handleMouseLeave = () => {
    setShowButtons(false); // 모든 카드에 대해 버튼 숨김
  };

  // "연습모드" 버튼 클릭 핸들러 (키오스크, 병원예약에만 해당)
  const onPracticeMode = (e) => {
    e.stopPropagation(); // 부모 div의 onClick 이벤트 전파 방지

    if (cardImage === 1) {
      // 키오스크
      setIsChallenged("Kiosk", false);
      nav("/Kiosk/Practice");
    } else if (cardImage === 2) {
      // 병원예약하기
      setIsChallenged("naverBook", false);
      nav("/NaverBook/Practice");
    }
    // cardImage === 3일 때는 이 함수가 호출되지 않음
  };

  // "실전모드" 버튼 클릭 핸들러 (키오스크, 병원예약에만 해당)
  // 또는 3번 카드일 때 "복지시설 둘러보기" 버튼 클릭 핸들러
  const onMainActionClick = (e) => {
    e.stopPropagation(); // 부모 div의 onClick 이벤트 전파 방지
    if (!isLogin && cardImage !== 3) {
      alert("로그인 후 이용하시면 이벤트 참여가 가능하십니다!");
    }
    onClick(); // NavCard에 전달된 onClick prop 실행 (onKiosk, onNaverBook, onMap)
  };

  return (
    <div
      className="NavCard"
      onMouseEnter={handleMouseEnter} // 마우스 진입 이벤트 리스너 추가
      onMouseLeave={handleMouseLeave} // 마우스 이탈 이벤트 리스너 추가
    >
      {/* 일반적인 NavCard 내용 */}
      <img
        className="NavCardImage"
        src={getNavCardImage(cardImage)}
        alt={title}
      />
      <h4 className="title">{title}</h4>
      <div className="explanation">{explanation}</div>

      {/* 마우스 호버 시 나타나는 오버레이 버튼 영역 */}
      {showButtons && (
        <div className="card-overlay-buttons">
          {cardImage === 3 ? ( // 3번 카드일 때
            <button
              className="single-action-button"
              onClick={onMainActionClick}
            >
              복지시설 둘러보기
            </button>
          ) : (
            // 1번 또는 2번 카드일 때
            <>
              <button className="practice-mode-button" onClick={onPracticeMode}>
                연습모드
              </button>
              <button className="real-mode-button" onClick={onMainActionClick}>
                실전모드
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default NavCard;
