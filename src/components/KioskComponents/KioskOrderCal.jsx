import "./KioskOrderCal.css";
// 주문내역 총수량 및 총합계 계산
// orderItems에는 [itemId,itemName, itemPrice]
const KioskOrderCal = ({ orderItems }) => {
  //총 가격
  let totalPrice = 0;
  let totalquantity = 0;
  for (const orderItem of orderItems) {
    totalPrice += orderItem.totalPrice;
    totalquantity += orderItem.quantity;
  }
  console.log("totalPrice:", totalPrice);
  console.log("totalquantity:", totalquantity);

  // 수량 추가 버튼 클릭시 수량 증가
  const orderNumPlus = () => {
    orderItems.quantity + 1;
    return;
  };
  return (
    <div className="orderBar">
      <div className="orderList">
        <div>
          <b>주문 내역</b>
        </div>
      </div>
      <div className="orderListBlank">
        {/* 메뉴 선택 시 주문 창 이미지와 정보 띄우기*/}
        {orderItems.map((orderItem) => {
          return (
            <div className="orderITEM" key={orderItem.name}>
              <img src={orderItem.image} alt={orderItem.name} />

              {/* 수량 추가 버튼 */}
              <div className="orderNumPlus">
                <button onClick={orderNumPlus}>+</button>
                클릭시 수랑 증가
              </div>
              <div className="orderName">{orderItem.name} </div>
              <div className="orderPrice">{orderItem.price}원</div>
            </div>
          );
        })}
      </div>
      <div>
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
        <div className="olderOption">
          <div>
            <button className="clearBtn">지우기</button>
            <button className="olderBtn">주문하기</button>
          </div>
          <div className="resetOption">
            <button className="resetBtn">처음으로</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KioskOrderCal;
