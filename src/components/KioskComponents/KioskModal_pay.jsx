import { useReducer } from "react";
import "./KioskModal_pay.css";

function reducer(state, action) {
  switch (action.type) {
    case 1:
      return;
  }
}

const KioskModalPay = ({ setOnPayModal }) => {
  //선택 버튼에 따라 모달 창이 바뀜0
  const [chageModal, dispatch] = useReducer(reducer, "");

  return (
    <div className="PayModal">
      <div className="PayModalBody">
        <div className="OLDERlIST">
          <div className="olderContent">주문 내역 목록들 축약</div>
        </div>
        <div className="totalPay">총수량:n개 총금액: n원</div>
        <div>
          <button
            className="leftBtn"
            onClick={() => {
              setOnPayModal(false);
            }}
          >
            이전
          </button>
          <button
            className="rightBtn"
            onClick={() => {
              dispatch;
            }}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default KioskModalPay;
