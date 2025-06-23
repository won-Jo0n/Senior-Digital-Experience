import "./KioskModal_pay.css";
import "../../components/highlight.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataDispatchContext } from "../../App.jsx";

const KioskModalPay = ({ setOnPayModal, orderItems, threeHighlight }) => {
  const { getIsChallenged, setOrderList } = useContext(DataDispatchContext); //미션인지 연습인지
  //선택 버튼에 따라 모달 창이 바뀜

  const nav = useNavigate();

  setOrderList(orderItems);

  let totalPrice = 0;
  let totalquantity = 0;
  for (const orderItem of orderItems) {
    totalPrice += orderItem.totalPrice;
    totalquantity += orderItem.quantity;
  }

  const onClosePayModal = () => {
    setOnPayModal(false);
  };

  const movePayMentPage = () => {
    setOnPayModal(false);
    nav("/KioskPay");
  };

  return (
    <div className="PayModal">
      <div className="PayModalBody">
        <div className="kiosk-modal-header">
          <h2>주문 확인</h2> {/* 명확한 헤더 추가 */}
        </div>
        <div className="OLDERlIST">
          {orderItems.map((orderItem) => {
            return (
              <>
                <div className="olderContent" key={orderItem.name}>
                  <div className="text-content">
                    <img src={orderItem.image} />
                  </div>
                  <div className="item-content">
                    {orderItem.name} {orderItem.price}원 {orderItem.quantity}개
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="totalPay">
          총수량: {totalquantity}개 총금액: {totalPrice}원
        </div>
        <div className="btnGroup">
          <button className="leftBtn" onClick={onClosePayModal}>
            이전
          </button>
          <button
            className={
              getIsChallenged() || !threeHighlight
                ? "rightBtn"
                : "rightBtn highlight"
            }
            onClick={movePayMentPage}
          >
            <div>결제하기</div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default KioskModalPay;
