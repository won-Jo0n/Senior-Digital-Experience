import coffee_Americano from "../assets/coffee/coffee_Americano.png";
import coffee_Cafu from "../assets/coffee/coffee_Cafu.png";
import coffee_Caramel from "../assets/coffee/coffee_Caramel.png";
import coffee_ColdLatte from "../assets/coffee/coffee_ColdLatte.png";
import coffee_DalgonaLatte from "../assets/coffee/coffee_DalgonaLatte.png";
import coffee_Decold from "../assets/coffee/coffee_Decold.png";
import coffee_Moka from "../assets/coffee/coffee_Moka.png";
import coffee_Vanilla from "../assets/coffee/coffee_Vanilla.png";
export function getCoffeeImage(coffeeId) {
  console.log(coffeeId);
  switch (coffeeId) {
    case 1:
      return coffee_Americano;
    case 2:
      return coffee_Cafu;
    case 3:
      return coffee_Caramel;
    case 4:
      return coffee_ColdLatte;
    case 5:
      return coffee_DalgonaLatte;
    case 6:
      return coffee_Decold;
    case 7:
      return coffee_Moka;
    case 8:
      return coffee_Vanilla;
    default:
      return null;
  }
}
