import "./KioskOrderCal.css";
import "../highlight.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataDispatchContext } from "../../App.jsx";

const KioskOrderCal = ({
  orderItems,
  setOrderItems,
  setOnPayModal,
  orderNumPlus, //해당 메뉴 수량 올리기
  orderNumMinus, //해당 메뉴 수량 줄이기
  setFirstHighlight,
  setSecondHighlight,
  secondHighlight,
  setThreeHighlight,
  threeHighlight,
}) => {
  const { getIsChallenged } = useContext(DataDispatchContext); //미션인지 연습인지
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
      setSecondHighlight(false);
      setThreeHighlight(true);
    }
  };
  console.log(orderItems);
  if (orderItems.length == 0) {
    setFirstHighlight(true);
    setSecondHighlight(false);
  }
  return (
    <>
      <div className="ALLorderList">
        <div className="orderListBlank">
          {/* 메뉴 선택 시 주문 창 이미지와 정보 띄우기*/}
          {orderItems.map((orderItem) => {
            return (
              <div
                className={
                  getIsChallenged() || !secondHighlight
                    ? "orderITEM"
                    : "orderITEM highlightMenu"
                }
                key={orderItem.name}
              >
                <img src={orderItem.image} alt={orderItem.name} />
                <div className="lastOrderContent">
                  {orderItem.name}
                  <br />
                  {orderItem.price}원{/* 수량 추가 버튼 */}
                </div>
                <div className="BTNDIV">
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
                  <div> {orderItem.quantity}개</div>
                </div>
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
            <button className="resetBtn" onClick={moveStartPage}>
              <b>처음으로</b>
            </button>
            <button
              className={
                getIsChallenged() || !secondHighlight
                  ? "olderBtn"
                  : "olderBtn highlightMenu-red"
              }
              onClick={openOlder}
            >
              <b>주문하기</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default KioskOrderCal;
