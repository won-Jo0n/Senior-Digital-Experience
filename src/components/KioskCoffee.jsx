// import { getCoffeeImage } from "../util/cafeMenu_imgesCoffee.js";

const KioskCoffee = ({ coffeeId, coffeeName }) => {
  console.log(coffeeName);
  console.log(coffeeId);
  //Coffee 메뉴 하나
  return (
    <div>
      <img className="coffee_img" />
      <div className="coffee_name">{coffeeName}</div>
    </div>
  );
};

export default KioskCoffee;
