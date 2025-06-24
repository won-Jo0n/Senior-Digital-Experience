import { useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "./Logo";

const Header = () => {
  const nav = useNavigate();

  const handdlePrevBtn = () => {
    nav(-1);
  };

  const handdleNavHome = () => {
    nav("/");
  };

  return (
    <header className="Header">
      <button onClick={handdlePrevBtn}>
        <img src="/icon_left.png"></img>
        <br />
        이전
      </button>
      <button onClick={handdleNavHome}>
        <img src="/icon_right.png"></img>
        <br />홈
      </button>
    </header>
  );
};

export default Header;
