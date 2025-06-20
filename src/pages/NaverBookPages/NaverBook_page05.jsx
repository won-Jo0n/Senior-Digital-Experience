import { useNavigate, useLocation } from "react-router-dom";
import "./NaverBook_page05.css";
import Button from "../../components/Button";
import Header from "../../components/Header";

const NaverBook_page05 = () => {
  const location = useLocation();
  const { date, time, slot } = location.state || {};

  console.log(date, time, slot);

  const nav = useNavigate();

  return (
    <div className="bigContainer">
      <Header />
      <div className="bookWrapper">
        <img src="/phone.png" alt="phone"></img>

        <div className="NaverBook_page05">
          <div className="bookImg">
            <img src="/icon_memo.png"></img>
          </div>
          <div className="bookConform">
            <h1>예약을 확인하는 중입니다.</h1>
            <p>예약이 확정되면 네이버앱 알림으로 알려드릴게요!</p>
            <p>내 예약은 네이버마이에서 찾을 수 있어요.</p>
            <div className="waitTime">
              <img src="/icon_clock.png"></img>
              <p>확정까지 평균 2~3시간</p>
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
