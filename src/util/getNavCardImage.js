import kiosk from "./../assets/kiosk.png";
import naverbook from "./../assets/naverbookImg.png";
import welfareCenterImg from "./../assets/welfareCenterImg.png";

export function getNavCardImage(cardID) {
  switch (cardID) {
    case 1:
      return kiosk;
    case 2:
      return naverbook;
    case 3:
      return welfareCenterImg;
  }
}
