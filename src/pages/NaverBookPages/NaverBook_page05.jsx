import { useNavigate, useLocation } from "react-router-dom";
import "./NaverBook_page05.css";
import Header from "../../components/Header";

const NaverBook_page05 = () => {
  const location = useLocation();
  const { date, time, slot } = location.state || {};
  const nav = useNavigate();

  return (
    <div className="bigContainer">
      <Header />
      <div className="bookWrapper">
        <img src="/phone.png" alt="phone" />

        <div className="NaverBook_page05">
          {/* 상단 아이콘 */}
          <div className="bookImg">
            <img src="/icon_memo.png" alt="확인 아이콘" />
          </div>

          {/* 예약 확인 메시지 */}
          <div className="bookConfirm">
            <h1>예약을 확인 중입니다</h1>
            <p>예약이 확정되면 네이버앱 알림으로 알려드릴게요!</p>
            <p>
              내 예약은 <strong>네이버마이</strong>에서 찾을 수 있어요.
            </p>

            <div className="waitTime">
              <img src="/icon_clock.png" alt="시계" />
              <p>확정까지 평균 2~3시간</p>
            </div>
          </div>

          {/* 예약 정보 박스 */}
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
