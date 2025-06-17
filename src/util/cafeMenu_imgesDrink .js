import drink_appleMango from "../assets/coffee/drink_appleMango.png";
import drink_appleMintTea from "../assets/coffee/drink_appleMintTea.png";
import drink_lemonTea from "../assets/coffee/drink_lemonTea.png";
import drink_mintCholoate from "../assets/coffee/drink_mintCholoate.png";
import drink_peachBlackTea from "../assets/coffee/drink_peachBlackTea.png";
import drink_signMusketAde from "../assets/coffee/drink_signMusketAde.png";
import drink_strawberryMilk from "../assets/coffee/drink_strawberryMilk.png";
import drink_Sweetpotatolatte from "../assets/coffee/drink_Sweetpotatolatte.png";

export function getCoffeeImage(drinkId) {
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
      return drink_Sweetpotatolatte;
    default:
      return null;
  }
}
