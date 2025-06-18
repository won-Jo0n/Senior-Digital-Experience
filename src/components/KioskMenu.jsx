import "./KioskMenu.css";
import KioskCoffee from "./KioskCoffee";
import KioskCake from "../components/KioskCake";
import KioskDrink from "../components/KioskDrink";
import { coffeeList } from "../util/cafeMenu-coffeeList";
const KioskMenu = () => {
  //kioskMenu 보여주는 컴퍼넌트

  return (
    <div className="AllDisplay">
      <div className="MenuBar">
        {/* 메뉴바 버튼 */}
        <button className="button_coffee">커피</button>
        <button className="button_drink">음료</button>
        <button className="button_cake">케이크</button>
      </div>
      <div className="coffee_menu">
        {coffeeList.map((item) => (
          <KioskCoffee
            key={item.coffeeId}
            coffeeId={item.coffeeId}
            coffeeName={item.coffeeName}
          />
        ))}
      </div>
    </div>
  );
};

export default KioskMenu;
