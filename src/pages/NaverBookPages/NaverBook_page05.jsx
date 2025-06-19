import { useNavigate } from "react-router-dom";
import "./NaverBook_page05.css";
import Button from "../../components/Button";
import Header from "../../components/Header";

const NaverBook_page05 = () => {
  const nav = useNavigate();

  return (
    <div>
      <Header />
      <div className="NaverBook_page05">
        <div className="bookImg">
          <img src="#"></img>
        </div>
        <div className="bookConform">
          <h1>예약을 확인하는 중입니다.</h1>
          <p>예약이 확정되면 네이버앱 알림으로 알려드릴게요!</p>
          <p>내 예약은 네이버마이에서 찾을 수 있어요.</p>
          <div className="waitTime">확정까지 평균 2~3시간</div>
        </div>
        <div className="finalBook">
          <h4>해봐YOU의원</h4>
          <p className="bookDate">6.20(금) 오후 2:30</p>
          <p>해봐YOU의원_네이버예약</p>
        </div>
      </div>
    </div>
  );
};
export default NaverBook_page05;
