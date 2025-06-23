import "./KioskModal.css";
import "../../components/highlight.css";
import { getCoffeeImage } from "../../util/cafeMenu_imgesCoffee";
import { getCakeImage } from "../../util/cafeMenu_imgesCake";
import { getDrinkImage } from "../../util/cafeMenu_imgesDrink ";
import { DataDispatchContext } from "../../App.jsx";
import { useContext } from "react";
const KioskModal = ({
  selectedItem,
  pickMenu,
  setOnModal,
  onAddToOrder,
  setFirstHighlight,
  setSecondHighlight,
}) => {
  const { getIsChallenged } = useContext(DataDispatchContext); //미션인지 연습인지
  // 커피, 음료, 케이크에 따라 리스트 값 불러오고 화면에 뿌림
  const menuDetail = () => {
    if (pickMenu === "coffee") {
      return (
        <div className="coffeeData">
          {
            <img
              className="MODALIMAGE"
              src={getCoffeeImage(selectedItem.coffeeId)}
            />
          }
          <br />
          {selectedItem.coffeeName} <br />
          <b>{selectedItem.coffeePrice}원</b>
        </div>
      );
    } else if (pickMenu === "drink") {
      return (
        <div className="drinkData">
          {
            <img
              className="MODALIMAGE"
              src={getDrinkImage(selectedItem.drinkId)}
            />
          }
          <br />
          <div className="OTIONdata">
            {selectedItem.drinkName}
            <br /> <b>{selectedItem.drinkPrice}원</b>
          </div>
        </div>
      );
    } else if (pickMenu === "cake") {
      return (
        <div className="cakeData">
          {
            <img
              className="MODALIMAGE"
              src={getCakeImage(selectedItem.CakeId)}
            />
          }
          <br />
          {selectedItem.CakeName} <br />
          <b>{selectedItem.cakeListPrice}원</b>
        </div>
      );
    }
    return null;
  };
  const handleConfirmAdd = () => {
    onAddToOrder(selectedItem); // 주문 정보 객체 전달
    setOnModal(false);
    setFirstHighlight(false); //담기 클릭시 첫번째 하이라인트 제거
    setSecondHighlight(true);
  };

  return (
    <div className="modal">
      <div className="modalBody">
        <div className="modalOption"> 옵션선택</div>
        <div className="modalDetail">
          {menuDetail()}
          <div className="onptionPick">
            <button>아이스</button>
            <button>레귤러</button>
            <button>포장</button>
          </div>
        </div>

        <div className="btnBox">
          <button
            onClick={() => {
              setOnModal(false);
              setFirstHighlight(true);
            }}
            className="Backbtn"
          >
            <b>이전</b>
          </button>
          <button onClick={handleConfirmAdd} className="Putbtn">
            <b>담기</b>
          </button>
        </div>
      </div>
    </div>
  );
};
export default KioskModal;
