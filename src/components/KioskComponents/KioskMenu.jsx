import "./KioskMenu.css";
import KioskCoffee from "./KioskCoffee.jsx";
import KioskDrink from "../KioskComponents/KioskDrink.jsx";
import KioskCake from "../KioskComponents/KioskCake.jsx";
import KioskModal from "../KioskComponents/KioskModal.jsx";
import { getCoffeeImage } from "../../util/cafeMenu_imgesCoffee";
import { getDrinkImage } from "../../util/cafeMenu_imgesDrink ";
import { getCakeImage } from "../../util/cafeMenu_imgesCake";
import { coffeeList } from "../../util/cafeMenu-coffeeList";
import { drinkList } from "../../util/cafeMenu-drinkList";
import { cakeList } from "../../util/cafeMenu-cakeList";
import { useState } from "react";

const KioskMenu = () => {
  //kioskMenu 보여주는 컴퍼넌트
  //카테고리 선택시 div 안 메뉴들 변함
  const [pickMenu, setPickMenu] = useState("coffee");
  const [onModal, setOnModal] = useState(false);

  //선택된 상품의 객체를 저장할 state
  const [selectedItem, setSelectedItem] = useState({});

  //클릭한 음료 넣어두는 리스트
  const [orderItems, setOrderItems] = useState([]);

  const CloseModal = () => {
    setOnModal(false);
    setSelectedItem({}); // 모달 닫을 때 선택된 아이템 정보 초기화
  };

  const AddToOrder = (itemToAdd) => {
    setOrderItems((prevItems) => {
      const itemId =
        itemToAdd.coffeeId || itemToAdd.drinkId || itemToAdd.CakeId;
      const itemName =
        itemToAdd.coffeeName || itemToAdd.drinkName || itemToAdd.CakeName;
      const itemPrice =
        itemToAdd.coffeePrice ||
        itemToAdd.drinkPrice ||
        itemToAdd.cakeListPrice;

      let itemImage = "";
      if (pickMenu === "coffee") {
        itemImage = getCoffeeImage(itemId);
      } else if (pickMenu === "drink") {
        itemImage = getDrinkImage(itemId);
      } else if (pickMenu === "cake") {
        itemImage = getCakeImage(itemId);
      }

      // 이미 주문 내역에 있는 동일한 아이템인지 확인, 인덱스 반환환
      const sameItem = prevItems.findIndex(
        (orderItem) => orderItem.id === itemId && orderItem.name === itemName
      );
      //이미 있는 아이템이라면
      if (sameItem > -1) {
        return null;
      } else {
        return [
          ...prevItems, // 기존 아이템 유지
          {
            id: itemId,
            name: itemName,
            price: itemPrice,
            quantity: 1,
            image: itemImage, // 이미지 URL 추가
            type: pickMenu, // 어떤 종류의 메뉴인지 저장
          },
        ];
      }
    });
    //모달 닫기
    CloseModal();
  };
  const ItemClick = (item) => {
    setSelectedItem(item); // 클릭된 아이템 정보 저장
    setOnModal(true); // 모달 열기
  };
  // 주문 내역 '지우기'
  const ClearOrder = () => {
    setOrderItems([]);
  };

  // 주문 하기 함수
  const changeMenu = () => {
    if (pickMenu === "coffee") {
      return coffeeList.map((item) => (
        <KioskCoffee
          key={item.coffeeId}
          coffeeId={item.coffeeId}
          coffeeName={item.coffeeName}
          onClick={() => ItemClick(item)}
        />
      ));
    } else if (pickMenu === "drink") {
      return drinkList.map((item) => (
        <KioskDrink
          key={item.drinkId}
          drinkId={item.drinkId}
          drinkName={item.drinkName}
          onClick={() => ItemClick(item)}
        />
      ));
    } else if (pickMenu === "cake") {
      return cakeList.map((item) => (
        <KioskCake
          key={item.CakeId}
          CakeId={item.CakeId}
          CakeName={item.CakeName}
          onClick={() => ItemClick(item)}
        />
      ));
    }
    return null;
  };

  //총수량 계산
  //총금액 계산

  return (
    <>
      <div className={onModal === true ? "OverMenu" : "AllDisplay"}>
        <div className="MenuBar">
          {/* 메뉴바 버튼 */}
          <button
            className="button_coffee"
            onClick={() => {
              setPickMenu("coffee");
            }}
          >
            커피
          </button>
          <button
            className="button_drink"
            onClick={() => {
              setPickMenu("drink");
            }}
          >
            음료
          </button>
          <button
            className="button_cake"
            onClick={() => {
              setPickMenu("cake");
            }}
          >
            케이크
          </button>
        </div>
        <div className="coffee_menu">{changeMenu()}</div>
        <div className="orderBar">
          <div className="orderList">
            <b>주문 내역</b>
          </div>
          <div className="orderListBlank">
            {orderItems.map((orderItem) => {
              return (
                <div className="orderITEM" key={orderItem.name}>
                  {/* 이미지 */}
                  <img src={orderItem.image} alt={orderItem.name} />
                  <div>{orderItem.name}</div>
                  <div>{orderItem.price}원</div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="orderTotal">
              <div className="orderTotalNum">
                총수량:
                <span>0개</span>
              </div>
              <div className="orderTotalMoney">
                총금액:
                <span>0원</span>
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
        <div>
          {onModal &&
            selectedItem && ( // selectedItem이 null이 아닐 때만 모달 렌더링
              <KioskModal
                selectedItem={selectedItem}
                pickMenu={pickMenu}
                setOnModal={setOnModal} // 모달 닫기 용도로 전달
                onAddToOrder={AddToOrder} // 주문 추가 함수 전달
              />
            )}
        </div>
      </div>
    </>
  );
};
export default KioskMenu;
