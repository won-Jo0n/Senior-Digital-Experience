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
        <div className="finalText">키오스크 연습 완료!</div>
        <div></div>
        <div>
          <div>
            <div>이미지</div>
            <div>고생하셨습니다</div>
            <button onClick={backMenuPage}>홈으로</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KioskFinal;
