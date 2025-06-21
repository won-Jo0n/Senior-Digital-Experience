import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Kiosk_CardPayMent.css";
const Kiosk_CardPayMent = () => {
  const nav = useNavigate();
  useEffect(() => {
    // 이동될때만 실행행
    const timer = setTimeout(() => {
      // 3초 후에 홈 페이지나 다른 원하는 경로로 이동
      nav("/KioskFinal"); // 예: 홈 페이지로 이동
    }, 3000);

    // 컴포넌트가 언마운트될 때 타이머를 클리어하여 메모리 누수 방지
    return () => clearTimeout(timer);
  }, [nav]); // navigate 함수가 변할 때때

  return (
    <div className="cardPayMent">
      <div>신용카드 결제</div>
      <div>
        <div>(총금액)이 결제 됩니다</div>
        <div>키오스크 연습이므로 실제로 결제되지 않습니다</div>
        <div>화면은 자동으로 넘어갑니다. 잠시만 기다려주세요</div>
        <div>
          <div>키오스크 결제 이미지</div>
        </div>
      </div>
    </div>
  );
};

export default Kiosk_CardPayMent;
