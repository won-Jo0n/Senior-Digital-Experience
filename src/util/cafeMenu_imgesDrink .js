import drink_appleMango from "../assets/drink/drink_appleMango.jpg";
import drink_appleMintTea from "../assets/drink/drink_appleMintTea.jpg";
import drink_lemonTea from "../assets/drink/drink_lemonTea.jpg";
import drink_mintCholoate from "../assets/drink/drink_mintCholoate.jpg";
import drink_peachBlackTea from "../assets/drink/drink_peachBlackTea.jpg";
import drink_signMusketAde from "../assets/drink/drink_signMusketAde.jpg";
import drink_strawberryMilk from "../assets/drink/drink_strawberryMilk.jpg";
import drink_SweetpotatoLatte from "../assets/drink/drink_SweetpotatoLatte.jpg";

export function getDrinkImage(drinkId) {
  console.log("음료 아이디:" + drinkId);
  switch (drinkId) {
    case 1:
      return drink_appleMango;
    case 2:
      return drink_appleMintTea;
    case 3:
      return drink_lemonTea;
    case 4:
      return drink_mintCholoate;
    case 5:
      return drink_peachBlackTea;
    case 6:
      return drink_signMusketAde;
    case 7:
      return drink_strawberryMilk;
    case 8:
      return drink_SweetpotatoLatte;
    default:
      return null;
  }
}
