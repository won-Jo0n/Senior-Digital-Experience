import "./KioskDrink.css";
import { getDrinkImage } from "../../util/cafeMenu_imgesDrink ";

const KioskDrink = ({ drinkId, drinkName }) => {
  //kioskCake 메뉴 하나
  // console.log("KioskDrink에서의 Drink아이디:" + drinkId);
  return (
    <div className="drink_menu">
      <div className="wrapper">
        <img className="drink_img" src={getDrinkImage(drinkId)} />
        <div className="drink_name">{drinkName}</div>
      </div>
    </div>
  );
};

export default KioskDrink;
