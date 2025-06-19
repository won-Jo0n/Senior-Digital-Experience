import "./KioskCake.css";
import { getCakeImage } from "../../util/cafeMenu_imgesCake";

const KioskCake = ({ CakeId, CakeName }) => {
  //kioskCake 메뉴 하나

  return (
    <div className="cake_menu">
      <div className="wrapper">
        <img className="cake_img" src={getCakeImage(CakeId)} />
        <div className="cake_name">{CakeName}</div>
      </div>
    </div>
  );
};

export default KioskCake;
