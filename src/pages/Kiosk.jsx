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
      <div>
        <KioskMenu />
      </div>
    </div>
  );
};

export default Kiosk;
