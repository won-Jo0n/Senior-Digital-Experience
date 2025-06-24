import "../components/highlight.css";
import "./Kiosk_Start.css";
import Header from "../components/Header";
import MissionPopup from "../components/MissionPopup";
import touchFinger from "../assets/touchFinger.png";
import { useNavigate } from "react-router-dom";
import { DataDispatchContext } from "../App";
import { useContext, useState } from "react";

//키오스크 시작 화면
const KioskStart = () => {
  const { getIsChallenged } = useContext(DataDispatchContext); //미션인지 연습인지
  const nav = useNavigate();
  // 미션시 모달창 띄우기
  const [showPopup, setShowPopup] = useState(true);

  //팝업 닫기
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Header />
      {showPopup && getIsChallenged() && (
        <MissionPopup
          message={
            "커피 메뉴에서 달고나 라떼, 케이크 메뉴에서 치즈 케이크 주문해줘 ~"
          }
          onClose={handleClosePopup}
        />
      )}
      <div className="wrapperStartDisplay">
        <div className="KioskWRAP">
          <div className="imageDisplay">
            <div className="firstDiv">
              <img
                className="startImage"
                src="https://mcdn.twosome.co.kr/upload/MOCM0010/202504/MOCM0010_20250429224407_sJXnJJEN"
                alt="여름 시즌 빙수 신제품 출시  사진"
              />
            </div>

            <div
              className={
                getIsChallenged() ? "middleDiv" : "middleDiv highlight"
              }
              onClick={() => nav("/Kiosk/:1")}
            >
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

            <img
              className="lastImage"
              src="https://mcdn.twosome.co.kr/upload/MOCM0010/202505/MOCM0010_20250529091253_DVyHIHlw"
              alt="투썸 아샷추 신제품 출시"
            />
          </div>
          <div className="KIOSKDP">
            <img src="/koisk.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default KioskStart;
