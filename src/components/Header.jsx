import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ leftIcon = "left1", rightIcon = "right1" }) => {
  const nav = useNavigate();

  const handlePrevBtn = () => {
    nav(-1);
  };

  const handleNavHome = () => {
    nav("/");
  };

  return (
    <header className="Header">
      <button onClick={handlePrevBtn}>
        <img src={`/${leftIcon}.png`} />
        <br />
        이전
      </button>
      <button onClick={handleNavHome}>
        <img src={`/${rightIcon}.png`} />
        <br />홈
      </button>
    </header>
  );
};

export default Header;
