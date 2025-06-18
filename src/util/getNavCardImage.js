import kiosk from "./../assets/kiosk.png";

export function getNavCardImage(cardID) {
  switch (cardID) {
    case 1:
      return kiosk;
  }
}
