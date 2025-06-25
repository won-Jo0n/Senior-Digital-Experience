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

  const onMainActionClick = (e) => {
    e.stopPropagation(); // 부모 div의 onClick 이벤트 전파 방지

    if (e.target.innerText === "실전모드") {
      if (!isLogin && cardImage !== 3) {
        alert("로그인 후 이용하시면 이벤트 참여가 가능하십니다!");
      }
    }
    if (e.target.innerText === "연습모드") {
      onClick(false);
    } else {
      onClick(true); // NavCard에 전달된 onClick prop 실행 (onKiosk, onNaverBook, onMap)
    }
  };

  return (
    <div
      className={`${cardImage === 3 ? "NavCard image_3" : "NavCard"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 일반적인 NavCard 내용 */}
      <img
        className="NavCardImage"
        src={getNavCardImage(cardImage)}
        alt={title}
      />
      <h1 className="title">{title}</h1>

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
              <button
                className="practice-mode-button"
                onClick={onMainActionClick}
              >
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
