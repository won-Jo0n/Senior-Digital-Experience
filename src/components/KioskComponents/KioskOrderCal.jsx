import "./KioskOrderCal.css";
import { useNavigate } from "react-router-dom";
// 주문내역 총수량 및 총합계 계산
// orderItems에는 [itemId,itemName, itemPrice]
const KioskOrderCal = ({
  orderItems,
  setOrderItems,
  setOnPayModal,
  orderNumPlus, //해당 메뉴 수량 올리기
  orderNumMinus, //해당 메뉴 수량 줄이기
}) => {
  const nav = useNavigate();
  //총 가격
  let totalPrice = 0;
  let totalquantity = 0;
  for (const orderItem of orderItems) {
    totalPrice += orderItem.totalPrice;
    totalquantity += orderItem.quantity;
  }
  //키오스크 시작화면으로 이동
  const moveStartPage = () => {
    nav("/Kiosk");
  };
  // 주문 내역 지우기 버튼
  const clearList = () => {
    setOrderItems([]);
  };

  // 주문하기 클릭시 모달 창 띄우기
  const openOlder = () => {
    if (orderItems.length === 0) {
      alert("주문 내역이 존재하지 않습니다. 메뉴를 선택해주세요🙂");
      setOnPayModal(false);
    } else {
      setOnPayModal(true);
    }
  };
  return (
    <div className="ALLorderList">
      <div className="ORDERlIST">
        <b>주문 내역</b>
      </div>

      <div className="orderListBlank">
        {/* 메뉴 선택 시 주문 창 이미지와 정보 띄우기*/}
        {orderItems.map((orderItem) => {
          return (
            <div className="orderITEM" key={orderItem.name}>
              <img src={orderItem.image} alt={orderItem.name} />
              {orderItem.name}
              {orderItem.price}
              {/* 수량 추가 버튼 */}
              <button
                className="orderNumPlus"
                onClick={() => orderNumPlus(orderItem.id, orderItem.name)}
              >
                +
              </button>
              <button
                className="orderNumPlus"
                onClick={() => orderNumMinus(orderItem.id, orderItem.name)}
              >
                -
              </button>
              {orderItem.quantity}개
            </div>
          );
        })}
      </div>
      <div className="orderBlank">
        <div className="orderTotal">
          <div className="orderTotalNum">
            총수량:
            <span>{totalquantity}개</span>
          </div>
          <div className="orderTotalMoney">
            총금액:
            <span>{totalPrice}원</span>
          </div>
        </div>

        <div className="btnStyle">
          <button className="clearBtn" onClick={clearList}>
            <b>지우기</b>
          </button>
          <button className="olderBtn" onClick={openOlder}>
            <b>주문하기</b>
          </button>
          <button className="resetBtn" onClick={moveStartPage}>
            <b>처음으로</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KioskOrderCal;
