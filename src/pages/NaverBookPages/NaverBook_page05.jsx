import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NaverBook_page05.css";
import Header from "../../components/Header";
import Button from "../../components/Button";

const NaverBook_page05 = () => {
  const location = useLocation();
  const { date, time, slot, purposeTreatment, treatmentRequest } =
    location.state || {};

  const nav = useNavigate();

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [missionTime, setMissionTime] = useState("");
  const [showResult, setShowResult] = useState(false); // 3초 뒤 결과 보여줄지 여부

  useEffect(() => {
    const startStr = sessionStorage.getItem("missionStart");
    const endStr = sessionStorage.getItem("missionEnd");

    if (startStr && endStr) {
      const start = new Date(startStr);
      const end = new Date(endStr);
      const diffSec = Math.floor((end - start) / 1000);
      const min = Math.floor(diffSec / 60);
      const sec = diffSec % 60;
      setMissionTime(`${min}:${sec.toString().padStart(2, "0")}`);

      const timer = setTimeout(() => {
        // ✅ 미션 기준 값
        const missionDate = "2025-06-30";
        const missionTimeVal = "14:30";
        const missionPurpose = "보건증 발급";
        const missionRequest = "빠른 진료를 원해요";

        const isTimeOK = diffSec <= 60;
        const isDateMatch = date === missionDate;
        const isTimeMatch = time === missionTimeVal;
        const isPurposeMatch = purposeTreatment?.includes(missionPurpose);
        const isRequestMatch = treatmentRequest === missionRequest;

        const isAllMatch =
          isTimeOK &&
          isDateMatch &&
          isTimeMatch &&
          isPurposeMatch &&
          isRequestMatch;

        if (isAllMatch) {
          setIsConfirmed(true);
        } else {
          setIsFailed(true);
        }
        setShowResult(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="bigContainer">
      <Header />
      <div className="bookWrapper">
        <img src="/phone.png" alt="phone" />
        <div className="NaverBook_page05">
          {/* 아이콘 */}
          <div className="bookImg">
            <img
              src={
                showResult
                  ? isConfirmed
                    ? "/icon_friends.png"
                    : "/icon_sad.png"
                  : "/icon_memo.png"
              }
              alt="아이콘"
            />
          </div>

          <div className="bookConfirm">
            {/*  확인 중 메시지 (3초 동안만 표시됨) */}
            {!showResult && (
              <>
                <h1>예약을 확인 중입니다</h1>
                <p>예약이 확정되면 네이버앱 알림으로 알려드릴게요!</p>
                <p>
                  내 예약은 <strong>네이버마이</strong>에서 찾을 수 있어요.
                </p>
                <div className="waitTime">
                  <img src="/icon_clock.png" alt="시계" />
                  <p>확정까지 평균 2~3시간</p>
                </div>
              </>
            )}

            {/*  성공/실패 메시지 (3초 후에만 표시됨) */}
            {showResult && isConfirmed && (
              <div className="resultBox success">
                <h2>미션 성공 </h2>
                <p>예약 정보가 성공적으로 전달되었습니다.</p>
              </div>
            )}
            {showResult && isFailed && (
              <div className="resultBox fail">
                <h2>미션 실패 </h2>
                <p className="missionReason">
                  조건이 맞지 않거나,
                  <br />
                  1분이 지나서 실패했어요!
                </p>
                <p className="retryAgain">다시 도전해보세요!</p>
              </div>
            )}

            {/* ⏱️ 소요 시간은 항상 표시 */}
            {missionTime && (
              <div className="elapsedTimeBox">
                <p>⏱️ 총 소요 시간: {missionTime}</p>
              </div>
            )}
          </div>

          {/* 예약 정보 */}
          <div className="finalBook">
            <p className="bookName">해봐YOU의원</p>
            <p className="bookDate">
              {date} ∘ {slot} {time}
            </p>
            {/* 진료 목적 표시 */}
            {purposeTreatment && purposeTreatment.length > 0 && (
              <p className="bookPurpose">
                진료 목적: {purposeTreatment.join(", ")}
              </p>
            )}

            {/*  요청사항 표시 */}
            {treatmentRequest && (
              <p className="bookRequest">요청사항: {treatmentRequest}</p>
            )}
            <p className="smallbookContent">해봐YOU의원_네이버예약</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaverBook_page05;
