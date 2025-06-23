import { useContext } from "react";
import { DataDispatchContext } from "../App";
import "./KioskFinal.css";
import { useNavigate } from "react-router-dom";

const KioskFinal = () => {
  const { getOrderList } = useContext(DataDispatchContext); //미션인지 연습인지
  const nav = useNavigate();

  const backMenuPage = () => {
    nav("/");
  };

  const orderList = getOrderList();

  console.log(orderList);

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
