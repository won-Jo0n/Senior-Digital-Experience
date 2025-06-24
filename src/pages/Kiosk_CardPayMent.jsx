import "./Kiosk_CardPayMent.css";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataDispatchContext } from "../App";
import Header from "../components/Header";

const Kiosk_CardPayMent = () => {
  const nav = useNavigate();
  const { getOrderList } = useContext(DataDispatchContext);
  const orderList = getOrderList();

  let totalPrice = 0;

  orderList.map((item) => (totalPrice += item.totalPrice));

  // useEffect(() => {
  //   //이동될때만 실행행
  //   const timer = setTimeout(() => {
  //     // 3초 후에 홈 페이지나 다른 원하는 경로로 이동
  //     nav("/KioskFinal"); // 예: 홈 페이지로 이동
  //   }, 3000);

  //   // 컴포넌트가 언마운트될 때 타이머를 클리어하여 메모리 누수 방지
  //   return () => clearTimeout(timer);
  // }, [nav]); // navigate 함수가 변할 때때

  return (
    <div className="Kiosk_CardPayMent">
      <div className="KIOSKDP3">
        <img className="KioskDP3-img" src="/koisk.png" />
        <div className="cardPayMent">
          <div className="cardTitle">
            <b>신용카드 결제</b>
          </div>
          <div className="totalMoney">{totalPrice}원이 결제 됩니다</div>
          <div className="totalContents">
            <b>키오스크 연습이므로 실제로 결제되지 않습니다</b>
          </div>
          <div className="moveDISplay">
            화면은 자동으로 넘어갑니다.
            <br /> 잠시만 기다려주세요
          </div>
          <div>
            <img
              className="CARDPAYMENT"
              src="https://cdn-icons-png.flaticon.com/512/869/869139.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kiosk_CardPayMent;
