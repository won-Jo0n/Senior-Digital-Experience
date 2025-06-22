import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NaverBook_page05.css";
import Header from "../../components/Header";
import Button from "../../components/Button";

const NaverBook_page05 = () => {
  const location = useLocation();
  const { date, time, slot } = location.state || {};
  const nav = useNavigate();

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [missionTime, setMissionTime] = useState("");

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

      if (diffSec <= 60) {
        setIsConfirmed(true);
      } else {
        setIsFailed(true);
      }
    }
  }, []);

  return (
    <div className="bigContainer">
      <Header />
      <div className="bookWrapper">
        <img src="/phone.png" alt="phone" />
        <div className="NaverBook_page05">
          <div className="bookImg">
            <img
              src={
                isConfirmed
                  ? "/icon_friends.png"
                  : isFailed
                  ? "/icon_sad.png"
                  : "/icon_memo.png"
              }
              alt="아이콘"
            />
          </div>

          <div className="bookConfirm">
            {isConfirmed && (
              <>
                <h1>미션 성공 🎉</h1>
                <p>예약 정보가 성공적으로 전달되었습니다.</p>
              </>
            )}

            {isFailed && (
              <>
                <h1>미션 실패 😥</h1>
                <p>1분이 지나서 예약이 너무 늦었어요!</p>
              </>
            )}

            <div className="elapsedTimeBox">
              <p>⏱️ 총 소요 시간: {missionTime}</p>
            </div>
          </div>

          <div className="finalBook">
            <p className="bookName">해봐YOU의원</p>
            <p className="bookDate">
              {date} ∘ {slot} {time}
            </p>
            <p className="smallbookContent">해봐YOU의원_네이버예약</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaverBook_page05;
