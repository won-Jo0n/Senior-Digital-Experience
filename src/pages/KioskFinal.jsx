import "./KioskFinal.css";
import { useContext } from "react";
import { DataDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

const KioskFinal = () => {
  const { getOrderList } = useContext(DataDispatchContext);
  const { getIsChallenged } = useContext(DataDispatchContext); //미션인지 연습인지(현재 false)
  const nav = useNavigate();

  const backMenuPage = () => {
    nav("/");
  };

  const orderList = getOrderList();
  const orderItemNames = orderList.map((item) => item.name);
  const orderItemQuantity = orderList.map((item) => item.quantity);

  console.log(orderItemQuantity);
  const hasDalgona = orderItemNames.includes("달고나 라떼");
  const hasCheseCake = orderItemNames.includes("치즈 케이크");
  const isHave = hasDalgona && hasCheseCake;

  return (
    <>
      <div className="FinalKioskDisplay">
        <div className="finalKiosk">
          <img src={"/icon_friends.png"} alt="아이콘" />
          <div className="finalText">
            {getIsChallenged(true) &&
              (isHave ? (
                <b>키오스크 미션 성공 🎉</b>
              ) : (
                <b>키오스크 미션 실패 😣</b>
              ))}
            <br></br>
          </div>
          <div>
            <div>
              <div className="finishText">
                <div className="finishTextMenu">
                  {orderList.map((orderItem) => {
                    return (
                      <>
                        <div className="FinishWarp" key={orderItem.name}>
                          <div className="text-img">
                            <img src={orderItem.image} />
                          </div>
                          <div className="FINISH">
                            {orderItem.name} {orderItem.price}원{" "}
                            {orderItem.quantity}개
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div>
                {" "}
                <button className="MOVEHOME" onClick={backMenuPage}>
                  홈으로
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KioskFinal;
