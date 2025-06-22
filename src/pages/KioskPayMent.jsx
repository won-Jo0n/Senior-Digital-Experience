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
    <div className="KIOSKDISPLAY">
      <div className="LastOlderPage">
        <div className="oldertext">
          <b>결제방법을 선택해주세요</b>
        </div>
        <div className="pickCARD">
          <b>신용카드를 선택해주세요</b>
        </div>
        <div className="olderMETHOD">
          <div className="topBtn">
            <button onClick={cardPayMent}>
              <div>
                <img src="/public//card.png" className="CardImg" />
              </div>
              신용카드
            </button>

            <button>
              <div>
                <img src="/public//coupon.png" className="CardImg" />
              </div>
              모바일 쿠폰
            </button>
          </div>
          <div className="bottomBtn">
            <button>
              <div>
                <img
                  src="https://mcdn.twosome.co.kr/upload/MOGC0030/202309/MOGC0030_20230912152427_HhnEQPGs"
                  className="CardImg"
                />
              </div>
              투썸기프트카드
            </button>
            <button className="bottomBtn">
              <img src="/public//kakaoPay.png" className="CardImg" />
              카카오페이
            </button>
          </div>
        </div>
        <div class="BTNcontainer">
          <button class="BackBTN" onClick={backMenuPage}>
            이전
          </button>
        </div>
      </div>
    </div>
  );
};

export default KioskPayMent;
