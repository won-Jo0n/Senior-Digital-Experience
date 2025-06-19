import "./KioskMenu.css";
import KioskCoffee from "./KioskCoffee.jsx";
import KioskDrink from "../KioskComponents/KioskDrink.jsx";
import KioskCake from "../KioskComponents/KioskCake.jsx";
import KioskModal from "../KioskComponents/KioskModal.jsx";
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
  console.log("현재 onModal 값:", onModal);
  console.log("현재 pickMenu 값:", pickMenu);
  console.log("현재 selectedItem 값:", selectedItem);

  const handleItemClick = (item) => {
    setSelectedItem(item); // 클릭된 아이템 정보 저장
    setOnModal(true); // 모달 열기
  };

  const changeMenu = () => {
    if (pickMenu === "coffee") {
      return coffeeList.map((item) => (
        <KioskCoffee
          key={item.coffeeId}
          coffeeId={item.coffeeId}
          coffeeName={item.coffeeName}
          onClick={() => handleItemClick(item)}
        />
      ));
    } else if (pickMenu === "drink") {
      return drinkList.map((item) => (
        <KioskDrink
          key={item.drinkId}
          drinkId={item.drinkId}
          drinkName={item.drinkName}
          onClick={() => handleItemClick(item)}
        />
      ));
    } else if (pickMenu === "cake") {
      return cakeList.map((item) => (
        <KioskCake
          key={item.CakeId}
          CakeId={item.CakeId}
          CakeName={item.CakeName}
          onClick={() => handleItemClick(item)}
        />
      ));
    }
    return null;
  };

  return (
    <>
      <div className="AllDisplay">
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
          <div className="orderListBlank"> 주문 내역 칸 </div>
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
          {onModal === true ? (
            <KioskModal
              selectedItem={selectedItem}
              pickMenu={pickMenu}
              setOnModal={setOnModal}
            />
          ) : (
            !onModal
          )}
        </div>
      </div>
    </>
  );
};

export default KioskMenu;
