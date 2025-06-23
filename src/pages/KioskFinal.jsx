import "./KioskFinal.css";
import { useNavigate } from "react-router-dom";

const KioskFinal = () => {
  const nav = useNavigate();

  const backMenuPage = () => {
    nav("/");
  };

  return (
    <div className="FinalKioskDisplay">
      <div className="finalKiosk">
        <img src={"/icon_friends.png"} alt="아이콘" />
        <div className="finalText">
          <b>키오스크 미션 성공 🎉</b>
        </div>
        <div>
          <div>
            <div className="finishText">
              <b>주문이 접수 되었습니다</b>
            </div>
            <button className="MOVEHOME" onClick={backMenuPage}>
              홈으로
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KioskFinal;
