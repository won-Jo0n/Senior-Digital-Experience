import "./Kiosk.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import KioskMenu from "../components/KioskMenu";

const Kiosk = () => {
  const nav = useNavigate();
  return (
    <div className="KioskDisplay">
      <div className="ControlBar">
        <Header
          title="로고이미지"
          rightChild={
            <Button
              onClick={() => {
                nav("/");
              }}
              text={"홈으로"}
            />
          }
        />
      </div>
      <div className="promotional banner">광고</div>
      <div className="MenuBar">
        <button
          className="button_coffee"
          onClick={() => {
            <KioskMenu />;
          }}
        >
          커피
        </button>
        <button className="button_drink">음료</button>
        <button className="button_cake">케이크</button>
      </div>
    </div>
  );
};

export default Kiosk;
