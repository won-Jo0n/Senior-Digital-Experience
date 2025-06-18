import "./KioskMenu.css";
import KioskCoffee from "./KioskCoffee";
import KioskDrink from "../KioskComponents/KioskDrink";
import KioskCake from "../KioskComponents/KioskCake";
import { coffeeList } from "../../util/cafeMenu-coffeeList";
import { drinkList } from "../../util/cafeMenu-drinkList";
import { cakeList } from "../../util/cafeMenu-cakeList";
import { useState } from "react";

const KioskMenu = () => {
  //kioskMenu 보여주는 컴퍼넌트

  //state 값 바뀔때마다 div바뀜
  const [pickMenu, setPickMenu] = useState("coffee");

  const changeMenu = () => {
    if (pickMenu === "coffee") {
      return coffeeList.map((item) => (
        <KioskCoffee
          key={item.coffeeId}
          coffeeId={item.coffeeId}
          coffeeName={item.coffeeName}
        />
      ));
    } else if (pickMenu === "drink") {
      return drinkList.map((item) => (
        <KioskDrink
          key={item.drinkId}
          drinkId={item.drinkId}
          drinkName={item.drinkName}
        />
      ));
    } else if (pickMenu === "cake") {
      return cakeList.map((item) => (
        <KioskCake
          key={item.CakeId}
          CakeId={item.CakeId}
          CakeName={item.CakeName}
        />
      ));
    }
    return null;
  };

  return (
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
    </div>
  );
};

export default KioskMenu;
