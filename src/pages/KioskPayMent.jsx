import "./KioskPayMent.css";

import { useNavigate } from "react-router-dom";
const KioskPayMent = () => {
  console.log("KioskPaymentPage 렌더링됨");
  const nav = useNavigate();

  const backMenuPage = () => {
    nav(-1);
  };
  const cardPayMent = () => {
    nav("/KioskCardPay");
  };
  return (
    <div className="LastOlderPage">
      <div className="oldertext">결제방법을 선택해주세요</div>
      <div>
        <div>
          <div>신용카드를 선택해주세요</div>
          <button onClick={cardPayMent}>신용카드</button>
          <button>모바일 쿠폰</button>
          <button>투썸기프트카드</button>
          <button>카카오페이</button>
          <button>바코드할인</button>
        </div>
        <div>
          <button onClick={backMenuPage}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default KioskPayMent;
