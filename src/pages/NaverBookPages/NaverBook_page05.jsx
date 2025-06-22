import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NaverBook_page05.css";
import Header from "../../components/Header";
import Button from "../../components/Button";

const NaverBook_page05 = () => {
  const location = useLocation();
  const { date, time, slot } = location.state || {};
  const nav = useNavigate();
  // isConfirmed: 예약이 "확정됨" 상태인지 여부를 나타내는 state (처음엔 false)
  const [isConfirmed, setIsConfirmed] = useState(false);

  //컴포넌트가 마운트되면 3초 후에 isConfirmed를 true로 변경
  //타이머는 언마운트 시 정리 (메모리 누수 방지)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConfirmed(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bigContainer">
      <Header />
      <div className="bookWrapper">
        <img src="/phone.png" alt="phone" />

        <div className="NaverBook_page05">
          {/* 상단 아이콘 */}
          <div className="bookImg">
            <img
              // 예약 전 확인 상태: /icon_memo.png
              // 예약 완료 상태: /icon_friends.png 로 변경됨
              src={isConfirmed ? "/icon_friends.png" : "/icon_memo.png"}
              alt="아이콘"
            />
          </div>

          {/* 본문 내용 */}
          {/* isConfirmed 값에 따라 메시지를 다르게 보여줌
              false: 예약 확인 중 문구
              true: "미션 성공" 문구로 바뀜 */}
          <div className="bookConfirm">
            {/* 삼항 연산  */}
            {!isConfirmed ? (
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
            ) : (
              <>
                <h1> 미션 성공 🎉</h1>
                <p>예약 정보가 성공적으로 전달되었습니다.</p>
              </>
            )}
          </div>

          {/* ✅ 항상 보이는 예약 정보 박스 */}
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
