import "./KioskModal_pay.css";
import { useNavigate } from "react-router-dom";

const KioskModalPay = ({ setOnPayModal, orderItems }) => {
  //선택 버튼에 따라 모달 창이 바뀜
  console.log(orderItems);
  const nav = useNavigate();

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
        <div className="OLDERlIST">
          {orderItems.map((orderItem) => {
            return (
              <>
                <div className="olderContent" key={orderItem.name}>
                  <img src={orderItem.image} />
                  <div className="text-content">
                    {orderItem.name}금액:{orderItem.price} 수량:
                    {orderItem.quantity}
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="totalPay">
          총수량:{totalquantity}개 총금액: {totalPrice}원
        </div>

        <div>
          <button className="leftBtn" onClick={onClosePayModal}>
            이전
          </button>
          <button className="rightBtn" onClick={movePayMentPage}>
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default KioskModalPay;
