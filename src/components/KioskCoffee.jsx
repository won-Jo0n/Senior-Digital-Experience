import "./KioskCoffee.css";
import { getCoffeeImage } from "../util/cafeMenu_imgesCoffee";

const KioskCoffee = ({ coffeeId, coffeeName }) => {
  console.log(getCoffeeImage(coffeeId));
  return (
    <div className="coffee_menu">
      <div className="wrapper">
        <img className="coffee_img" src={getCoffeeImage(coffeeId)} />
        <div className="coffee_name">{coffeeName}</div>
      </div>
    </div>
  );
};

export default KioskCoffee;
