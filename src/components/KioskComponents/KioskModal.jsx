import "./KioskModal.css";
import { getCoffeeImage } from "../../util/cafeMenu_imgesCoffee";
import { getCakeImage } from "../../util/cafeMenu_imgesCake";
import { getDrinkImage } from "../../util/cafeMenu_imgesDrink ";
const KioskModal = ({ selectedItem, pickMenu, setOnModal, onAddToOrder }) => {
  console.log(selectedItem);
  console.log(pickMenu);

  // 커피, 음료, 케이크에 따라 리스트 값 불러오고 화면에 뿌림
  const menuDetail = () => {
    console.log(selectedItem.coffeeId);

    if (pickMenu === "coffee") {
      return (
        <div>
          이름:{selectedItem.coffeeName} 가격:{selectedItem.coffeePrice}
          {
            <img
              className="MODALIMAGE"
              src={getCoffeeImage(selectedItem.coffeeId)}
            />
          }
        </div>
      );
    } else if (pickMenu === "drink") {
      return (
        <div>
          이름:{selectedItem.drinkName} 가격:{selectedItem.drinkPrice}
          {
            <img
              className="MODALIMAGE"
              src={getDrinkImage(selectedItem.drinkId)}
            />
          }
        </div>
      );
    } else if (pickMenu === "cake") {
      return (
        <div>
          이름:{selectedItem.CakeName} 가격:{selectedItem.cakePrice}
          {
            <img
              className="MODALIMAGE"
              src={getCakeImage(selectedItem.CakeId)}
            />
          }
        </div>
      );
    }
    return null;
  };
  const handleConfirmAdd = () => {
    onAddToOrder(selectedItem); // 주문 정보 객체 전달
    setOnModal(false);
  };

  return (
    <div className="modal">
      <div className="modalBody">
        <div className="modalOption"> 옵션선택</div>
        <div className="modalDetail">
          {menuDetail()} 옵션을 선택해주세요
          <div className="onptionPick">
            <button>아이스</button>
            <button>레귤러</button>
            <button>포장</button>
          </div>
        </div>

        <button onClick={handleConfirmAdd}>담기</button>
        <button
          onClick={() => {
            setOnModal(false);
          }}
        >
          이전
        </button>
      </div>
    </div>
  );
};
export default KioskModal;
