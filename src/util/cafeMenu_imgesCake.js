import cake_cheeseCake from "../assets/coffee/cake_cheeseCake.png";
import cake_icebox from "../assets/coffee/cake_icebox.png";
import cake_redVelvet from "../assets/coffee/cake_redVelvet.png";
import cake_straeberryRIngDIngDoCake from "../assets/coffee/cake_straeberryRIngDIngDoCake.png";
import cake_strawberryChocolateCake from "../assets/coffee/cake_strawberryChocolateCake.png";
import cake_tiramisucake from "../assets/coffee/cake_tiramisucake.png";
import cake_whippedCreamChiffon from "../assets/coffee/cake_whippedCreamChiffon.png";
import cake_whiteCherryCake from "../assets/coffee/cake_whiteCherryCake.png";

export function getCoffeeImage(CakeId) {
  switch (CakeId) {
    case 1:
      return cake_cheeseCake;
    case 2:
      return cake_icebox;
    case 3:
      return cake_redVelvet;
    case 4:
      return cake_straeberryRIngDIngDoCake;
    case 5:
      return cake_strawberryChocolateCake;
    case 6:
      return cake_tiramisucake;
    case 7:
      return cake_whippedCreamChiffon;
    case 8:
      return cake_whiteCherryCake;
    default:
      return null;
  }
}
