import { useContext } from "react";
import "./StampPopup.css";
import { DataStateContext } from "../App";
import getCompleteMissionImage from "../util/getCompleteMissionImage";

const StampPopup = ({ onClose, onNotAgainSee }) => {
  const { loginedId } = useContext(DataStateContext);
  let completeNum = 0;

  // 미션 성공 여부
  if (loginedId.mission[0] && loginedId.mission[1]) completeNum = 3;
  else if (loginedId.mission[0]) completeNum = 1;
  else if (loginedId.mission[1]) completeNum = 2;

  // 나이 계산
  const birth = new Date(loginedId.birth);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--; // 생일 아직 안 지난 경우
  }

  return (
    <div className="stamp-popup-overlay">
      <div className="stamp-popup-box">
        <div className="popup-inner">
          <h2 className="stamp-title">디지털 미션 도장판</h2>
          <p className="stamp-subtitle">디지털 미션에 참여하시겠습니까?</p>

          <div className="stamp-flow">
            <div className="stamp-item">
              {/* 💬 말풍선 텍스트 */}
              <div className="balloon-text">
                내 나이 {age}세, <br />
                청춘 시작이다!
              </div>
              <img src={getCompleteMissionImage(completeNum)} alt="멘트" />
            </div>
          </div>

          {/* 주황 하단 영역 */}
          <div className="stamp-bottom">
            <div className="stamp-desc-box">
              <p>
                디지털 기기가 어렵게만 느껴졌던 순간,
                <br />
                미션을 통해 새로운 도전을 시작해보세요!
                <br />
                단계별 미션을 수행하며 나만의 도장을 채워가고,
                <br />
                다양한 보상을 받아가세요!
              </p>
              <strong>당신도 디지털 레전드 해봐 you~</strong>
            </div>
            <div className="stamp-button-container">
              <button className="stamp-close-button" onClick={onClose}>
                닫기
              </button>
              <button
                className="stamp-close-button"
                onClick={() => {
                  onNotAgainSee();
                  console.log(".");
                }}
              >
                다시는 보지않기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StampPopup;
