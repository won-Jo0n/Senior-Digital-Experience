import "./Kiosk_Start.css";
import touchFinger from "../assets/touchFinger.png";
import { useNavigate } from "react-router-dom";
//키오스크 시작 화면
const KioskStart = () => {
  const nav = useNavigate();

  //kioskMenu 페이지로 이동
  const onKioskMenu = () => {
    nav("/Kiosk");
  };

  return (
    <div className="wrapperStartDisplay">
      <div className="firstDiv">
        <img
          className="startImage"
          src="https://mcdn.twosome.co.kr/upload/MOCM0010/202504/MOCM0010_20250429224407_sJXnJJEN"
          alt="여름 시즌 빙수 신제품 출시  사진"
        />
      </div>
      <div className="middleDiv" onClick={onKioskMenu()}>
        <div className="middleText">안녕하세요 고객님</div>
        <div className="middleMainText">
          <strong>
            "주문을 하시려면
            <br />
            화면을 터치해주세요"
          </strong>
        </div>
        <img className="blinking" src={touchFinger} />
      </div>
      <div className="thirdDiv">
        <img
          className="startImage"
          src="https://mcdn.twosome.co.kr/upload/MOCM0010/202505/MOCM0010_20250529091253_DVyHIHlw"
          alt="투썸 아샷추 신제품 출시"
        />
      </div>
    </div>
  );
};

export default KioskStart;
