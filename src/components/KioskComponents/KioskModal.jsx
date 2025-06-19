import "./KioskModal.css";

const KioskModal = ({ onClick }) => {
  return (
    <div className="modal">
      <div className="modalBody">
        <div> 옵션선택</div>
        <div>음료 사진 및 가격, 개수</div>
        <div>
          음료 옵션선택(온도, 사이즈, 포장)
          <button>온도</button>
          <button>사이즈</button>
          <button>포장</button>
        </div>
        <button onClick={onClick}>담기</button>
      </div>
    </div>
  );
};
export default KioskModal;
